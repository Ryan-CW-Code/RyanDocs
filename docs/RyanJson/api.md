---
title: api介绍
order: 2
---

# RyanJson API 接口

### json内存钩子

```c
RyanJsonBool RyanJsonInitHooks(malloc_t _malloc, free_t _free, realloc_t _realloc);
```

用户可以指定自定义内存函数，默认使用c库函数！

### json序列化

```c
/**
 * @brief pJson 文本解析器
 *
 * @param text 文本地址
 * @param require_null_terminated 是否允许解析的文本后面有无意义的字符
 * @param return_parse_end 输出解析终止的字符位置
 * @return RyanJson_t
 */
RyanJson_t RyanJsonParseOptions(const char *text, uint32_t size, RyanJsonBool require_null_terminated,
                                const char **return_parse_end);
// 语法糖
static inline RyanJson_t RyanJsonParse(const char *text)
{
	return RyanJsonParseOptions(text, strlen(text), RyanJsonFalse, NULL);
}
```

### **json反序列化**

```c
/**
 * @brief 将json对象转换为字符串
 *
 * @param pJson
 * @param preset 对json对象转为字符串后长度的猜测，如果猜测的接近可以减少内存分配次数，提高转换效率
 * @param format 是否格式化
 * @param len 可以通过指针来获取转换后的长度
 * @return char* NULL失败
 */
char *RyanJsonPrint(RyanJson_t pJson, uint32_t preset, RyanJsonBool format, uint32_t *len); // 需用户释放内存

/**
 * @brief 使用给定缓冲区将json对象转换为字符串
 *
 * @param pJson
 * @param buffer 用户给定缓冲区地址
 * @param length 缓冲区长度
 * @param format
 * @param len
 * @return char*
 */
char *RyanJsonPrintPreallocated(RyanJson_t pJson, char *buffer, uint32_t length, RyanJsonBool format, 										uint32_t *len);
```

### json常用功能

```c
/**
 * @brief 深拷贝一份json对象
 *
 * @param pJson
 * @return RyanJson_t 拷贝的新对象指针
 */
RyanJson_t RyanJsonDuplicate(RyanJson_t pJson); // 需用户释放内存

/**
 * @brief 获取 json 的子项个数
 *
 * @param pJson
 * @return uint32_t
 */
uint32_t RyanJsonGetSize(RyanJson_t pJson);

/**
 * @brief 通过删除无效字符、注释等， 减少json文本大小
 *
 * @param text 文本指针
 */
void RyanJsonMinify(char *text);

/**
 * @brief 删除json及其子项
 *
 * @param pJson
 */
void RyanJsonDelete(RyanJson_t pJson);

/**
 * @brief 释放RyanJson申请的资源
 *
 * @param block
 */
void RyanJsonFree(void *block);

/**
 * @brief 递归比较两个 pJson 对象key和value是否相等。
 * 此接口效率较低, 谨慎使用
 * @param a
 * @param b
 * @return RyanJsonBool
 */
RyanJsonBool RyanJsonCompare(RyanJson_t a, RyanJson_t b);

/**
 * @brief 递归比较两个 pJson 对象key是否相等。
 * 此接口效率较低, 谨慎使用
 * @param a
 * @param b
 * @return RyanJsonBool
 */
RyanJsonBool RyanJsonCompareOnlyKey(RyanJson_t a, RyanJson_t b);
```

### json 添加 / 删除函数

没啥好说的，跟cJSON一样

```c
RyanJson_t RyanJsonCreateObject();                                          // 如果没有添加到父json, 则需释放内存
RyanJson_t RyanJsonCreateNull(char *key);                                   // 如果没有添加到父json, 则需释放内存
RyanJson_t RyanJsonCreateBool(char *key, RyanJsonBool boolean);             // 如果没有添加到父json, 则需释放内存
RyanJson_t RyanJsonCreateInt(char *key, int32_t number);                    // 如果没有添加到父json, 则需释放内存
RyanJson_t RyanJsonCreateDouble(char *key, double number);                  // 如果没有添加到父json, 则需释放内存
RyanJson_t RyanJsonCreateString(char *key, const char *string);             // 如果没有添加到父json, 则需释放内存
RyanJson_t RyanJsonCreateArray();                                           // 如果没有添加到父json, 则需释放内存
RyanJson_t RyanJsonCreateIntArray(const int32_t *numbers, int32_t count);   // 如果没有添加到父json, 则需释放内存
RyanJson_t RyanJsonCreateDoubleArray(const double *numbers, int32_t count); // 如果没有添加到父json, 则需释放内存
RyanJson_t RyanJsonCreateStringArray(const char **strings, int32_t count);  // 如果没有添加到父json, 则需释放内存
RyanJson_t RyanJsonDetachByIndex(RyanJson_t pJson, int32_t index);          // 需用户释放内存
RyanJson_t RyanJsonDetachByKey(RyanJson_t pJson, const char *key);          // 需用户释放内存
RyanJsonBool RyanJsonDeleteByIndex(RyanJson_t pJson, int32_t index);
RyanJsonBool RyanJsonDeleteByKey(RyanJson_t pJson, const char *key);

#define RyanJsonAddNullToObject(pJson, key)
#define RyanJsonAddBoolToObject(pJson, key, boolean)
#define RyanJsonAddIntToObject(pJson, key, number)
#define RyanJsonAddDoubleToObject(pJson, key, number)
#define RyanJsonAddStringToObject(pJson, key, string)
#define RyanJsonAddItemToObject(pJson, key, item)

#define RyanJsonAddNullToArray(pJson)
#define RyanJsonAddBoolToArray(pJson, boolean)
#define RyanJsonAddIntToArray(pJson, number)
#define RyanJsonAddDoubleToArray(pJson, number)
#define RyanJsonAddStringToArray(pJson, string)
#define RyanJsonAddItemToArray(pJson, item)
```

### json 查询函数

和cJSON一样

```c
// 特殊点的 To 函数，比如 RyanJsonGetObjectToKey 使用可变参来获取 例如
RyanJsonGetObjectToKey(jsonRoot, "object1", "object1_item", "object1_item_item");
// 等价于
RyanJson item = RyanJsonGetObjectByKey(jsonRoot, "object1");
item = RyanJsonGetObjectByKey(item, "object1_item");
item = RyanJsonGetObjectByKey(item, "object1_item_item");
```

```c
RyanJson_t RyanJsonGetObjectByKey(RyanJson_t pJson, const char *key);
RyanJson_t RyanJsonGetObjectByIndex(RyanJson_t pJson, int32_t index);
#define RyanJsonGetObjectToKey(pJson, key, ...)
#define RyanJsonGetObjectToIndex(pJson, index, ...)

#define RyanJsonHasObjectByKey(pJson, key)
#define RyanJsonHasObjectByIndex(pJson, key)
#define RyanJsonHasObjectToKey(pJson, key, ...)
#define RyanJsonHasObjectToIndex(pJson, key, ...)

#define RyanJsonIsKey(pJson)
#define RyanJsonIsNull(pJson)
#define RyanJsonIsBool(pJson)
#define RyanJsonIsNumber(pJson)
#define RyanJsonIsInt(pJson)
#define RyanJsonIsDouble(pJson)
#define RyanJsonIsString(pJson)
#define RyanJsonIsArray(pJson)
#define RyanJsonIsObject(pJson)

#define RyanJsonGetKey(pJson)
#define RyanJsonGetNullValue(pJson)
#define RyanJsonGetBoolValue(pJson)
#define RyanJsonGetIntValue(pJson)
#define RyanJsonGetDoubleValue(pJson)
#define RyanJsonGetStringValue(pJson)
#define RyanJsonGetArrayValue(pJson)
#define RyanJsonGetObjectValue(pJson)

#define RyanJsonArrayForEach(pJson, item)
#define RyanJsonObjectForEach(pJson, item)
```

**json修改函数**

使用*RyanJsonReplaceByKey* 函数时要**保证item具有key**，比如:

```c
// 对象必须包含key, 如果创建的对象key为null会引起内存错误
RyanJsonReplaceByKey(json, "arrayString", RyanJsonCreateString("", "arrayString"));
```

```c
#define RyanJsonChangeKey(pJson, key)
#define RyanJsonChangeStringValue(pJson, string)
#define RyanJsonChangeBoolValue(pJson, boolean)
#define RyanJsonChangeIntValue(pJson, number)
#define RyanJsonChangeDoubleValue(pJson, number)

// 这是change方法的补充，当需要修改value类型时，使用此函数
// 请参考 changeJsonTest 示例，严格按照规则来使用
RyanJsonBool RyanJsonReplaceByKey(RyanJson_t pJson, const char *key, RyanJson_t item);
// object对象也可以使用，但是不推荐
RyanJsonBool RyanJsonReplaceByIndex(RyanJson_t pJson, int32_t index, RyanJson_t item);
```

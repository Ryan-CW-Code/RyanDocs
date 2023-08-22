import { defineConfig } from 'dumi';
import { baseTheme, defineThemeConfig } from 'dumi-theme-chakra';

function withGH(uri: string): string {
  const prefix = process.env.gh ? '/RyanDocs/' : '/';
  return [prefix, uri].join('');
}

export default defineConfig({
  base: withGH(''),
  publicPath: withGH(''),

  //   locales: [
  //     { id: 'zh-CN', name: '中文' },
  //     { id: 'en-US', name: 'English' },
  //   ],

  themeConfig: {
    name: 'Ryan组件库',
    logo: withGH('logo.png'),
    ...defineThemeConfig({
      brand: baseTheme.colors.twitter,
      helmetIcon: '🍺',
      //   settingPanelVisible: true,
      thumbBackground: true,
      author: 'RyanCW',
      social: {
        github: {
          name: 'RyanCW',
          link: 'https://github.com/Ryan-CW-Code',
        },
      },
      announcementBar: {
        id: 'announce current progress info',
        content: '欢迎光临Ryan小站，这里推荐一些嵌入式常用库',
        isCloseable: true,
      },
    }),

    footer: `Copyright © ${new Date().getFullYear()} Ryan`,
  },
});

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
    name: 'RyanDocs',
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
        content: '欢迎光临，这是一条横幅我还没想好写什么😎',
        isCloseable: true,
      },
    }),

    footer: `Copyright © ${new Date().getFullYear()} Ryan`,
  },
});

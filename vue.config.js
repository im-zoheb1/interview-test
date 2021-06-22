const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_base.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          {
            family: 'Lemon',
          },
          {
            family: 'Roboto',
            variants: ['300', '400', '500', '600', '700'],
          },
        ],
      }),
    ],
  },
};

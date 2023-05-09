import appTools, { defineConfig } from '@modern-js/app-tools';
import { builderPluginNodePolyfill } from '@modern-js/builder-plugin-node-polyfill';

export default defineConfig<'rspack'>({
  builderPlugins: [
    builderPluginNodePolyfill(),
  ],
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
  ],
  runtime: {
    router: true,
  },
});

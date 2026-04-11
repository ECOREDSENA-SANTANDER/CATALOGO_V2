const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const path = require('path')
const titulo = require('./src/config/titulo.js')

module.exports = defineConfig({
  base: '',
  optimizeDeps: {
    // UMD de aos usa }(this,function(){…}); en ESM `this` es undefined → rompe e.AOS = …
    include: ['aos'],
  },
  build: {
    commonjsOptions: {
      defaultIsModuleExports: true,
    },
  },
  plugins: [
    vue(),
    {
      name: 'aos-umd-globalthis',
      enforce: 'pre',
      transform(code, id) {
        if (!id.includes('aos') || !id.endsWith('aos.js')) return null
        const needle = '}(this,function(){return'
        if (!code.includes(needle)) return null
        return code.replace(needle, '}(globalThis,function(){return')
      },
    },
    {
      name: 'html-title',
      transformIndexHtml(html) {
        return html.replace(/<title>.*?<\/title>/, `<title>${titulo}</title>`)
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@ecored/require-src': path.resolve(__dirname, 'plugin/utils/requireSrc.js'),
    },
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  server: {
    fs: {
      // Paquetes file:/npm link fuera de REPO-BASE (p. ej. ecored-pkg-sena → Font Awesome webfonts)
      allow: ['.', '..', path.resolve(__dirname, '../..')],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
      },
      sass: {
        additionalData: `@use "@/styles/_variables.sass" as *\n`,
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
      },
    },
  },
})

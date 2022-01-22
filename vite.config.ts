import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const pathResolve = (src: string) => resolve(__dirname, src)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({ script: { refSugar: true }, include: [/\.vue$/] }),
    Unocss(),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts'
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@a': pathResolve('src/assets'),
      '@v': pathResolve('src/views')
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core']
  }
})

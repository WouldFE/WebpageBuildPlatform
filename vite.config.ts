// import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

// const pathResolve = (src: string) => resolve(__dirname, src)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()]
  // resolve: {
  //   alias: {
  //     '@': pathResolve('src'),
  //     '@a': pathResolve('src/assets')
  //   }
  // }
})

import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons({
      collections: {
        logos: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any)
      }
    })
  ]
})

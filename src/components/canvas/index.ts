import type { App } from 'vue'

export default {
  install(app: App) {
    Object.entries(import.meta.globEager('./*.vue')).forEach(([key, value]) => {
      const [, name] = key.match(/\.\/(.*)\.vue/)!
      const component = value.default
      app.component(name, component)
    })
  }
}

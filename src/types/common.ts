import type { App } from 'vue'

export type UserModule = (ctx: App) => void

export type component = {
  id: number
  component: string
  label: string
  propValue: {}
  icon: string
  style: {
    width: number
    height: number
    top: string
    left: string
    fontSize: number
    fontWeight: number
    lineHeight: string
    letterSpacing: number
    textAlign: string
    color: string
  }
}

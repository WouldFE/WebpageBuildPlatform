import type { App } from 'vue'

export type UserModule = (ctx: App) => void

export type component = {
  id: number
  component: string
  label: string
  propValue: {
    [key: string]: string
  }
  icon: string
  style: {
    width: string
    height: string
    top: string
    left: string
    fontSize: string
    fontWeight: string
    lineHeight: string
    letterSpacing: string
    textAlign: string
    color: string
    [key: string]: string
  }
}

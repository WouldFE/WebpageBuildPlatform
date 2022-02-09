import type { App } from 'vue'

export type UserModule = (ctx: App) => void

export interface component {
  id: number
  component: string
  label: string
  propValue: {
    [key: string]: prop
  }
  icon: string
  style: compStyle
}

export interface compStyle {
  width: number
  height: number
  top: number
  left: number
  fontSize: number
  fontWeight: number
  lineHeight: number
  letterSpacing: number
  textAlign: string
  color: string
  [key: string]: string | number
}

export interface prop {
  display: string
  value: string
}

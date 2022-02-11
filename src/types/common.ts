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
  width: number | string
  height: number | string
  top: number
  left: number
  color: string
  backgroundColor: string
  fontSize?: number
  fontWeight?: number
  lineHeight?: number
  letterSpacing?: number
  textAlign?: string
  [key: string]: string | number | undefined
}

export interface prop {
  display: string
  value: string | component[]
}

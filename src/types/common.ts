export interface component {
  id: number
  component: string
  label: string
  propValue: {}
  icon: string
  style: commonStyle
  events?: {
    [key: string]: any
  }
}

export interface CPicture extends component {
  propValue: {
    src: prop
    preview: prop
    fit: prop
  }
}

export interface CButton extends component {
  propValue: {
    msg: prop
    type: prop
    size: prop
  }
  events: {
    [key: string]: any
  }
}

export interface CLayout extends component{
  propValue: {
    row: prop
    col: prop
    subComp: {
      value: component[]
      display: string
    }
  }
}

export interface commonStyle {
  width?: number | string
  height?: number | string
  top: number
  left: number
  color?: string
  backgroundColor?: string
  fontSize?: number
  fontWeight?: number
  lineHeight?: number
  letterSpacing?: number
  textAlign?: string
  [key: string]: string | number | undefined
}

export interface prop {
  display: string
  value: string
}

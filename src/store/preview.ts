import type { component } from '@/types'

interface previewData {
  previewData: {
    [key: string]: component[]
  }
}

export const usePreviewStore = defineStore<string, previewData, {}, {}>(
  'preview',
  {
    state: () => {
      return {
        previewData: {
          layoutPicture: [{
            component: 'CLayout',
            icon: 'data-vis-4',
            id: 7842,
            label: '布局',
            propValue: {
              row: {
                value: '2',
                display: '行数'
              },
              col: {
                value: '3',
                display: '列数'
              },
              subComp: {
                value: [{
                  id: 2281,
                  component: 'CPicture',
                  label: '图片',
                  propValue: {
                    src: {
                      display: '图片地址',
                      value: 'https://pinia.vuejs.org/logo.svg'
                    },
                    preview: {
                      display: '预览放大',
                      value: 'true'
                    },
                    fit: {
                      display: '适应',
                      value: 'fill'
                    }
                  },
                  icon: 'image',
                  style: {
                    width: 200,
                    height: 200,
                    top: 0,
                    left: 0,
                    color: '#000',
                    backgroundColor: 'rgba(0,0,0,0)'
                  }
                }, {
                  id: 3805,
                  component: 'CPicture',
                  label: '图片',
                  propValue: {
                    src: {
                      display: '图片地址',
                      value: 'https://d33wubrfki0l68.cloudfront.net/a5780e53fee68ddd1cd73a00484151d2d052cb4d/b7469/logo-vertical.png'
                    },
                    preview: {
                      display: '预览放大',
                      value: 'true'
                    },
                    fit: {
                      display: '适应',
                      value: 'cover'
                    }
                  },
                  icon: 'image',
                  style: {
                    width: 200,
                    height: 200,
                    top: 0,
                    left: 0,
                    color: '#000',
                    backgroundColor: 'rgba(0,0,0,0)'
                  }
                }, {
                  id: 5102,
                  component: 'CPicture',
                  label: '图片',
                  propValue: {
                    src: {
                      display: '图片地址',
                      value: 'https://element-plus.org/images/element-plus-logo.svg'
                    },
                    preview: {
                      display: '预览放大',
                      value: 'true'
                    },
                    fit: {
                      display: '适应',
                      value: 'fill'
                    }
                  },
                  icon: 'image',
                  style: {
                    width: 200,
                    height: 200,
                    top: 0,
                    left: 0,
                    color: '#000',
                    backgroundColor: 'rgba(0,0,0,0)'
                  }
                }, {
                  id: 1963,
                  component: 'CPicture',
                  label: '图片',
                  propValue: {
                    src: {
                      display: '图片地址',
                      value: 'https://images.pexels.com/photos/4937641/pexels-photo-4937641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    },
                    preview: {
                      display: '预览放大',
                      value: 'true'
                    },
                    fit: {
                      display: '适应',
                      value: 'cover'
                    }
                  },
                  icon: 'image',
                  style: {
                    width: 200,
                    height: 200,
                    top: 0,
                    left: 0,
                    color: '#000',
                    backgroundColor: 'rgba(0,0,0,0)'
                  }
                }, {
                  id: 7785,
                  component: 'CPicture',
                  label: '图片',
                  propValue: {
                    src: {
                      display: '图片地址',
                      value: 'https://images.pexels.com/photos/4937641/pexels-photo-4937641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    },
                    preview: {
                      display: '预览放大',
                      value: 'true'
                    },
                    fit: {
                      display: '适应',
                      value: 'cover'
                    }
                  },
                  icon: 'image',
                  style: {
                    width: 200,
                    height: 200,
                    top: 0,
                    left: 0,
                    color: '#000',
                    backgroundColor: 'rgba(0,0,0,0)'
                  }
                }, {
                  id: 4251,
                  component: 'CPicture',
                  label: '图片',
                  propValue: {
                    src: {
                      display: '图片地址',
                      value: 'https://images.pexels.com/photos/4937641/pexels-photo-4937641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    },
                    preview: {
                      display: '预览放大',
                      value: 'true'
                    },
                    fit: {
                      display: '适应',
                      value: 'cover'
                    }
                  },
                  icon: 'image',
                  style: {
                    width: 200,
                    height: 200,
                    top: 0,
                    left: 0,
                    color: '#000',
                    backgroundColor: 'rgba(0,0,0,0)'
                  }
                }],
                display: '内含组件'
              }
            },
            style: {
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              color: '#000',
              backgroundColor: 'rgba(0,0,0,0)'
            }
          }],
          moreLayout: [{ component: 'CLayout', icon: 'data-vis-4', id: 6360, label: '布局', propValue: { row: { value: '2', display: '行数' }, col: { value: '2', display: '列数' }, subComp: { value: [{ component: 'CLayout', icon: 'data-vis-4', id: 8402, label: '布局', propValue: { row: { value: '2', display: '行数' }, col: { value: '2', display: '列数' }, subComp: { value: [{ id: 6366, component: 'CButton', label: '按钮', propValue: { msg: { display: '文字', value: '按钮' }, type: { display: '类型', value: 'primary' }, size: { display: '尺寸', value: 'default' } }, icon: 'cursor-1', style: { top: 0, left: 0 }, events: { click: { event: { _custom: { type: 'function', display: '<span>f</span> alert(para)', _reviveId: 5 } }, param: { msg: '1' }, type: 'alert' } } }, { id: 7752, component: 'CButton', label: '按钮', propValue: { msg: { display: '文字', value: '按钮' }, type: { display: '类型', value: 'primary' }, size: { display: '尺寸', value: 'default' } }, icon: 'cursor-1', style: { top: 0, left: 0 }, events: { click: { event: { _custom: { type: 'function', display: '<span>f</span> alert(para)', _reviveId: 6 } }, param: { msg: '2' }, type: 'alert' } } }, { id: 6631, component: 'CButton', label: '按钮', propValue: { msg: { display: '文字', value: '按钮' }, type: { display: '类型', value: 'primary' }, size: { display: '尺寸', value: 'default' } }, icon: 'cursor-1', style: { top: 0, left: 0 }, events: { click: { event: { _custom: { type: 'function', display: '<span>f</span> alert(para)', _reviveId: 7 } }, param: { msg: '3' }, type: 'alert' } } }, { id: 3991, component: 'CPicture', label: '图片', propValue: { src: { display: '图片地址', value: 'https://images.pexels.com/photos/4937641/pexels-photo-4937641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }, preview: { display: '预览放大', value: 'true' }, fit: { display: '适应', value: 'fill' } }, icon: 'image', style: { width: 200, height: '180', top: 0, left: 0, color: '#000', backgroundColor: 'rgba(0,0,0,0)' } }], display: '内含组件' } }, style: { width: '100%', height: '100%', top: 0, left: 0, color: '#000', backgroundColor: 'rgba(0,0,0,0)' } }, { component: 'CLayout', icon: 'data-vis-4', id: 5736, label: '布局', propValue: { row: { value: '1', display: '行数' }, col: { value: '2', display: '列数' }, subComp: { value: [{ id: 7671, component: 'CButton', label: '按钮', propValue: { msg: { display: '文字', value: '按钮' }, type: { display: '类型', value: 'primary' }, size: { display: '尺寸', value: 'default' } }, icon: 'cursor-1', style: { top: 0, left: 0 }, events: { click: { event: { _custom: { type: 'function', display: '<span>f</span> alert(para)', _reviveId: 8 } }, param: { msg: '5' }, type: 'alert' } } }, { id: 635, component: 'CButton', label: '按钮', propValue: { msg: { display: '文字', value: '按钮' }, type: { display: '类型', value: 'primary' }, size: { display: '尺寸', value: 'default' } }, icon: 'cursor-1', style: { top: 0, left: 0 }, events: { click: { event: { _custom: { type: 'function', display: '<span>f</span> alert(para)', _reviveId: 9 } }, param: { msg: '6' }, type: 'alert' } } }], display: '内含组件' } }, style: { width: '100%', height: '100%', top: 0, left: 0, color: '#000', backgroundColor: 'rgba(0,0,0,0)' } }], display: '内含组件' } }, style: { width: '100%', height: '100%', top: 0, left: 0, color: '#000', backgroundColor: 'rgba(0,0,0,0)' } }]
        }
      }
    },
    persist: {
      enabled: true
    }
  }
)

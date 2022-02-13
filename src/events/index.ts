import { ElMessageBox } from 'element-plus'

export const eventsList: {[key: string]: any} = {
  alert(param: {
    msg: string
  }) {
    ElMessageBox({
      message: param.msg
    })
  },
  redirection(param: {path: string}) {
    window.location.href = param.path
  }
}

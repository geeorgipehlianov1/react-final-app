import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const success = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  })
}

export const error = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
  })
}

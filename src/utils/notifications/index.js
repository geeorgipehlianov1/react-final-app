import { toast } from 'react-toastify'
import Image from 'next/image'

const Notification = ({ title, description, actionText, action }) => {
  return (
    <div className="notification-content">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {actionText && <button onClick={action}>{actionText}</button>}
    </div>
  )
}

export const error = (msg, options) => {
  toast.error(<Notification {...msg} />, {
    ...options,
    icon: () => (
      <Image src="/error.svg" width="24px" height="24px" alt="icon" />
    ),
  })
}

export const success = (msg, options) => {
  toast.success(<Notification {...msg} />, {
    ...options,
    icon: () => (
      <Image src={'/checkIcon.svg'} width="24px" height="24px" alt="icon" />
    ),
  })
}

export const warn = (msg, options) => {
  toast.warn(<Notification {...msg} />, {
    ...options,
    icon: () => (
      <Image src={'/warning.png'} width="24px" height="24px" alt="icon" />
    ),
  })
}

export const info = (msg, options) => {
  toast.info(<Notification {...msg} />, {
    ...options,
    icon: () => (
      <Image src={'/info.pns'} width="24px" height="24px" alt="icon" />
    ),
  })
}

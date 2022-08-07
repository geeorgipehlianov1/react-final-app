import { Outlet, Navigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'

import { AuthContext } from '../../../contexts/AuthContext/index'
import { error } from '../../../utils/notifications'

export const PrivateRoutes = () => {
  const { user } = useContext(AuthContext)
  useEffect(() => {
    if (!user.accessToken) {
      error('To do any operations first you need to log in!')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return user.accessToken ? <Outlet /> : <Navigate to="/login" />
}

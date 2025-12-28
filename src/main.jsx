import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { router } from './Routes/Routes'
import { Provider } from 'react-redux'
import store from './Context/store'
import UserProvider from './Context/UserProvider'
import AuthProvider from './Context/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <AuthProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
          <ToastContainer />
        </Provider>
      </AuthProvider>
    </UserProvider>
  </StrictMode>,
)

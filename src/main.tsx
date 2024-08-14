import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './routes/Routes.tsx'

import { Auth0Provider } from '@auth0/auth0-react'
import { RouterProvider } from 'react-router'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
<Auth0Provider
  domain='dev-a14l62fplv4qezpj.eu.auth0.com'
  clientId='uGBZ9sp50pfbBV0LX1vBbAC0DsTILdwl'
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</Auth0Provider> 
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import router from './Router'
import childRouter from './childRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={childRouter} />
    {/* <BrowserRouter>

    </BrowserRouter> */}
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)

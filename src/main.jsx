import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import Specials from './Specials.jsx'
import Contact from './Contact.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "specials",
    element: <Specials />
  },
  {
    path: "contact",
    element: <Contact />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)

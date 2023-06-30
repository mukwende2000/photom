import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './layouts/Root'
import Home from './routes/Home'
import About from './routes/About'
import Gallery from './routes/Galley'
import History from './routes/History'
import Menu from './routes/Menu'
import Faq from './routes/Faq'
import Contact from './routes/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/Faq',
        element: <Faq />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/history',
        element: <History />
      },
      {
        path: '/gallery',
        element: <Gallery />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

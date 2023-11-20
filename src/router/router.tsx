import {createBrowserRouter} from 'react-router-dom'
import {urls} from '../utils/urls'
import {Layout} from '../pages/Layout/Layout'
import {ErrorPage} from '../pages/ErrorPage/ErrorPage'

export const router = createBrowserRouter([
  {
    path: urls.home,
    index: true,
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
])

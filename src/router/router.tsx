import { FC } from 'react'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  RouterProviderProps
} from 'react-router-dom'
import { Wrapper } from '~layouts/Wrapper/Wrapper'
import { AboutUsPage } from '~pages/AboutUsPage'
import { BlogPage } from '~pages/BlogPage'
import { CaseStudiesPage } from '~pages/CaseStudiesPage'
import { ContactPage } from '~pages/ContactPage'
import { HomePage } from '~pages/HomePage'
import { ServicesDevelopmentPage } from '~pages/ServicesDevelopmentPage'
import { ServicesDevOpsPage } from '~pages/ServicesDevOpsPage'

type CustomFutureConfig = RouterProviderProps['future'] & {
  v7_relativeSplatPath?: boolean
}

const futureOptions: CustomFutureConfig = {
  v7_startTransition: false,
  v7_relativeSplatPath: false
}

const getRoutes = () => [
  {
    path: '/',
    element: <Wrapper />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about-us', element: <AboutUsPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'case-studies', element: <CaseStudiesPage /> },
      { path: 'services-dev-ops', element: <ServicesDevOpsPage /> },
      { path: 'services-development', element: <ServicesDevelopmentPage /> },
    ]
  },
  {
    path: '*',
    element: <Navigate replace to="/" />
  }
]

const RoutesComponent: FC = () => {
  const router = createBrowserRouter(getRoutes())
  return (
    <RouterProvider future={futureOptions} router={router} />
  )
}

export default RoutesComponent

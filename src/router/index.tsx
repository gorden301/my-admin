import { lazy } from 'react'

const Index = lazy(() => import('../container/index'))
const About = lazy(() => import('../container/about'))

const routes = [
    {
        path: '/',
        name: 'index',
        element: <Index />
    },
    {
        path: '/about',
        name: 'about',
        element: <About />
    }
]

export default routes
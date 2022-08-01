import { ReactNode, Suspense } from "react";
import { Route, Routes, HashRouter as Router } from 'react-router-dom'
import routes from './router/index'

const TimsRouter = () => {
    const timsRoutes = routes.map((item) => {
        return <Route key={item.path} path={item.path} element={item.element}></Route>
    })
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>{timsRoutes}</Routes>
        </Suspense>
      )
}

export default TimsRouter
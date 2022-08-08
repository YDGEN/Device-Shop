import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom"
import {authRoutes, publicRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/consts'
import {Context} from "../index"
import { useContext} from 'react';

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
  return (
    <Routes>
     {user.isAuth && authRoutes.map (({path, Component}) =>
         <Route key={path} path={path} component={Component} exact/>
     )}
     {publicRoutes.map (({path, Component}) =>
         <Route key={path} path={path} component={Component} exact/>
     )}
     <Navigate to={SHOP_ROUTE}/>
    </Routes>
  )
}

export default AppRouter;
import React from 'react'
import {Route, Routes, Navigate} from "react-router-dom"
import {authRoutes, publicRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/consts'
import {Context} from "../index"
import { useContext} from 'react';
import Home from '../pages/homepage'
const AppRouter = () => {
    const {user} = useContext(Context)

    console.log({user})
  return (
    <Routes>
      <Route path="/" element={<Home/>}  exact />
      {user.isAuth && authRoutes.map (({path, Element}, i) =>
        <Route key={`${path}_${i}`} path={path} element={<Element/>} />
      )}
      {publicRoutes.map (({path, Element, exact}, i) =>
        <Route key={`${path}_${i}`} path={path} element={<Element/>}/>    
      )}
     <Route path='*' element={<Navigate to={SHOP_ROUTE}/>}/>
    </Routes>
  )
}

export default AppRouter;
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Error from './component/Error'
import Fetch from './component/Fetch'
import Home from './component/home/Home'
import Login from './component/Login'
import Products from './component/Products'
import ProtectedRoutes from './component/ProtectedRoutes'
import Register from './component/Register'
import SharedLayout from './component/sharedlayout/SharedLayout'
const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path={'/products'} element={<Products/>}/>
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route element={<ProtectedRoutes/>}>
      <Route path={'/dashboard'} element={<Dashboard/>}/>
      </Route>
      <Route path={'/fetch'} element={<Fetch/>}/>
      <Route path={'*'} element={<Error/>}/>
      </Route>
    </Routes>
  )
}

export default App
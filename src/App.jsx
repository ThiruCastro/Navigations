import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Property from './Pages/Property'
import RootLayout from './Layout/RootLayout'
import ContactLayout from './Layout/ContactLayout'
import Login from './Pages/Login'
import Info from './Component/Info'
import Form from './Component/Form'
import UserLayout from './Layout/UserLayout'
import Users from './Pages/Users'
import { userLoader, userSingleLoader } from './Utils/UserLoader'
import User from './Pages/User'
const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<ContactLayout/>}>
          <Route path="form" element={<Form/>}/>
          <Route path="info" element={<Info/>}/>
        </Route>
        <Route path="property" element={<Property/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="users" element={<UserLayout/>}>
          <Route index element={<Users/>} loader={userLoader}/>
          <Route path=':id' element={<User/>} loader={userSingleLoader}/>
        </Route>
      </Route>
    )
  )
  return (
    <div >
     <RouterProvider router={router}>
     </RouterProvider>
    </div>
  )
}

export default App
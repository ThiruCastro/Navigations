import { Outlet } from "react-router-dom"
import Navbar from "../Component/Navbar"

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout
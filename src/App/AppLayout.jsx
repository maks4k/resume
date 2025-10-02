import { Footer } from "@/components/Resume/Footer/ui/Footer"
import { Header } from "@/components/Resume/header/ui/Header"
import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

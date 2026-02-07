import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = ()=>{
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}

export default PublicLayout
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

function Layout() {
    const [cart, setCart] = useState([]);

    return <>
       <Header />
       <Outlet context={[cart, setCart]}/>
    </>
}

export default Layout;
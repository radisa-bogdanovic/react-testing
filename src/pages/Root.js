import { Outlet } from "react-router-dom"
import MainNavigation from "../components/Nav/MainNavigation"

const RootLayout = () => {
    return <>
    <MainNavigation/>
    <Outlet>
    </Outlet>
    </>
}

export default RootLayout;
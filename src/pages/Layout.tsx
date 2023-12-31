import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;

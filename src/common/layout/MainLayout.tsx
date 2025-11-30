import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../../common/components/footer/index"



function MainLayout () {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;

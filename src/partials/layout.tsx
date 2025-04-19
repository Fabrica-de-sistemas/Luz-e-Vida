import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./hearder";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
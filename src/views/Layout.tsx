import { Outlet } from "react-router-dom";
import Footer from "../components/FooterElement";
import Navbar from "../components/Navbar.tsx";

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

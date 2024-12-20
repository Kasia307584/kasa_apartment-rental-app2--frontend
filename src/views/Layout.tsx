import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import Footer from "../components/FooterElement";
import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

function Layout({ children }: Children) {
  return (
    <>
      <div className="page-header">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>{children}</div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

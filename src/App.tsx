import "./App.css";
import Layout from "./views/Layout.tsx";
import Details from "./views/ProductDetailsView.tsx";
import Terms from "./views/TermsView.tsx";
import Home from "./views/HomeVIew.tsx";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {" "}
                  <p>Accueil</p>
                </NavLink>
                <NavLink
                  to="/terms"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  <p>A Propos</p>
                </NavLink>
              </Layout>
            }
          >
            <Route index element={<Home />} />
            <Route path="terms" element={<Terms />} />
            <Route path="products/:productId" element={<Details />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

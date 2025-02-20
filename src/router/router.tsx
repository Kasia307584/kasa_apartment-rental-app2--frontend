import Layout from "../views/Layout.tsx";
import Details from "../views/ProductDetailsView.tsx";
import Terms from "../views/TermsView.tsx";
import Home from "../views/HomeVIew.tsx";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="terms" element={<Terms />} />
        <Route path="products/:productId" element={<Details />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;

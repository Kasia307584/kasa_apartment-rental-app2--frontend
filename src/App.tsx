import Layout from "./views/Layout.tsx";
import Details from "./views/ProductDetailsView.tsx";
import Terms from "./views/TermsView.tsx";
import Home from "./views/HomeView.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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

import "./App.css";
import Card from "./components/ProductCard.tsx";
import Footer from "./components/FooterElement.tsx";
import Dropdown from "./components/DropdownBtn.tsx";
import Carousel from "./components/Carousel.tsx";
import Layout from "./views/Layout.tsx";
// import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        {/* <Link to="/home"> */}
        <p>Accueil</p>
        {/* </Link> */}
        {/* <Link to="/terms"> */}
        <p>A Propos</p>
        {/* </Link> */}
      </Layout>
      <Carousel imageSrc=""></Carousel>
      <Dropdown dropdownTitle="" dropdownContent=""></Dropdown>
      <Card image="" title="" productId=""></Card>
      <Footer></Footer>
    </>
  );
}

export default App;

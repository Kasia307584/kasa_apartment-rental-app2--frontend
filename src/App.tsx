import "./App.css";
import Card from "./components/ProductCard.tsx";
import Footer from "./components/FooterElement.tsx";
import Dropdown from "./components/DropdownBtn.tsx";

function App() {
  return (
    <>
      <Dropdown dropdownTitle="" dropdownContent=""></Dropdown>
      <Card image="" title="" productId=""></Card>
      <Footer></Footer>
    </>
  );
}

export default App;

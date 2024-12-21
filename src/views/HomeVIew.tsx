import backgroundImg from "../assets/background-img.png";
import Card from "../components/ProductCard";
// import data

function HomeView() {
  return (
    <>
      <div>
        <img src={backgroundImg} alt="Landscape" />
      </div>
      {/* map through data and display cards */}
      <Card image="" title="" productId="" />
    </>
  );
}

export default HomeView;

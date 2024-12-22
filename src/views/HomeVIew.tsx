import backgroundImg from "../assets/background-img.png";
import Card from "../components/ProductCard";
import products from "../data/products.json";

function HomeView() {
  return (
    <>
      <section className="background-section background-section--with-text">
        <img src={backgroundImg} alt="Landscape" />
        <p className="background-section_text">
          Chez vous, partout et ailleurs
        </p>
      </section>
      <section className="cards-grid">
        {products.map((product) => {
          return (
            <Card
              image={product.pictures[0]}
              title={product.title}
              productId={product.id}
              key={product.id}
            />
          );
        })}
      </section>
    </>
  );
}

export default HomeView;

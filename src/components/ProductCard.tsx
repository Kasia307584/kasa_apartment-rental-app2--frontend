import { Link } from "react-router-dom";

interface ProductCard {
  image: string;
  title: string;
  productId: string;
}

function ProductCard({ image, title, productId }: ProductCard) {
  return (
    <Link to={`/products/${productId}`}>
      <div className="product-card">
        <img src={image} alt="Apartment photo" />
        <p className="product-card_title">{title}</p>
      </div>
      //{" "}
    </Link>
  );
}

export default ProductCard;

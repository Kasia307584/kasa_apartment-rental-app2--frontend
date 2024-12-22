import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../components/Carousel";
import Dropdown from "../components/DropdownBtn";
import products from "../data/products.json";

interface Product {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

function ProductDetailsView() {
  const params = useParams();
  const productId = params.productId;
  const product: Product | undefined = products.find(
    (product) => product.id === productId
  );
  if (!product) {
    return <p>Apartment not found!</p>;
  }
  return (
    <>
      <Carousel listImages={product.pictures} />
      <div className="product">
        <h1 className="product__name">{}</h1>
        <p className="product__location">{}</p>
        <div className="product__tags">
          {product.tags.map((tag, index) => (
            <p className="product-tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="product-owner">
        <p className="product-owner__name">{}</p>
        <div>
          <img src="" alt="Owner photo" />
        </div>
      </div>
      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={
              index < Number(product.rating)
                ? "star--recieved"
                : "star--nonrecieved"
            }
          />
        ))}
      </div>
      <div className="product__descriptions">
        <Dropdown
          dropdownTitle="Description"
          dropdownContent={product.description}
        />
        <Dropdown
          dropdownTitle="Équipements"
          dropdownContent={product.equipments}
        />
      </div>
    </>
  );
}

export default ProductDetailsView;

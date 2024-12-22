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
  // access the fetched data and find the product that matches the productId
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
          {/*map through tags and display one by one*/}
          <p className="product-tag">{}</p>
        </div>
      </div>
      <div className="product-owner">
        <p className="product-owner__name">{}</p>
        <div>
          <img src="" alt="Owner photo" />
        </div>
      </div>
      <div className="stars">
        {/*iterate over the data to apply conditionally colors on stars */}
        <FontAwesomeIcon icon={faStar} className="star--recieved" />
        <FontAwesomeIcon icon={faStar} className="star--recieved" />
        <FontAwesomeIcon icon={faStar} className="star--recieved" />
        <FontAwesomeIcon icon={faStar} className="star--nonrecieved" />
        <FontAwesomeIcon icon={faStar} className="star--nonrecieved" />
      </div>
      <div className="product__descriptions">
        {/*put the value of dropdownContent dinamically based on data */}
        <Dropdown dropdownTitle="Description" dropdownContent="" />
        <Dropdown dropdownTitle="Équipements" dropdownContent="" />
      </div>
    </>
  );
}

export default ProductDetailsView;

import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../components/Carousel";
import Dropdown from "../components/DropdownBtn";

function ProductDetailsView() {
  const params = useParams();
  const productId = params.productId;
  // access the fetched data and find the product that matches the productId
  return (
    <>
      <Carousel imageSrc="" />
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

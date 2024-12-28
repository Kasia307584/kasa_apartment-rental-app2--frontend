import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../components/Carousel";
import Dropdown from "../components/DropdownBtn";
import { gql, useQuery } from "@apollo/client";

const GET_APARTMENTS = gql`
  query GetApartments {
    apartments {
      id
      title
      cover
      pictures
      description
      host {
        name
        picture
      }
      rating
      location
      equipments
      tags
    }
  }
`;

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

interface Products {
  apartments: Product[];
}

function ProductDetailsView() {
  const params = useParams();
  const productId = params.productId;

  const { loading, error, data } = useQuery<Products>(GET_APARTMENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product: Product | undefined = data?.apartments.find(
    (apt) => apt.id === productId
  );
  if (!product) {
    return <p>Apartment not found!</p>;
  }
  return (
    <>
      <Carousel listImages={product.pictures} />
      <div className="product">
        <h1 className="product__name">{product.title}</h1>
        <p className="product__location">{product.location}</p>
        <div className="product__tags">
          {product.tags.map((tag, index) => (
            <p className="product-tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="product-owner">
        <p className="product-owner__name">{product.host.name}</p>
        <div className="product-owner__photo">
          <img src={product.host.picture} alt="Owner photo" />
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

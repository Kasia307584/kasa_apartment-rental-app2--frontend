import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../components/Carousel";
import Dropdown from "../components/DropdownBtn";
import { gql, useQuery } from "@apollo/client";

const GET_APARTMENTS = gql`
  query GetApartments($id: ID!) {
    apartment(id: $id) {
      title
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
  apartment: {
    title: string;
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
  };
}

function ProductDetailsView() {
  const params = useParams();
  const productId = params.productId;

  const { loading, error, data } = useQuery<Product>(GET_APARTMENTS, {
    variables: { id: productId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data) {
    return <p>Apartment not found!</p>;
  }

  return (
    <>
      <Carousel listImages={data.apartment.pictures} />
      <div className="product">
        <h1 className="product__name">{data.apartment.title}</h1>
        <p className="product__location">{data.apartment.location}</p>
        <div className="product__tags">
          {data.apartment.tags.map((tag, index) => (
            <p className="product-tag" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
      <div className="product-owner">
        <p className="product-owner__name">{data.apartment.host.name}</p>
        <div className="product-owner__photo">
          <img src={data.apartment.host.picture} alt="Owner photo" />
        </div>
      </div>
      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={
              index < Number(data.apartment.rating)
                ? "star--recieved"
                : "star--nonrecieved"
            }
          />
        ))}
      </div>
      <div className="product__descriptions">
        <Dropdown
          dropdownTitle="Description"
          dropdownContent={data.apartment.description}
        />
        <Dropdown
          dropdownTitle="Équipements"
          dropdownContent={data.apartment.equipments}
        />
      </div>
    </>
  );
}

export default ProductDetailsView;

import backgroundImg from "../assets/background-img.png";
import Card from "../components/ProductCard";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_APARTMENTS = gql`
  query GetApartments {
    apartments {
      id
      title
      cover
    }
  }
`;
// const ADD_APARTMENT = gql`
//   mutation AddApartment($title: String!, $cover: String!) {
//     apartment(title: $title, cover: $cover) {
//       id
//       title
//       cover
//     }
//   }
// `;

interface Apartment {
  id: string;
  title: string;
  cover: string;
}
interface Apartments {
  apartments: Apartment[];
}
// interface AddApartmentResponse {
//   addApartment: Apartment;
// }

function HomeView() {
  const { loading, error, data } = useQuery<Apartments>(GET_APARTMENTS);
  // const [addApart] = useMutation<AddApartmentResponse>(ADD_APARTMENT);

  // const handleAddApartment = () => {
  //   addApart({ variables: { title: "new apart", cover: "url" } });
  // };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section className="background-section background-section--with-text">
        <img src={backgroundImg} alt="Landscape" />
        <p className="background-section_text">
          Chez vous, partout et ailleurs
        </p>
      </section>
      {/* <button onClick={handleAddApartment}>Add apartment</button> */}
      <section className="cards-grid">
        {data?.apartments.map((apt: Apartment) => {
          return (
            <Card
              image={apt.cover}
              title={apt.title}
              productId={apt.id}
              key={apt.id}
            />
          );
        })}
      </section>
    </>
  );
}

export default HomeView;

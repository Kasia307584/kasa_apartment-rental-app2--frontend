import "./App.css";
import Layout from "./views/Layout.tsx";
// import { Link } from "react-router-dom";
import Details from "./views/ProductDetailsView.tsx";

function App() {
  return (
    <>
      <Layout>
        {/* <Link to="/home"> */}
        <p>Accueil</p>
        {/* </Link> */}
        {/* <Link to="/terms"> */}
        <p>A Propos</p>
        {/* </Link> */}
      </Layout>
      <Details />
    </>
  );
}

export default App;

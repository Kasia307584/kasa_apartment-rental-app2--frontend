import { Link } from "react-router-dom";

function ErrorView() {
  return (
    <>
      <h1 className="error-main">404</h1>
      <h2 className="error-message">
        Oups! La page que{" "}
        <span className="break-point">vous demandez n'existe pas.</span>
      </h2>
      <p className="homelink-wrapper">
        <Link to="/" className="homelink">
          Retourner sur la page d'accueil
        </Link>
      </p>
    </>
  );
}

export default ErrorView;

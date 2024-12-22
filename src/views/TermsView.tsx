import backgroundImg from "../assets/background-img_about.png";
import Dropdown from "../components/DropdownBtn";

function TermsView() {
  return (
    <>
      <section className="background-section">
        <img src={backgroundImg} alt="Landscape" />
      </section>
      <Dropdown
        dropdownTitle="Fiablilité"
        dropdownContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      ></Dropdown>
      <Dropdown
        dropdownTitle="Respect"
        dropdownContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      ></Dropdown>
      <Dropdown
        dropdownTitle="Service"
        dropdownContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      ></Dropdown>
      <Dropdown
        dropdownTitle="Sécurité"
        dropdownContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      ></Dropdown>
    </>
  );
}

export default TermsView;

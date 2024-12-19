import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Dropdown {
  dropdownTitle: string;
  dropdownContent: string;
}

function DropdownBtn({ dropdownTitle, dropdownContent }: Dropdown) {
  const [isActive, setIsActive] = useState(false);

  const handleDropdownClick = () => {
    setIsActive((prevValue) => !prevValue);
  };

  return (
    <div>
      <div className="dropdown-header">
        <p>{dropdownTitle}</p>
        <div onClick={handleDropdownClick}>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`dropdown-icon ${isActive ? "inactive" : "active"}`}
          />
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`dropdown-icon ${isActive ? "active" : "inactive"}`}
          />
        </div>
      </div>
      <div className={`dropdown-content ${isActive ? "active" : "inactive"}`}>
        <p>{dropdownContent}</p>
      </div>
    </div>
  );
}

export default DropdownBtn;

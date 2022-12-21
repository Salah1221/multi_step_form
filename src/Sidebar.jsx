import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setIndex }) => {
  const [flags, setFlags] = useState([true, false, false, false]);
  const stepName = ["Your Info", "Select Plan", "Add-ons", "Summary"];
  const paths = ["", "plan", "addons", "summary"];
  const handleClick = (i) => {
    let aux = [false, false, false, false];
    aux[i] = true;
    setFlags(aux);
    setIndex(i);
  };

  return (
    <div className="sidebar">
      {stepName.map((stepname, i) => (
        <Link
          to={"/" + paths[i]}
          className={flags[i] ? "active" : ""}
          onClick={() => handleClick(i)}
        >
          <div className="nb">{i + 1}</div>
          <div className="text">
            <div className="step">Step {i + 1}</div>
            <div className="info">{stepname}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

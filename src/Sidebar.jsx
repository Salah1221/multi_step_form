import { Link } from "react-router-dom";

const Sidebar = ({ index, setIndex }) => {
  const stepName = ["Your Info", "Select Plan", "Add-ons", "Summary"];
  const paths = ["/", "/plan", "/addons", "/summary"];

  return (
    <div className="sidebar">
      {stepName.map((stepname, i) => (
        <Link
          to={paths[i]}
          className={index === i ? "active" : ""}
          onClick={() => setIndex(i)}
          key={i}
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

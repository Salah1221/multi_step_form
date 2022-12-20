import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="active">
        <div className="nb">1</div>
        <div className="text">
          <div className="step">Step 1</div>
          <div className="info">Your Info</div>
        </div>
      </Link>
      <Link to="/plan" className="">
        <div className="nb">2</div>
        <div className="text">
          <div className="step">Step 2</div>
          <div className="info">Select Plan</div>
        </div>
      </Link>
      <Link to="/addons" className="">
        <div className="nb">3</div>
        <div className="text">
          <div className="step">Step 3</div>
          <div className="info">Add-ons</div>
        </div>
      </Link>
      <Link to="/summary" className="">
        <div className="nb">4</div>
        <div className="text">
          <div className="step">Step 4</div>
          <div className="info">Summary</div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

import ProloadedImg from "./ProloadedImg";

const Addons = ({ addons, setAddons, isMonthly, checkmark }) => {
  const handleClick = (e, key) => {
    let aux = addons;
    aux[key] = !aux[key];
    setAddons(aux);
  };

  return (
    <div className="add-ons">
      <div className="add-on">
        <input
          className="checkbox"
          type="checkbox"
          name=""
          id="online-service"
          onClick={(e) => handleClick(e, 0)}
          defaultChecked={addons[0]}
        />
        <label className="option" htmlFor="online-service">
          <div className="custom-checkbox-container">
            <div className="custom-checkbox">
              <ProloadedImg src={checkmark} />
            </div>
            <div className="checkbox-label">
              <div className="title">Online service</div>
              <div className="sub-title">Access to multiplayer games</div>
            </div>
          </div>
          <div className="addon-price">+$1{isMonthly ? "/mo" : "0/yr"}</div>
        </label>
      </div>
      <div className="add-on">
        <input
          className="checkbox"
          type="checkbox"
          name=""
          id="larger-storage"
          onClick={(e) => handleClick(e, 1)}
          defaultChecked={addons[1]}
        />
        <label className="option" htmlFor="larger-storage">
          <div className="custom-checkbox-container">
            <div className="custom-checkbox">
              <ProloadedImg src={checkmark} />
            </div>
            <div className="checkbox-label">
              <div className="title">Larger storage</div>
              <div className="sub-title">Extra 1TB of cloud save</div>
            </div>
          </div>
          <div className="addon-price">+$2{isMonthly ? "/mo" : "0/yr"}</div>
        </label>
      </div>
      <div className="add-on">
        <input
          className="checkbox"
          type="checkbox"
          name=""
          id="custom-profile"
          onClick={(e) => handleClick(e, 2)}
          defaultChecked={addons[2]}
        />
        <label className="option" htmlFor="custom-profile">
          <div className="custom-checkbox-container">
            <div className="custom-checkbox">
              <ProloadedImg src={checkmark} />
            </div>
            <div className="checkbox-label">
              <div className="title">Customizable profile</div>
              <div className="sub-title">Custom theme on your profile</div>
            </div>
          </div>
          <div className="addon-price">+$2{isMonthly ? "/mo" : "0/yr"}</div>
        </label>
      </div>
    </div>
  );
};

export default Addons;

const Addons = () => {
  return (
    <div className="add-ons">
      <div className="add-on">
        <input
          className="checkbox"
          type="checkbox"
          name=""
          id="online-service"
        />
        <label className="option" htmlFor="online-service">
          <div className="custom-checkbox-container">
            <div className="custom-checkbox">
              <img src="src/assets/images/icon-checkmark.svg" alt="" />
            </div>
            <div className="checkbox-label">
              <div className="title">Online service</div>
              <div className="sub-title">Access to multiplayer games</div>
            </div>
          </div>
          <div className="addon-price">+$10/yr</div>
        </label>
      </div>
      <div className="add-on">
        <input
          className="checkbox"
          type="checkbox"
          name=""
          id="larger-storage"
        />
        <label className="option" htmlFor="larger-storage">
          <div className="custom-checkbox-container">
            <div className="custom-checkbox">
              <img src="src/assets/images/icon-checkmark.svg" alt="" />
            </div>
            <div className="checkbox-label">
              <div className="title">Larger storage</div>
              <div className="sub-title">Extra 1TB of cloud save</div>
            </div>
          </div>
          <div className="addon-price">+$20/yr</div>
        </label>
      </div>
      <div className="add-on">
        <input
          className="checkbox"
          type="checkbox"
          name=""
          id="custom-profile"
        />
        <label className="option" htmlFor="custom-profile">
          <div className="custom-checkbox-container">
            <div className="custom-checkbox">
              <img src="src/assets/images/icon-checkmark.svg" alt="" />
            </div>
            <div className="checkbox-label">
              <div className="title">Customizable profile</div>
              <div className="sub-title">Custom theme on your profile</div>
            </div>
          </div>
          <div className="addon-price">+$20/yr</div>
        </label>
      </div>
    </div>
  );
};

export default Addons;

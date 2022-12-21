const Plan = () => {
  return (
    <div className="plan">
      <div className="cards">
        <div className="card active">
          <div className="img">
            <img src="./src/assets/images/icon-arcade.svg" alt="" />
          </div>
          <div className="content">
            <div className="plan-name">Arcade</div>
            <div className="price">$90/yr</div>
            <div className="additional">2 months free</div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src="./src/assets/images/icon-advanced.svg" alt="" />
          </div>
          <div className="content">
            <div className="plan-name">Advanced</div>
            <div className="price">$120/yr</div>
            <div className="additional">2 months free</div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src="./src/assets/images/icon-pro.svg" alt="" />
          </div>
          <div className="content">
            <div className="plan-name">Pro</div>
            <div className="price">$150/yr</div>
            <div className="additional">2 months free</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;

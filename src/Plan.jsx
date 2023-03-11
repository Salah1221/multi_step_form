import icon_arcade from "./assets/images/icon-arcade.svg";
import icon_advanced from "./assets/images/icon-advanced.svg";
import icon_pro from "./assets/images/icon-pro.svg";

const Plan = ({ isMonthly, setIsMonthly, plan, setPlan, setIsNextPressed }) => {
  setIsNextPressed(false);

  const handleClick = (e, key) => {
    setPlan(+key);
  };

  return (
    <div className="plan">
      <div className="cards">
        <div
          className={`card ${plan === 0 ? "active" : ""}`}
          key="0"
          onClick={(e) => handleClick(e, 0)}
        >
          <div className="img">
            <img src={icon_arcade} alt="" />
          </div>
          <div className="content">
            <div className="plan-name">Arcade</div>
            <div className="price">{`$${9 * 10 ** !isMonthly}/${
              isMonthly ? "mo" : "yr"
            }`}</div>
            {!isMonthly ? <div className="additional">2 months free</div> : ""}
          </div>
        </div>
        <div
          className={`card ${plan === 1 ? "active" : ""}`}
          key="1"
          onClick={(e) => handleClick(e, 1)}
        >
          <div className="img">
            <img src={icon_advanced} alt="" />
          </div>
          <div className="content">
            <div className="plan-name">Advanced</div>
            <div className="price">{`$${12 * 10 ** !isMonthly}/${
              isMonthly ? "mo" : "yr"
            }`}</div>
            {!isMonthly ? <div className="additional">2 months free</div> : ""}
          </div>
        </div>
        <div
          className={`card ${plan === 2 ? "active" : ""}`}
          key="2"
          onClick={(e) => handleClick(e, 2)}
        >
          <div className="img">
            <img src={icon_pro} alt="" />
          </div>
          <div className="content">
            <div className="plan-name">Pro</div>
            <div className="price">{`$${15 * 10 ** !isMonthly}/${
              isMonthly ? "mo" : "yr"
            }`}</div>
            {!isMonthly ? <div className="additional">2 months free</div> : ""}
          </div>
        </div>
      </div>
      <div className="toggle-container">
        <div className={`monthly ${isMonthly ? "active" : ""}`}>Monthly</div>
        <div className="toggle" onClick={() => setIsMonthly(!isMonthly)}>
          <div className={`switch ${isMonthly ? "" : "yearly"}`}></div>
        </div>
        <div className={`yearly ${isMonthly ? "" : "active"}`}>Yearly</div>
      </div>
    </div>
  );
};

export default Plan;

import { Link } from "react-router-dom";

const Summary = ({ addons, plan, isMonthly, setDirection }) => {
  const plans = [
    {
      name: "Arcade",
      price: 9,
    },
    {
      name: "Advanced",
      price: 12,
    },
    {
      name: "Pro",
      price: 15,
    },
  ];
  const addonsInfo = [
    {
      name: "Online service",
      price: 1,
    },
    {
      name: "Larger Storage",
      price: 2,
    },
    {
      name: "Customizable profile",
      price: 2,
    },
  ];

  return (
    <div className="summary">
      <div className="cart">
        <div className="plan-container">
          <div className="name">
            <div>
              {plans[plan].name} ({isMonthly ? "Monthly" : "Yearly"})
            </div>
            <Link to="/plan" onClick={() => setDirection("change plan")}>
              Change
            </Link>
          </div>
          <div className="plan-price">{`$${plans[plan].price}${
            isMonthly ? "/mo" : "0/yr"
          }`}</div>
        </div>
        <div className="addons">
          {addons.map((addon, i) => {
            if (addon)
              return (
                <div className="addon" key={i}>
                  <div className="addon-name">{addonsInfo[i].name}</div>
                  <div>{`+$${addonsInfo[i].price}${
                    isMonthly ? "/mo" : "0/yr"
                  }`}</div>
                </div>
              );
          })}
        </div>
      </div>
      <div className="total">
        <div>Total (per {isMonthly ? "month" : "year"})</div>
        <div>
          +${plans[plan].price + 1 * addons[0] + 2 * addons[1] + 2 * addons[2]}
          {isMonthly ? "/mo" : "0/yr"}
        </div>
      </div>
    </div>
  );
};

export default Summary;

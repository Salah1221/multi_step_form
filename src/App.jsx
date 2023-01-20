import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Addons from "./Addons";
import Info from "./Info";
import Plan from "./Plan";
import Sidebar from "./Sidebar";
import Summary from "./Summary";

function App() {
  const paths = ["/", "/plan", "/addons", "/summary", "/thanks"];
  const [index, setIndex] = useState(paths.indexOf(window.location.pathname));
  const heading = [
    {
      header: "Personal info",
      subhead: "Please provide your name, email address, and phone number.",
    },
    {
      header: "Select your plan",
      subhead: "You have the option of monthly or yearly billing.",
    },
    {
      header: "Pick add-ons",
      subhead: "Add-ons help enhance your gaming experience.",
    },
    {
      header: "Finishing up",
      subhead: "Double-check everything looks OK before confirming.",
    },
    {
      header: "",
      subhead: "",
    },
  ];
  const [isMonthly, setIsMonthly] = useState(true);
  const [plan, setPlan] = useState(0);
  const [addons, setAddons] = useState([false, false, false]);

  return (
    <div className="App">
      <Sidebar index={index} setIndex={setIndex} />
      <div className="container">
        <h1>{heading[index].header}</h1>
        <p>{heading[index].subhead}</p>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route
            path="/plan"
            element={
              <Plan
                isMonthly={isMonthly}
                setIsMonthly={setIsMonthly}
                plan={plan}
                setPlan={setPlan}
              />
            }
          />
          <Route
            path="/addons"
            element={
              <Addons
                addons={addons}
                setAddons={setAddons}
                isMonthly={isMonthly}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <Summary
                setIndex={setIndex}
                addons={addons}
                plan={plan}
                isMonthly={isMonthly}
              />
            }
          />
          <Route path="/thanks" element={<Info />} />
        </Routes>
        <div className="nav-btns">
          <a className={`back ${index ? "" : "inactive"}`}>Go Back</a>
          <a className={`next${index === 3 ? " confirm" : ""}`}>
            {index !== 3 ? "Next Step" : "Confirm"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

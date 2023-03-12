import { useEffect, useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Addons from "./Addons";
import Info from "./Info";
import Plan from "./Plan";
import Sidebar from "./Sidebar";
import Summary from "./Summary";
import Thanks from "./Thanks";
import icon_arcade from "./assets/images/icon-arcade.svg";
import icon_advanced from "./assets/images/icon-advanced.svg";
import icon_pro from "./assets/images/icon-pro.svg";
import checkmark from "./assets/images/icon-checkmark.svg";
import thank_you from "./assets/images/icon-thank-you.svg";

function App() {
  const assets = [icon_arcade, icon_advanced, icon_pro, checkmark, thank_you];
  const paths = ["/", "/plan", "/addons", "/summary", "/thanks"];
  const [isMonthly, setIsMonthly] = useState(true);
  const [plan, setPlan] = useState(0);
  const [addons, setAddons] = useState([false, false, false]);
  const [input, setInput] = useState(["", "", ""]);
  const [isNextPressed, setIsNextPressed] = useState(false);
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  const [index, setIndex] = useState(paths.indexOf(location.pathname));
  const [direction, setDirection] = useState("forwards");

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

  const handleNextClick = (event) => {
    setIsNextPressed(true);
    setDirection("forwards");
    if (!input[0] || !input[1] || !input[2]) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  useEffect(() => {
    assets.forEach((img) => (new Image().src = img.fileName));
  }, []);

  return (
    <div className="App">
      <Sidebar index={index} />
      <div className="container">
        <h1
          className={`${transitionStage}Text ${index === 4 ? "disable" : ""}`}
        >
          {heading[index].header}
        </h1>
        <p
          className={`${transitionStage}Text delayed ${
            transitionStage === "fadeIn" ? "transparent" : ""
          } ${index === 4 ? "disable" : ""}`}
        >
          {heading[index].subhead}
        </p>
        <div
          className={`${transitionStage} routes-container`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransitionStage("fadeIn");
              setDisplayLocation(location);
              if (direction === "forwards") {
                setIndex(index + 1);
              } else if (direction === "change plan") {
                setIndex(1);
              } else {
                setIndex(index - 1);
              }
            }
          }}
        >
          <Routes location={displayLocation}>
            <Route
              path="/"
              element={
                <Info
                  isNextPressed={isNextPressed}
                  input={input}
                  setInput={setInput}
                />
              }
            />
            <Route
              path="/plan"
              element={
                <Plan
                  isMonthly={isMonthly}
                  setIsMonthly={setIsMonthly}
                  plan={plan}
                  setPlan={setPlan}
                  icon_arcade={icon_arcade}
                  icon_advanced={icon_advanced}
                  icon_pro={icon_pro}
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
                  checkmark={checkmark}
                />
              }
            />
            <Route
              path="/summary"
              element={
                <Summary
                  addons={addons}
                  plan={plan}
                  isMonthly={isMonthly}
                  setDirection={setDirection}
                />
              }
            />
            <Route path="/thanks" element={<Thanks thank_you={thank_you} />} />
          </Routes>
        </div>
        <div className={`nav-btns${index === 4 ? " disable" : ""}`}>
          <Link
            to={paths[index - 1]}
            className={`back ${index ? "" : "inactive"}`}
            onClick={() => setDirection("backwards")}
          >
            Go Back
          </Link>
          <Link
            to={paths[index + 1]}
            className={`next${index === 3 ? " confirm" : ""}`}
            onClick={(e) => handleNextClick(e)}
          >
            {index !== 3 ? "Next Step" : "Confirm"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

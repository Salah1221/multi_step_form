import { useEffect, useState } from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import Addons from "./Addons";
import Info from "./Info";
import Plan from "./Plan";
import Sidebar from "./Sidebar";
import Summary from "./Summary";
import Thanks from "./Thanks";

function App() {
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

  return (
    <div className="App">
      <Sidebar index={index} />
      <div className="container">
        <h1 className={`${transitionStage} ${index === 4 ? "disable" : ""}`}>
          {heading[index].header}
        </h1>
        <p className={`${transitionStage} ${index === 4 ? "disable" : ""}`}>
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
                  setIsNextPressed={setIsNextPressed}
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
            <Route path="/thanks" element={<Thanks />} />
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

const Sidebar = ({ index }) => {
  const stepName = ["Your Info", "Select Plan", "Add-ons", "Summary"];

  return (
    <div className="sidebar">
      {stepName.map((stepname, i) => (
        <div className={`step-wrapper ${index === i ? "active" : ""}`} key={i}>
          <div className="nb">{i + 1}</div>
          <div className="text">
            <div className="step">Step {i + 1}</div>
            <div className="info">{stepname}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

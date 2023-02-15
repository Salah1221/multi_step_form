const Info = ({ isNextPressed, input, setInput }) => {
  const handleInputBlur = (e, i) => {
    let aux = [...input];
    aux[i] = e.target.value;
    setInput(aux);
  };
  const handleInputChange = (e, i) => {
    let aux = [...input];
    aux[i] = e.target.value;
    setInput(aux);
  };

  return (
    <div className="personal-info">
      <form action="">
        <div className={!input[0] && isNextPressed ? "empty" : ""}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            onBlur={(e) => handleInputBlur(e, 0)}
            onChange={(e) => handleInputChange(e, 0)}
            value={input[0]}
          />
        </div>
        <div className={!input[1] && isNextPressed ? "empty" : ""}>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            onBlur={(e) => handleInputBlur(e, 1)}
            onChange={(e) => handleInputChange(e, 1)}
            value={input[1]}
          />
        </div>
        <div className={!input[2] && isNextPressed ? "empty" : ""}>
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            id="number"
            placeholder="e.g. +1 234 567 890"
            onBlur={(e) => handleInputBlur(e, 2)}
            onChange={(e) => handleInputChange(e, 2)}
            value={input[2]}
          />
        </div>
      </form>
    </div>
  );
};

export default Info;

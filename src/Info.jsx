const Info = () => {
  return (
    <div className="personal-info">
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="e.g. Stephen King" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div>
          <label htmlFor="number">Phone Number</label>
          <input type="text" id="number" placeholder="e.g. +1 234 567 890" />
        </div>
      </form>
    </div>
  );
};

export default Info;

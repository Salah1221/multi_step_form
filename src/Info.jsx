const Info = () => {
  return (
    <div className="personal-info">
      <form action="">
        <label htmlFor="name" id="name">
          Name
        </label>
        <input type="text" id="name" placeholder="e.g. Stephen King" />
        <label htmlFor="email" id="email">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label htmlFor="number" id="number">
          Phone Number
        </label>
        <input type="text" id="number" placeholder="e.g. +1 234 567 890" />
      </form>
    </div>
  );
};

export default Info;

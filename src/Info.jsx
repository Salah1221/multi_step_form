import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="personal-info">
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="e.g. Stephen King" />
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label htmlFor="number">Phone Number</label>
        <input type="text" id="number" placeholder="e.g. +1 234 567 890" />
        <Link className="next">Next Step</Link>
      </form>
    </div>
  );
};

export default Info;

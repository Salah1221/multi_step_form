import thank_you from "./assets/images/icon-thank-you.svg";

const Thanks = () => {
  return (
    <div className="thanks">
      <div className="wrapper">
        <img src={thank_you} alt="" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Thanks;

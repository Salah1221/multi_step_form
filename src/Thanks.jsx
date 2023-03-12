import ProloadedImg from "./ProloadedImg";

const Thanks = ({ thank_you }) => {
  return (
    <div className="thanks">
      <div className="wrapper">
        <ProloadedImg src={thank_you} />
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

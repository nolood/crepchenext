import "./LoaderStyle.scss";

const Loader = () => {
  return (
    <div className="loader__wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;

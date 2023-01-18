import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div
      style={{ minHeight: "100%" }}
      className="w-100 h-100 d-flex justify-content-center flex-column align-items-center"
    >
      <h1 className="mb-4">Loading...</h1>
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingSpinner;

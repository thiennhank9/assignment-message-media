import Spinner from "react-bootstrap/Spinner";

export default function Spinners() {
  return (
    <div className="d-flex my-3 flex-grow-1 justify-content-center align-items-center">
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
}

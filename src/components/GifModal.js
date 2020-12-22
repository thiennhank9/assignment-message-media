import Modal from "react-bootstrap/Modal";

export default function GifModal(props) {
  const { src, name, ...restProps } = props;

  return (
    <Modal centered size="lg" {...restProps}>
      <Modal.Header closeButton>
        <Modal.Title>Gif</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={src} alt={name} className="w-100" />
      </Modal.Body>
    </Modal>
  );
}

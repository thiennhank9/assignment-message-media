/* eslint-disable react-hooks/exhaustive-deps */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GifItem from "../components/GifItem";
import Spinners from "../components/Spinners";
import GifModal from "../components/GifModal";

export default function GifsScreenView(props) {
  const {
    gifs,
    fetching,
    onClickGif,
    onLoadMore,
    modalVisible,
    onHideModal,
    selectedGif,
  } = props;

  return (
    <div className="screen">
      {/* Gifs */}
      <Container className="mt-2">
        <Row>
          {gifs.map((gif) => (
            <Col key={gif.id} xs={6} md={4} lg={3}>
              <GifItem gif={gif} onClick={onClickGif} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Load more button */}
      <div className="d-flex justify-content-center my-3">
        {fetching ? (
          <Spinners />
        ) : (
          <Button onClick={onLoadMore}>Load More</Button>
        )}
      </div>

      {/* Modal selected */}
      <GifModal
        show={modalVisible}
        onHide={onHideModal}
        src={selectedGif?.images?.original}
        name={selectedGif?.name}
      />
    </div>
  );
}

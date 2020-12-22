/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GifItem from "../components/GifItem";
import Spinners from "../components/Spinners";
import GifModal from "../components/GifModal";
import gifs from "../redux/Gifs";
import { fetchGifs } from "../redux/Gifs/gifsThunk";

const { selector } = gifs;

export default function GifsScreen() {
  const dispatch = useDispatch();
  const gifs = useSelector(selector.getGifs);
  const page = useSelector(selector.getPage);
  const pageSize = useSelector(selector.getPageSize);
  const fetching = useSelector(selector.getFetching);

  const [showModal, setShowModal] = useState(false);
  const [selectedGif, setSelectedGif] = useState(null);

  const onLoadMore = () => {
    dispatch(fetchGifs({ page: page + 1, pageSize }));
  };

  // Get gifs first time
  useEffect(() => {
    dispatch(fetchGifs({ page: 1, pageSize: 20 }));
  }, []);

  return (
    <div className="screen">
      {/* Gifs */}
      <Container className="mt-2">
        <Row>
          {gifs.map((gif, index) => (
            <Col key={index} xs={6} md={4} lg={3}>
              <GifItem
                gif={gif}
                onClick={() => {
                  setSelectedGif(gif);
                  setShowModal(true);
                }}
              />
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
        show={showModal}
        onHide={() => setShowModal(false)}
        src={selectedGif?.images?.original}
        name={selectedGif?.name}
      />
    </div>
  );
}

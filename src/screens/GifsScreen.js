/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    if (fetching) {
      return;
    }
    dispatch(fetchGifs({ page: page + 1, pageSize }));
  };

  return (
    <div className="screen">
      {/* Gifs */}
      <Container className="mt-2">
        <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore>
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
        </InfiniteScroll>
      </Container>

      {fetching && <Spinners />}

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

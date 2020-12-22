import { FaEye, FaComment, FaHeart, FaLink } from "react-icons/fa";

export default function GifInfo(props) {
  const { views, comments, likes } = props;

  return (
    <div className="gif-info-container">
      <FaLink />
      <div className="d-flex align-items-center">
        <FaEye className="m-1" />
        {views}
        <FaHeart className="m-1" />
        {comments}
        <FaComment className="m-1" />
        {likes}
      </div>
    </div>
  );
}

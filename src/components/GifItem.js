import Card from "react-bootstrap/Card";
import GifImage from "./GifImage";
import GifInfo from "./GifInfo";
import GifUser from "./GifUser";

export default function GifItem(props) {
  const { gif, onClick } = props;
  const {
    title,
    views,
    comments,
    likes,
    avatar,
    displayName,
    images: { small },
  } = gif;

  return (
    <div className="mt-3">
      <Card className="p-1">
        <GifImage src={small} alt={title} onClick={onClick} />
        <GifInfo views={views} comments={comments} likes={likes} />
      </Card>
      <GifUser avatar={avatar} name={displayName} />
    </div>
  );
}

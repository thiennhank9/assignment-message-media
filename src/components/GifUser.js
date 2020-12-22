export default function GifUser(props) {
  const { avatar, name } = props;

  return (
    <div className="d-flex mt-1 align-items-center">
      <img className="gif-avatar ml-1 mr-1" src={avatar} alt={name} />
      <span className="text-primary">{name}</span>
    </div>
  );
}

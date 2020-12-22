export default function GifImage(props) {
  const { src, alt, onClick, ...restProps } = props;

  return (
    <div className="gif-image-container">
      <img
        className="gif-image"
        src={src}
        onClick={onClick}
        alt={alt}
        {...restProps}
      />
    </div>
  );
}

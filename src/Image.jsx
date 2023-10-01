export default function Image({ image, num, images, setImage }) {
  return (
    <div onClick={() => setImage(images[num])}>
      <img src={image} alt="image" />
    </div>
  );
}

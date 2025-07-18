export default function Avatar({ imageUrl, alt }) {
  return (
    <img
      src={imageUrl}
      alt={alt}
      className="w-24 h-24 rounded-full border-2 border-blue-500"
    />
  );
}

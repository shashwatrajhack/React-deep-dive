export default function UserInfo({ name, bio }) {
  return (
    <div className="text-center mt-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
}

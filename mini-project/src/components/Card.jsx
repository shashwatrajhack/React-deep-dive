import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

export default function Card({ user }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-sm mx-auto mt-10">
      <Avatar imageUrl={user.imageUrl} alt={user.name} />
      <UserInfo name={user.name} bio={user.bio} />
    </div>
  );
}

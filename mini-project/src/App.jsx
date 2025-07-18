import Card from "./components/Card";

const userData = {
  name: "Shashwat Raj",
  bio: "Frontend Developer & Problem Solver",
  imageUrl: "https://backiee.com/wallpaper/serene-coding-sanctuary-in-anime-style/286741"
};

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Card user={userData} />
    </div>
  );
}

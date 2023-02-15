import "./App.css";
import Profile from "./profile/Profile";
import photo from "./photo.jpg";
const App = () => {
  const profile = {
    fullName: "Saif Soua",
    bio: "lorem lorem lorem lorem",
    profession: "student",
    foto: photo,
  };
  const handleName = (fullName) => alert("full name: ${fullName}");
  return (
    <div className="App">
      <Profile
        fullName={profile.fullName}
        bio={profile.bio}
        profession={profile.profession}
        handleName={handleName}
      >
        <img src={profile.foto} alt="" />
      </Profile>
    </div>
  );
};

export default App;

import BackToDashboard from "../components/backToDashboard";
import BodyProfile from "../components/user/bodyProfile";
import ProfilePicture from "../components/user/profilePicture";

export default function User() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <BackToDashboard />
      <div className="bg-white mx-40 p-8 rounded-lg shadow-md">
        <div className="text-3xl font-bold pb-4">Profile</div>
        <ProfilePicture />
        <BodyProfile />
      </div>
    </div>
  );
}

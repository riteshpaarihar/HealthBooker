import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth(); // Get user data from AuthContext

  if (!user) {
    return <div className="text-center text-red-500 text-xl">Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Profile</h2>
      <div className="space-y-3">
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined On:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Profile;

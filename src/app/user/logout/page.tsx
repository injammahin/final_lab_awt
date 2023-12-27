// pages/logout.tsx
import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

const LogoutPage: React.FC = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      // Perform logout logic (update auth context, clear tokens, etc.)
      await logout();
      // Redirect to the home page after logout
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error.message);
      // Handle logout error if necessary
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Logout Page</h1>
        <p className="text-gray-600 mb-8">Are you sure you want to logout?</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;

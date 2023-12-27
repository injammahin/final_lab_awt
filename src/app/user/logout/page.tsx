// pages/auth/LogoutPage.tsx
"use client";
import { useEffect } from "react";
import axios, { AxiosError } from "axios"; // Import AxiosError from axios
import { useRouter } from "next/navigation";

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Call your server-side logout endpoint
        await axios.post("http://localhost:2000/auth/signout");

        // Clear local storage or any other client-side tokens/session data
        localStorage.removeItem("id");

        // Redirect to the home page after logout
        router.push("/");
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          // Handle AxiosError specifically
          console.error("Error logging out:", error.message);
        } else {
          // Handle other types of errors
          console.error("Unknown error logging out:", error);
        }
        // Handle logout error if necessary
      }
    };

    // Call the logout function when the component mounts
    handleLogout();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Logging out...
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;

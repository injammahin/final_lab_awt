"use client";
import { useState, useEffect } from "react";

interface UserDetails {
  description: string;
  payee: string;
  category: string;
  spend: string;
  received: string;
  userId: string;
}

function UserProfile() {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:2000/connect/2");
        const data = await response.json();
        setUserDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!userDetails) return <p>No user data</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <p className="mb-2">Description: {userDetails.description}</p>
        <p className="mb-2">Payee: {userDetails.payee}</p>
        <p className="mb-2">Category: {userDetails.category}</p>
        <p className="mb-2">Spend: {userDetails.spend}</p>
        <p className="mb-2">Received: {userDetails.received}</p>
        <p className="mb-2">User ID: {userDetails.userId}</p>
      </div>
    </div>
  );
}

export default UserProfile;

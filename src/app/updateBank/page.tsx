// pages/connect/update/[id].tsx
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const UpdateUser = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState({
    description: "",
    payee: "",
    category: "",
    spend: "",
    received: "",
    userId: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id && router.isReady && typeof window !== "undefined") {
          const response = await axios.get(
            `http://localhost:2000/connect/${id}`
          );
          const userData = response.data;
          setUser(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id, router.isReady]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:2000/connect/${id}`,
        user
      );

      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <div>
      <h1>Update User Information</h1>
      <label>
        Description:
        <input
          type="text"
          value={user.description}
          onChange={(e) => setUser({ ...user, description: e.target.value })}
        />
      </label>
      {/* Repeat similar input fields for other properties */}
      <br />
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
};

export default UpdateUser;

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const UpdateUserProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/connect/${id}`);
        setDescription(response.data.description);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:2000/connect/${id}`, {
        description,
      });

      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
};

export default UpdateUserProfile;

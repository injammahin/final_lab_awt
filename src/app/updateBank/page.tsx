// pages/UpdateUserProfile.jsx
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const UpdateUserProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const [description, setDescription] = useState("");
  // Add other state variables

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/connect/${id}`);
        // Set state variables with fetched data
        setDescription(response.data.description);
        // Set other variables
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
      // Make a request to update the user information
      const response = await axios.put(`http://localhost:2000/connect/${id}`, {
        description,
        // Add other variables
      });

      // Handle the response accordingly
      console.log("User updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <div>
      {/* Form for updating user details */}
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
};

export default UpdateUserProfile;

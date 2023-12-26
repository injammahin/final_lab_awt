// pages/registrations.tsx
"use client";
import axios from "axios";
import React, { useState } from "react";

const ConnectBank = () => {
  const [description, setDescription] = useState("");
  const [payee, setPayee] = useState("");
  const [category, setCategory] = useState("");
  const [spend, setSpend] = useState("");
  const [received, setReceived] = useState("");
  const [userId, setUserId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    try {
      // Basic form validation
      if (
        !description ||
        !payee ||
        !category ||
        !spend ||
        !received ||
        !userId
      ) {
        setErrorMessage("All fields are required.");
        setSuccessMessage("");
        return;
      }

      const response = await axios.post("http://localhost:2000/connect/bank", {
        description,
        payee,
        category,
        spend,
        received,
        userId,
      });

      console.log(response.data);
      setSuccessMessage("Signup successful");
      setErrorMessage("");
    } catch (error) {
      console.error("Error submitting connect bank details", error);
      setErrorMessage("Failed to signup. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <label className="block mb-2">
        Description:
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        Payee:
        <input
          onChange={(e) => setPayee(e.target.value)}
          type="text"
          name="payee"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        Category:
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          name="category"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        Spend:
        <input
          onChange={(e) => setSpend(e.target.value)}
          type="text"
          name="spend"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        Received:
        <input
          onChange={(e) => setReceived(e.target.value)}
          type="text"
          name="received"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </label>
      <label className="block mb-2">
        UserID:
        <input
          onChange={(e) => setUserId(e.target.value)}
          type="text"
          name="userId"
          className="w-full border border-gray-300 p-2 rounded"
        />
      </label>
      <button
        className="bg-blue-400 text-white py-2 px-4 rounded w-full mt-4 hover:bg-blue-600"
        onClick={handleSubmit}
      >
        submit
      </button>
      {successMessage && (
        <p className="text-green-500 mt-2">{successMessage}</p>
      )}
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default ConnectBank;

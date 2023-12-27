"use client";
import React, { useState } from "react";
import axios from "axios";

const FileUploadComponent = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      // Replace 'http://localhost:2000/payment/payment-slip/upload/10' with your backend upload endpoint
      const response = await axios.post(
        "http://localhost:2000/payment/payment-slip/upload/10",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  );
};

export default FileUploadComponent;

"use client";
import React, { useState } from "react";
import axios from "axios";

const FileUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [uploadedFilePath, setUploadedFilePath] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        `http://localhost:2000/payment/payment-slip/upload//${userId}`,
        userData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded successfully:", response.data);

      // Set the uploaded file path for display
      setUploadedFilePath(response.data.filePath);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleShowFile = () => {
    // Open the uploaded file in a new window or tab
    window.open(uploadedFilePath, "_blank");
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
      {uploadedFilePath && (
        <div>
          <button onClick={handleShowFile}>Show File</button>
        </div>
      )}
    </div>
  );
};

export default FileUploadComponent;

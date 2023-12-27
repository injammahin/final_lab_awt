// pages/upload.tsx
"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      console.error("Invalid file format. Please select a PDF file.");
    }
  };

  const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected for upload");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("payslip", file);

      const response = await fetch(
        "http://localhost:3000/payment/payment-slip/upload/10",
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText: string = await response.text();
        throw new Error(
          `Upload failed with status ${response.status}: ${errorText}`
        );
      }

      console.log("File uploaded successfully");
    } catch (error: any) {
      console.error("Error during file upload:", error.message);
    }
  };

  return (
    <div>
      <h1>File Upload Page</h1>
      <form onSubmit={handleUpload}>
        <div>
          <label htmlFor="fileInput">Select PDF File:</label>
          <input
            type="file"
            id="fileInput"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button type="submit">Upload</button>
        </div>
      </form>
    </div>
  );
};

export default UploadPage;

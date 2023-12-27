"use client";
import React from "react";

export default function Home() {
  const handleClick = async () => {
    const response = await fetch("http://localhost:2000/pdf");

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "filename.pdf";
    link.click();
  };

  return (
    <button type="button" onClick={handleClick}>
      Download pdf
    </button>
  );
}

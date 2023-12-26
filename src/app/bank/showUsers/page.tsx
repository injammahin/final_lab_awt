// pages/UsersPage.tsx
"use client";
import { useEffect, useState } from "react";

interface UserDetails {
  id: number;
  description: string;
  payee: string;
  category: string;
  spend: string;
  received: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<UserDetails[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:2000/connect/all-users");
        const data = await response.json();
        setUsers(Array.isArray(data) ? data : []); // Check if data is an array
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      <ul>
        {users.map((userDetails) => (
          <li key={userDetails.id}>
            {/* Display user information here */}
            <p>{`ID: ${userDetails.id}, Description: ${userDetails.description}, Payee: ${userDetails.payee}, Category: ${userDetails.category}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;

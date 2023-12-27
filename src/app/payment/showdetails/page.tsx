// pages/auth/ProfilePage.tsx
"use client";
import { useState, useEffect } from "react";
import axios from "axios";

interface UserDetails {
  id: number;
  name: string;
  phone: string;
  email: string;
  companyName: string;
  Connect_bank: any[]; // You need to define the actual type for Connect_bank
  Payments: any[]; // You need to define the actual type for Payments
}

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:2000/auth/profile", {
          headers: {
            id: `${localStorage.getItem("id")}`,
          },
        });
        const userData = response.data as UserDetails;
        console.log("ok", userData);
        setUserDetails(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            payment details
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          {/* <p>ID: {userDetails.id}</p>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
          <p>Company Name: {userDetails.companyName}</p> */}
          {/* Additional details based on your actual user data structure */}
          {/* Example for Connect_bank */}

          {/* /////////// */}
          {/* {userDetails.Connect_bank && (
            <div>
              <h3>bank details:</h3>
              {userDetails.Connect_bank.map((connect) => (
                <div key={connect.id}>
                  <p>category: {connect.category}</p>
                  <p>description: {connect.description}</p>
                  <p>payee: {connect.payee}</p>
                  <p>received: {connect.received}</p>
                  <p>spend: {connect.spend}</p>
                  <p>userId: {connect.userId}</p>
                </div>
              ))}
            </div>
          )} */}

          {/* Example for Payments */}
          {userDetails.Payments && (
            <div>
              {userDetails.Payments.map((payment) => (
                <li key={payment.id}>
                  <div className="bg-slate-400 shadow-xl rounded-lg pl-2">
                    <p className="py-1 font-semibold">
                      Payment Way: {payment.paymentway}
                    </p>
                    <p className="py-1 font-semibold">
                      reference: {payment.reference}
                    </p>
                    <p className="py-1 font-semibold">
                      Amount: {payment.amount}
                    </p>
                    <p className="py-1 font-semibold">due: {payment.due}</p>
                    {/* Include other properties */}
                  </div>
                </li>
              ))}
            </div>
          )}
        </div>
        <a href="user/editUser" className=" btn text-blue-500 hover:underline">
          Edit Profile
        </a>
      </div>
    </div>
  );
};

export default ProfilePage;

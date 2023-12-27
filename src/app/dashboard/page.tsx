// components/Sidebar.jsx
import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen">
      <div className="p-4">Your Logo</div>
      <nav className="mt-4">
        <Link
          href="/dashboard"
          className="block py-2 px-4 text-white hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link
          href="/user/profile"
          className="block py-2 px-4 text-white hover:bg-gray-700"
        >
          View Profile
        </Link>
        <Link
          href="/bank/connect"
          className="block py-2 px-4 text-white hover:bg-gray-700"
        >
          Connect Bank
        </Link>
        <Link
          href="/payment/form"
          className="block py-2 px-4 text-white hover:bg-gray-700"
        >
          Accept Payment
        </Link>
        <Link
          href="/user/logout"
          className="block py-2 px-4 text-white hover:bg-gray-700"
        >
          Log Out
        </Link>
      </nav>
    </aside>
  );
};

export default Dashboard;

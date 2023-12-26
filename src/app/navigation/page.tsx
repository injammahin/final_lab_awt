// Navber.jsx
import Link from "next/link";
import page from "../page";
const Navber = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <div className="hidden lg:flex items-center space-x-1">
            <a
              href="/pages"
              className="bg-orange-500 flex items-center text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Home
            </a>
            <Link
              href="/login"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Sign In
            </Link>
            <Link
              href="/registration"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Sign Up
            </Link>
            <Link
              href="/bank/connect"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              connect Bank
            </Link>
            <Link
              href="/"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Logout
            </Link>

            <div className="group px-96 inline-block relative">
              <button className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black ">
                User Actions
              </button>
              <ul className="dropdown-menu absolute hidden bg text-gray-700 pt-1 group-hover:block">
                <li className="nav-link bg-orange-600 rounded">
                  <Link href="/update">Update</Link>
                </li>
                <li className="nav-link bg-orange-600 rounded">
                  <Link href="/delete">Delete</Link>
                </li>
                <li className="nav-link bg-orange-600 rounded">
                  <Link href="/edit">Edit</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;

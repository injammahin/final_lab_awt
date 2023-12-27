// Navber.jsx
import Link from "next/link";
import page from "../page";
const Navber = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <div className="hidden lg:flex items-center space-x-1">
            {/* <a
              href="/pages"
              className="bg-orange-500 flex items-center text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Home
            </a> */}
            <Link
              href="/user/login"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Sign In
            </Link>
            <Link
              href="/user/registration"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Sign Up
            </Link>
            {/* <Link
              href="/bank/connect"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              connect Bank
            </Link> */}
            <Link
              href="/"
              className="bg-orange-500 text-white rounded-full px-4 py-2 hover:bg-orange-600 hover:text-black hover:underline"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
///////

// {
//   userDetails.Connect_bank && (
//     <div>
//       <h3>Connect Bank Details:</h3>
//       {userDetails.Connect_bank.map((bank) => (
//         <div key={bank.id}>
//           <p>Description: {bank.description}</p>
//           {/* Include other properties */}
//         </div>
//       ))}
//     </div>
//   );
// }

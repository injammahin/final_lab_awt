"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "./navigation/page";
import Footer from "./footer/page";
import Dashboard from "./dashboard/page";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [logedIn, setlogedIn] = useState(null);
  useEffect(() => {
    setlogedIn(localStorage.getItem("id"));
    console.log(localStorage.getItem("id"));
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          {/* <Dashboard /> */}
          {/* {logedIn ? <Dashboard /> : null} */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* <Navber /> */}
            {logedIn ? <Navber /> : null}

            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 ">
              {children}
              <Footer />
            </main>
          </div>
        </div>
      </body>
    </html>

    //   </html>
  );
  // return (
  //   <html lang="en">
  //     <body className={inter.className}>
  //       <div className="flex h-screen bg-gray-100">
  //         <Dashboard />
  //         <Navber />
  //         {children}
  //         <Footer />
  //       </div>
  //     </body>
  //   </html>
  // );
}

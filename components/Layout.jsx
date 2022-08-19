import React from "react";
import Image from "next/image";
const Layout = ({ children }) => {
  return (
    <div className="grid layout h-screen">
      <nav className="bg-blue-900 top-0 text-white px-6 py-2 sticky rounded-lg flex justify-between items-center my-2 mx-2">
        <h3 className="uppercase font-medium text-xl ">Rhaul</h3>
        <Image
          src="/images/me.jpg"
          alt="rahul"
          height={40}
          width={40}
          className="rounded-full  object-cover bg-white"
        />
      </nav>
      <main className="px-10">{children}</main>
    </div>
  );
};

export default Layout;

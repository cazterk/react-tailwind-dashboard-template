import React from "react";

const Header = () => {
  return (
    <div className="flex  w-full  ">
      <form action="" className=" flex justify-center w-full">
        <input
          type="text"
          placeholder="Search"
          autoComplete="off"
          aria-label="Search"
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 focus:shadow-outline-blue w-4/12"
        />
      </form>
    </div>
  );
};

export default Header;

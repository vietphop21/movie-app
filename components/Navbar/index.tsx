import React from "react";
import InputSearch from "../InputSearch";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img
            src="https://phimmoiyyy.net/wp-content/uploads/2023/03/phimmoi.png"
            alt="No img"
          />
        </div>
        <InputSearch />
      </header>
    </>
  );
};

export default Navbar;

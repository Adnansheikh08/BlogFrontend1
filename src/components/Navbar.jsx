import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border p-3 flex justify-between">
     <Link to="/"> <div className="font-bold">BlogApp</div></Link>
      <div className="flex gap-5">
      <Link to="/"> <div className="text-sm">Home</div></Link>
        <Link to="/login">
          <div className="text-sm">Login</div>
        </Link>
        <div className="text-sm">Logout</div>
        <Link to="/my-profile">
          <div className="text-sm">My account</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link ,Navigate,useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function logout(){
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <div className="border p-3 flex justify-between">
     <Link to="/"> <div className="font-bold">BlogApp</div></Link>
      <div className="flex gap-5">
      <Link to="/"> <div className="text-sm">Home</div></Link>
        <Link to="/login">
          <div className="text-sm">Login</div>
        </Link>
        <Link to="/login">
        <div className="text-sm" onClick={()=>logout()}>Logout</div>
        </Link>
        <Link to="/my-profile">
          <div className="text-sm">My account</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

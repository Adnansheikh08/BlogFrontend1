import React from "react";
import { Link ,Navigate,useNavigate } from "react-router-dom";
import { toast } from "sonner"

function Navbar() {
  const navigate = useNavigate();
  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem("id")
    toast.success("Logged off")
    navigate('/login')
  }
  const iid=localStorage.getItem("id") //we need to see this
  return (
    <div className="border p-3 flex justify-between">
     <Link to="/"> <div className="font-bold">Blogger</div></Link>
      <div className="flex gap-5">
      <Link to="/"> <div className="text-sm">Home</div></Link>
      {
          (!iid) ? (
            <Link to="/login">
              <div className="text-sm">Login</div>
            </Link>
          ) : (
            <>
              <Link to="/my-profile">
                <div className="text-sm">My account</div>
              </Link>
              <Link to="/login">
                <div className="text-sm" onClick={() => logout()}>Logout</div>
              </Link>
            </>
          )
        }
        {
          (!iid) ? (
            <Link to="/signup" style={{ marginLeft: 5 }}>
              <div className="text-sm">Sign up</div>
            </Link>
          ) : ""
        }
      </div>
    </div>
  );
}

export default Navbar;

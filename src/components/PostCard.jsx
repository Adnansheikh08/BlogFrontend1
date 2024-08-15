import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Menu from "./Menu";
import { Link } from "react-router-dom";
function PostCard(data) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="border mt-4 p-3 rounded-md relative">
      {menu ? <Menu /> : ""}

      <div className="font-bold flex items-center justify-between top-0">
        <Link to="/profile">{data.name}</Link>
        <BsThreeDots
          className="cursor-pointer"
          onClick={() => setMenu(!menu)}
        />
      </div>
      <div className="text-xs text-gray-500">{data.date}</div>

      <div className="text-sm mt-4">{data.text}</div>
    </div>
  );
}

export default PostCard;

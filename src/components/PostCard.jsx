import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Menu from "./Menu";
import { Link } from "react-router-dom";
function PostCard(data) {
  const [menu, setMenu] = useState(false);
  const [showFullText, setShow] = useState(false)
  return (
    <div className="border mt-4 p-3  rounded-md relative ">
      {menu ? <Menu id={data.pid} /> : ""}

      <div className="font-bold flex items-center justify-between top-0">
        <Link to="/profile">{data.name}</Link>
        {
          localStorage.getItem("id")==data.id && <BsThreeDots
          className="cursor-pointer"
          onClick={() => setMenu(!menu)}
        />
        } 
        
      </div>
      <div className="text-xs text-gray-500">{data.date}</div>

      <div className="text-sm mt-4">
        {showFullText ? data.text : data.text.length > 200 ? data.text.substring(0, 200) + "..." : data.text}
        {data.text.length > 200 && !showFullText ? (
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => setShow(true)}
          >
            Read more
          </span>
        ) : (
          showFullText && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setShow(false)}
            >
              Show less
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default PostCard;

import React, { useEffect, useState } from "react";
import Postcard from "../components/PostCard";
import { BsPlusCircle, BsX } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
function Home() {
  const [create, setCreate] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [userName, setUserName] = useState("")
  const [isButtonClicked, setIsButtonClicked] = useState(false);
 
  // const user = JSON.parse(localStorage.getItem('user'));
 const navigate=useNavigate();
 function upload(){
  // If the button has already been clicked, do nothing
fetch("http://localhost:5050/create-blog",{
  method: "POST",
  headers: {
      "Content-Type": "application/json",
      "authorization":"Bearer "+localStorage.getItem("token")
      },
      body: JSON.stringify({
        content: newPost,
        }),
        })
        .then((res) => res.json())
        .then(data => {
          if(data.success)
          {
            setCreate(false)
            navigate(0);
           324
          }
          else{
            toast.error(data.error)
          }
        })
        .catch(error => console.error(error))
  }
  useEffect(() => {
    if(!localStorage.getItem("token"))
    {
      navigate("/login");
    }
    fetch("http://localhost:5050/all-blogs", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        
      });
  }, []);
  return (
    <>
      {create && (
        <div className="fixed inset-0 glass z-50 flex justify-center items-center">
          <div className="w-[400px] bg-white shadow-lg rounded-md">
            <div className="font-bold flex justify-between items-center p-3 border-b">
              Create a blog
              <BsX
                className="text-xl cursor-pointer"
                onClick={() => setCreate(false)}
              />
            </div>
            <div className="p-4">
              <div className="text-sm">
                Posting as{" "}
                <span className="font-medium mt-4">Belal </span>
              </div>
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="5"
                className="w-full border rounded mt-4 p-2"
                placeholder="Write your blog here"
              ></textarea>
             <button onClick={() => { upload() }} className="bg-black rounded-md mt-4 text-white px-3 py-1 text-sm">
  Post blog
</button>
            </div>
          </div>
        </div>
      )}
      <div className="w-[400px] mx-auto">
        <div
          onClick={() => setCreate(true)}
          className="hover:bg-black hover:text-white cursor-pointer flex justify-between text-sm items-center border rounded-md p-2 mt-4"
        >
          Create blog <BsPlusCircle />
        </div>
        {posts.map(function (item) {
          return (
            <Postcard
              name={item.user.name}
              date={item.date}
              text={item.content}
              id={item.user._id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;

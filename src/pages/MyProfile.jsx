import React, { useEffect, useState } from "react";
import { BsPersonCircle, BsX } from "react-icons/bs";
import PostCard from "../components/PostCard";

const MyProfile = () => {
  const [edit, setEdit] = useState(false);
  const [userData, setUserData]= useState({})
  const [name, setName]= useState("")
  const [posts, setPosts]= useState([])
  
  useEffect(() => {
    fetch("http://localhost:5050/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      // .then((data) => console.log((data)))
      .then((data) => setUserData(data.user))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if(!localStorage.getItem("token"))
    {
      navigate("/login");
    }
    fetch("http://localhost:5050/my-posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": "Bearer " + localStorage.getItem("token"),
        },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })
      .catch((err)=>console.log(err));
  }, []);

  return (
    <>
      {edit && (
        <div className="fixed inset-0 glass z-50 flex justify-center items-center">
          <div className="w-[400px] p-4 bg-white shadow-lg rounded-md">
            <div className="font-bold flex justify-between items-center">
              Edit your profile{" "}
              <BsX
                className="text-xl cursor-pointer"
                onClick={() => setEdit(false)}
              />
            </div>
            <input
              type="text"
              className="w-full rounded border p-2 mt-4"
              placeholder="Full name"
            />
            <button className="bg-black text-white rounded-md text-sm p-2 mt-3">
              Update
            </button>
          </div>
        </div>
      )}
      <div className="w-[400px] mx-auto container">
        <div className="border-b pb-8">
          <div className="flex justify-center mb-5 mt-6">
            <BsPersonCircle className="text-6xl" />
          </div>
          <div className="text-center text-2xl font-bold">{userData.name}</div>
          <div className="text-center text-sm text-gray-500">
            {userData.email}
          </div>
          <div className="flex justify-center mt-5">
            <button
              onClick={() => setEdit(true)}
              className="text-sm border px-3 py-1 rounded-md bg-black text-white"
            >
              Edit profile
            </button>
          </div>
        </div>
        {posts.map(function (item) {
          return (
            <PostCard
              name={item.user.name}
              date={item.date}
              text={item.content}
            />
          );
        })}
      </div>
    </>
  );
  };
export default MyProfile;

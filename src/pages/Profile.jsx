import React from "react";
import PostCard from "../components/PostCard";
import { BsPersonCircle, BsShare } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="w-[400px] mx-auto container">
      <div className="border-b pb-8">
        <div className="flex justify-center mb-5 mt-6">
          <BsPersonCircle className="text-6xl" />
        </div>
        <div className="text-center text-2xl font-bold">Mohd Belal Naim</div>
        <div className="text-center text-sm text-gray-500">
          contactbelalnaim@gmail.com
        </div>
        <div className="flex justify-center mt-5">
          <button className="text-sm border px-3 py-1 flex items-center gap-3 rounded-md bg-black text-white">
            Share profile <BsShare />
          </button>
        </div>
      </div>

      {"abcdefg".split("").map(function (item) {
        return (
          <PostCard
            name={"Mohd Belal Naim"}
            date={"11-1-2024"}
            text={"This is a post"}
          />
        );
      })}
    </div>
  );
};

export default Profile;

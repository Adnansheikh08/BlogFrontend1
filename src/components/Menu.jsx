import React from 'react'

function Menu() {
  function deleteblog(){
    fetch("http://localhost:5050/delete-blog",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: localStorage.getItem("id"),
          }),
          })
          .then((res) => res.json())
          .then(data => {
            if(data._id)
            {
              // console.log(data._id)
              localStorage.removeItem("id",data._id);
              navigate("/");
              toast.success('Blog deleted')
              }
              else{
                toast.error('Invalid Credentials')
                }
                })
  }
  return (
    <div className="border rounded text-sm absolute bg-white right-3 top-9 shadow-2xl">
      <button onClick={()=>deleteblog()} className="p-2 border-b">Edit blog</button>
      <button className="p-2">Delete blog</button>
    </div>
  );
}

export default Menu
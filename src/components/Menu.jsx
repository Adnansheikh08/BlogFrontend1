import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
function Menu(props) {
  console.log(props.id)
  const navigate = useNavigate();
  function deleteblog(){
    
    fetch(`http://localhost:5050/delete-blog/${props.id}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
    })
    .then((res) => res.json())
    .then(data => {
      
      if(data.success) {
       
        navigate("/");
        toast.success('Blog deleted');
      } else {
        toast.error('Invalid Credentials');
      }
    })
    .catch((error) => {
      toast.error('Error deleting blog');
      console.error(error);
    });
  }

  return (
    <div className="border rounded text-sm absolute bg-white right-3 top-9 shadow-2xl">
      <button className="p-2 border-b">Edit blog</button>
      <button  onClick={()=>deleteblog()} className="p-2">Delete blog</button>
    </div>
  );
}

export default Menu
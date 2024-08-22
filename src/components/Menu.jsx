import React ,{useState} from 'react'
import { useNavigate  } from 'react-router-dom';
import { BsPlusCircle, BsX } from "react-icons/bs";
import { toast } from 'sonner';
function Menu(props) {
  const [update, setUpdate] = useState(false)
  const [newUpdate, setNewUpdate] = useState("")
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
        navigate(0)
      } else {
        toast.error('Invalid Credentials');
      }
    })
    .catch((error) => {
      toast.error('Error deleting blog');
      console.error(error);
    });
  }
  function updateblog(){
    fetch(`http://localhost:5050/update-post/${props.id}`,{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: newUpdate,
            }),
            })
            .then((res) => res.json())
            .then(data => {
              if(data.success)
              {
                setUpdate(false)
                toast.success("Updated Successfully")
                // navigate(0)
              }
              else{
                toast.error(data.error)
              }
            })
            .catch((error) => {
              toast.error('Error updating blog'); 
            })
            .finally(() => {
              navigate(0);
            }
            );

      }

  return (
    update ? (
      <div className="fixed inset-0 glass z-50 flex justify-center items-center ">
        <div className="w-[400px] bg-white shadow-lg rounded-md">
          <div className="font-bold flex justify-between items-center p-3 border-b">
            Update your Blog
            <BsX
              className="text-xl cursor-pointer"
              
            />
          </div>
          <div className="p-4">
            <textarea
              value={newUpdate}
              onChange={(e) => setNewUpdate(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="5"
              className="w-full border rounded mt-4 p-2"
              placeholder="Update your blog here"
            ></textarea>
           <button onClick={()=>updateblog()} className="bg-black rounded-md mt-4 text-white px-3 py-1 text-sm">
Update blog
</button>
           <button onClick={()=>setUpdate(false)}  className="bg-black rounded-md mt-4 ml-2 text-white px-3 py-1 text-sm">
Cancle
</button>
          </div>
        </div>
      </div>
    ) : (
      <div className="border rounded text-sm absolute bg-white right-3 top-9 shadow-2xl">
        <button onClick={()=>setUpdate(true)} className="p-2 border-b">Edit blog</button>
        <button onClick={deleteblog} className="p-2">Delete blog</button>
      </div>
    )
  );
}

export default Menu
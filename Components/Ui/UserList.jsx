import { useEffect, useState } from 'react';

import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
// import Delete_popup from "../reuse/Delete_popup";
import Link from "next/link";
import { Player, Controls } from '@lottiefiles/react-lottie-player';


export default function userList() {

  const [data,setData]=useState([])
  const [Loading, setLoading]=useState(true)

  useEffect(()=>{



    async function fetchData() {
      const Url='http://localhost:4000/api/students';
      try{
        const res= await fetch(Url);
        const result = await res.json()
        setData(result)
        setLoading(false)

      } catch(err){
        setLoading(false)
      }
      
    }
    fetchData()
    
  },[]);

  if (Loading) return (
<>
    <Player  autoplay src={"https://lottie.host/b6a4b590-3aad-4e19-824b-415b746725cb/AKNtuxUUu5.json"} style={{height:"50px", width:"50px", marginTop:"100px" }} loop >
<p className='text-center italic animate-pulse' >Please Wait...</p>

    </Player>
    
</>
    
  )

  // Handle delete
  
  
    
  
  return (
    <section className="p-4 ">
      <table className=" border-collapse w-full my-6  ">
        <thead className="bg-gray-300 h-[80px]">
          <tr>
            <th>Sl no.</th>
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Class</th>
            <th>Roll No.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="font-medium">
          {
            
            data.map((item, index)=>(
            
            <tr key={item.id} className='text-center h-[40px] '>


          
            

              <td>{index + 1}</td>
            <td>{item.fullName}</td>
            <td>{item.fatherName}</td>
            <td>{item.motherName}</td>
            <td>{item.Class}</td>
            <td>{item.rollNumber}</td>
            <td className=" ">
              <Link href={`/Userdetails?id=${item._id}`} className="cursor-pointer inline-block mr-3  ">
                <FiEdit color="blue" title="Edit"
                  className="active:scale-110"
                  />
              </Link>
              <span className="cursor-pointer  inline-block">
                <RiDeleteBin6Line
                
                  color="red"
                  title="Delete"
                  className="active:scale-110"
                  
                  />
              </span>
            </td>
          </tr>
))}
        </tbody>
      </table>
    </section>
  );
}

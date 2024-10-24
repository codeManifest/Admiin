import dynamic from "next/dynamic";
import React, { useState } from "react";
const Adduserr = dynamic(() => import("@/Components/Ui/Adduser"));
const UserList = dynamic(() => import("@/Components/Ui/UserList"));
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiUserList } from "react-icons/pi";



export default function User() {
  const [ActiveComp, setActivecomp] = useState("UserList");
  const compOutput = () => {
    switch (ActiveComp) {
      case "Adduser":
        return <Adduserr />;

        break;
      

      default:
        return <UserList />;
        break;
    }
  };
  
  return (
    <section>
        
      <div className="cursor-pointer  flex  px-5 items-center gap-2 h-[80px] bg-gray-200">
        {" "}
        <span onClick={()=> setActivecomp('Adduser')} className={`py-2 px-3 bg-white cursor-pointer active:bg-blue-200 transition-all rounded-lg text-black ${ActiveComp === 'Adduser' ? 'text-blue-600' : ''}  `}>
        <AiOutlineUsergroupAdd title="Add Students" />

        </span>{" "}
        <span onClick={()=> setActivecomp('UserList')} className={`py-2 px-3 bg-white rounded-lg  active:bg-blue-200 transition-all text-black ${ActiveComp === 'UserList' ? 'text-blue-600' : ''} `}>
        <PiUserList title="User list" />

        </span>{" "}
      </div>
      {/* comp load */}
      <div> {compOutput()} </div>
    </section>
  );
}

'use client';
import React, { useState } from 'react';
import Button from "../reuse/Button";
import Inputbox from "../reuse/Inputbox";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";



export default function Adduser() {
//   --------------------------


const [formdata, setFormdata] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    Class:'',
    rollNumber:'',
    C_Section:'',
    Addressline1:'',
    Addressline2:'',
    Pin:'',
    District:'',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ApiUrl = 'http://localhost:4000/api/student/studentRecord';

    try {
      const response = await fetch (ApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong!');
      }

      console.log(result);

      // Reset the form data
      setFormdata({
        
        fullName: '',
    fatherName: '',
    motherName: '',
    Class:'',
    rollNumber:'',
    C_Section:'',
    Addressline1:'',
    Addressline2:'',
    Pin:'',
    District:'',
      });
      

      setError(null); // Clear any previous errors
      setSuccess('Data Saved!'); // Set success message
    } catch (err) {
      setError(err.message);
      setSuccess(null); // Clear any previous success messages
    }}













//   --------------------------

  return (
    <div className="h-screen p-4">
       
      <form action="" onSubmit={handleSubmit}>
        <h1 className="font-semibold text-xl my-3 text-gray-800 py-2 bg-slate-100 px-2">
          Student Details :{" "}
        </h1>
        <div className="flex gap-2 justify-center my-5">
          <Inputbox
            type="text"
            Placeholder="Enter your Full Name "
            label="Student Name"
            name="fullName"
            onChange={handleChange}
            value={formdata.fullName}

          />
          <Inputbox
            type="text"
            Placeholder="Enter Your father name"
            label="Father Name"
            name="fatherName"
            onChange={handleChange}
            value={formdata.fatherName}
            
          />
          <Inputbox
            type="text"
            Placeholder="Enter your Mother Name"
            label="Mother Name"
            name="motherName"
            onChange={handleChange}
            value={formdata.motherName}
          />
        </div>
        <h1 className="font-semibold text-xl my-3 text-gray-800 py-2 bg-slate-100 px-2">
          Student Class Details :{" "}
        </h1>
        <div className="flex gap-2 justify-center mt-6">
          <Inputbox 
          type="text" 
          Placeholder="Enter your class" 
          label="Class"
          name="Class"
            onChange={handleChange}
            value={formdata.Class}
          
          
          />
          <Inputbox
            type="number"
            Placeholder="Enter your RollNumber"
            label="Roll number"
            name="rollNumber"
            onChange={handleChange}
            value={formdata.rollNumber}
          />
          <Inputbox
            type="text"
            Placeholder="Enter your Section"
            label="Section"
            name="C_Section"
            onChange={handleChange}
            value={formdata.C_Section}
          />
        </div>
        <h1 className="font-semibold text-xl my-3 text-gray-800 py-2 bg-slate-100 px-2">
          Student Address :{" "}
        </h1>
        <div className="flex gap-2 justify-center mt-6">
          <Inputbox
            type="text"
            Placeholder="Address line 1"
            label="Address line 1"
            name="Addressline1"
            onChange={handleChange}
            value={formdata.Addressline1}
          />
          <Inputbox
            type="text"
            Placeholder="Address line 2"
            label="Address line 2"
            name="Addressline2"
            onChange={handleChange}
            value={formdata.Addressline2}
          />
          <Inputbox 
          type="number"
           Placeholder="Enter your Pin" 
           label="Pin"
           name="Pin"
            onChange={handleChange}
            value={formdata.Pin}
            />

          <Inputbox
            type="text"
            Placeholder="Enter your District"
            label="District"
            require="true"
            name="District"
            onChange={handleChange}
            value={formdata.District}
          />
        </div>
        <div className="flex justify-center items-center mt-7">
          <Button btn="Submit" />
        </div>
      </form>
<div >
{error && <div className='flex gap-2 items-center justify-center ' >
    <IoIosCloseCircle size={20} color='red' />

 <p className="text-red-500 text-center text-text-xl font-semibold">{error}</p>

</div> }


{success && 

<div className='flex gap-2 items-center justify-center'  > 
    <IoIosCheckmarkCircle  size={20} color='green' />
<p className="text-green-500 text-center text-xl font-semibold ">{success}</p>

</div>
}
</div>
    </div>
  );
}

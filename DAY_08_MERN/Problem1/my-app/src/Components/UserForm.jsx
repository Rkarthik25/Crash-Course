import React from "react";
import { useRef } from "react";
import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const ref = useRef(null);
  const [nameError, setNameError] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    // if (e.target.value.length < 3) {
    //   setNameError("Name must be atleast 3 characters long");
    // } else {
    //   setNameError("");
    // }
  };
  const handleSubmit=()=>{
    if (name.length< 3) {
        setNameError("Name must be atleast 3 characters long");
      } else {
        setNameError("");
      }
    const emailValue=ref.current.value
    console.log("Name:",name)
    console.log("Email: ",emailValue)
  }

  return (
    <div>
      <h1>User Form</h1>
      <div>
        <label>User's Name: </label>
        <input type="text" value={name} onChange={handleChange} />
        <br />
        {nameError!=="" ? "Name Should be atleast 3 characters" : ""}
      </div>
      <div>
        <label>Email :</label>
        <input type="text" ref={ref}  />
      </div>
      <button onClick={handleSubmit} >Submit</button>
    </div>
  );
};

export default UserForm;

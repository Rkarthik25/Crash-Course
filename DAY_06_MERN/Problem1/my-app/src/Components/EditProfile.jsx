import React, { useState } from 'react'

const EditProfile = ({userData}) => {
    const [name,setName]=useState(userData.name)
    const [age,setAge]=useState(userData.age)
    const [email,setEmail]=useState(userData.email)
    const [bio,setBio]=useState(userData.bio)
  return (
    <div >
      <h2>Edit Profile</h2>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Bio:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </form>
    </div>
  )
}

export default EditProfile
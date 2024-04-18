import React from 'react'

const UserProfile = ({userData}) => {
  return (
    <div style={{font:"bold"}} >
        <p>Name: {userData.name}</p>
        <p>Age: {userData.age}</p>
        <p>Email: {userData.email}</p>
        <p>Bio: {userData.bio}</p>
    </div>
  )
}

export default UserProfile
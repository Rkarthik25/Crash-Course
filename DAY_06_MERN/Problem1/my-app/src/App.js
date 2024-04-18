
import './App.css';
import UserProfile from './Components/UserProfile';
import EditProfile from './Components/EditProfile';
import { useState } from 'react';

function App() {
  const initialData={
    "name":"Karthikeyan",
    "age":25,
    "email":"karthijan111@gmail.com",
    "bio":"Full Stack Developer"
  }
  const [data,setData]=useState(initialData)
  const [toggle,SetToggle]=useState(false)

function toggleChange(){
  SetToggle(!toggle)
}
  return (
    <div className="App">
      <h1>User Profile Application</h1>
      <button onClick={toggleChange} >
        {
          toggle ? "View Mode" : "Edit Mode"
        }
      </button>
      {
        toggle? <UserProfile userData={data} />:<EditProfile userData={data} /> 
      }
    </div>
  );
}

export default App;

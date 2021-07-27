import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css';
const UserList = () => {
 const [listOfUser, setListOfUser] = useState([]); // where to store the returned data
 
 useEffect(() => {
     const axiosList = async () => {
     const response = await axios('https://jsonplaceholder.typicode.com/users')
       setListOfUser(response.data)
     };
     axiosList();   
 }, []);

 return (
   <div>
     <ol className='list'>
       {listOfUser.map(user => (
         <li>
             <ul className='list1'>
                 <li>
                    <h2>Name: {user.name}</h2>
                </li>
                <li>
                    <h3>User name: {user.username}</h3>
                </li>
                <li>
                    <h4>User adress: {user.address.city} </h4>
                </li>    
            </ul>
         </li>
       ))}
     </ol>
   </div>
 );
};
export default UserList;
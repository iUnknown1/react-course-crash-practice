import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User";
import { Link} from "react-router-dom"
function Home() {
const [users, setUsers] = useState([])

 async function fetchUsers() {
    // getting data and setting users with objects from data
  const {data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  setUsers(data)
  console.log(data)
 }

//fetching users
    useEffect(() => {  
        fetchUsers();
    }, [])

function renderUsers() {
return users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        </Link>
))
}

  return (
    // data comes from this map
    <div>
      {users.length ? renderUsers() : <h1>Loading...</h1>}
      ;
    </div>
  );
}

export default Home;

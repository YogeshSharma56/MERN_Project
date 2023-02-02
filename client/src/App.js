import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")

  useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response) =>{
      setListOfUsers(response.data)
    }

    )
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser" ,{
      name,
      age,
      username
    }).then ((response) => {
      
      setListOfUsers([...listOfUsers, {name, age, username}]);
      alert("User got Created");
    });
  };

  return (
    <div className="App">
      <div className='UsersDisplay'>
        {listOfUsers.map((user) =>{
          return(
            <div>
              <h2>Name: {user.name}</h2>
              <h3>Age: {user.age}</h3>
              <h3>Username: {user.username}</h3>
            </div>
          );
        })};
      </div>
      <div>
        <input type='text' placeholder='Name' onChange={(event) => {setName(event.target.value)}}/>
        <input type='number' placeholder='Age ' onChange={(event) => {setAge(event.target.value)}}/>
        <input type='text' placeholder='username ' onChange={(event) => {setUsername(event.target.value)}}/>
        <button onClick={createUser}> Create User</button>
      </div>
    </div>
      
    
  );
}

export default App;

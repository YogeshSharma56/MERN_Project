import './App.css';

import { useState } from 'react';

function App() {
  const [listOfUsers, setListOfUsers] = useState([{id: 1, name: "Yogesh", age: 37, username: "yogesh56"}]);
  return (
    <div className="App">
      <div className='UsersDisplay'>
        {listOfUsers.map((user) =>{
          return(
            <div>
              <h1>Name: {user.name}</h1>
              <h2>Age: {user.age}</h2>
              <h2>Username: {user.username}</h2>
            </div>
          );
        })};
      </div>
        
    </div>
      
    
  );
}

export default App;

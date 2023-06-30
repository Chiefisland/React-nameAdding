import React, { useState } from 'react';

import Card from './components/Card'
import Users from './components/Users'

function App() {

  const [users, setUsers] = useState([])

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser])
  }

  const deleteUser = (oldUser) => {
    setUsers((prevUsers) => prevUsers.filter(user => user !== oldUser))
  }


  return (
    <div>
      <Card addUser={addUser}/>
      <Users users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;

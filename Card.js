import { useState } from "react"

export default function Card({ addUser }) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault()

    const newUser = {
      name: name,
      age: age,
    };

    if (name.length > 0 && age.length > 0) {
      addUser(newUser)
    }
    
    setName("")
    setAge("")
  }

  return (
    <form className="card" onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="nameInput">Username</label>
        <input 
          type="text" 
          id='nameInput'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ageInput">Age (Years)</label>
        <input 
          type="text" 
          id='ageInput'
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  )
}
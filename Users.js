export default function Users({ users, deleteUser }) {
  if (users.length === 0) {
    return null; // or you can return an empty JSX element like <></>
  }

  const deleteHandler = (user) => {
    deleteUser(user)
  }

  return (
    <div className="users-card">
      <div className="user">
        {users.map((user, index) => (
          <p onClick={() => deleteHandler(user)} key={index}>{user.name} {user.age}</p>
        ))}
      </div>
    </div>
  );
}
import React from "react";

interface IUsers {
  id: number;
  name: string;
}

const NewUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: IUsers[] = await res.json(); // await twice

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default NewUser;

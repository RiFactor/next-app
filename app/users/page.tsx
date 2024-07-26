import React from "react";

interface IUsers {
  id: number;
  name: string;
}

// Data Source: Network (slowest) -> File System ->  Memory
// Server-side rendering:
//      Dynamic (request) - set {cache: "no-store"}
//      or Static (build) - time won't update on build (will on dev)

const NewUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-store", // stop default file/data-storage from nextjs, only on fetch fn, not 3rd part libs like axios
    next: { revalidate: 10 }, // refresh every 10 seconds
  });
  const users: IUsers[] = await res.json(); // await twice

  return (
    <ul>
      {new Date().toLocaleTimeString()}
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default NewUser;

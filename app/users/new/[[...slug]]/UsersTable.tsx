import { sort } from "fast-sort";

interface IUsers {
  id: number;
  name: string;
  email: string;
}

// Data Source: Network (slowest) -> File System ->  Memory
// Server-side rendering:
//      Dynamic (request) - set {cache: "no-store"}
//      or Static (build) - time won't update on build (will on dev)

interface IProps {
  sortOrder: string;
  sortEmailOrder: string;
}

const UsersTable = async ({ sortOrder, sortEmailOrder }: IProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-store", // stop default file/data-storage from nextjs, only on fetch fn, not 3rd part libs like axios
    next: { revalidate: 10 }, // refresh every 10 seconds
  });
  const users: IUsers[] = await res.json(); // await twice
  const sortedUsers =
    sortOrder === "asc"
      ? sort(users).asc((u) => u.name)
      : sortOrder === "desc"
      ? sort(users).desc((u) => u.name)
      : sortEmailOrder === "asc"
      ? sort(users).asc((u) => u.email)
      : sortEmailOrder === "desc"
      ? sort(users).desc((u) => u.email)
      : users;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers?.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;

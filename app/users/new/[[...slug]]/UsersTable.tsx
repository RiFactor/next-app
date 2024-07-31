import { sort } from "fast-sort";
import Link from "next/link";

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
}

const UsersTable = async ({ sortOrder }: IProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // cache: "no-store", // stop default file/data-storage from nextjs, only on fetch fn, not 3rd part libs like axios
    next: { revalidate: 10 }, // r  efresh every 10 seconds
  });
  const users: IUsers[] = await res.json(); // await twice
  const sortedUsers =
    sortOrder === "nameDesc" || sortOrder === "emailDesc"
      ? sort(users).desc(
          sortOrder === "nameDesc" ? (u) => u.name : (u) => u.email
        )
      : sort(users).asc(
          sortOrder === "email" ? (u) => u.email : (u) => u.name // default
        );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link
              href={
                sortOrder === "name"
                  ? "/users/new?sortOrder=nameDesc"
                  : "/users/new?sortOrder=name"
              }
            >
              Name
            </Link>
          </th>
          <th>
            <Link
              href={
                sortOrder === "email"
                  ? "/users/new?sortOrder=emailDesc"
                  : "/users/new?sortOrder=email"
              }
            >
              Email
            </Link>
          </th>
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

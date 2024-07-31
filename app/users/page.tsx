import React, { Suspense } from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";

interface IProps {
  searchParams: { sortOrder: string }; // /products?sortOrder=asc
}

const NewUser = async ({ searchParams: { sortOrder } }: IProps) => {
  return (
    <>
      <h1> Users </h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      {new Date().toLocaleTimeString()}
      {/* NB: in prod, w/ cache enabled, the time will be statically rendered (won't change on page refresh) */}
      {/* table-bordered not applicable? */}
      <Suspense fallback={<p>Loading...</p>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default NewUser;

import React from "react";
import UsersTable from "./UsersTable";

interface IProps {
  searchParams: { sortOrder: string }; // /products?sortOrder=asc
}
const NewUser = async ({ searchParams: { sortOrder } }: IProps) => {
  return (
    <>
      <h1> Users </h1>
      {new Date().toLocaleTimeString()}
      {/* table-bordered not applicable? */}
      <UsersTable sortOrder={sortOrder} />
    </>
  );
};

export default NewUser;

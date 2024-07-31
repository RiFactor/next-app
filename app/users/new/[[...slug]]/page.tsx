import React from "react";
import UsersTable from "./UsersTable";

interface IProps {
  searchParams: { sortOrder: string; sortEmailOrder: string }; // /products?sortOrder=asc
}
const NewUser = async ({
  searchParams: { sortOrder, sortEmailOrder },
}: IProps) => {
  return (
    <>
      {new Date().toLocaleTimeString()}
      {/* table-bordered not applicable? */}
      <UsersTable sortOrder={sortOrder} sortEmailOrder={sortEmailOrder} />
    </>
  );
};

export default NewUser;

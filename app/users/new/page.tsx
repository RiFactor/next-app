import React from "react";
import UsersTable from "./UsersTable";

const NewUser = async () => {
  return (
    <>
      {new Date().toLocaleTimeString()}
      {/* table-bordered not applicable? */}
      <UsersTable />
    </>
  );
};

export default NewUser;

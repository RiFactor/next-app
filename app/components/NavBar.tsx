import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-col gap-2 bg-blue-200">
      <Link href="/">Home</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/users/new">Users</Link>
    </nav>
  );
};

export default NavBar;

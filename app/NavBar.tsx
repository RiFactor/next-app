import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex gap-2 bg-slate-200 p-5">
      <Link href="/">Next.js</Link>
      <Link href="/admin">Admin</Link>
      <Link href="/users/new">Users</Link>
      <Link href="/products">Products</Link>
    </nav>
  );
};

export default NavBar;

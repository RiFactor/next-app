"use client";

import { useRouter } from "next/navigation"; // NB: NOT next/router // Error: NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>New User</h1>
      <button onClick={() => router.push("/users")} className="btn btn-primary">
        Create
      </button>
    </div>
  );
};

export default NewUserPage;

import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center pt-20">
      <h1>This page does not exist.</h1>
      <p>
        Try heading{" "}
        <Link className="btn btn-primary" href="/">
          home
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;

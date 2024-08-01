"use client";
import React from "react";

interface IProps {
  error: Error; // nextjs automatically passes this
  reset: () => void; // use sparingly to avoid overloading repetitive logs to sift through
}

const error = ({ error, reset }: IProps) => {
  console.log("Error", error); // use Sentry or other logging service to persist error logging

  return (
    <>
      <div>Oops, an unexpected error has occured.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default error;

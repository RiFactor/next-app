import { notFound } from "next/navigation";
import React from "react"; // QQ - is this needed?

interface Props {
  params: { id: number };
}

const UserDetail = ({ params: { id } }: Props) => {
  if (id > 10) notFound();

  return <div>User {id}</div>;
};

export default UserDetail;

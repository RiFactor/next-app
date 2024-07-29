import React from "react"; // QQ - is this needed?

interface Props {
  params: { id: number };
}

const UserDetail = ({ params: { id } }: Props) => {
  return <div>User {id}</div>;
};

export default UserDetail;

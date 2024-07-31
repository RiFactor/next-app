import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: IProps) => {
  return (
    <div className="flex">
      <aside className="bg-slate-500">Nav Bar </aside>
      {children}
    </div>
  );
};

export default AdminLayout;

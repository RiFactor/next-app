import React, { ReactNode } from "react";
import AdminNavBar from "./Sidebar";
import AdminSidebar from "./Sidebar";
interface IProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: IProps) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 -ml-5 -mt-5 mr-5">
        <AdminSidebar />
      </aside>
      {children}
    </div>
  );
};

export default AdminLayout;

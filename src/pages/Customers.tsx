import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { ColumnDef } from "@tanstack/react-table";
import { FaTrash } from "react-icons/fa";
import TableHOC from "../components/TableHOC";

interface DataType {
  avatar: string;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

const columns: ColumnDef<DataType>[] = [
  {
    header: "Avatar",
    accessorKey: "avatar",
    cell: ({ getValue }) => {
      const srcValue = getValue() as string;
      return (
        <img src={srcValue} style={{ borderRadius: "50%" }} alt="user image" />
      );
    },
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Gender",
    accessorKey: "gender",
  },
  {
    header: "Email",
    accessorKey: "email",
  },
  {
    header: "Role",
    accessorKey: "role",
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
  },
];

const arr: Array<DataType> = [
  {
    avatar: "https://randomuser.me/api/portraits/women/54.jpg",
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [rows, setrows] = useState(arr);

  const table = useCallback(() => {
    return TableHOC<DataType>(
      columns,
      rows,
      "dashboard-product-box",
      "Customers",
      rows.length > 6
    )();
  }, [rows]);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{table()}</main>
    </div>
  );
};

export default Customers;

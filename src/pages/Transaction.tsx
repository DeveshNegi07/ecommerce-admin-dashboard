import { useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { ColumnDef } from "@tanstack/react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  avatar: string;
  amount: number;
  discount: number;
  quantity: number;
  status: string;
  action: string;
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case "Processing":
      return "red";
    case "Shipped":
      return "green";
    case "Delivered":
      return "purple";
  }
};

const columns: ColumnDef<DataType>[] = [
  {
    header: "Avatar",
    accessorKey: "avatar",
  },
  {
    header: "Amount",
    accessorKey: "amount",
  },
  {
    header: "Discount",
    accessorKey: "discount",
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => {
      const status = getValue() as string;
      const statusStyle = getStatusStyle(status);
      return <span className={statusStyle}>{status}</span>;
    },
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ getValue }) => {
      const toValue = getValue() as string;
      return <Link to={toValue}>Manage</Link>;
    },
  },
];

const arr: DataType[] = [
  {
    avatar: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: "Processing",
    action: "/admin/transaction/sajknaskd",
  },
  {
    avatar: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: "Shipped",
    action: "/admin/transaction/mkkdwjbdjbs",
  },
  {
    avatar: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: "Delivered",
    action: "/admin/transaction/bnakdkka",
  },
];

const Transaction = () => {
  const [rows] = useState(arr);
  const table = useCallback(() => {
    return TableHOC(
      columns,
      rows,
      "dashboard-product-box",
      "Transactions",
      rows.length > 6
    )();
  }, [rows])();
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{table}</main>
    </div>
  );
};

export default Transaction;

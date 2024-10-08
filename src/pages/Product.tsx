import React, { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import TableHOC from "../components/TableHOC";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}
const columns: ColumnDef<DataType>[] = [
  {
    header: "Photo",
    accessorKey: "photo",
    cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
  },
  { header: "Name", accessorKey: "name" },
  { header: "Price", accessorKey: "price" },
  { header: "Stock", accessorKey: "stock" },
  {
    header: "Action",
    accessorKey: "action",
    cell: ({ getValue }) => <div>{getValue() as React.ReactNode}</div>,
  },
];

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const arr: Array<DataType> = [
  {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },

  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 232223,
    stock: 213,
    action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
  },
];

const Product = () => {
  const [rows] = useState<DataType[]>(arr);

  const table = useCallback(() => {
    return TableHOC<DataType>(
      columns,
      rows,
      "dashboard-product-box",
      "Products",
      rows.length > 6
    )();
  }, [rows]);

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Product;

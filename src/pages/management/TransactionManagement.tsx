import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    price: 2000,
    quantity: 4,
    _id: "asdsaasdas",
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Abhishek Singh",
    address: "77 Black Street",
    city: "Neyword",
    country: "India ",
    state: "Nevada",
    pinCode: 2434341,
    status: "Processing",
    total: 3000,
    tax: 200,
    shippingCharge: 0,
    discount: 1200,
    subtotal: 3000 + 200 + 0 - 1200,
    _id: "asdsaasdas",
    orderItems,
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    status,
    subtotal,
    shippingCharge,
    tax,
    discount,
    total,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section style={{ padding: "2rem" }}>
          <h2>order items</h2>
          {order.orderItems.map((item) => (
            <ProductCard
              name={item.name}
              photo={item.photo}
              price={item.price}
              quantity={item.quantity}
              _id={item._id}
              key={item._id}
            />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>order info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {address}, {city}, {state}, {country} {pinCode}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharge}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>
          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Processing"
                  ? "red"
                  : "green"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => {
  return (
    <div className="transaction-product-card">
      <img src={photo} alt={name} />
      <Link to={`/product/:${_id}`}>{name}</Link>
      <span>
        ${price} X {quantity} = ${price * quantity}
      </span>
    </div>
  );
};

export default TransactionManagement;

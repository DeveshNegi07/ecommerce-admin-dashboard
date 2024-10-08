import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { FaTrash } from "react-icons/fa";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [category, setCategory] = useState<string>("footwear");
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [categoryUpdate, setCategoryUpdate] = useState<string>(category);
  const [photoUpdate, setPhotoUpdate] = useState<string | undefined>(img);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    if (file) {
      const imageurl: string = URL.createObjectURL(file);
      setPhoto(imageurl);
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setCategory(categoryUpdate);
    setPhotoUpdate(photo);
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <section>
          <strong>ID - fsdfsfsggfgdf</strong>
          <img src={photoUpdate} alt="product image" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <h3>₹{price}</h3>
        </section>

        <article>
          <button className="product-delete-btn">
            <FaTrash />
          </button>
          <div>
            <form onSubmit={submitHandler}>
              <h2>Manage</h2>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={nameUpdate}
                  onChange={(e) => setNameUpdate(e.target.value)}
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  placeholder="Price"
                  value={priceUpdate}
                  onChange={(e) => setPriceUpdate(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Stock</label>
                <input
                  type="number"
                  placeholder="Stock"
                  value={stockUpdate}
                  onChange={(e) => setStockUpdate(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Category</label>
                <input
                  type="text"
                  placeholder="eg. laptop, camera etc"
                  value={categoryUpdate}
                  onChange={(e) => setCategoryUpdate(e.target.value)}
                />
              </div>
              <div>
                <label>Photo</label>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={changeImageHandler}
                />
              </div>
              {photo && <img src={photo} alt="New Image" />}
              <button type="submit">Update</button>
            </form>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;

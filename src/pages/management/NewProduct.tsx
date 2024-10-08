import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [category, setCategory] = useState<string>("");
  const [photo, setPhoto] = useState<string | undefined>(undefined);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    if (file) {
      const imageurl: string = URL.createObjectURL(file);
      setPhoto(imageurl);
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="product-management">
        <article>
          <div>
            <form>
              <h2>New Product</h2>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Stock</label>
                <input
                  type="number"
                  placeholder="Stock"
                  value={stock}
                  onChange={(e) => setStock(Number(e.target.value))}
                />
              </div>
              <div>
                <label>Category</label>
                <input
                  type="text"
                  placeholder="eg. laptop, camera etc"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div>
                <label>Photo</label>
                <input
                  required
                  type="file"
                  onChange={changeImageHandler}
                  accept="image/*"
                />
              </div>
              {photo && <img src={photo} alt="New Image" />}
              <button>Create</button>
            </form>
          </div>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;

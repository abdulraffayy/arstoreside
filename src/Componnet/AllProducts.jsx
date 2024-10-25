import { useEffect, useState } from "react";
// import Product from './Product'
import axios from "axios";
import Product from "./Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    const AllProducts = await axios.get("https://fakestoreapi.com/products");
    console.log("products", AllProducts.data);
    setProducts(AllProducts.data);
    console.log(products, "state");
  };

  useEffect(() => {
    fetchAllProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="products-section p-4 my-6">
        <h1 className="text-center font-bold text-2xl mb-4">Products</h1>
        <p className="text-center font-extralight">Unleash Your Inner Beauty</p>
      </div>

      <div className="product-container flex items-center justify-center flex-wrap w-[70%] gap-3 m-auto bg-[rgba(245,245,245)]">
        {products.map((product, index) => (
          <a href={`/details/${product.id}`} key={index}>
            <Product name={product.title} img={product.image} price={product.price} />
          </a>
        ))}
      </div>

      <div className="icons-container mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-3">
        <div className="icon bg-[rgba(245,245,245)] w-full sm:w-[20%] p-4 flex flex-col items-center">
          <box-icon name="car"></box-icon>
          <h1 className="font-bold text-black text-center">Free Shipping</h1>
          <p className="font-light text-center">
            Shipping Free all over the country
          </p>
        </div>

        <div className="icon bg-[rgba(245,245,245)] w-full sm:w-[20%] p-4 flex flex-col items-center">
          <box-icon name="broadcast"></box-icon>
          <h1 className="font-bold text-black text-center">Cash On Delivery</h1>
          <p className="font-light text-center">Fast Delivery in 3 days</p>
        </div>

        <div className="icon bg-[rgba(245,245,245)] w-full sm:w-[20%] p-4 flex flex-col items-center">
          <box-icon name="caret-left-circle"></box-icon>
          <h1 className="font-bold text-black text-center">Return Refund</h1>
          <p className="font-light text-center">Easy Return And Refund</p>
        </div>

        <div className="icon bg-[rgba(245,245,245)] w-full sm:w-[20%] p-4 flex flex-col items-center">
          <box-icon type="solid" name="plus-circle"></box-icon>
          <h1 className="font-bold text-black text-center">Opening All Week</h1>
          <p className="font-light text-center">8AM to 12PM</p>
        </div>
      </div>
    </>
  );
};

export default AllProducts;

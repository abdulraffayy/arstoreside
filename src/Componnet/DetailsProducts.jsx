import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';


const DetailsProducts = () => {
  const id = useParams()
  const [productOne, setProductOne] = useState(null); 

  console.log( "dd", id)
  const fetchOneByOneProducts = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id.id}`);
      console.log("products 1", response.data);
      setProductOne(response.data); 
    } catch (error) {
      console.error("Error fetching the product:", error);
    }
  };

  useEffect(() => {
    fetchOneByOneProducts();
  }, []);

  return (
    <> 
    <NavBar/>
      <div className="container mx-auto px-4 py-8">   
        <h1 className="text-center text-black font-bold text-2xl border-b-2 border-red-400 pb-2 mb-8">DETAILS</h1> 
        {productOne ? (  
          <div>
            <div className="flex flex-col lg:flex-row lg:w-2/3 mx-auto gap-8">
              <div className="lg:w-1/2 flex justify-center items-center">
                <img
                  src={productOne.image}
                  alt={productOne.title}
                  className="rounded-lg shadow-lg w-[100%] h-[590px]"
                />
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg lg:w-1/2">
                <h1 className="text-black font-bold text-2xl mb-4 text-center">
                  {productOne.title}
                </h1>
                <p className="text-red-600 text-xl font-bold mb-2">
                  ${productOne.price}
                </p>
                <p className="text-gray-600 text-lg mb-2">
                  <span className="font-bold text-red-600">Id:</span>{" "}
                  {productOne.id}
                </p>
                <p className="text-gray-600 text-lg mb-2">
                  <span className="font-bold text-red-600">ProductType:</span>{" "}
                  {productOne.category}
                </p>
                <p className="text-gray-600 text-lg mb-2">
                  <span className="font-bold text-red-600">ProductDetails:</span>{" "}
                  {productOne.description}
                </p>
                <p className="text-gray-600 text-lg mb-2">
                  <span className="font-bold text-red-600">Rating:</span>{" "}
                  {productOne.rating.rate}
                </p>
                <p className="text-gray-600 text-lg mb-4">
                  <span className="font-bold text-red-600">ProductCode:</span>{" "}
                  MZ53900121BTBZR
                </p>
                <div className="flex justify-center">
                  <button className="bg-green-700 text-white px-6 py-2 hover:bg-green-800 flex items-center gap-2 w-[400px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25l-9.293 9.293a1.5 1.5 0 01-2.121 0L3 11.957"
                      />
                    </svg>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>  
        )}
      </div>
    </>
  );
};

export default DetailsProducts;






























// src/Components/Product.js
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../../fireBase/config";
import Card from "./Card";
import Vegetable from "../assets/vegetable.png";
import freshRight from "../assets/freshRight.svg";
import { useProductContext } from "./ProductContext";
import SubmitProduct from "./add_product/Form"; // Import context hook

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true); // To track if there are more products to load
  const { setProductCount } = useProductContext(); // Access context function
  const [product,setProduct]=useState("")

  const PAGE_SIZE = 4; // Number of products per page

  // Function to fetch data from Firestore
  const getData = async (startAfterDoc = null) => {
    setLoading(true);
    try {
      let q = query(collection(db, "products"), limit(PAGE_SIZE));

      if (startAfterDoc) {
        q = query(
          collection(db, "products"),
          startAfter(startAfterDoc),
          limit(PAGE_SIZE)
        );
      }

      const querySnapshot = await getDocs(q);
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (startAfterDoc) {
        setProducts((prevProducts) => [...prevProducts, ...productsList]);
      } else {
        setProducts(productsList);
      }

      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(!querySnapshot.empty); // Check if there are more products to load
      setProductCount(productsList.length); // Update product count
      setLoading(false);
    } catch (error) {
      console.log("Error fetching data: ", error);
      setLoading(false);
    }
  };

  // Fetch initial data
  useEffect(() => {
    getData();
  }, []);

  // Handle Load More
  const handleLoadMore = () => {
    if (lastVisible) {
      getData(lastVisible);
    }
  };
  const toggleProduct = () => {
    // Stop event propagation to ensure click is handled only in this element
    
    setProduct(!product);
  };
  return (
    <div className="h-full w-full px-4 py-8 md:[100vh]">
      <p className="text-center text-[36px] font-cursive font-medium text-[#7EB693]">
        Categories
      </p>
      <p className="text-center font-bold text-[50px] font-sans text-[#274C5B]">
        Our Product
      </p>
      <div className="bg-[#7EB693] w-[30px] h-[30px] text-white p-3 rounded-3xl ml-auto content flex justify-center items-center mb-4 mr-20" onClick={toggleProduct}>
        <span className="text-xl">+</span>{" "}
      </div>
      {loading && <p className="text-center">Loading...</p>}
      {!loading && (
        <div className="h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-screen-xl ease-in">
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              img={product.image || Vegetable}
              name={product.type}
              exp={product.des}
              price={product.price}
              className="slide-in" // Add the animation class
            />
          ))}
        </div>
      )}
      {hasMore && !loading && (
        <button
          className="w-[200px] h-[68px] bg-[#274C5B] text-white font-medium rounded-lg flex items-center justify-center gap-5 m-auto"
          onClick={handleLoadMore}
        >
          <span>Load More...</span>
          <span>
            <img
              src={freshRight}
              className="bg-[#335b6b] w-[19px] h-[19px] rounded-3xl p-1 invert"
              alt="Fresh Right"
            />
          </span>
        </button>
      )}
       {product&& <SubmitProduct onClose={toggleProduct}></SubmitProduct>}
    </div>
  );
};

export default Product;

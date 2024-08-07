import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import agriculture from "../assets/agriculture.png";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../fireBase/config"; // Adjust import based on your setup

const Detail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { img = "", name = "No Name", exp = "No Description", price = "N/A" } = location.state || {};

  // Function to handle the delete action
  const handleDelete = async () => {
    try {
      // Delete document from Firestore
      await deleteDoc(doc(db, "products", id)); // Adjust collection name if necessary
    //   alert('Product deleted successfully');
      navigate('/'); // Redirect to another page after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    //   alert('Failed to delete product');
    }
  };

  // Function to handle the update action
  const handleUpdate = () => {
    navigate(`/update/${id}`); // Redirect to an update form
  };

  return (
    <div
      className="h-screen w-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${agriculture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-[80%] bg-white p-4 rounded-lg shadow-lg flex">
        <div className="w-[50%] h-screen">
        <img src={img} alt={name} className="mb-4  h-full w-full" />

        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-4 text-[#274C5B]"><span className="text-md text-black">Name:</span>{name}</h2>
        <p className="mb-2 text-[#274C5B]"><span className="text-md text-black">description:</span>{exp}</p>
        <p className="text-gray-900 font-semibold"><span className="text-md text-black">Price:</span>{price}</p>
        <div className=" flex gap-10 mt-3">
          <button
            className="py-1 px-4 rounded-md text-white"
            style={{ backgroundColor: "green" }}
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="py-1 px-4 rounded-md text-white"
            style={{ backgroundColor: "red" }}
            onClick={handleDelete}
          >
            Delete
          </button> 
        </div>
     
        </div>
      </div>
    </div>
  );
};

export default Detail;

'use client'
import React, { useState } from 'react';
import ProductFormModal from '@/components/ProductFormModal'; 
const Stocks = () => {
  const [showModal, setShowModal] = useState(false);
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    media: [],
    addedDate: '',
    stock: '',
    purchasePrice: '',
    sellingPrice: '',
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    toggleModal();
  };

  return (
    <div className="">
      <div className="flex flex-wrap justify-start gap-4 p-2 px-6">
        {/* First row */}
        <div className="w-11/12 gap-6">
          <div className="bg-white  rounded-md border border-gray-200 p-4 flex gap-4">
            <div className="flex-grow">
              <p className="text-2xl font-semibold mb-2">Stock Product List</p>
              <p className="text-sm mb-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur. Risus in nulla faucibus risus.
              </p>
            </div>
            <button
              onClick={toggleModal}
              className="flex items-center bg-blue-500 text-white px-4 rounded-md h-[40px] w-[145px]"
            >
              + Add Product
            </button>
            
          </div>
          {/* Render the modal */}
          <ProductFormModal
            isOpen={showModal}
            onClose={toggleModal}
            onSubmit={handleSubmit}
            productData={productData}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Stocks;

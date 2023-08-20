'use client'
import Image from 'next/image';
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

          {/* Table */}
          <table className="w-full mt-4 ">
            <thead className='bg-gray-200'>
              <tr className='flex justify-between'>
                <th className='py-3 flex justify-start ms-4'>Name <Image src="./arrow-down.svg" width={20} height={20}  /></th>
                <th className='py-3 flex justify-start ms-4'>Product Added<Image src="./arrow-down.svg" width={20} height={20}  /></th>
                <th className='py-3 flex justify-start ms-4'>  Stock <Image src="./arrow-down.svg" width={20} height={20}  /></th>
               
                <th className='py-3 flex justify-start ms-4'>Purchase</th>
                <th className='py-3 flex justify-start ms-4'>Selling</th>
                <th className='py-3 flex justify-start me-4'> Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Here you can map over your product data and generate rows */}
              {/* Example row */}
              <tr className='flex justify-between'>
                <td className='py-3 flex justify-start ms-'> <Image className='ms-4' src="./product.svg" width={40} height={40}  />  <span className='ms-2 mt-2'> MacBook Pro M2</span></td>
                <td className='py-3 flex justify-start -ms-24 mt-2'>Today, 19:40</td>
                <td className='py-3 flex justify-between items-center  ms-4'>64 <span className='ms-2 items-center p-2 border-2 rounded-3xl text-blue-700'>80 Left</span></td>
                <td className='py-3 flex justify-start ms-3 mt-2 -ms-4'>$900.00</td>
                <td className='py-3 flex justify-start -me-4 mt-2'>$950.00</td>
                <td className='py-3 flex justify-start me-4 gap-3 '><Image className='' src="./trash-2.svg" width={20} height={20}  /><Image className='' src="./Icon.svg" width={20} height={20}  /></td>
              </tr>
              <tr className='flex justify-between'>
                <td className='py-3 flex justify-start ms-'> <Image className='ms-4' src="./product-1.svg" width={40} height={40}  />  <span className='ms-2 mt-2'> Iphone 14 Pro Max</span></td>
                <td className='py-3 flex justify-start -ms-28 mt-2 '>Jan 6, 2022</td>
                <td className='py-3 flex justify-between items-center  ms-4'>120 <span className='ms-2 items-center p-2 border-2 rounded-3xl text-blue-700'>2 Left</span></td>
                <td className='py-3 flex justify-start ms-3 mt-2 -ms-4'>$800.00</td>
                <td className='py-3 flex justify-start -me-4 mt-2'>$850.00</td>
                <td className='py-3 flex justify-start me-4 gap-3 '><Image className='' src="./trash-2.svg" width={20} height={20}  /><Image className='' src="./Icon.svg" width={20} height={20}  /></td>
              </tr>
              <tr className='flex justify-between'>
                <td className='py-3 flex justify-start ms-'> <Image className='ms-4' src="./product-2.svg" width={40} height={40}  />  <span className='ms-2 mt-2 pe-2'> ipad pro 2022</span></td>
                <td className='py-3 flex justify-start -ms-20  mt-2'>Jan 6, 2022</td>
                <td className='py-3 flex justify-between items-center  ms-4'>120 <span className='ms-2 items-center p-2 border-2 rounded-3xl text-pink-600'>5 Left</span></td>
                <td className='py-3 flex justify-start ms-3 mt-2 -ms-1'>$1,000.00</td>
                <td className='py-3 flex justify-start -me-4 mt-2'>$1,100.00</td>
                <td className='py-3 flex justify-start me-4 gap-3 '><Image className='' src="./trash-2.svg" width={20} height={20}  /><Image className='' src="./Icon.svg" width={20} height={20}  /></td>
              </tr>
              <tr className='flex justify-between'>
                <td className='py-3 flex justify-start ms-'> <Image className='ms-4' src="./product-3.svg" width={40} height={40}  />  <span className='ms-2 mt-2'> Imac 2022</span></td>
                <td className='py-3 flex justify-start -ms-14 ps-4 mt-2'>Jan 5, 2022</td>
                <td className='py-3 flex justify-between items-center  ms-10'>24 <span className='ms-2 items-center p-2 border-2 rounded-3xl text-pink-600'>80 Left</span></td>
                <td className='py-3 flex justify-start ms-3 mt-2 -ms-4'>$12,000.00</td>
                <td className='py-3 flex justify-start -me-4 mt-2'>$1,300.00</td>
                <td className='py-3 flex justify-start me-4 gap-3 '><Image className='' src="./trash-2.svg" width={20} height={20}  /><Image className='' src="./Icon.svg" width={20} height={20}  /></td>
              </tr>
            
            </tbody>
          </table>

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

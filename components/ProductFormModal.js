import React from "react"
import Image from "next/image"
const ProductFormModal = ({
  isOpen,
  onClose,
  onSubmit,
  productData,
  handleInputChange,
}) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 '>
      <div className='bg-white px-10  py-5 rounded-md shadow-md h-[916px] w-[550px]'>
       <div  className="flex justify-between"> <h2 className='text-2xl font-semibold mb-4'>Add Product</h2>
        <Image  onClick={onClose} className="mb-4"  src="/close.svg" height={20}
              width={20}   /></div>
        <form onSubmit={onSubmit}>
          <div className='mb-4'>
            <label htmlFor='title' className='block font-semibold mb-1'>
              Product Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Enter your product title'
              value={productData.title}
              className='w-full p-2 border border-gray-300 rounded-md bg-gray-100'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='description' className='block font-semibold mb-1'>
              Product Description
            </label>
            <div className='relative'>
              <span className='absolute top-3 left-2 text-gray-500 pointer-events-none'>
                Tell us about your product here
              </span>
              <input
                type='text'
                id='description'
                name='description'
                value={productData.description}
                className='w-full p-2 pl-10 border border-gray-300 rounded-md bg-gray-100 h-[102px]'
              />
            </div>
          </div>
          <div className='mb-4'>
  <label htmlFor='file' className='block font-semibold mb-1'>
    Add Media
  </label>
  <p className='text-sm text-gray-500 mb-2'>
    Add up to 50 images to your product image, video.
  </p>
  <div className='relative'>
    {/* Hidden input */}
    <input
      type='file'
      id='file'
      name='file'
      value={productData.file}
      className='hidden'
      onChange={handleInputChange}  
    />
    
    <label
      htmlFor='file'
      className=' flex flex-col items-center cursor-pointer absolute top-0 left-0 right-0 bottom-0 p-2  border-dashed border-2 border-indigo-600 rounded-md bg-indigo-50 h-[140px]'
    >
        <Image className="mt-3" src="/folder-add.svg" height={40} width={40} />
      <span className='text-gray-500 '>Drag and drop files or</span>
      <span className='font-semibold text-indigo-600 ms-1'>Browse</span>
    </label>
  </div>
</div>


          {/* <div className='mb-4'>
  <label htmlFor='media' className='block font-semibold mb-1'>
    Add Media
  </label>
  <p className='text-sm text-gray-500 mb-2'>
    Add up to 50 images to your product image, video.

  </p>
  <div className=''>
    <input
      type='file'
      id='media'
      name='media'
      multiple
      accept='image/*, video/*'
     
      className='hidden  w-full'
    />
    <label
      htmlFor='media'
      className='pb-10 cursor-pointer  bg-gray-100 p-2 rounded-md border border-gray-300 text-center hover:bg-gray-300 '
    >
      <span className='text-gray-500'>Drag and drop files or</span>
      
      <span className='font-semibold text-blue-600'>Browse</span>
    </label>
  </div>
</div> */}

          <div className='mb-4 mt-40'>
            <label htmlFor='date' className='block font-semibold mb-1'>
              Product Added Date
            </label>
            <input
              type='text'
              id='date'
              name='date'
              placeholder='DD/MM/YYYY'
              value={productData.date}
              className='relative w-full p-2 border border-gray-300 rounded-md bg-gray-100 '
            />
            <Image
              className='absolute ms-96 -mt-8'
              src='/calendar.svg'
              alt='calender'
              height={20}
              width={20}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='stock' className='block font-semibold mb-1'>
              Stock
            </label>
            <input
              type='text'
              id='stock'
              name='stock'
              placeholder='Enter your stock'
              value={productData.stock}
              className='w-full p-2 border border-gray-300 rounded-md bg-gray-100'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='purchasePrice' className='block font-semibold mb-1'>
              Purchase Price
            </label>
            <input
              type='text'
              id='purchasePrice'
              name='purchasePrice'
              placeholder='Enter your Purchase Price'
              value={productData.purchasePrice}
              className='w-full p-2 border border-gray-300 rounded-md bg-gray-100'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='sellingPrice' className='block font-semibold mb-1'>
              Selling Price
            </label>
            <input
              type='text'
              id='sellingPrice'
              name='sellingPrice'
              placeholder='Enter your Selling Price'
              value={productData.sellingPrice}
              className='w-full p-2 border border-gray-300 rounded-md bg-gray-100'
            />
          </div>

          <div className='flex justify-between gap-2'>
            <button
              type='button'
              onClick={onClose}
              className='bg-gray-300 text-gray-800 py-2 rounded-md w-[240px]'
            >
              Cancel
            </button>{" "}
            <button
              type='submit'
              className='bg-blue-500 text-white  py-2 rounded-md  w-[240px] '
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductFormModal

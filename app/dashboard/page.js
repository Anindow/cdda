import Image from "next/image"
const Dashboard = () => {
  return(
    
    <div className="flex flex-wrap justify-start gap-4 p-2 px-6 ">
  {/* First row */}
  <div className="w-1/4 gap-6">
  <div className="bg-white shadow-sm rounded-md border border-gray-200 p-4 flex gap-4">
    <div className="flex-grow">
      <p className="text-xl font-semibold mb-2">Congratulations Howard 🎉</p>
      <p className="text-sm mb-4 text-gray-500">Best seller of the month</p>
      <p className="text-xl font-semibold my-8 text-blue-600">$42.8k</p>
      <button className="bg-blue-500 text-white px-4 my py-2 rounded">View Sales</button>
    </div>
    <div className="ml-4  flex items-end">
      <Image  src="/3d-cup 1.png" alt="Cup" width={89} height={102} />
    </div>
  </div>
  
</div>

<div className="w-7/12">
  <div className="bg-white shadow-sm rounded-md border border-gray-200 p-4 flex flex-col justify-between relative">
    <div className="p-3">
      <p className="text-xl font-semibold mb-2">Transactions</p>
      <p className="text-sm mb-4">Total 48.5% Growth 😎 <span className=" text-gray-500">this month</span></p>
    </div>
    <div className="absolute top-6 right-5 mt-2 mr-2">
      <Image src="/MoreVert.svg" height={24} width={24} />
    </div>
    <div className="">
      <Image src="/transactions.svg" height={94} width={750} />
    </div>
  </div>
</div>



  {/* Second row */}
  <div className=" mt-4">
    <Image src='/row2.svg' height={348} width={1500} />
</div>
  <div className=" mt-4">
    <Image src='/row3.svg' height={608} width={1500} />
</div>
</div>
  )
}

export default Dashboard

import React from 'react'

const Footer = () => {
  return (
    <ul className='flex max-w-screen-xl mx-auto mt-8 flex-wrap'>
        <li className='w-1/6 sm:w-1/2'>
            <h1 className='text-xl text-[#212121] mb-10'>About Us</h1>
            <ul className=' text-[#7b746c] flex-col w-4/5'>
                <li className='hover:text-[#212121] mt-5'>Our Company</li>
                <li className='hover:text-[#212121] mt-5'>Our Coffe</li>
                <li className='hover:text-[#212121] mt-5'>Stories and News</li>
                <li className='hover:text-[#212121] mt-5'>Starbucks Archive</li>
                <li className='hover:text-[#212121] mt-5'>Investor Relations</li>
                <li className='hover:text-[#212121] mt-5'>Customer Service</li>
            </ul>
        </li>
        <li className='w-1/6 sm:w-1/2'>
            <h1 className='text-xl text-[#212121] mb-10'>Careers</h1>
            <ul className=' text-[#7b746c] flex-col w-4/5'>
                <li className='hover:text-[#212121] mt-5'>Culture and Values</li>
                <li className='hover:text-[#212121] mt-5'>Inclusion, Diversity, and Equity</li>
                <li className='hover:text-[#212121] mt-5'>College Achievement Plan</li>
                <li className='hover:text-[#212121] mt-5'>Alumni Community</li>
                <li className='hover:text-[#212121] mt-5'>U.S. Careers</li>
                <li className='hover:text-[#212121] mt-5'>International Careers</li>
            </ul>
        </li>
        <li className='w-1/6 sm:w-1/2'>
            <h1 className='text-xl text-[#212121] mb-10'>Social Impact</h1>
            <ul className=' text-[#7b746c] flex-col w-4/5'>
                <li className='hover:text-[#212121] mt-5'>People</li>
                <li className='hover:text-[#212121] mt-5'>Planet</li>
                <li className='hover:text-[#212121] mt-5'>Environmental and Social Impact Reporting</li>
            </ul>
        </li>
        <li className='w-1/6 sm:w-1/2'>
            <h1 className='text-xl text-[#212121] mb-10'>For Business Partners</h1>
            <ul className=' text-[#7b746c] flex-col w-4/5'>
                <li className='hover:text-[#212121] mt-5'>Landlord Support Center</li>
                <li className='hover:text-[#212121] mt-5'>Suppliers</li>
                <li className='hover:text-[#212121] mt-5'>Corporate Gift Card Sales</li>
                <li className='hover:text-[#212121] mt-5'>Office and Foodservice Coffee</li>
            </ul>
        </li>
        <li className='w-1/6 sm:w-1/2'>
            <h1 className='text-xl text-[#212121] mb-10'>Order and Pickup</h1>
            <ul className=' text-[#7b746c] flex-col w-4/5'>
                <li className='hover:text-[#212121] mt-5'>Order on the App</li>
                <li className='hover:text-[#212121] mt-5'>Delivery</li>
                <li className='hover:text-[#212121] mt-5'>Order and Pickup Options</li>
                <li className='hover:text-[#212121] mt-5'>Explore and Find Coffee for Home</li>
            </ul>
        </li>
    </ul>
  )
}

export default Footer
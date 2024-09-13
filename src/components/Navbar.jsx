import React from 'react'
// import logo from '../assets/images/logo.png'

function Header() {
  return (
    <header className='flex justify-center w-full py-4 rounded-b-2xl bg-white/[0.1] fixed z-10 top-0'>
      <div className='container flex justify-between items-center text-center font-semibold text-white '>
        <div className='w-20'>
          <a href=''>
            <img src="/images/logo.png" alt="" className=''/>
          </a>
        </div>
        <div>
          <ul className='flex gap-8 text-base'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Contact Us</li>
          </ul>
        </div>
        <div className='cursor-pointer text-lg bg-blue-600 py-2 px-6 rounded-full'>Call Us: +000000000</div>
      </div>
    </header>
  )
}

export default Header
import React, { useState } from 'react'
import logo from '../assets/starbucks.svg'
import mapIcon from '../assets/map.svg'


const NavBar = () => {
  const [ham, setHam] = useState(true)
  const hamburgerAnim = ham ? 'animate-hamburger' : ''

  const hamhandler = () => {
    setHam(!ham)
  }

   if (ham == false) {document.body.style.overflow = "hidden"} else {document.body.style.overflow = "scroll"}
   if (ham == false) {document.body.style.marginRight = "17px"} else {document.body.style.marginRight = "0px"}

  return (
    <header className='shadow-md z-20' >
      <div className='mx-10 md:hidden sm:block '>
        <nav className='flex h-24 max-w-screen-xl mx-auto '>
          <div className='relative w-full justify-end flex items-center '>
            <a  href="/"><img className='absolute left-0 top-1/4 w-12 h-12' src={ logo } alt="starbucks" /></a>
            <button onClick={hamhandler} className=' justify-end items-center h-10 w-10 flex top-1/4'><span className= ' animate-[hamburger] w-6 h-1 bg-gray-300 rounded after:rounded before:rounded after:w-6 after:h-1 after:bg-gray-300 after:-translate-y-3 after:flex before:w-6 before:h-1 before:bg-gray-300 before:translate-y-2 before:flex'></span></button>
            <div className={`ease-in duration-150 ${ham ? 'opacity-0' : 'opacity-100'} flex fixed z-10 justify-end right-0 top-24 w-full h-full overflow-auto bg-black/30  `}>
              
              <div className={`bg-[#fefefe] z-10 w-2/3 ease-in duration-150 ${ham ? ' translate-x-32' : ''}`}>
                  <p>vjmrewpoferopjgpojp3rjgop3j</p>
              </div>
              
            </div>
          </div>
        </nav>
      </div>

      <div className='mx-10 md:flex sm:hidden'>
        <nav className='flex h-24 w-full max-w-screen-xl mx-auto'>          
          <div className='relative flex items-center gap-8 '>
            <a  href="/"><img className='absolute left-0 top-1/4 w-12 h-12' src={ logo } alt="starbucks" /></a>
            <h1 className='uppercase font-bold text-sm text-gray-900 hover:text-green-700 ml-24' ><a href="">menu</a></h1>
            <h1 className='uppercase font-bold text-sm text-gray-900 hover:text-green-700'><a href="">rewards</a></h1>
            <h1 className='uppercase font-bold text-sm text-gray-900 hover:text-green-700 whitespace-nowrap'><a href="">gift cards</a></h1>
          </div>
          <div className='flex relative items-center ml-16 w-full justify-end'>
            <div>
              <h1 className='text-gray-900 hover:text-green-700 text-sm font-semibold whitespace-nowrap'>
                <a className='flex' href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg> &nbsp; Find a store 
                </a>
              </h1>
            </div>
            <button className='ease-in duration-100 h-8 w-20 border border-black bg-white rounded-full hover:bg-gray-100 font-medium text-sm ml-12'>Sign in</button>
            <button className='ease-in duration-100 h-8 w-24 border border-black bg-black text-white rounded-full hover:bg-gray-700 font-medium text-sm ml-6'>Join now</button>
          </div> 
        </nav>
      </div>
      
    </header>
  )
}

export default NavBar
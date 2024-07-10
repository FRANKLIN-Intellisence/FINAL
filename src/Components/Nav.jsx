import { useState } from 'react'
import Logo from  '../assets/LOGO.png'
import { RiMenuLine } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
const MenuBar = () => {
    return(
        <>
            <li className='flex items-start justify-center w-[100%] pt-[1rem] pb-[1rem] bg-[#fbfbfb]'>
                <a href="/" className='lg:underline text-[1.4rem] w-[100%] text-[#b59900] hover:text-[#74001b]'>Products</a>
            </li>
            <li className='flex items-start justify-center w-[100%] pt-[1rem] pb-[1rem] bg-[#fbfbfb]'>
                <a href="/Description" className='lg:hover:underline hover:text-[#b59900] text-[1.2rem] w-[100%] text-[#74001b]'>Description</a>
            </li>
            <li className='flex items-start justify-center w-[100%] pt-[1rem] pb-[1rem] bg-[#fbfbfb]'>
                <a href="/CartPage" className='lg:hover:underline hover:text-[#b59900] text-[1.2rem] w-[100%] text-[#74001b]'>Cart</a>
            </li>
        </>
    )
}
const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <nav className='flex flex-row items-center justify-between w-full fixed top-0 
                        left-0 right-0 bg-[#fbfbfb] pt-3 pb-3 lg:pl-10 lg:pr-10 pl-4 pr-4'>
            <div className='flex item-center gap-[1rem]'>
                <div className='lg:hidden'>
                    {toggleMenu ? <RiCloseLine  size={35} className='align-center cursor-pointer' onClick={() => setToggleMenu(false)} /> 
                    : <RiMenuLine size={35} className='align-center cursor-pointer' onClick={() => setToggleMenu(true)}/> }
                    {toggleMenu && (
                        <div className='w-[50%] sm:w-[100%]'>
                            <ul className='block bg-[#74001b] text-[#fbfbfb] sm:h-[100vh] mb-8
                                            fixed top-16 left-0  md:w-[40%] w-[80%] h-[50vh] text-center'>
                                <MenuBar />
                            </ul>
                        </div>
                    )}
                </div>
                
                <div>
                    <img src={Logo} alt="Logo" className='h-10'/>
                </div>
            </div>

            <div className='hidden lg:block' >
                <ul className='flex flex-row lg:items-center gap-5 text-[#74001d]'>
                    <MenuBar />
                </ul>
            </div>
            <div className='flex flex-row gap-6 items-center justify-center'>
                <div>
                    <CiSearch size={30} className='cursor-pointer' />
                </div>
                <div>
                    <a href="/CartPage">
                        <FaCartShopping size={25} className='cursor-pointer' />
                    </a>
                </div>
            </div>
            
        </nav>
    )
}

export default Nav;
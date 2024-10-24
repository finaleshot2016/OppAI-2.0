import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import terminal from '../assets/oppainav.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='bg-black'>
      <div className='bg-transparent bg-opacity-100 max-w-[1640px] mx-auto px-4 flex justify-between items-center h-full '>
        <div className=''>
        <a href="/"><img className='max-w-[300px]' src={terminal} alt="/" /></a>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-white items-center'>
            <li><a href="#roadmap">Oppainomics</a></li>
            <li><a href="https://t.me/" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="/" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            <a href="https://app.uniswap.org/#/swap?outputCurrency=" target="_blank" rel="noopener noreferrer"><button className='m-2 bg-white hover:bg-teal-500 text-black font-bold py-2 px-4 rounded'><a href="/" target="_blank" rel="noopener noreferrer">Buy</a></button></a>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li className='text-2xl'>Oppainomics</li>
            <li className='text-2xl'>Twitter</li>
            <li className='text-2xl'>Telegram</li>
            <li className='text-2xl'>Contact Us</li>
            <button className='m-8'>Buy</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

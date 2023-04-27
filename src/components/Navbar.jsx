import { BsPerson } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaInstagram, FaGithub, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa'

function Navbar() {
    return <>
        <div className="flex justify-between items-center h-20 px-4">
            {/* Desktop Menu */}
            <div>
                <h1>INDONESIA</h1>
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className=' hidden md:flex'>
                <BsPerson size={20} />
                <FiSearch size={20} />
            </div>

            {/* Hamburger Menu */}
            <div className='md:hidden'>
                <HiOutlineMenuAlt4 size={20} />
            </div>


            {/* Mobile Menu Dropdown */}
            <div className='flex flex-col absolute top-0 left-0 w-full bg-gray-100/90 px-4 py-7'>
                <ul>
                    <h1>INDONESIA</h1>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                </ul>
                <div>
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div>
                    <FaGithub className='icon' />
                    <FaInstagram className='icon' />
                    <FaLinkedinIn className='icon' />
                    <FaYoutube className='icon' />
                    <FaWhatsapp className='icon' />
                </div>
            </div>
        </div>
    </>
}

export default Navbar
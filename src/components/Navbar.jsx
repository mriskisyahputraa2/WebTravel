import { BsPerson } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

function Navbar() {
    return <>
        <div className="flex justify-between items-center h-20 px-4">
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
            <div className='md:hidden'>
                <HiOutlineMenuAlt4 size={20} />
            </div>
        </div>
    </>
}

export default Navbar
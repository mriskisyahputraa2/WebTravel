import { FaInstagram, FaGithub, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa'


function Footer() {
    return <>
        <div className="w-full bg-gray-100 pt-16">
            <div className="max-w-[1240px] mx-auto flex flex-col px-4">
                <div className='sm:flex justify-between items-center text-center'>
                    <h1>ACEH.</h1>
                    <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                        <FaGithub className='icon' />
                        <FaInstagram className='icon' />
                        <FaLinkedinIn className='icon' />
                        <FaYoutube className='icon' />
                        <FaWhatsapp className='icon' />
                    </div>
                </div>
                <div className='flex justify-between'>
                    <ul className='lg:flex'>
                        <li>About</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Advertising</li>
                    </ul>
                    <ul className='text-right lg:flex'>
                        <li>Home</li>
                        <li>Destinations</li>
                        <li>Travel</li>
                        <li>View</li>
                        <li>Book</li>
                    </ul>
                </div>
            </div>
            <div className='text-center mt-16 p-6 bg-white w-full'>
                <footer>&copy; Muhammad Rizki Syahputra 2023</footer>
            </div>
        </div>
    </>
}

export default Footer
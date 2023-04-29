import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

function Search() {
    return <>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem similique maiores quo? Atque, odit aliquid quo voluptatum minima dolores itaque aliquam quia similique cumque eaque repudiandae nam modi corrupti veritatis, repellendus repellat alias? Commodi tempore distinctio expedita assumenda, aliquam excepturi sint nihil quasi eos natus ex fugit quia consequuntur qui aliquid velit id perspiciatis dolores a, labore tempora. Unde eaque nihil voluptatibus minima debitis! Facere, quasi! Iusto explicabo sit velit eaque ducimus deleniti iure hic. Ducimus sequi dolores autem dolor.</p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button><RiCustomerService2Fill size={50} /></button>
                        <div>
                            <h3 className='py-2'>LEADING SERVICES</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button><MdOutlineTravelExplore size={50} /></button>
                        <div>
                            <h3 className='py-2'>LEADING SERVICES</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calender Check In*/}
            <div>
                <div className='border text-center'>
                    <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                    <p className='py-4'>12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 p-2'>BOOK NOW AND SAVE</p>
                </div>

                <form className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label>Destinations</label>
                        <select className='border rounded-md p-2'>
                            <option>Grande Antigua</option>
                            <option>Key West</option>
                            <option>Maldives</option>
                            <option>Cozumel</option>
                        </select>
                    </div>

                    <div className='flex flex-col my-4'>
                        <label>Check-In</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>

                    <div className='flex flex-col my-2'>
                        <label>Check-Out</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>

                    <button className='w-full my-4'>Rates & Availabilities</button>
                </form>
            </div>
        </div>

    </>
}

export default Search
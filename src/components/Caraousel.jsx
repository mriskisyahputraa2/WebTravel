import { useState } from "react"
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"

function Carousel() {
    const SlideImg = [
        {
            url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1610964029130-fed216b99544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1580110552993-9712f4198254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        }

    ]


    const [Slide, setSlide] = useState(0)
    const length = SlideImg.length
    console.log(length)

    const leftSlide = () => {
        setSlide(Slide === length - 1 ? 0 : Slide + 1)
    }

    const rightSlide = () => {
        setSlide(Slide === 0 ? length - 1 : Slide - 1)
    }

    return <>
        <div className="">
            <div className="relative max-w-[1240px] py-16 px-4 max-auto  flex justify-center ">
                <BsArrowLeftSquareFill onClick={leftSlide} className="absolute text-3xl top-[50%] left-8 cursor-pointer" /><br />
                <BsArrowRightSquareFill onClick={rightSlide} className="absolute text-3xl top-[50%] right-8  cursor-pointer" />
                {SlideImg.map((item, index) => (
                    <div className={index === Slide ? 'opacity-100' : 'opacity-0'}>
                        {index === Slide && (<img className="w-full rounded-md" src={item.url} alt="" />)}
                    </div>
                ))}
            </div>
        </div>

    </>
}
export default Carousel

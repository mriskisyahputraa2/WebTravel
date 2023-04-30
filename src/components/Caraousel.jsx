import { useState } from "react"
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"

function Carousel() {
    const SlideImg = [
        {
            url: 'https://pixabay.com/get/g646cf3142da2a9f00981e58122dc2aa83469e9d7748d020897d986ac12c7e27de7cc31f91daba8d614d4bcb06f00f907.jpg',
        },
        {
            url: 'https://pixabay.com/get/geab8af3e6fea2143e6d70bda97bd4001dc65d07e4baca25fc912e7801679ac6183ef27608d4bde4fb60fcbd53c0ed6c4.jpg',
        },
        {
            url: 'https://pixabay.com/get/g1a2b9786604bc3f038e3d71c812755880be02dbca5a5dfc9e634668bbfdc94f6774ed16e90e8ab132f615205c28f2a2e.jpg',
        },
        {
            url: 'https://pixabay.com/get/g995b0ecb6e9b69c1f93417709af67d00bca4722326e782bd2300219c316e48aa5e20ee1d3cedcea614564f8bd05061d9.jpg'
        },
        {
            url: 'https://pixabay.com/get/g66c4531acb03446ec77bbae052dc96d55ea505a97d8dd50a48540349983a4b3fa201e6b3d895326630e4cfe5a0db2f4d.jpg'
        },
        {
            url: 'https://pixabay.com/get/gfffdadc885afb3904e45077297e582b12d9c65d2a585530dfba804eeccc7ac3e4c6e96e28d30aafd638b2037ceeab155.jpg'
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
        <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
            <BsArrowLeftSquareFill onClick={leftSlide} className="absolute text-3xl top-[50%] left-8 cursor-pointer text-white" /><br />
            <BsArrowRightSquareFill onClick={rightSlide} className="absolute text-3xl top-[50%] right-8  cursor-pointer text-white" />

            {SlideImg.map((item, index) => (
                <div className={index === Slide ? 'opacity-100' : 'opacity-0'}>
                    {index === Slide && (<img className="w-full rounded-md" src={item.url} alt="" />)}
                </div>
            ))}
        </div>

    </>
}
export default Carousel

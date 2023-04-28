import PanatVid from '../assets/pantai.mp4'

function Hero() {
    return <>
        <div className="w-full h-screen ">
            <video className='w-full h-full object-cover' src={PanatVid} autoPlay loop muted />
        </div>
    </>
}

export default Hero
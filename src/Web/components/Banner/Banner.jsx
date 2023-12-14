import imgBanner from '../../assets/images/capa-mike-harvey.webp'

export default function Banner() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center overflow-hidden py-12 lg:py-0">
        <div className="w-full lg:w-1/2 h-44 lg:h-full flex flex-col justify-center items-center">
            <h1 className="text-[#ff0000] text-7xl sm:text-[9rem] lg:text-[11rem] font-bold capitalize text-center flex flex-col justify-center items-center -mt-10">SUITS <span className="text-white text-xl sm:text-[2.5rem] lg:text-5xl">HOMENS DE TERNO</span></h1>
        </div>
        <div className="w-full lg:w-1/2 lg:h-screen flex flex-col justify-center items-center lg:items-start">
            <img className='w-[550px]' src={imgBanner} alt="" />
        </div>
    </div>
  )
}

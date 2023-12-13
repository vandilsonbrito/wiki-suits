import netflixLogo from '../../assets/images/netflix-logo.png'

function Watch() {
  return (
    <div className="w-full h-full py-16 pb-20 text-white flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
        <p className='uppercase text-base md:text-lg'>Disponível para assistir em</p>
        <a href="https://www.netflix.com/br/title/70195800" rel='noreferrer' target='_blank'>
            <img className='bg-slate-100 w-16 p-2 rounded-full' style={{ boxShadow: '0px 7px 35px 0px rgba(100, 100, 111, 0.582)' }} src={netflixLogo} alt="Netflix logo" />
        </a>
    </div>
  )
}

export default Watch

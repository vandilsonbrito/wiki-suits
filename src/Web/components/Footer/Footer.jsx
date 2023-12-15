
import imgHarveyMike from '../../assets/images/harvey-mike.png';


export default function Footer() {
  return (
    <div className="w-full h-full text-white flex flex-col items-center justify-center gap-3">
        <div className="w-full flex justify-center">
            <img className="w-80 md:w-96" src={imgHarveyMike} alt="" />
        </div>
        <div className='w-full flex flex-col items-center pb-2'>
          <h5 className="capitalize text-xs lg:text-sm m-0">Informações retiradas da internet.</h5>
          <h5 className="text-xs ">Desenvolvido por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/vandilson-brito-b791b3216/">Vandilson Brito.</a></h5>
        </div>
    </div>
  )
}

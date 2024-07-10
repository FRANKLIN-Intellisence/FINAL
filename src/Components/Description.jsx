import { RiStarSLine } from "react-icons/ri" 
import Perfume from '../assets/Frame 47.png'
import Plus from '../assets/Group 32.png'
const Description = () => {
    return(
        <div className="pt-0 lg:pt-2 lg:pl-[6rem] lg:pr-[6rem] pl-2 pr-2">
            <div className='grid lg:grid-cols-2 grid-col-1 md:grid-col-2 gap-[2rem] items-center p-[1.5rem] sm:justify-center'>
                <div>
                    <img src={Perfume} alt="Image" className="lg:h-[17rem] h-[10rem]"/>
                </div>
                <div className="border-[1.5px] h-[12rem] lg:h-[17rem] p-3 lg:p-[1.5rem]">
                    <div>
                        <h4 className="block text-1.5xl lg:text-3xl text-[#74001b] font-semibold mb-[1.2rem]">
                            Club de Nuit Perfume
                        </h4>
                    </div>
                    <div className="flex gap-2 lg:gap-6 items-center justify-start mb-[1.2rem]">
                        <span>#100000</span>
                        <span className="flex">
                            <RiStarSLine />
                            <RiStarSLine />
                            <RiStarSLine />
                            <RiStarSLine />
                            <RiStarSLine />
                        </span>
                    </div>
                    <div className="flex items-center gap-[1rem] justify-start mb-[1.2rem]">
                        <p>Quantity</p>
                        <img src={Plus} alt="" className=" h-[1.2rem]" />
                    </div>
                    <a href="/CartPage">
                        <button className="bg-[#74001b] text-[#fbfbfb] w-[100%] lg:w-[50%] m-auto 
                                            pt-2 pb-2 h-10 rounded-[15px] hover:bg-[#ffd700] hover:text-[#74001b]">
                            Add to Cart
                        </button>
                    </a>
                </div>
            </div>

            <div className="border-[2px] mt-[0.5rem] lg:mt=[1.5rem] p-2 lg:p-4">
                <p className="text-1xl lg:text-2xl ">Crafted for the discerning individual, Club de nuit is more than just a fragrance;
                    It is an expression of elegance and grace. Housed in an elegant black bottle, this perfume is
                    the perfect addition to your collection, promising to elevate every moment with its enchanting
                    aroma. Ideal for both day and night, let Club de nuit be your signature scent, leaving a trail of sophistication
                    everywhere you go. 
                </p>
            </div>
        </div>
    )
}

export default Description;
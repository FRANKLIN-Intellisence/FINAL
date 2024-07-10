import Plus from '../assets/Group 32.png';
import Perfume from '../assets/Frame 47.png';
const Selected = () => {
    return(
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 border-[1px] p-[1.5rem] items-center
                        pr-[4rem] mb-[1rem]'>
            <div>
                <img src={Perfume} className='h-[12rem]' alt="Perfume" />
            </div>

            <div className='flex flex-col gap-[8rem]'>
                <div className='flex flex-row items-center gap-[5rem]'>
                    <p className='text-[1.2rem] text-[#74001b] font-semibold'>Club de nuit Perfume</p>
                    <span>#100000</span>
                </div>
                <div className='flex flex-row gap-10'>
                    <img src={Plus} alt="" className='h-[2rem]' />
                    <button className='text-1.5xl text-[#fbfbfb] bg-[#74001b] pt-[0.2rem] pb-[0.2rem]
                                        pl-[2rem] pr-[2rem] rounded-[10px] hover:bg-[#ffd700] hover:text-[#74001b]'>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
};

const Cart = () => {
    return(
        <div className='p-[1rem] lg:pl-[4rem] lg:pt-0 grid grid-cols-1 lg:grid-cols-2 items-start'>
            <div>
                <h2 className='font-semibold text-3xl text-[#74001b] mb-[1rem] lg:mb[1.5rem]'>
                    My Cart 
                    <span className=' ml-2 h-2 w-10 p-1 rounded-[50%]  text-[#fff]  bg-[#8c7600]'>2</span>
                </h2>
                <Selected />
                <Selected />
            </div>
            <div className='mt-[3.5rem] border-[2px] w-[50%] m-auto bg-[#fff]'>
                <h3 className='block text-[1.2rem] text-[#74001b] pt-[0.4rem] pb-[0.4rem] pl-2 border-b-2'>Cart Summary</h3>
                <p className='flex flex-row justify-between items-center pt-[0.3rem]
                                pb-[0.3rem] pl-2 pr-2 border-b-2 font-light text-[1.1rem]'>
                    <span>Subtotal</span>
                    <span>#200000</span>
                </p>
                <a href="/CheckoutPage">
                    <button className='block pt-[0.3rem] pb-[0.3rem] bg-[#8c7600] text-[#fbfbfb] rounded-[10px]
                                        w-[80%] m-auto mt-[0.5rem] hover:bg-[#535252] hover:text-[#161515]'>
                        Checkout
                    </button>
                </a>
                <a href="/">
                    <button className='block pt-[0.3rem] pb-[0.3rem] bg-[#535252] text-[#161515] rounded-[10px]
                                        w-[80%] m-auto mt-[1rem] mb-[1rem] hover:bg-[#8c7600] hover:text-[#fbfbfb]'>
                        Continue shopping
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Cart;
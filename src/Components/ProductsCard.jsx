import Perfume from '../../src/assets/Frame 57.png'
const products = [
    {
        id: 1, 
        name: 'Club de Nuit Perfume', 
        price: '#100000',
        image: Perfume
    }
    ,
    {
        id: 2, 
        name: 'Club de Nuit Perfume', 
        price: '#100000',
        image: Perfume
    }
    ,
    {
        id: 3, 
        name: 'Club de Nuit Perfume', 
        price: '#100000',
        image: Perfume
    }
    ,
    {
        id: 4, 
        name: 'Club de Nuit Perfume', 
        price: '#100000',
        image: Perfume
    }
];

const ProductsCard = () => {
    return(
        <div className='grid grid-cols-1 lg:grid-cols-4 p-[2rem] gap-4 md:grid-cols-2'>
            {products.map((product) => (
                <div key={product.id} className='bg-[#fbfbfb]  border-[1px] rounded-[10px] p-[1rem] '>
                    <img src={product.image} alt="Perfume" className='w-[90%] m-auto' />
                    <div className='w-[90%] m-auto p-2 text-center'>
                        <h4 className='text-1xl text-[#74001d] font-semibold'>{product.name}</h4>
                        <p className='font-semibold'>{product.price}</p>
                        <a href="/CartPage">
                            <button className='border bg-[#74001d] text-[#fbfbfb] pt-2 pl-4 pr-4 pb-2 w-full text-center
                                                hover:bg-[#ffd700] hover:text-[#74001d] rounded-[15px]'>
                                Add to Cart
                            </button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProductsCard;

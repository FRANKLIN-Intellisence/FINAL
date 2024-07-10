import Nav from '../Components/Nav';
import ProductsCard from '../Components/ProductsCard';

const Home = () => {
    return (
       <div className='flex flex-col'>
         <Nav/>
         <div className='pl-[2.2rem]'>
            <h4 className='text-[#74001b] text-2xl font-semibold'>For Men: 12 Products</h4>
         </div>
         <ProductsCard/>
         <ProductsCard/>
         <ProductsCard/>
         <div className='pl-[2.2rem] mt-[2rem]'>
            <h4 className='text-[#74001b] text-2xl font-semibold'>For Women: 8 Products</h4>
         </div>
         <ProductsCard/>
         <ProductsCard/>
       </div>
    )
}

export default Home;
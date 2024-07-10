const Checkout = () => {
    return(
        <div className="w-[60%] m-auto border-[2px] p-[2rem]">
            <div>
                <h1 className="text-3xl font-bold mb-[1rem]">Delivery Information</h1>
            </div>
            <div>
                <div>
                    <label htmlFor="firstName" className="block mb-2 font-semibold">FIRST NAME</label>
                    <input type="text" id="firstName" placeholder="FIRST NAME" className="h-[3rem] border-[1px]
                                outline-none w-full pl-2"/>
                </div>
                <div>
                    <label htmlFor="lastName" className="block mb-2 font-semibold">LAST NAME</label>
                    <input type="text" id="lastName" placeholder="LAST NAME" className="h-[3rem] border-[1px]
                                outline-none w-full pl-2"/>
                </div>
            </div>
            <div>
                <label htmlFor="address" className="block mb-2 mt-2 font-semibold">ADDRESS</label>
                <input type="text" placeholder="ADDRESS" id="address" className=" h-[3rem] border-[1px]
                                outline-none w-full pl-2" />
            </div>
            <div className="flex flex-row items-center justify-between">
                <div>
                    <label htmlFor="city" className="block mb-2 mt-2 font-semibold">CITY/TOWN</label>
                    <input type="text" placeholder="CITY/TOWN" id="city" className=" h-[3rem] border-[1px]
                                outline-none w-full pl-2"/>
                </div>
                <div>
                    <label htmlFor="zip" className="block mb-2 mt-2 font-semibold">ZIP CODE</label>
                    <input type="text" placeholder="ZIP CODE" id="zip" className=" h-[3rem] border-[1px]
                                outline-none w-full pl-2" />
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor="number"  className="block mb-2 mt-2 font-semibold">MOBILE NUMBER</label>
                    <input type="text" id="number" placeholder="MOBILE NUMBER" className=" h-[3rem] border-[1px]
                                outline-none w-full pl-2" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 mt-2 font-semibold">EMAIL</label>
                    <input type="email" id="email" placeholder="EMAIL ADDRESS" className=" h-[3rem] border-[1px]
                                outline-none w-full pl-2" />
                </div>
            </div>
        </div>
    )
}

export default Checkout;
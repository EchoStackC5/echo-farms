import product4 from "../assets/product4.svg"

export default function Productimage({isVisible, setisVisible}) {
    return (
        <div style={{display: isVisible ? 'flex' : 'none'}} className="flex flex-col">
            <div className="md:w-[360px] h-[445px] pt-15">
                <img src={product4} alt="" />
            </div>
            <div className="md:py-3 md:w-[360px] bg-white border border-light-border flex flex-col rounded-sm h-75">
                <div>
                    <h1 className="font-lato text-lg">All Purpose Fertilizer. Heavy-Duty Crop Feeding</h1>
                    <p className="font-lato text-sm text-secondary-text md:mt-2">Powerful and durable bulldozer ideal for clearing lands</p>
                    <div className="flex flex-col justify-between">
                        <h1 className="font-lato font-bold mt-3"><span className="text-xs">GHC</span> 50,000.00</h1>
                        <p className="font-lato text-secondary-text mt-2">Greater Accra, East Legon</p>
                        <div className="group mt-3">
                            <button className="font-lato md:h-8 md:w-70 bg-white border border-green-buuton rounded-full mb-3 hover:bg-yellow-button group-hover:text-black transition-colors text-primary-color cursor-pointer">Edit Ad</button>
                        </div>
                        <div className="group">
                            <button className="font-lato md:h-8 md:w-70 bg-white border border-green-buuton rounded-full group-hover:bg-yellow-button group-hover:text-black transition-colors text-primary-color cursor-pointer">Delete Ad</button>
                        </div>
                        <div className="group">
                            <button className="font-lato mt-2 md:h-8 md:w-70 bg-white border border-green-buuton rounded-full group-hover:bg-yellow-button group-hover:text-black transition-colors text-primary-color cursor-pointer" onClick={()=> {setisVisible(false)}}>Close Ad</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
// import adHeroImage from "./assets/adheroImage.jpg"

export default function AdHero() {
    return (
         <div className="w-full h-[300px] relative bg-cover bg-center bg-no-repeat bg-[url('./assets/images/markerter.jpg')] rounded-4xl">
             <div className="absolute inset-0 bg-black/50 rounded-4xl"></div>
           <div className="relative z-10 flex flex-col items-Start gap-4 justify-center h-full px-6">
               <p className="text-white text-6xl font-bold font-poppin">Start Selling</p>
               <p className="text-white text-lg font-normal font-inter">Post your ad , connect with <br></br>  Ghana's agricultural community. </p>
             </div>
         </div>
    )
}
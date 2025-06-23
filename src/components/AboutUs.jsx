import { Link } from "react-router";
import drakulaImage from "../assets/drakula.jpg";
export default function AboutUs(){
    return(
        <section className=" z-100">
                <h1 className="font-inter text-2xl text-white">ALL YOUR NEEDS IN ONE PLACE</h1>
                <div>
                    <img src= {drakulaImage} alt="product image"></img>
                    <div>
                        <Link to="/products">Crop Protection & Fertilizers</Link>
                        <p>Explore a wide range of pesticides, herbicides, organic treatments, and soil enhancers designed to safeguard your crops and enrich soil health. </p>

                    </div>
                </div>       
        </section>
    )
}
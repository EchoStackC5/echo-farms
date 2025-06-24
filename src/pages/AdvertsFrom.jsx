import SubmitButton from "@/components/SubmitButton"
import useSWR from "swr";
import { apiClient } from "@/api/client";
export default function AdvertsForm(){
    // const navigae = useNavigate();
    // const { data, isLoading, error} = useSWR("/colleges", apiFetcher);
    
    const postPostAdverts = async (data) => {
        try {
            const response = await apiClient.post("/adverts", data, {
              
            })
            console.log(response.data);
                
        } catch (error) {
            console.log(error);
            
        }

        
    }
    return(
        <form action={postPostAdverts}  className="flex flex-col">
            <input name="productTitle" type="text" placeholder="product title" className="border-gray-400 px-5 py-5"/>
            <input name="description" type="text" placeholder="product description" className="border-gray-400 px-5 py-5"/>
        
                 <select multiple name="category" className="h-10 w-165 bg-white text-xs rounded-md px-2">
                                <option value="farm"> Farm Equipment</option>
                                <option value="cropProtection"> Crop Protection</option>
                                <option value="science-fair"> Science Fair</option>
                                <option value="business"> Business</option>
                 </select>
                 <select  name="location" className="h-10 w-165 bg-white text-xs rounded-md px-2">
                                <option value="farm"> Accra</option>
                                <option value="cropProtection"> Kumasi</option>
                                <option value="science-fair"> Ho</option>
                                <option value="business"> Tema</option>
                 </select>
            
             <input name="price" type="number" placeholder="enter price" className="border-gray-400 px-5 py-5"/>
              <select  name="plan" className="h-10 w-165 bg-white text-xs rounded-md px-2">
                                <option value="basic">Basic</option>
                                <option value="free"> Free</option>
                                <option value="enterprise" > Enterprise</option>
                                
                 </select>
                 <input name="images" type="file" multiple placeholder="uplaod products"/>
                 <SubmitButton title={"Post Ad"} className=" px-3 py-2 rounded-md text-white bg-primary-color hover:bg-green-800" />
        </form>
    )
}
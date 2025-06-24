import { useFormStatus } from "react-dom";

export default function SubmitButton({title,className}){
    const {pending} = useFormStatus();
    return(
        <div>
           <button className={`${className} ${pending && "animate-pulse"}`}
            type="submit"
            disabled={pending}>
                {pending ? "loading..." : title}

           </button>
        </div>
    )
}
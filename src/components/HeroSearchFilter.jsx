import { MapPin } from "lucide-react"

export default function HeroSearchFilter() {
    return (
        <div className="mx-auto flex justify-center items-center mt-14 mb-20">
            <form className="relative w-full max-w-3xl">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
                <input
                    type="search"
                    placeholder="search your location"
                    className="text-white outline-none bg-white/10 w-full py-3 px-4 pl-10 rounded-md">
                </input>
            </form>
        </div>
    )
}
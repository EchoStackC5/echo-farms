import { apiClient } from "@/api/client"
import { useState, useEffect } from "react"
import { X, ChevronDown } from "lucide-react"
import SubmitButton from "./SubmitButton"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { SquarePen, CheckCircle } from "lucide-react"

export default function EditAd({ product }) {
   const [toast, setToast] = useState({ show: false, message: '', type: '' })

    const showToast = (message, type) => {
        setToast({ show: true, message, type })
        setTimeout(() => {
            setToast({ show: false, message: '', type: '' })
        }, 3000)
    }


  const [advert, setadvert] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const getAdvert = () => {
    apiClient.get(`/adverts/${product?.id}`)
      .then((response) => {
        console.log(response.data);
        setadvert(response.data);
      })
      .catch((error) => {
        console.error("error fetching advert:", error);
      })
  }

  useEffect(getAdvert, [product]);

  const patchAdvert = async (data) => {
    try {
      const response = await apiClient.patch(`/adverts/${product?.id}`, data, {
        // header:{
        //     "Content-Type": "application/json"
        // }
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
        }
      });
      console.log(response.data)
      showToast('Ad Updated successfully!', 'success')
            
           
            setTimeout(() => {
                window.location.reload()
            }, 1500)

      // setShowSuccess(true);
      // setErrorMessage('');


    } catch (error) {
      console.error('There was an error editing this Ad', error);
      setErrorMessage(error.response?.data?.message || error.message || 'An error occurred');
      setShowSuccess(false);
    }
  }

  return (
    <>
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className='font-lato bg-darkest-heading hover:bg-primary-color hover:text-darkest-heading text-white w-[300px] py-2 border-darkest-heading  border  rounded-full group-hover:bg-yellow-button group-hover:text-black transition-colors  cursor-pointer'>
          Edit Ad
          {/* <span className="sm:hidden">Edit</span> */}
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed bg-white p-3 sm:p-4 md:p-6 rounded-md shadow-md w-[95vw] sm:w-[90vw] md:w-full max-w-2xl mx-auto">
        {/* Success Message Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 rounded-md">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-2">Edit Successful!</h3>
              <p className="text-gray-600">The Ad has been updated successfully.</p>
              {/* <p className="text-sm text-gray-500 mt-2">Refreshing page...</p> */}
            </div>
          </div>
        )}

        <form action={patchAdvert}
          className="bg-white max-w-lg mx-auto p-6 rounded-lg shadow-lg space-y-5 font-roboto"
        >
          <h2 className="text-xl font-semibold text-green-700">Edit ad</h2>
          {/* <p className="text-sm text-gray-500">Provide the fields below to upload an ad</p> */}

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Product Title <span className="text-red-500">*</span>
            </label>
            <input
              name="productTitle"
              type="text"
              placeholder="Enter product title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400"
              required
              defaultValue={advert?.productTitle}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              placeholder="Give a brief description about the product"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400"
              rows={4}
              required
              defaultValue={advert?.description}
            />
          </div>

          <div className="w-full max-w-md">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Category <span className="text-red-500">*</span>
            </label>
            <select multiple
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring focus:border-green-400"
              name="category">
              <option>Farm Machinery</option>
              <option>Crop Protection</option>
              <option>Seeds & Planting Materials</option>
              <option>Animal Husbandry Products</option>
              <option>Drones</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Select Location <span className="text-red-500">*</span>
              </label>
              <select
                name="location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring focus:border-green-400"
              >
                <option>Greater Accra, Tema</option>
                <option>Ashanti, Kumasi</option>
                <option>Volta, Ho</option>
                <option>Western, Takoradi</option>
                <option>Tema</option>
                <option>Eastern, Koforidua</option>
                <option>Central, Cape Coast</option>
                <option>Northern, Tamale</option>
                <option>Upper East, Bolgatanga</option>
                <option>Upper West, Wa</option>
                <option>Bono, Sunyani</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Product Price <span className="text-red-500">*</span>
              </label>
              <input
                name="price"
                type="number"
                placeholder="Ghc 0.00"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-400"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Choose Plan <span className="text-red-500">*</span>
            </label>
            <select
              name="plan"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring focus:border-green-400"
            >
              <option value="Basic">Basic</option>
              <option value="Free Trial">Free Trial</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Add Photos <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500">Add a maximum of three photos</p>
            <input
              name="images"
              type="file"
              multiple
              accept="image/,video/"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring focus:border-green-400"
            />
          </div>

          <div className="pt-4">
            <SubmitButton
              title={"Post Ad"}
              className="w-full py-2 rounded-md text-white bg-green-700 hover:bg-green-800"
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
    {toast.show && (
                <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${
                    toast.type === 'success' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                }`}>
                    <div className="flex items-center space-x-2">
                        {toast.type === 'success' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        )}
                        <span className="font-medium">{toast.message}</span>
                    </div>
                </div>
            )}
            </>
  )
}
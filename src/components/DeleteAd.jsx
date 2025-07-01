import { apiClient } from "@/api/client"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function DeleteAd({ id }) {
    const [toast, setToast] = useState({ show: false, message: '', type: '' })

    const showToast = (message, type) => {
        setToast({ show: true, message, type })
        setTimeout(() => {
            setToast({ show: false, message: '', type: '' })
        }, 3000)
    }

    const deleteAd = async () => {
        try {
            const response = await apiClient.delete(`/adverts/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
                }
            })
            
            console.log(response.data)
            showToast('Ad deleted successfully!', 'success')
            
           
            setTimeout(() => {
                window.location.reload()
            }, 1500)
            
        } catch (error) {
            console.error("Error deleting Ad:", error)
            showToast('Failed to delete ad. Please try again.', 'error')
        }
    }

    return (
        <>
            <div className="group">
                
    <AlertDialog>
  <AlertDialogTrigger asChild>
    <button
      className="font-lato w-full py-2 bg-transparent border border-darkest-heading text-darkest-heading rounded-full group-hover:bg-yellow-button group-hover:text-black transition-colors cursor-pointer"
    >
      Delete Ad
    </button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        ad and remove ad data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={deleteAd}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
                
            </div>

            {/* Toast Notification */}
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
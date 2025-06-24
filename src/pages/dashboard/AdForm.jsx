import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { categoryOptions } from '@/components/CategoryOption';
import Select from 'react-select';
import RegionSelect from '@/components/LocationData';
import { plans } from '@/components/Plans';
import SubmitButton from '@/components/SubmitButton';
import { apiClient } from '@/api/client';
import { useNavigate } from 'react-router';

export default function AdForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const navigae = useNavigate();

    const postAd = async (data) => {
        try {
            const response = await apiClient.post("/adverts", data, {

            })
            console.log(response.data);


        } catch (error) {
            console.log(error);

        }


    }


    const totalSteps = 4;

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };



    const handleSubmit = () => {
        console.log('Form submitted!');
        //will fecth api here
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <Card className="min-h-[500px] w-full">
                        <CardHeader>
                            <CardTitle className="text-xl md:text-2xl font-lato text-primary-color font-medium">Upload an Ad</CardTitle>
                            <CardDescription className="text-secondary-text font-roboto">
                                Provide the fields below to upload an ad
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-8">
                                <div className="grid gap-2">
                                    <Label className="text-secondary-text text-xs sm:text-lg font-normal">Product Title <span className="text-red-400">*</span></Label>
                                    <Input
                                        type="text"
                                        name="productTitle"
                                        required
                                        className="border border-dark-border outline-none focus-visible:outline-none focus:ring-0"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name" className="text-secondary-text text-xs sm:text-lg font-normal">Product Description <span className="text-red-400">*</span></Label>
                                    <textarea
                                        name="description"
                                        type="text"
                                        required
                                        className="border border-dark-border outline-none focus-visible:outline-none focus:ring-0 rounded-md"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label className="text-secondary-text text-xs sm:text-sm font-normal">Product Price (Ghc) <span className="text-red-400">*</span></Label>
                                    <Input
                                        type="number"
                                        name="price"
                                        required
                                        className="border border-light-border outline-none focus-visible:outline-none focus:ring-0"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );

            case 1:
                return (
                    <Card className="min-h-[500px] w-full">
                        <CardHeader>
                            <CardTitle className="text-xl md:text-2xl font-lato text-primary-color font-medium">Category & Location</CardTitle>
                            <CardDescription className="text-secondary-text font-roboto">
                                Select category and location for your ad
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-8">
                                <div className='flex flex-col gap-2'>
                                    <label className='text-xs sm:text-lg font-normal text-secondary-text'>
                                        Select Ad Category <span className='text-red-500'>*</span>
                                    </label>
                                    <Select
                                        options={categoryOptions}
                                        isMulti
                                        name='category'
                                        required
                                        placeholder='Select Category'
                                        className='react-select-container text-sm sm:text-base'
                                        classNamePrefix="react-select"
                                        styles={{
                                            control: (base, state) => ({
                                                ...base,
                                                minHeight: '44px',
                                                fontSize: window.innerWidth < 640 ? '14px' : '16px',
                                                borderColor: state.isFocused ? '#10b981' : '#d1d5db',
                                                borderRadius: '6px',
                                                borderWidth: '1px',
                                                boxShadow: state.isFocused ? '0 0 0 1px #10b981' : 'none',
                                                '&:hover': {
                                                    borderColor: state.isFocused ? '#10b981' : '#9ca3af'
                                                },
                                                backgroundColor: '#f9fafb',
                                                padding: '2px 4px'
                                            }),
                                            multiValue: (base) => ({
                                                ...base,
                                                backgroundColor: '#e8f5f0',
                                                borderRadius: '20px',
                                                border: '1px solid #10b981',
                                                fontSize: window.innerWidth < 640 ? '12px' : '14px',
                                                padding: '2px 8px',
                                                margin: '2px'
                                            }),
                                            multiValueLabel: (base) => ({
                                                ...base,
                                                color: '#065f46',
                                                fontWeight: '500',
                                                padding: '2px 4px'
                                            }),
                                            multiValueRemove: (base) => ({
                                                ...base,
                                                color: '#065f46',
                                                backgroundColor: 'transparent',
                                                borderRadius: '50%',
                                                '&:hover': {
                                                    backgroundColor: '#10b981',
                                                    color: 'white'
                                                }
                                            }),
                                            placeholder: (base) => ({
                                                ...base,
                                                color: '#6b7280',
                                                fontSize: window.innerWidth < 640 ? '14px' : '16px'
                                            }),
                                            dropdownIndicator: (base) => ({
                                                ...base,
                                                color: '#6b7280',
                                                '&:hover': {
                                                    color: '#10b981'
                                                }
                                            }),
                                            clearIndicator: (base) => ({
                                                ...base,
                                                color: '#6b7280',
                                                '&:hover': {
                                                    color: '#ef4444'
                                                }
                                            }),
                                            option: (base, state) => ({
                                                ...base,
                                                backgroundColor: state.isFocused ? '#f0fdf4' : 'white',
                                                color: state.isFocused ? '#065f46' : '#374151',
                                                '&:hover': {
                                                    backgroundColor: '#f0fdf4',
                                                    color: '#065f46'
                                                }
                                            }),
                                            menu: (base) => ({
                                                ...base,
                                                borderRadius: '12px',
                                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                                border: '1px solid #e5e7eb'
                                            }),
                                            menuList: (base) => ({
                                                ...base,
                                                borderRadius: '12px',
                                                padding: '4px'
                                            })
                                        }}
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='text-xs sm:text-lg font-normal text-secondary-text'>
                                        Select Your Location <span className='text-red-500'>*</span>
                                    </label>
                                    <RegionSelect
                                        value={selectedLocation}
                                        onChange={setSelectedLocation}
                                        name='location'
                                        required
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );

            case 2:
                return (
                    <Card className="min-h-[500px] w-full">
                        <CardHeader>
                            <CardTitle className="text-xl md:text-2xl font-lato text-primary-color font-medium">Media Upload</CardTitle>
                            <CardDescription className="text-secondary-text font-roboto">
                                Add photos and videos of your product
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-8">
                                <div className="grid gap-2">
                                    <Label className="text-secondary-text text-xs sm:text-lg font-normal">
                                        Add Photos and Videos
                                        <br />
                                        <span className='text-sm'>(Add a maximum of three files)</span>
                                        <span className="text-red-400">*</span>
                                    </Label>
                                    <Input
                                        type="file"
                                        name="images"
                                        multiple
                                        accept="video/*,.jpg,.jpeg,.png"
                                        required
                                        className="border-2 border-light-border outline-none focus-visible:outline-none focus:ring-0 w-full h-[200px] bg-backgrounds"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );

            case 3:
                return (
                    <Card className="min-h-[500px] w-full">
                        <CardHeader>
                            <CardTitle className="text-xl md:text-2xl font-lato text-primary-color font-medium">Promote your Ad</CardTitle>
                            <CardDescription className="text-secondary-text font-roboto">
                                Choose a plan to boost your ad visibility
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-4">
                                {plans.map((plan) => (
                                    <div
                                        key={plan.id}
                                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${selectedPlan === plan.id
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                                            }`}
                                        onClick={() => setSelectedPlan(plan.id)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-medium text-gray-900 mb-2">{plan.title}</h4>
                                                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    {plan.duration}
                                                </span>
                                            </div>
                                            {plan.price && (
                                                <div className="text-right">
                                                    <span className="text-lg font-semibold text-gray-900">{plan.price}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                );

            default:
                return null;
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            {/* Progress Indicator */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                        Step {currentStep + 1} of {totalSteps}
                    </span>
                    <span className="text-sm text-gray-500">
                        {Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Form Step */}
            <form action={postAd} className="mb-6">
                {renderStep()}
            </form>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
                <Button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    variant="outline"
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </Button>

                {currentStep === totalSteps - 1 ? (
                    <SubmitButton onClick={handleSubmit} title={"Post Ad"} className=" px-3 py-2 rounded-md text-white bg-primary-color hover:bg-green-800" />
                    // <button 
                    //     onClick={handleSubmit}
                    //     className='py-3 px-3 bg-[#13813A] text-white rounded-full text-lg w-auto '
                    // >
                    //     Submit
                    // </button>
                ) : (
                    <Button onClick={handleNext}>
                        Next
                    </Button>
                )}
            </div>
        </div>

    );
}
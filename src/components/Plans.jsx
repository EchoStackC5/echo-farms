 import Select from "react-select";
 export const plans = [
    {
      id: 'free',
      label: 'Free Trial',
      value:"Free Trial",
      duration: '7 Days',
      price: null
    },
    {
      id: 'basic',
      label: 'Basic',
      duration: '14 Days',
      value: "Basic",
      price: 'GHC 30'
    },
    {
      id: 'enterprise',
      label: 'Enterprise',
      value: 'Enterprise',
      duration: '30 Days',
      price: 'GHC 200'
    }
  ];
  export default function AdPlans(){
    return(
      <Select
      options={plans}
      name="plan"
      />
    )
  }
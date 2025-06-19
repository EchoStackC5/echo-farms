import { RingLoader } from "react-spinners";

const ButtonLoader = () => {
  return (
    <RingLoader 
      visible={true}
      height="40"
      width="40"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#fffff", "#4fa94d", "#fffff", "#4fa94d", "ffff"]}
    />
  );
};

export default ButtonLoader;

import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";
const Properties = ({properties}) => {
    const {title, image, location, description, status, price} = properties;
    console.log(properties)
    return (
       <Link to={'/showDetail'}>
       <div>
         <div className="mt-20 flex flex-col w-[400px]">
         <p className="absolute bg-[#3e98e696] text-[20px] font-semibold text-white mb-[360px] px-20 pb-2 rounded-br-[100%]"> {status} </p>
            <img className="w-[400px] h-[300px] items-center" src={image} alt="" />
            <p className="absolute mt-[254px] rounded-tr-3xl py-2 text-[20px] px-6 bg-black text-blue-500">{price}</p>
            <h1 className="text-[20px] font-bold text-[#111] my-2">{title}</h1>
            <p className="text-[#3e97e6] font-semibold flex items-center">
                 <IoLocationSharp className="mr-4"></IoLocationSharp> {location} </p>
            <p className="text-[#1111117a] font-medium mt-2"> {description} </p>
            </div>
       </div>
       </Link>
    );
};

export default Properties;
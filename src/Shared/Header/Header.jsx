import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
    return (
        <div className="navbar flex justify-center bg-[#1111] border-b border-[#1111111c]">
                <p className="border-r border-[#1111113b] px-6 text-[#1c1a5a]"> <SlLocationPin className="mr-3" ></SlLocationPin> Road - Dhaka </p>
                <p className="border-r border-[#1111113b] px-6 text-[#1c1a5a]"> <FiPhone className="mr-3" ></FiPhone> 04546789990 </p>
                <p className="border-r border-[#1111113b] px-6 text-[#1c1a5a]"> <LuMail className="mr-3" ></LuMail> Luxury@Gmail.com </p>
                <p className="px-6"> <IoIosSearch className="text-2xl text-[#1c1a5a]" ></IoIosSearch></p>
            </div>
    );
};

export default Header;
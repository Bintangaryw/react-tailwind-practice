import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex uppercase">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={navHandler} className=" md:hidden ">
        <div className="p-4">{!nav ? <AiOutlineClose /> : <AiOutlineMenu />}</div>
      </div>

      <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 backdrop-blur bg-[#374440] bg-opacity-50 ease-in-out duration-500 md:hidden" : "fixed left-[-100%]"}>
        <ul className="pt-24 uppercase ">
          <li className="p-4 border-b border-b-[#396356]">Home</li>
          <li className="p-4 border-b border-b-[#396356]">Company</li>
          <li className="p-4 border-b border-b-[#396356]">Resources</li>
          <li className="p-4 border-b border-b-[#396356]">About</li>
          <li className="p-4 border-b border-b-[#396356]">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

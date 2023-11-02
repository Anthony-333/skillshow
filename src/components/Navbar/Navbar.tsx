import { HiMenuAlt2 } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import React from "react";

const navlinks = [
  {
    name: "Browse Talents",
    path: "/talents",
  },
  {
    name: "Meet The Team",
    path: "/team",
  },
  {
    name: "Flex your skills",
    path: "/signup",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  return (
    <div>
      <div
        className={`flex items-center justify-between py-10  ${
          isMenuOpen && "border-b border-gray-800"
        }`}
      >
        <div className="flex gap-2">
          <button
            className={`text-white text-3xl lg:hidden`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <p>
                <CgClose />
              </p>
            ) : (
              <p>
                <HiMenuAlt2 />
              </p>
            )}
          </button>
          <div>
            <h1 className="text-white text-3xl pt-1" id="brand_name">
              Skilllshow
            </h1>
          </div>
        </div>

        <div className="hidden lg:flex gap-9 ">
          {navlinks.map((item, i) => (
            <div key={i} className="text-white">
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <h1 className="text-[#E7E7E7] hidden lg:flex">Login</h1>

          <div className="bg-white rounded-full ">
            <button
              className="flex items-center gap-2 px-3 py-2 font-medium text-transparent 
        bg-clip-text bg-gradient-to-r from-[#1991FF] via-[#6F76EC] to-[#FE4ACC]"
            >
              Sign up
              <span className="text-[#F64DCE]">
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`hidden px-5 transition duration-500 ease-in-out opacity-0 ${
          isMenuOpen && "opacity-100"
        }`}
      >
        <div className="border-b border-gray-800">
          {navlinks.map((item, i) => (
            <div key={i} className="my-5">
              <p className="text-white">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="my-5">
          <p className="text-white">Login</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

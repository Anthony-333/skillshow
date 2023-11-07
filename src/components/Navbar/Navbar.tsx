import { HiMenuAlt2 } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  const [scrollY, setScrollY] = React.useState<number>(0);

  const navigation = useNavigate();

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });

  return (
    <div
      className={`relative ${
        scrollY >= 100 && "bg-gray-950 opacity-95"
      } transition duration-500 ease-in-out`}
    >
      <div
        className={`flex items-center justify-between py-5 px-5  ${
          isMenuOpen && "border-b border-gray-800 bg-black"
        }`}
      >
        <div className={`flex gap-2 `}>
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
              onClick={() => navigation("/signup")}
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
        className={`${isMenuOpen ? "flex-1" : "hidden"} ${
          isMenuOpen && "opacity-100"
        } px-5 transition duration-500 ease-in-out opacity-0 
        absolute z-30 bg-black w-full h-screen `}
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

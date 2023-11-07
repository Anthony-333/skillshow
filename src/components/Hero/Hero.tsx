import { IMAGES } from "../../images/Images";

const Hero = () => {
  return (
    <div className="flex justify-center items-center relative">
      <div className="relative z-0">
        <div className="z-0">
          <img src={IMAGES.image1} alt="bg" width={700} />
        </div>

        <div className="bg-black opacity-70 h-full w-full absolute top-0 z-10" />
      </div>
      <div className="absolute space-y-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-7xl text-center font-semibold">
          Show off your{" "}
          <span
            className="text-transparent 
        bg-clip-text bg-gradient-to-r from-[#1991FF] via-[#6F76EC] to-[#FE4ACC]"
          >
            Creativity
          </span>
        </h1>

        <p className="text-gray-400 italic text-xs md:text-base lg:text-lg text-center ">
          "Creativity is just connecting things" - Steve Jobs
        </p>

        <div className="flex justify-center ">
          <div className="bg-white flex rounded-full px-3">
            <button
              className="flex items-center gap-2 px-3 py-2 font-medium text-transparent lg:text-lg
        bg-clip-text bg-gradient-to-r from-[#1991FF] via-[#6F76EC] to-[#FE4ACC]"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

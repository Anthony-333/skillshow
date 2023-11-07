import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Filters from "../../components/Filters/Filters";

const Homepage = () => {
  return (
    <div>
      <div className="sticky top-0 z-30  lg:px-10">
        <Navbar />
      </div>

      <div className="">
        <Hero />

        <Filters />
      </div>
    </div>
  );
};

export default Homepage;

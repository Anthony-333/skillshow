import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_PROJ_ID);
  return (
    <main className="px-5 lg:px-20">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;

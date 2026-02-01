import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Company from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Infrastructure from "./components/Roadmap";
import Testimonials from "./components/Testimonials";
import StoneTypes from "./components/StoneTypes";
import { companyLogo } from "./assets";

const App = () => {
  return (
    <>
      {/* Watermark Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={companyLogo} 
            alt="Watermark" 
            className="w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] opacity-[0.02] md:opacity-[0.03] lg:opacity-[0.04]"
          />
        </div>
      </div>

      <div className="relative pt-[6.5rem] md:pt-[7.5rem] lg:pt-[8rem] xl:pt-[8.5rem] overflow-hidden z-10">
        <Header />
        <Hero />
        <Company />
        <StoneTypes />
        <Benefits />
        <Products />
        <Infrastructure />
        <Testimonials />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

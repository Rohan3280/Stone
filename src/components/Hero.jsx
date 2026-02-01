import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        {/* Hero Carousel */}
        <div className="mb-16">
          <HeroCarousel />
        </div>

        {/* Main Title Section */}
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            A GOVT. RECOGNIZED NATURAL STONE&nbsp;
            <span className="inline-block relative">
              MANUFACTURER & EXPORTER{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            <br />
            FROM INDIA
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            A LEADING ISO CERTIFIED STONE CO. IN INDIA
          </p>
          <Button href="#contact" white>
            Get Quote Now
          </Button>
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;

import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { infrastructure } from "../constants";
import { check2, grid } from "../assets";
import { Gradient } from "./design/Roadmap";

const Infrastructure = () => (
  <Section className="overflow-hidden" id="infrastructure">
    <div className="container md:pb-10">
      <Heading 
        title="Our Infrastructure" 
        text="State-of-the-art facilities ensuring quality and timely delivery"
      />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {infrastructure.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-white rounded-[2.4375rem] overflow-hidden xl:p-15 shadow-md">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-white">
                      <img
                        className="mr-2.5"
                        src={check2}
                        width={16}
                        height={16}
                        alt="Available"
                      />
                      <div className="tagline">Available</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="#contact">Contact Us</Button>
      </div>
    </div>
  </Section>
);

export default Infrastructure;

import Section from "./Section";
import Heading from "./Heading";
import { stoneTypes } from "../constants";

const StoneTypes = () => {
  return (
    <Section id="stone-types" className="bg-n-10">
      <div className="container">
        <Heading
          title="Our Natural Stone Collection"
          text="Premium quality natural stones for all your construction and decorative needs"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {stoneTypes.map((stone) => (
            <div
              key={stone.id}
              className="group relative overflow-hidden rounded-xl border border-n-6 hover:border-color-1 transition-all duration-300 cursor-pointer bg-white shadow-md hover:shadow-xl"
            >
              <div className="aspect-square relative">
                <img
                  src={stone.image}
                  alt={stone.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <p className="text-base md:text-lg font-bold text-n-1 uppercase tracking-wider">
                    {stone.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default StoneTypes;

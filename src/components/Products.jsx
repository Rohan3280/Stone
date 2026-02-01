import Section from "./Section";
import Heading from "./Heading";
import { stoneProducts } from "../constants";
import { check } from "../assets";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Products = () => {
  return (
    <Section id="products">
      <div className="container">
        <Heading
          title="Our Premium Natural Stone Products"
          text="We supply products like rough blocks, countertops, tiles, gangsaw slabs, cutter slabs along with different stone articles & monuments to customers worldwide"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-6 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] bg-white shadow-lg">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-2/5 lg:w-2/5 xl:w-2/5">
              <img
                className="w-full h-full object-cover"
                width={800}
                alt="Natural Stone"
                height={730}
                src={stoneProducts[0].image}
              />
            </div>

            <div className="relative z-1 max-w-[20rem] md:max-w-[22rem] lg:max-w-[24rem] ml-auto md:ml-[45%] lg:ml-[45%]">
              <h4 className="h4 mb-4">{stoneProducts[0].name}</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                {stoneProducts[0].description}
              </p>
              <ul className="body-2">
                {stoneProducts.slice(0, 3).map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="check" className="flex-shrink-0 mt-1" />
                    <p className="ml-4">{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-6 rounded-3xl overflow-hidden bg-white shadow-md">
              <div className="absolute inset-0">
                <img
                  src={stoneProducts[1].image}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt={stoneProducts[1].name}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">{stoneProducts[1].name}</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  {stoneProducts[1].description}
                </p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-3xl overflow-hidden lg:min-h-[46rem] border border-n-6 shadow-md">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">{stoneProducts[2].name}</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  {stoneProducts[2].description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {stoneProducts.slice(3, 6).map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-n-10 rounded-xl border border-n-6 hover:border-color-1 transition-colors"
                    >
                      <p className="text-sm font-semibold text-n-1 mb-2">
                        {item.name}
                      </p>
                      <p className="text-xs text-n-3">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-[20rem] bg-white rounded-xl overflow-hidden md:h-[25rem] border border-n-6">
                <img
                  src={stoneProducts[3].image}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt={stoneProducts[3].name}
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Products;


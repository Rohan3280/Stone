import { companyLogo, check } from "../assets";
import { companyContent, companyText } from "../constants";
import Button from "./Button";
import Section from "./Section";

const Company = () => {
  return (
    <Section crosses id="company">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="h2 mb-6">
            PRIME STONE EXPORTS
          </h2>
          <p className="body-1 max-w-4xl mx-auto text-n-2 mb-8">
            Prime Stone Exports is one of the leading manufacturers, exporters, suppliers, and wholesalers of Indian natural stones, such as granite, marble, sandstone, slate, quartzite, limestone, and stone articles. The natural stone exporter supplies products like rough blocks, countertops, tiles, gangsaw slabs, cutter slabs along with different stone articles & monuments to customers based in the USA, Europe, Australia, South Africa, Hong Kong and many other countries around the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {companyContent.map((item) => (
            <div 
              className="p-6 bg-white rounded-xl border border-n-6 hover:border-color-1 transition-all shadow-md hover:shadow-xl flex flex-col" 
              key={item.id}
            >
              <div className="flex items-center mb-4">
                <img src={check} width={28} height={28} alt="check" className="flex-shrink-0" />
                <h6 className="h6 ml-3 text-n-1">{item.title}</h6>
              </div>
              {item.text && (
                <p className="body-2 text-n-3 flex-grow">{item.text}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="#contact">Get Quote Now</Button>
        </div>
      </div>
    </Section>
  );
};

export default Company;

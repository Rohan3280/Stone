import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import { testimonials } from "../constants";
import { LeftLine, RightLine } from "./design/Pricing";

const Testimonials = () => {
  return (
    <Section className="overflow-hidden" id="testimonials">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          title="What Our Clients Say"
          text="Trusted by customers worldwide for quality and service"
        />

        <div className="relative">
          <div className="grid gap-6 md:grid-cols-3 md:gap-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative p-8 bg-white rounded-[2.5rem] border border-n-6 hover:border-color-1 transition-colors shadow-md hover:shadow-lg"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-color-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="body-2 text-n-3 mb-4">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-n-6">
                  <div>
                    <p className="body-2 font-semibold text-n-1">
                      {testimonial.author}
                    </p>
                    <p className="caption text-n-4">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;


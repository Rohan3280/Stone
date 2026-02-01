import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10" id="contact">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3 mb-10">
          <div>
            <h3 className="h6 mb-4 text-n-1">HEAD OFFICE</h3>
            <p className="body-2 text-n-4 mb-2">
              Property No -1, Lane No-2, Westend Marg,
            </p>
            <p className="body-2 text-n-4 mb-2">
              Near- Gate No-2, Saket metro station
            </p>
            <p className="body-2 text-n-4 mb-2">
              Saidulajab, New Delhi – 110030 India
            </p>
            <p className="body-2 text-n-4 mb-2">
              <strong>Office:</strong> + 91-11-49863625
            </p>
            <p className="body-2 text-n-4 mb-2">
              <strong>Mob:</strong> + 91 – 9910066990
            </p>
            <p className="body-2 text-n-4">
              <strong>Email:</strong> info@primestoneexports.com
            </p>
          </div>
          <div>
            <h3 className="h6 mb-4 text-n-1">SOUTH INDIA FACTORY</h3>
            <p className="body-2 text-n-4 mb-2">
              Plot No -52 & 53, Gundlapalli Growth,
            </p>
            <p className="body-2 text-n-4 mb-2">
              Center Maddipadu, Prakasam,
            </p>
            <p className="body-2 text-n-4">
              Andhra Pradesh, 523211 India
            </p>
          </div>
          <div>
            <h3 className="h6 mb-4 text-n-1">NORTH INDIA FACTORY</h3>
            <p className="body-2 text-n-4 mb-2">
              H 36 Riico industrial area
            </p>
            <p className="body-2 text-n-4 mb-2">
              Hattipura Bundi-323001,
            </p>
            <p className="body-2 text-n-4 mb-4">
              Rajasthan, India
            </p>
            <p className="caption text-n-4">
              Minimum order quantity: 1 container (approximately 4,000 sq. ft).
            </p>
          </div>
        </div>
        <div className="flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col pt-8 border-t border-n-6">
          <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()} Prime Stone Exports. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-n-9 rounded-full transition-colors hover:bg-n-6 shadow-sm hover:shadow-md"
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;

import React from "react";
import sellsfieLogo from "@/assets/logo/sellsfie-logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="mx-auto px-4 py-4 sm:py-3">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img src={sellsfieLogo.src} alt="Logo" className="h-10" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Sellsfie: Your Trusted Source for Shopping &amp; Healthy Living
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Sellsfie is a leading e-commerce platform committed to
                delivering safe, healthy, and organic food products across
                Bangladesh. Renowned for its dedication to quality, Sellsfie
                offers a diverse range of health-focused items, including
                premium mustard oil, pure ghee, organic honey, dates, chia
                seeds, and an assortment of nuts.
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-600">
                With a focus on convenience, Sellsfie operates primarily online,
                bringing the goodness of nature straight to your doorstep.
              </p>
            </div>

            <div className="md:justify-self-center">
              <h4 className="text-sm font-semibold tracking-wide text-robinhood uppercase">
                Company
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <a href="/" className="text-black-cus hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-black-cus hover:underline">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="text-black-cus hover:underline">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:justify-self-end md:text-right">
              <h4 className="text-sm font-semibold tracking-wide text-robinhood uppercase">
                Quick Help
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <a href="/" className="text-black-cus hover:underline">
                    গ্রাহক সেবা
                  </a>
                </li>
                <li>
                  <a href="/" className="text-black-cus hover:underline">
                    Contact
                  </a>
                </li>
              </ul>

              <p className="mt-6 text-sm font-semibold text-gray-900">
                DBID ID : <span className="font-bold">437361334</span>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:align-middle">
          <div className="mx-auto px-4 py-4 text-left text-sm text-gray-500">
            COPYRIGHT &copy; 2026{" "}
            <a
              href="/"
              className="text-robinhood hover:underline font-semibold"
            >
              Sellsfie
            </a>
            , All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

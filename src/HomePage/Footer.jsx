import React from "react";
import sellsfieLogo from "@/assets/logo/sellsfie-logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="mx-auto w-full max-w-[1280px] px-4 py-4 sm:py-3 md:px-6">
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
                <ul>
                  <Link
                    href="/about"
                    className="text-black-cus no-underline hover:underline"
                  >
                    About Us
                  </Link>
                </ul>
                <ul>
                  <Link
                    href="/return-policy"
                    className="text-black-cus no-underline hover:underline"
                  >
                    Return Policy
                  </Link>
                </ul>
                <ul>
                  <Link
                    href="/refund-policy"
                    className="text-black-cus no-underline hover:underline"
                  >
                    Refund Policy
                  </Link>
                </ul>
                <ul>
                  <Link
                    href="/customer-care"
                    className="text-black-cus no-underline hover:underline"
                  >
                    গ্রাহক সেবা
                  </Link>
                </ul>
                <ul>
                  <Link
                    href="/contact"
                    className="text-black-cus no-underline hover:underline"
                  >
                    Contact
                  </Link>
                </ul>
              </ul>
            </div>

            <div className="md:justify-self-end md:text-right">
              <h4 className="text-sm font-semibold tracking-wide text-robinhood uppercase">
                Contact us
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700"></ul>

              <p className="mt-6 text-sm font-semibold text-gray-900">
                23/25 Pallabi Rd, Dhaka 1216, Bangladesh
              </p>

              <p className="mt-6 text-sm font-semibold text-gray-900">
                teqfie@gmail.com
              </p>

              <p className="mt-6 text-sm font-semibold text-gray-900">
                +880 177 5280 411
              </p>
              <p className="mt-6 text-sm font-semibold text-gray-900">
                +44 7428 505838
              </p>
            </div>
          </div>
          <div className="lg:align-middle">
            <div className="mx-auto py-6 text-left text-sm text-gray-500">
              COPYRIGHT &copy; 2026{" "}
              <Link
                href="/"
                className="text-robinhood hover:underline no-underline font-semibold"
              >
                Sellsfie
              </Link>
              , All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

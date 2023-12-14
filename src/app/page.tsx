import "../../public/scss/main.scss";
import { DM_Sans, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Coming Soon || Business Directory",
};

const NotFound = () => {
  return (
    <>
      {/* Error/404 Section Area */}
      <section className="our-error">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6" data-aos="fade-left">
              <div className="animate_content text-center text-xl-start">
                <div className="animate_thumb">
                  <Image
                    width={591}
                    height={452}
                    className="w-100 h-100 cover"
                    src="/images/icon/error-page-img.svg"
                    alt="error-page-img"
                  />
                </div>
              </div>
            </div>
            {/* End .col-6 */}

            <div
              className="col-xl-5 offset-xl-1 wow fadeInLeft"
              data-aos="fade-right"
            >
              <div className="error_page_content mt80 mt50-lg text-center text-xl-start">
                <div className="erro_code">
                  <span className="text-thm">COMING </span>SOON
                </div>
                <div className="h2 error_title">
                  WEBSITE UNDER CONSTRUCTION
                </div>
                <p className="text fz15 mb20">
                  WE ARE MAKING NEW AWESOME FEATURES! WE WILL BE ONLINE SOON 
                </p>
              </div>
            </div>
            {/* End .col-6 */}
          </div>
        </div>
      </section>
      {/* End Error/404 Section Area */}
    </>
  );
};

export default NotFound;

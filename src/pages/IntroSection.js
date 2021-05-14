import React from "react";
import { TweenMax, Power3 } from "gsap";
import { useEffect, useRef } from "react";

const IntroSection = () => {
  let introPhoto = useRef(null);
  let introGreeting = useRef(null);

  useEffect(() => {
    TweenMax.to(
      introPhoto.current,
      3, //duration
      {
        opacity: 1,
        x: -8,
        ease: Power3.easeOut,
      }
    );
     TweenMax.to(
       introGreeting.current,
       3, //duration
       {
         opacity: 1,
         x: -8,
         ease: Power3.easeInOut,
         duration: 0.5,
       }
     );
  }, []);
  return (
    <section className="bg-white">
      <div className="md:mt-20 md:px-10 py-16 text-gray-900 relative">
        <div className="container mx-auto flex md:flex-row flex-col items-center md:mt-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 text-center">
            <img
              ref={introPhoto}
              className="object-cover object-center rounded opacity-0"
              alt="hero"
              src="/assets/introphoto.jpg"
            />
          </div>

          <div
            ref={introGreeting}
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center font-Lora opacity-0">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Your secret to an unmatched aura
            </h1>
            <p className="mb-8 text-sm md:text-lg leading-relaxed px-8 md:px-2">
              We understand the need for tranquility, rest and stress relief. At
              our spa, your needs come first, your time with us is precious and
              we ensure to give you the best treatment at all times!
            </p>
            <div className="flex justify-center">
              <a href="#services">
                <button className="inline-flex text-white bg-pink-700 shadow-sm border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  Services
                </button>
              </a>

              <a href="#contact">
                <button className="ml-4 inline-flex text-gray-800 bg-gray-300 shadow-sm border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#111827"
            fill-opacity="1"
            d="M0,224L60,197.3C120,171,240,117,360,128C480,139,600,213,720,240C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default IntroSection;

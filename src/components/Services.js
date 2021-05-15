import React from "react";
import { GiClick } from "react-icons/gi";
import { TweenMax, Power3 } from "gsap";
import { useEffect, useRef } from "react";

const Services = () => {
  let servicesItem = useRef(null);

  useEffect(() => {
    TweenMax.to(
      servicesItem.current,
      2, //duration
      {
        opacity: 1,
        y: -5,
        ease: Power3.easeIn,
        duration: 0.5,
      }
    );
  }, []);
  return (
    <section
      className="text-gray-400 bg-gray-900 font-Lora relative"
      id="services"
    >
      <div className="container px-8 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="md:text-5xl text-4xl font-medium title-font mb-4 text-white">
            Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Carefully curated treatments and therapies to give you a soothing
            experience
          </p>
        </div>
        <div
          ref={servicesItem}
          className="flex flex-wrap justify-center items-center -m-4 opacity-0"
        >
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded"
                src="/assets/picture2.jpg"
              />
              <GiClick className="absolute md:hidden text-2xl bg-gray-600 rounded-full text-white bottom-8 right-8 animate-bounce" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">
                  MASSAGE
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  ...With the best massuese
                </h1>
                <p className="leading-relaxed">
                  Performed in a serene and clean environment, with essential
                  sweet smelling oils and light music to soothe your nerves.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded"
                src="/assets/picture3.jpg"
              />
              <GiClick className="absolute md:hidden text-2xl bg-gray-600 rounded-full text-white bottom-8 right-8 animate-bounce" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">
                  FACIALS
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  ...With absolute love and care
                </h1>
                <p className="leading-relaxed">
                  To ensure your skin stays perfect, flawless and unmatched. We
                  make use of sterilized tools and healthy treatments to revive
                  and maintain your skin for you.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded"
                src="/assets/wax.jpg"
              />
              <GiClick className="absolute md:hidden text-2xl bg-gray-600 rounded-full text-white bottom-8 right-8 animate-bounce" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">
                  WAXING
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  ...With total attention
                </h1>
                <p className="leading-relaxed">
                  To provide you a service that ensures the much needed
                  beauty tweaks while making certain that every part requiring
                  attention, receives a ample dose of it.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center rounded"
                src="/assets/pedicure.jpg"
              />
              <GiClick className="absolute md:hidden text-2xl bg-gray-600 rounded-full text-white bottom-8 right-8 animate-bounce" />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-pink-400 mb-1">
                  MANIS & PEDIS
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  ...With the right tools
                </h1>
                <p className="leading-relaxed">
                  We provide adequate care and attention to your hands and feet,
                  ensuring to restore and/or keep them soft, moisturized and
                  glowing healthily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,224L60,197.3C120,171,240,117,360,128C480,139,600,213,720,240C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;

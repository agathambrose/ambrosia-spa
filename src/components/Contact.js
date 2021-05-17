
const Contact = () => {

  return (
    <section
      className="text-gray-400 bg-gray-900 font-Lora relative"
      id="contact"
    >
      <h1 className="text-center md:text-5xl text-4xl font-medium title-font mb-4 md:mb-0 text-white">
        Contact
      </h1>
      <div className="container px-5 py-24 flex sm:flex-nowrap flex-wrap justify-center items-center">
        <div className="lg:w-2/4 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
          <iframe
            title="map"
            className="absolute inset-0"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507402.2871577664!2d3.4946979058827154!3d6.511511404944742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75df5c74367%3A0x6a7e7df9d6c1cd4a!2sLekki!5e0!3m2!1sen!2sng!4v1620938979940!5m2!1sen!2sng"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Lekki, Nigeria</p>
            </div>
            <div className="lg:w-2/3 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:ambrosia.spa.ng@gmail.com"
                className="text-pink-400 leading-relaxed"
              >
                ambrosia.spa.life@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+(234)8062121812</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

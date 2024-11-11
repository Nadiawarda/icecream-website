import Image from "next/image";

function About () {
  return (
    <div className="bg-purple-300">
      <section id="hero" className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl italic mb-4 font-medium text-blue-500">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade ICE-CREAME
            </h1>
            <p className="text-xl text-blue-400 mb-10">
              Welcome to the coolest Ice Cream shop in town. Taste the flavors of joy with our handcrafted ice creams.
            </p>
            <div className="flex justify-center gap-3">
              <button className="inline-flex text-black font-bold text-lg bg-gradient-to-r from-teal-400 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gradient-to-r hover:from-pink-400 hover:to-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                Click Me
              </button>
            </div>

          </div>
          
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="animate-zoomIn">
            {/* Adjusted image path and dimensions */}
            <Image
              className="object-cover object-center rounded-full"
              alt="Delicious Ice Cream"
              data-aos="zoom-in-up"
            data-aos-duration="2000"
              src="/img/best.webp" // Path should be relative to the public folder
              width={500}
              height={250}
            />
          </div>
        </div>
        </div>
         
      </section>
     
        
      
    </div>
  );
};

export default About;

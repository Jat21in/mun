import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-blue-900 overflow-hidden">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      ></div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-3 py-1 bg-yellow-600 rounded-full">
            <span className="text-white text-sm font-medium">August 15-17, 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Jindal Global University <br/>
            Model United Nations Conference
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Join us for three days of diplomacy, debate, and dialogue as we tackle the world's most pressing challenges together.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#registration"
              className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-md transition-colors duration-300 text-center"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-md border border-white transition-colors duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <a href="#about" className="flex flex-col items-center text-white">
            <span className="mb-2 text-sm">Scroll Down</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
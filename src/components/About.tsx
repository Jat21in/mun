import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About the Conference</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The JGU Model United Nations Conference brings together students from around the world to simulate the United Nations and other international bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              The JGU MUN Conference aims to provide a platform for young leaders to engage in meaningful dialogue, develop diplomatic skills, and gain insights into global governance and international relations.
            </p>
            
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Conference Theme</h3>
            <p className="text-gray-600 mb-6">
              The theme for the 2025 conference is "Sustainable Development in a Post-Pandemic World: Rebuilding Global Cooperation." This theme reflects our commitment to addressing the complex challenges facing our world today.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <a
                href="#committees"
                className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300 text-center"
              >
                View Committees
              </a>
              <a
                href="#registration"
                className="px-6 py-3 bg-transparent hover:bg-gray-100 text-blue-900 font-medium rounded-md border border-blue-900 transition-colors duration-300 text-center"
              >
                Register Now
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Students in discussion" 
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">10+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-blue-900 font-bold text-4xl mb-2">500+</div>
            <p className="text-gray-600">Delegates</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-blue-900 font-bold text-4xl mb-2">10+</div>
            <p className="text-gray-600">Committees</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-blue-900 font-bold text-4xl mb-2">50+</div>
            <p className="text-gray-600">Universities</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-blue-900 font-bold text-4xl mb-2">3</div>
            <p className="text-gray-600">Days of Debate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
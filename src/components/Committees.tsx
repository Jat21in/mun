import React, { useState } from 'react';

const committees = [
  {
    id: 1,
    name: "United Nations General Assembly (UNGA)",
    description: "The main deliberative, policymaking, and representative organ of the UN. In this committee, delegates will explore diplomatic strategies to prevent nuclear conflict, with a focus on reducing tensions in South Asia.",
    agenda: "Preventing Nuclear Conflict: Diplomatic Pathways to Reduce Tensions in South Asia",
    image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "All India Political Parties Meet (AIPPM)",
    description: "A high-level simulation of discussions among Indian political parties. Delegates will debate India’s diplomatic, security, and economic strategies in combating terrorism.",
    agenda: "Comprehensive Evaluation of India’s Strategic Responses to Terrorism: Diplomatic, Security, and Economic Dimensions",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "International Press (IP)",
    description: "The media body of the MUN responsible for covering debates, interviewing delegates, and publishing bulletins. Roles include reporters, photographers, caricaturists, and editors.",
    agenda: "Covering and Documenting Committee Proceedings, Interviews, and Daily Highlights",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "United Nations Commission on the Status of Women (UNCSW)",
    description: "A UN body focused on gender equality and the empowerment of women. Delegates will address the issue of human trafficking, with a special focus on the Middle East.",
    agenda: "Addressing Women’s Vulnerability to Trafficking: Case Study of Middle East and Regional Challenges",
    image: "https://images.pexels.com/photos/3819492/pexels-photo-3819492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "United Nations Development Programme (UNDP)",
    description: "UNDP works globally to eradicate poverty and reduce inequalities. This session will focus on reviewing progress and strategies related to selected Sustainable Development Goals.",
    agenda: "Overview of UNDP’s Role in the 2030 Agenda for Sustainable Development: Progress and Strategies with Special Focus on SDGs 1, 2, 4, 7, 8, and 13",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];


const Committees = () => {
  const [activeCommittee, setActiveCommittee] = useState<number | null>(null);

  return (
    <section id="committees" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Committees</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our conference features a diverse range of committees addressing pressing global issues. Each committee offers a unique experience for delegates to engage in substantive debate and diplomacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((committee) => (
            <div 
              key={committee.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={committee.image} 
                  alt={committee.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{committee.name}</h3>
                <p className="text-gray-700 mb-4 h-24 overflow-hidden">
                  {committee.description.length > 120 
                    ? `${committee.description.substring(0, 120)}...` 
                    : committee.description}
                </p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-900">Agenda:</span>
                  <p className="text-gray-600 italic">{committee.agenda}</p>
                </div>
                <button
                  onClick={() => setActiveCommittee(committee.id)}
                  className="w-full py-2 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for committee details */}
        {activeCommittee && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-blue-900">
                    {committees.find(c => c.id === activeCommittee)?.name}
                  </h3>
                  <button 
                    onClick={() => setActiveCommittee(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mb-6">
                  <img 
                    src={committees.find(c => c.id === activeCommittee)?.image} 
                    alt={committees.find(c => c.id === activeCommittee)?.name} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Description</h4>
                  <p className="text-gray-700">
                    {committees.find(c => c.id === activeCommittee)?.description}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Agenda</h4>
                  <p className="text-gray-700">
                    {committees.find(c => c.id === activeCommittee)?.agenda}
                  </p>
                </div>
                {/* <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Background Guide</h4>
                  <p className="text-gray-700 mb-4">
                    Download the background guide to prepare for this committee. The guide includes detailed information about the agenda, committee procedures, and research resources.
                  </p>
                  <button className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300">
                    Download Background Guide
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Committees;
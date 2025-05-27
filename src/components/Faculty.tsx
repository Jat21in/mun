import React from 'react';

const facultyMembers = [
  {
    id: 1,
    name: "Prof. Anjali Sharma",
    position: "Faculty Advisor & Conference Director",
    department: "School of International Affairs",
    bio: "Professor Sharma has over 15 years of experience in international relations and has served as a consultant to the United Nations Development Programme.",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Dr. Rajiv Mehta",
    position: "Faculty Advisor",
    department: "School of Law",
    bio: "Dr. Mehta specializes in international law and human rights. He has published extensively on the legal frameworks of international organizations.",
    image: "https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Prof. Sarah Johnson",
    position: "Academic Advisor",
    department: "School of Government and Public Policy",
    bio: "Prof. Johnson's research focuses on global governance and multilateral diplomacy. She previously worked with the World Bank on policy reform projects.",
    image: "https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const secretariatMembers = [
  {
    id: 1,
    name: "Aryan Patel",
    position: "Secretary-General",
    department: "International Relations, 4th Year",
    bio: "Aryan has participated in over 20 MUNs across the country and has served as a chairperson in 8 conferences.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Priya Singh",
    position: "Deputy Secretary-General",
    department: "Political Science, 3rd Year",
    bio: "Priya has been actively involved in MUNs since high school and has won Best Delegate awards at multiple conferences.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Vikram Reddy",
    position: "Director-General",
    department: "Law, 4th Year",
    bio: "Vikram specializes in Security Council simulations and has represented his university at international MUN conferences.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Aisha Khan",
    position: "Chief of Staff",
    department: "Economics, 3rd Year",
    bio: "Aisha has extensive experience in conference organization and has previously served as USG for the JGU MUN 2024.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Rahul Verma",
    position: "USG - Delegate Affairs",
    department: "Diplomacy, 2nd Year",
    bio: "Rahul has participated in numerous MUNs across Asia and is passionate about making MUN accessible to first-time delegates.",
    image: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    name: "Neha Gupta",
    position: "USG - Logistics",
    department: "Management, 3rd Year",
    bio: "Neha has exceptional organizational skills and has coordinated multiple university-level events successfully.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Faculty & Secretariat</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team of faculty advisors and student leaders who make the JGU MUN Conference possible. Our team works tirelessly to ensure a high-quality conference experience.
          </p>
        </div>

        {/* Faculty Advisors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Faculty Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h4>
                  <p className="text-yellow-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.department}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secretariat */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Secretariat</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secretariatMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md flex"
              >
                <div className="w-1/3 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h4 className="text-lg font-bold text-blue-900 mb-1">{member.name}</h4>
                  <p className="text-yellow-600 font-medium text-sm mb-1">{member.position}</p>
                  <p className="text-gray-500 text-xs mb-2">{member.department}</p>
                  <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
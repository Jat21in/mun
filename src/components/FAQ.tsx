import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What is a Model United Nations conference?",
    answer: "Model United Nations (MUN) is an educational simulation in which students learn about diplomacy, international relations, and the United Nations. Participants take on roles as diplomats representing different countries and debate current global issues following the actual UN rules and procedures."
  },
  {
    id: 2,
    question: "Who can participate in the JGU MUN Conference?",
    answer: "The conference is open to college and university students from around the world. Both experienced MUN delegates and first-time participants are welcome to apply."
  },
  {
    id: 3,
    question: "Do I need previous MUN experience to participate?",
    answer: "No, prior experience is not required. We welcome first-time delegates and provide training sessions and resources to help you prepare. However, we do recommend familiarizing yourself with the committee and topic before the conference."
  },
  {
    id: 4,
    question: "How are country assignments made?",
    answer: "Country assignments are based on your preferences, experience level, and the order in which registrations are received. We try our best to accommodate your preferences, but cannot guarantee specific country assignments."
  },
  {
    id: 5,
    question: "What is the dress code for the conference?",
    answer: "Western business attire is required for all committee sessions. This includes formal suits, dresses, or traditional formal attire from your country. Casual clothing is appropriate for social events only."
  },
  {
    id: 6,
    question: "Are meals provided during the conference?",
    answer: "Yes, lunch and refreshments are provided on all three days of the conference. Dinner is included during the social events. Please notify us of any dietary restrictions during registration."
  },
  {
    id: 7,
    question: "Is accommodation provided for delegates?",
    answer: "Accommodation is available for out-of-town delegates at an additional cost. You can indicate your accommodation needs during registration. We offer options both on campus and at partner hotels nearby."
  },
  {
    id: 8,
    question: "What is a position paper and when is it due?",
    answer: "A position paper is a document outlining your assigned country's stance on the committee topics. It should be 1-2 pages per topic and is due one week before the conference. Detailed guidelines will be sent after registration."
  },
  {
    id: 9,
    question: "Are there awards at the conference?",
    answer: "Yes, we recognize outstanding delegates with awards such as Best Delegate, Outstanding Delegate, Honorable Mention, and Best Position Paper for each committee. Delegation awards are also presented."
  },
  {
    id: 10,
    question: "What if I need to cancel my registration?",
    answer: "Cancellations made before July 15, 2025 are eligible for a 50% refund. No refunds will be issued after this date. You may transfer your registration to another delegate from your institution with prior approval."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about the JGU MUN Conference. If you don't see your question here, feel free to contact us directly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleItem(faq.id)}
              >
                <span className="text-lg font-medium text-blue-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-blue-900 transition-transform duration-300 ${openItem === faq.id ? 'transform rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  openItem === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 border-t border-gray-200 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:jgumun@jgu.edu.in"
            className="inline-block px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
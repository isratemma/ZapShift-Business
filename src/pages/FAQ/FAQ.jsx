import React, { useState } from 'react';

const faqs = [
  {
    question: 'How do I track my parcel?',
    answer:
      'You can track your parcel in real-time using our live tracking feature. Simply enter your tracking ID on the tracking page to get instant status updates from pick-up to delivery.',
  },
  {
    question: 'What areas do you deliver to?',
    answer:
      'We deliver nationwide with home delivery in every district of Bangladesh. Express delivery is available in Dhaka within 4–6 hours, and standard delivery reaches other major cities within 24–72 hours.',
  },
  {
    question: 'Is cash on delivery available?',
    answer:
      'Yes! We offer 100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product. The collected amount is transferred to merchants on a regular basis.',
  },
  {
    question: 'How can I become a merchant?',
    answer:
      'Click the "Become a Merchant" button and fill out our simple registration form. Our team will review your application and get you onboarded quickly so you can start shipping right away.',
  },
  {
    question: 'What if my parcel is damaged or lost?',
    answer:
      'We take full responsibility for any damage or loss during transit. Contact our 24/7 support team and we will resolve the issue promptly with compensation as per our policy.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-[#f9f9f9]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span className="text-xl text-gray-400 ml-4">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

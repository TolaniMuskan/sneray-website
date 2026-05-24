import React from 'react';

const reasons = [
  { number: '01', title: 'Industry-Focused Programs', text: 'Our internship curriculum is built around what the industry actually demands — not textbooks.' },
  { number: '02', title: 'Practical Learning First', text: 'Every student works on live assignments, real client briefs, and measurable outcomes.' },
  { number: '03', title: 'Professional Mentorship', text: 'Dedicated mentors from the industry guide you through every phase of your internship.' },
  { number: '04', title: 'Affordable & Accessible', text: 'Programs priced for students — high-quality training without the premium cost barrier.' },
  { number: '05', title: 'Modern IT Solutions', text: 'For businesses, we deliver cutting-edge technology tailored to your scale and budget.' },
  { number: '06', title: 'Student & Client Ecosystem', text: 'A unique dual-focus: growing talent while delivering results for real business clients.' },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why Choose Sneray IT Solutions?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">We bring together the best of talent development and technology delivery in one trusted partner.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.number} className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
              <div className="text-3xl font-extrabold text-gray-900 mb-3">{r.number}</div>
              <h3 className="text-gray-900 font-bold mb-2">{r.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

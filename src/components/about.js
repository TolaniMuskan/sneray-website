import React from 'react';

const metrics = [
  { value: 'B.Tech', label: 'Engineering Interns' },
  { value: 'MBA', label: 'Management Interns' },
  { value: 'Live', label: 'Project Exposure' },
  { value: '₹1K', label: 'Reg. & Cert. Fee' },
];

const pillars = [
  'Industry-Oriented Internship Programs',
  'Mentorship by Working Professionals',
  'End-to-End IT Solutions for Businesses',
  'Student & Client-Centric Ecosystem',
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">

          <div className="bg-blue-800 rounded-lg p-6 shadow">
            <div className="flex gap-3 mb-4">
         
            </div>

            <h3 className="text-lg font-extrabold mb-2 text-white">Pvt. Ltd. — Registered IT Company</h3>
            <p className="text-sm text-blue-100 mb-4">Career-focused, industry-driven, and student-centric — delivering real-world skills and IT solutions since inception.</p>

            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <div key={m.label} className="bg-blue-700 p-3 rounded text-center">
                  <div className="text-xl font-extrabold text-white">{m.value}</div>
                  <div className="text-xs text-blue-200 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-200 mb-3">About Us</p>
            <h2 className="text-3xl font-extrabold mb-4 text-white">Sneray IT Solutions Pvt. Ltd.</h2>

            <p className="text-blue-100 leading-relaxed mb-4">
              Sneray IT Solutions Pvt. Ltd. is a career-focused IT company offering internship opportunities, professional training, and industry exposure programs for B.Tech and MBA students.
            </p>

            <p className="text-blue-100 leading-relaxed mb-4">
              We help students gain practical learning experience through live projects, mentorship, and skill development while also delivering complete IT services and business solutions to startups and organizations.
            </p>

            <div className="space-y-2">
              {pillars.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                  <div className="text-blue-100">{p}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
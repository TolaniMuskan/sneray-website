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
<section id="about" className="py-20 bg-gray-50 text-gray-900">
<div className="max-w-6xl mx-auto px-6">

<div className="text-center mb-16">
<p className="text-xl font-semibold uppercase tracking-wider text-blue-600 mb-3">About Us</p>
<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
SneRay IT Solutions Pvt. Ltd.
</h2>
<p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
SneRay IT Solutions Pvt. Ltd. is a career-focused IT company offering internship opportunities, professional training, and industry exposure programs for B.Tech and MBA students.
</p>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="bg-blue-900 rounded-2xl p-8">
<h3 className="text-2xl font-bold text-white mb-3">Pvt. Ltd. — Registered IT Company</h3>
<p className="text-blue-200 mb-6">Career-focused, industry-driven, and student-centric.</p>
<div className="grid grid-cols-2 gap-3">
{metrics.map((m) => (
<div key={m.label} className="bg-blue-800 p-4 rounded-xl text-center">
<div className="text-2xl font-extrabold text-white">{m.value}</div>
<div className="text-xs text-blue-300 mt-1">{m.label}</div>
</div>
))}
</div>
</div>

<div>
<p className="text-gray-600 leading-relaxed mb-6">
We help students gain practical learning experience through live projects, mentorship, and skill development while also delivering complete IT services and business solutions to startups and organizations.
</p>
<div className="space-y-3">
{pillars.map((p) => (
<div key={p} className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center">
<span className="text-white text-xs">✓</span>
</div>
<div className="text-gray-700 font-medium">{p}</div>
</div>
))}
</div>
</div>
</div>

</div>
</section>
);
}
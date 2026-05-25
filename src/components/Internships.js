import React from 'react';

const btechDomains = [
'Web Development',
'Software Development',
'UI/UX Designing',
'App Development',
'Technical Support'
];

const mbaDomains = [
'Human Resources',
'Business Development',
'Marketing',
'Sales & Operations',
'Digital Marketing'
];

const features = [
{ number: '01', text: 'Live Project Experience' },
{ number: '02', text: 'Industry Exposure' },
{ number: '03', text: 'Technical & Professional Training' },
{ number: '04', text: 'Mentor Guidance' },
{ number: '05', text: 'Internship Certification' },
{ number: '06', text: 'Resume Building Support' },
{ number: '07', text: 'Corporate Readiness Training' },
];

const highlights = [
{ value: 'Online / Offline / Hybrid', label: 'Mode' },
{ value: '1 - 3 Months', label: 'Duration' },
{ value: '₹1,000', label: 'Registration & Certification Fee' },
{ value: 'Industry-Oriented', label: 'Learning Environment' },
];

export default function Internships() {
return (
<section id="internships" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
<div className="max-w-6xl mx-auto px-6">

{/* Heading */}
<div className="text-center mb-20">
<p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Internship Programs</p>
<h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
Programs for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">B.Tech & MBA</span> Students
</h2>
<div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
<p className="text-blue-200 text-lg max-w-3xl mx-auto leading-relaxed">
Practical exposure, technical skills, corporate understanding, and real-world project experience — everything you need to become industry-ready.
</p>
</div>

{/* Highlights Stats */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
{highlights.map((h, i) => (
<div key={i} className="border border-blue-700/50 rounded-2xl p-6 text-center bg-blue-900/20 backdrop-blur-sm hover:border-blue-500 transition-all duration-300">
<div className="text-2xl font-extrabold text-white mb-1">{h.value}</div>
<div className="text-blue-400 text-xs uppercase tracking-wider">{h.label}</div>
</div>
))}
</div>

{/* Features */}
<div className="mb-20">
<h3 className="text-xl font-bold text-blue-300 uppercase tracking-widest mb-8 text-center">Program Features</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{features.map((f) => (
<div key={f.number} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/10 transition-all duration-300">
<span className="text-blue-400 font-extrabold text-lg">{f.number}</span>
<span className="text-white font-medium text-sm">{f.text}</span>
</div>
))}
</div>
</div>

{/* Domains */}
<div className="grid md:grid-cols-2 gap-8 mb-20">

<div className="rounded-2xl overflow-hidden border border-blue-700/40">
<div className="bg-blue-800/60 px-8 py-5 border-b border-blue-700/40">
<h3 className="text-xl font-extrabold text-white tracking-wide">B.Tech Domains</h3>
<p className="text-blue-300 text-sm mt-1">Engineering & Technical Tracks</p>
</div>
<div className="px-8 py-6 bg-blue-900/20 space-y-4">
{btechDomains.map((d, i) => (
<div key={i} className="flex items-center justify-between border-b border-blue-800/40 pb-3 last:border-0 last:pb-0">
<span className="text-white font-medium">{d}</span>
<span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Open</span>
</div>
))}
</div>
</div>

<div className="rounded-2xl overflow-hidden border border-blue-700/40">
<div className="bg-blue-800/60 px-8 py-5 border-b border-blue-700/40">
<h3 className="text-xl font-extrabold text-white tracking-wide">MBA Domains</h3>
<p className="text-blue-300 text-sm mt-1">Management & Business Tracks</p>
</div>
<div className="px-8 py-6 bg-blue-900/20 space-y-4">
{mbaDomains.map((d, i) => (
<div key={i} className="flex items-center justify-between border-b border-blue-800/40 pb-3 last:border-0 last:pb-0">
<span className="text-white font-medium">{d}</span>
<span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Open</span>
</div>
))}
</div>
</div>

</div>

{/* CTA */}
<div className="text-center">
<a href="#contact" className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold py-5 px-16 rounded-xl transition duration-300 text-lg tracking-wide shadow-lg shadow-blue-500/30">
Apply for Internship
</a>
<p className="text-blue-400 text-sm mt-4">Limited seats available — Register today</p>
</div>

</div>
</section>
);
}
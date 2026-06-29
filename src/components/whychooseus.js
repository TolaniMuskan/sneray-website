import React from 'react';

const reasons = [
{
number: '01',
title: 'Industry-Focused Programs',
text: 'Our internship curriculum is built around what the industry actually needs today.',
},
{
number: '02',
title: 'Practical Learning First',
text: 'Every student works on live assignments, real client projects, and actual deliverables.',
},
{
number: '03',
title: 'Professional Mentorship',
text: 'Dedicated mentors from the industry guide you throughout your internship journey.',
},
{
number: '04',
title: 'Affordable & Accessible',
text: 'Programs priced for students – high-quality training without the high price tag.',
},
{
number: '05',
title: 'Modern IT Solutions',
text: 'For businesses, we deliver cutting-edge technology tailored to your goals.',
},
{
number: '06',
title: 'Student & Client Ecosystem',
text: 'A unique dual-focus: growing talent while delivering results for clients.',
},
];

export default function WhyChooseUs() {
return (
<section id="why" className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
<div className="max-w-6xl mx-auto px-6">

{/* Heading */}
<div className="text-center mb-20">
<p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Why Choose Us</p>
<h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">SneRay IT Solutions?</span>
</h2>
<div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
<p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
We bring together the best of talent development and technology delivery — built for students and businesses alike.
</p>
</div>

{/* Reasons Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{reasons.map((r) => (
<div
key={r.number}
className="group relative border border-blue-700/30 rounded-2xl p-8 bg-white/5 hover:bg-white/10 hover:border-blue-500 transition-all duration-300"
>
{/* Number */}
<div className="text-6xl font-extrabold text-blue-900 group-hover:text-blue-800 transition-all duration-300 mb-4 leading-none">
{r.number}
</div>

{/* Title */}
<h3 className="text-lg font-extrabold text-white mb-3">
{r.title}
</h3>

{/* Divider */}
<div className="w-8 h-0.5 bg-blue-500 mb-4 group-hover:w-16 transition-all duration-300"></div>

{/* Text */}
<p className="text-blue-200 text-sm leading-relaxed">
{r.text}
</p>
</div>
))}
</div>

{/* Bottom Stats Bar */}
<div className="mt-20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
{[
{ value: 'B.Tech', label: 'Engineering Programs' },
{ value: 'MBA', label: 'Management Programs' },
{ value: '3+', label: 'Months of Learning' },
].map((s, i) => (
<div key={i} className="text-center border border-blue-700/30 rounded-2xl py-6 px-4 bg-blue-900/20">
<div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
<div className="text-blue-400 text-xs uppercase tracking-wider">{s.label}</div>
</div>
))}
</div>

</div>
</section>
);
}
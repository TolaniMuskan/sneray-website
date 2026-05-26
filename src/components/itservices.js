import React, { useState } from 'react';

const services = [
{
number: '01',
title: 'Website Development',
description: 'Modern, responsive websites built for performance, speed, and user experience that converts visitors into customers.',
},
{
number: '02',
title: 'Software Development',
description: 'Custom software solutions designed to streamline your business operations and scale with your growth.',
},
{
number: '03',
title: 'Mobile App Development',
description: 'Powerful iOS and Android applications built for real-world business needs with seamless user experience.',
},
{
number: '04',
title: 'Digital Marketing',
description: 'Data-driven marketing strategies that grow your brand, increase visibility, and drive measurable results.',
},
{
number: '05',
title: 'UI/UX Designing',
description: 'Clean, intuitive designs that create seamless user experiences across all platforms and devices.',
},
{
number: '06',
title: 'Graphic Designing',
description: 'Professional visual identity and brand design that makes your business stand out from the competition.',
},
{
number: '07',
title: 'ERP & CRM Solutions',
description: 'Enterprise-grade systems to manage operations, customers, and business workflows efficiently.',
},
{
number: '08',
title: 'IT Consultancy',
description: 'Strategic technology guidance to help your business make smarter decisions and grow faster.',
},
{
number: '09',
title: 'Technical Support & Maintenance',
description: 'Reliable ongoing support to keep your systems running at peak performance around the clock.',
},
];

export default function ITServices() {
const [active, setActive] = useState('01');
const activeService = services.find(s => s.number === active);

return (
<section id="services" className="py-24 bg-gray-50 text-gray-900">
<div className="max-w-6xl mx-auto px-6">

{/* Heading */}
<div className="text-center mb-20">
<p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">What We Offer</p>
<h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">IT Solutions</span>
</h2>
<div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
<p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
Modern and innovative IT solutions for startups, businesses, and organizations — from strategy to execution.
</p>
</div>

{/* Interactive Split Layout */}
<div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden shadow-xl">

{/* Left — Service List */}
<div className="border-r border-gray-200">
{services.map((s) => (
<div
key={s.number}
onClick={() => setActive(s.number)}
className={`flex items-center gap-5 px-8 py-5 cursor-pointer border-b border-gray-100 transition-all duration-300 ${
active === s.number
? 'bg-blue-600 text-white'
: 'hover:bg-blue-50 text-gray-500 hover:text-gray-900'
}`}
>
<span className={`text-xs font-bold ${active === s.number ? 'text-blue-200' : 'text-gray-300'}`}>
{s.number}
</span>
<span className="font-semibold text-sm">{s.title}</span>
{active === s.number && (
<span className="ml-auto text-blue-200 font-bold">→</span>
)}
</div>
))}
</div>

{/* Right — Active Service Detail */}
<div className="flex flex-col justify-center px-12 py-16 bg-gradient-to-br from-blue-900 to-blue-950">
<p className="text-xs font-bold uppercase tracking-widest text-white mb-4">
Service {activeService.number}
</p>
<h3 className="text-3xl font-extrabold text-white mb-6 leading-tight">
{activeService.title}
</h3>
<div className="w-12 h-1 bg-black mb-6"></div>
<p className="text-black text-white leading-relaxed mb-8">
{activeService.description}
</p>

<a href="#contact"
className="inline-block w-fit bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition duration-300 text-sm"
>
Get Started
</a>
</div>

</div>

</div>
</section>
);
}
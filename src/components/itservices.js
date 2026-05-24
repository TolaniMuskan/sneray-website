import React from 'react';

const services = [
  {icon:'🌐',title:'Website Development',desc:'Responsive, fast, and professional websites tailored to your business goals.'},
  {icon:'💻',title:'Software Development',desc:'Custom software solutions that streamline operations and drive efficiency.'},
  {icon:'📱',title:'Mobile App Development',desc:'iOS and Android applications with intuitive UX and modern architecture.'},
  {icon:'📣',title:'Digital Marketing',desc:'SEO, social media, and performance marketing to grow your digital presence.'},
  {icon:'🎨',title:'Graphic Designing',desc:'Brand identity, marketing materials, and visual content that stands out.'},
  {icon:'✏️',title:'UI/UX Designing',desc:'User-centric interface designs that convert visitors into customers.'},
  {icon:'⚙️',title:'ERP & CRM Solutions',desc:'Enterprise-grade systems for resource planning and customer management.'},
  {icon:'🧠',title:'IT Consultancy',desc:'Strategic IT advisory to help your business scale with the right technology.'},
  {icon:'🔧',title:'Technical Support & Maintenance',desc:'Reliable maintenance and support to keep your systems running smoothly.'}
];

const s = {
  section:{padding:'6rem 0',position:'relative',overflow:'hidden'},

  bgGrid:{position:'absolute',inset:0,backgroundImage:`linear-gradient(rgba(61,155,233,0.04) 1px, transparent 1px),linear-gradient(90deg, rgba(61,155,233,0.04) 1px, transparent 1px)`,backgroundSize:'50px 50px',pointerEvents:'none'},

  container:{maxWidth:'1200px',margin:'0 auto',padding:'0 2rem',position:'relative',zIndex:2},

  headerWrap:{textAlign:'center',marginBottom:'3rem'},

  sectionLabel:{fontSize:'0.78rem',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',color:'#BFDBFE',marginBottom:'0.75rem'},

  sectionTitle:{fontFamily:'var(--font-head)',fontSize:'clamp(1.8rem, 3vw, 2.8rem)',fontWeight:800,color:'var(--white)',lineHeight:1.2,letterSpacing:'-0.02em',marginBottom:'1rem'},

  sectionDesc:{fontSize:'1.05rem',color:'rgba(255,255,255,0.6)',maxWidth:'580px',lineHeight:1.75,margin:'0 auto'},

  grid:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.25rem',marginTop:'3rem'},

  card:{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.09)',borderRadius:'var(--r2)',padding:'1.75rem',cursor:'default'},

  cardIcon:{fontSize:'2rem',marginBottom:'1rem'},

  cardTitle:{fontFamily:'var(--font-head)',fontSize:'1.05rem',fontWeight:700,color:'var(--white)',marginBottom:'0.5rem'},
  
  cardDesc:{fontSize:'0.85rem',color:'rgba(255,255,255,0.55)',lineHeight:1.6}
};

const ITServices = () => (
  <section id="services" className="py-24 bg-blue-900 text-white">
    <div style={s.bgGrid} />
    <div style={s.container}>
      <div style={s.headerWrap}>
        <p style={s.sectionLabel}>IT Services</p>
        <h2 style={s.sectionTitle}>Complete IT Solutions</h2>
        <p style={s.sectionDesc}>Modern and innovative IT solutions for startups, businesses, and organizations — built for growth and performance.</p>
      </div>
      <div style={s.grid}>
        {services.map(({icon,title,desc})=> (
          <div key={title} style={s.card}>
            <div style={s.cardIcon}>{icon}</div>
            <h3 style={s.cardTitle}>{title}</h3>
            <p style={s.cardDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ITServices;
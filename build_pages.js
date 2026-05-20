const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');
const componentsDir = path.join(__dirname, 'components');

const pages = [
  { slug: 'join-doctor', component: 'DoctorRegistration' },
  { slug: 'partner-hospitals', component: 'Proxy' }, // Wait, Proxy has the hospital section? Let me check components... Wait, let me just add PharmacyReferral, Pricing, About, Contact, Faq, Emergency, PatientRegistration, FindDoctor for now.
  { slug: 'pharmacy-referral', component: 'PharmacyReferral' },
  { slug: 'pricing', component: 'Pricing' },
  { slug: 'about', component: 'About' },
  { slug: 'contact', component: 'Contact' },
  { slug: 'faq', component: 'Faq' },
  { slug: 'emergency', component: 'Emergency' },
  { slug: 'patient-registration', component: 'PatientRegistration' },
  { slug: 'find-doctor', component: 'FindDoctor' },
];

pages.forEach(p => {
  const dir = path.join(appDir, p.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const content = `import ${p.component} from '@/components/${p.component}/${p.component}';

export const metadata = {
  title: '${p.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} | SureCover',
};

export default function Page() {
  return (
    <div className="pt-24 pb-20">
      <${p.component} />
    </div>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), content);
});

// Update layout.tsx
let layout = fs.readFileSync(path.join(appDir, 'layout.tsx'), 'utf8');
if (!layout.includes('Navbar')) {
  layout = layout.replace('import "./globals.css";', 'import "./globals.css";\nimport Navbar from "@/components/Navbar/Navbar";\nimport Footer from "@/components/Footer/Footer";\nimport Modal from "@/components/Modal/Modal";');
  layout = layout.replace('{children}', '<Navbar />\n        {children}\n        <Footer />\n        <Modal />');
  fs.writeFileSync(path.join(appDir, 'layout.tsx'), layout);
}

// Update page.tsx (Home)
const homeContent = `import React from 'react';
import Hero from '@/components/Hero/Hero';
import TrustStrip from '@/components/TrustStrip/TrustStrip';
import VisualFlow from '@/components/VisualFlow/VisualFlow';
import ChronicCare from '@/components/ChronicCare/ChronicCare';
import PrescriptionTrust from '@/components/PrescriptionTrust/PrescriptionTrust';
import Global from '@/components/Global/Global';
import Proxy from '@/components/Proxy/Proxy';
import Cta from '@/components/Cta/Cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <VisualFlow />
      <ChronicCare />
      <PrescriptionTrust />
      <Global />
      <Proxy />
      <Cta />
    </main>
  );
}
`;
fs.writeFileSync(path.join(appDir, 'page.tsx'), homeContent);

// Update Navbar.tsx
const navbarPath = path.join(componentsDir, 'Navbar', 'Navbar.tsx');
let navbar = fs.readFileSync(navbarPath, 'utf8');
navbar = navbar.replace('export default function Navbar() {', `import Link from 'next/link';\n\nexport default function Navbar() {`);
navbar = navbar.replace(/<a href="#find"(.*?)>Find a Doctor<\/a>/g, '<Link href="/find-doctor"$1>Find a Doctor</Link>');
navbar = navbar.replace(/<a href="#for-doctors"(.*?)>For Doctors<\/a>/g, '<Link href="/join-doctor"$1>For Doctors</Link>');
navbar = navbar.replace(/<a href="#pricing"(.*?)>Pricing<\/a>/g, '<Link href="/pricing"$1>Pricing</Link>');
navbar = navbar.replace(/<a href="#register-pharmacy"(.*?)>💊 For Pharmacies<\/a>/g, '<Link href="/pharmacy-referral"$1>💊 For Pharmacies</Link>');
navbar = navbar.replace(/<a href="#hospital-channel"(.*?)>(🏥 For Hospitals|🏥 Hospitals)<\/a>/g, '<Link href="/partner-hospitals"$1>$2</Link>');
navbar = navbar.replace(/<a href="#about"(.*?)>About<\/a>/g, '<Link href="/about"$1>About</Link>');
navbar = navbar.replace(/<a href="#contact"(.*?)>Contact<\/a>/g, '<Link href="/contact"$1>Contact</Link>');
navbar = navbar.replace(/<a href="#register-patient"(.*?)>(Get Started|Get Started →)<\/a>/g, '<Link href="/patient-registration"$1>$2</Link>');
navbar = navbar.replace(/<a href="#" className="logo">/g, '<Link href="/" className="logo">');
navbar = navbar.replace(/<\/a>\s*<ul className="nav-links">/g, '</Link>\n  <ul className="nav-links">');
fs.writeFileSync(navbarPath, navbar);

console.log('Successfully created multi-page structure!');

import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav id="nav">
  <Link href="/" className="logo">
    <div className="logo-mark">
      <svg viewBox="0 0 26 26" fill="none"><path d="M13 3C7.477 3 3 7.477 3 13s4.477 10 10 10 10-4.477 10-10S18.523 3 13 3z" fill="rgba(255,255,255,0.15)"/><path d="M13 7v6M10 10h6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/><path d="M8.5 17c1-1.5 2.5-2.2 4.5-2.2s3.5.7 4.5 2.2" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>
    </div>
    <div className="logo-name">Sure<span>Cova</span></div>
  </Link>
  <ul className="nav-links">
    <li><Link href="/find-doctor">Find a Doctor</Link></li>
    <li><Link href="/join-doctor">For Doctors</Link></li>
    <li><Link href="/pricing">Pricing</Link></li>
    <li><Link href="/pharmacy-referral">For Pharmacies</Link></li>
    <li><Link href="/partner-hospitals">Hospitals</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/contact">Contact</Link></li>
    <li><Link href="/patient-registration" className="nav-cta">Get Started</Link></li>
  </ul>
  <button className="nav-burger" id="nav-burger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<nav className="nav-mobile" id="nav-mobile">
  <Link href="/find-doctor" >Find a Doctor</Link>
  <Link href="/join-doctor" >For Doctors</Link>
  <Link href="/pharmacy-referral">For Pharmacies</Link>
<Link href="/partner-hospitals">Hospitals</Link>
  <Link href="/about" >About</Link>
  <Link href="/contact" >Contact</Link>
  <Link href="/patient-registration" >Get Started →</Link>
</nav>
    </>
  );
}

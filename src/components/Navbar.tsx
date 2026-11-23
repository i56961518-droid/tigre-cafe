import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-5 py-6 md:px-10 border-b-2 border-espresso bg-sand sticky top-0 z-50">
      <Link href="/" className="font-poster text-4xl tracking-tighter text-espresso">TIGRE.</Link>
      <div className="hidden md:flex gap-8 font-bold uppercase tracking-widest text-sm text-espresso">
        <Link href="#story" className="hover:text-crimson transition-colors">Our Story</Link>
        <Link href="#menu" className="hover:text-crimson transition-colors">The Roast</Link>
        <Link href="#visit" className="hover:text-crimson transition-colors">Visit Us</Link>
      </div>
      <a href="https://www.instagram.com/cafe_tigre/" target="_blank" rel="noreferrer" className="bg-espresso text-sand px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-crimson transition-colors">
        Instagram
      </a>
    </nav>
  );
}
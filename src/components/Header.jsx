import { useEffect, useState } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';
import images from '../data/images.js';
import hotel from '../config/hotel.js';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Media', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-indigo/95 backdrop-blur shadow-lg'
          : 'bg-gradient-to-b from-indigo-deep/70 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-20">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img
            src={images.logoLight}
            alt={hotel.name}
            className="h-10 md:h-12 w-auto object-contain"
          />
          <span className="hidden sm:block font-display text-sand-50 text-xl md:text-2xl tracking-wide">
            {hotel.shortName}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sand-100 text-sm tracking-wide font-medium hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#reservation" className="btn-primary text-sm">
            <CalendarCheck size={16} />
            Book Your Stay
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden text-sand-50 p-2"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-indigo px-6 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-sand-100 py-3 border-b border-sand-50/10 text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={handleNavClick}
            className="btn-primary mt-4 justify-center"
          >
            <CalendarCheck size={16} />
            Book Your Stay
          </a>
        </nav>
      )}
    </header>
  );
}

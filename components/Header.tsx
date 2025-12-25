
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const logoPath = 'logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => prev !== isScrolled ? isScrolled : prev);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', hash: '#home' },
    { name: 'About', hash: '#about' },
    { name: 'Our Work', hash: '#work' },
    { name: 'Team', hash: '#team' },
    { name: 'Gallery', hash: '#gallery' },
    { name: 'Contact', hash: '#contact' },
  ];

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update the URL hash without a jump
      window.history.pushState(null, '', hash);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsOpen(false);

    // If we are not on the home page, navigate home first then the hash handler in App.tsx will take over
    if (location.pathname !== '/') {
      navigate('/' + hash);
      return;
    }

    // If already on home, just scroll
    scrollToSection(hash);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-in-out ${
        isOpen 
          ? 'bg-stone-950 py-4 shadow-none' 
          : scrolled 
            ? 'bg-stone-950/70 backdrop-blur-xl border-b border-white/5 py-2 md:py-3 shadow-2xl' 
            : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative z-[1010]">
        <Link 
          to="/" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center group relative"
        >
          <img 
            src={logoPath} 
            alt="Project Mathura" 
            className="h-10 w-auto sm:h-14 md:h-16 transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector('.text-logo')) {
                const span = document.createElement('span');
                span.className = 'text-logo text-white font-bold serif text-xl tracking-tighter';
                span.innerText = 'PROJECT MATHURA';
                parent.appendChild(span);
              }
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.hash}
              onClick={(e) => handleNavClick(e, item.hash)}
              className={`text-[10px] xl:text-xs uppercase tracking-[0.2em] font-semibold transition-all hover:text-plum-400 relative group py-2 ${
                location.hash === item.hash ? 'text-plum-400' : 'text-stone-400 hover:text-white'
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-plum-700 transform origin-left transition-transform duration-500 ${
                location.hash === item.hash ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
          ))}
          <Link
            to="/join"
            className="px-6 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold bg-white text-black hover:bg-plum-950 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 whitespace-nowrap shadow-lg"
          >
            Join the Seva
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-3 text-white transition-colors hover:bg-white/5 rounded-full relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-stone-950/95 backdrop-blur-2xl z-[1005] transition-all duration-500 ease-expo lg:hidden flex flex-col items-center justify-center ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 w-full max-w-xs relative z-10 px-6">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.hash}
              onClick={(e) => handleNavClick(e, item.hash)}
              className={`text-4xl serif text-white hover:text-plum-400 transition-all transform duration-500 text-center ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${location.hash === item.hash ? 'text-plum-400' : ''}`}
              style={{ transitionDelay: `${isOpen ? idx * 75 : 0}ms` }}
            >
              {item.name}
            </a>
          ))}
          <Link
            to="/join"
            className={`mt-12 bg-plum-950 border border-plum-800 text-white w-full text-center py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all transform duration-500 shadow-2xl ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${isOpen ? navItems.length * 75 : 0}ms` }}
          >
            Join the Seva
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

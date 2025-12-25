
import React from 'react';
import { Link } from 'react-router-dom';

// Use a string path instead of a module import for the logo image.
const logoPath = 'logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={logoPath} 
                alt="Project Mathura Logo" 
                className="h-20 w-auto brightness-90 hover:brightness-100 transition-all"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h3 className="serif text-2xl font-bold text-white tracking-wide mt-4">
                PROJECT <span className="text-plum-500">MATHURA</span>
              </h3>
            </Link>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              An act of devotion for the sacred grounds of Braj and the living grace of Sri Yamuna Maharani. We believe service is the highest form of worship.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-plum-400 uppercase tracking-widest text-[10px]">Navigation</h4>
              <ul className="space-y-2 text-stone-500">
                <li><Link to="/" className="hover:text-plum-300 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-plum-300 transition-colors">About Us</Link></li>
                <li><Link to="/work" className="hover:text-plum-300 transition-colors">Our Work</Link></li>
                <li><Link to="/gallery" className="hover:text-plum-300 transition-colors">Gallery</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-plum-400 uppercase tracking-widest text-[10px]">Community</h4>
              <ul className="space-y-2 text-stone-500">
                <li><Link to="/team" className="hover:text-plum-300 transition-colors">The Team</Link></li>
                <li><Link to="/join" className="hover:text-plum-300 transition-colors">Join Us</Link></li>
                <li><Link to="/contact" className="hover:text-plum-300 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-plum-400 uppercase tracking-widest text-[10px]">Talk to Us</h4>
            <div className="text-stone-500 space-y-2">
              <p>Mathura, Uttar Pradesh, India</p>
              <p className="hover:text-plum-300 transition-colors cursor-pointer">contact@projectmathura.org</p>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-stone-900 text-center">
          <blockquote className="serif italic text-stone-600 mb-6 max-w-lg mx-auto leading-relaxed">
            "Wherever there is the dust of Braj, there is the presence of the Divine."
          </blockquote>
          <p className="text-stone-700 text-[10px] uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Project Mathura. Dedicated to the service of the Rasik Tradition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Heart, Star, Quote, Map, Clock, Image as ImageIcon } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-stone-950">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] lg:h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=2000" 
            alt="Yamuna Ghats" 
            className="w-full h-full object-cover brightness-[0.25] scale-105"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl py-20">
          <span className="hero-reveal text-plum-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs font-bold mb-4 sm:mb-6 block">Dedicated to Sri Braj-Dham</span>
          <h1 className="hero-reveal delay-1 text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl serif mb-8 sm:mb-10 leading-[1.2] lg:leading-[1.1]">
            Our work is an act of <br className="hidden sm:block" /> <span className="italic text-plum-400">devotion</span>, not just cleaning.
          </h1>
          <div className="hero-reveal delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="#about" 
              className="w-full sm:w-auto bg-plum-950 border border-plum-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-plum-900 transition-all flex items-center justify-center group shadow-2xl"
            >
              Learn Our Mission
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              to="/join" 
              className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white/5 backdrop-blur-sm transition-all shadow-xl text-center"
            >
              Join the Seva
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 text-white/10 animate-bounce flex flex-col items-center gap-2">
          <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold">Scroll to Reflect</span>
          <div className="w-px h-8 sm:h-12 bg-plum-900/40"></div>
        </div>
      </section>

      {/* About Teaser */}
      <section id="about" className="py-24 sm:py-32 bg-stone-950 border-y border-stone-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <Quote className="mx-auto text-plum-500/10 mb-8" size={48} />
            <h2 className="serif text-white text-3xl sm:text-5xl mb-10 leading-tight">A sacred rhythm of <br className="hidden sm:block"/> purification</h2>
            <p className="text-lg sm:text-xl text-stone-400 leading-relaxed mb-16 max-w-2xl mx-auto serif italic">
              "Braj is not soil and water; it is the manifestation of eternal grace. To serve this land is to serve the Divine directly."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16">
              {[
                { icon: Heart, title: "Offering", desc: "Every stone picked is a prayer in motion." },
                { icon: Star, title: "Sacredness", desc: "Recognizing the sanctity of the soil." },
                { icon: Droplets, title: "Purity", desc: "As we clean the ghats, we clean our hearts." }
              ].map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <item.icon className="text-plum-500" size={24} />
                  <h3 className="serif text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 text-plum-400 uppercase tracking-widest text-[10px] font-bold hover:text-white transition-colors group">
              Discover the Sacred Geography <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Work Teaser */}
      <section id="work" className="py-24 sm:py-32 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 reveal">
              <div className="relative">
                <div className="absolute -inset-4 bg-plum-500/5 rounded-[40px] rotate-2"></div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Vishram_Ghat.jpg" 
                  alt="Yamuna Seva" 
                  className="relative rounded-[32px] shadow-2xl z-10 w-full object-cover aspect-[4/5] brightness-75 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8 reveal delay-2">
              <span className="inline-block uppercase tracking-widest text-plum-400 text-[10px] font-bold px-3 py-1 bg-plum-950 border border-plum-900/50 rounded-full">The Daily Path</span>
              <h2 className="serif text-white text-3xl sm:text-5xl leading-tight">Yamuna: The Living Grace</h2>
              <p className="text-stone-400 leading-relaxed text-lg italic serif">
                From 5:00 AM prayers to evening stewardship, our work follows a rhythm of devotion that has existed for centuries.
              </p>
              <div className="space-y-4 border-l-2 border-plum-900 pl-6 py-2">
                <div className="flex items-center gap-3">
                  <Clock className="text-plum-500" size={16} />
                  <span className="text-white text-sm font-bold">Uninterrupted Seva 365 Days</span>
                </div>
                <div className="flex items-center gap-3">
                  <Map className="text-plum-500" size={16} />
                  <span className="text-white text-sm font-bold">Covering 25+ Historic Ghats</span>
                </div>
              </div>
              <Link to="/work" className="inline-flex items-center gap-2 bg-plum-950 px-8 py-3 rounded-full text-white uppercase tracking-widest text-[10px] font-bold hover:bg-plum-900 transition-all group shadow-xl border border-plum-800">
                Explore Our Daily Rhythm <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section id="team" className="py-24 sm:py-32 bg-stone-950 border-t border-stone-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6 reveal">
            <h2 className="serif text-white text-4xl sm:text-5xl">The Custodians</h2>
            <p className="text-stone-500 italic serif text-lg leading-relaxed">
              We are a collective of devotees and professionals united by a simple promise to the land of Braj.
            </p>
            <div className="flex justify-center -space-x-4 py-8">
              {[1011, 1012, 1013, 1014].map(id => (
                <div key={id} className="w-16 h-16 rounded-full border-4 border-stone-950 overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <img src={`https://picsum.photos/id/${id}/100/100`} alt="Team Member" />
                </div>
              ))}
            </div>
            <Link to="/team" className="inline-flex items-center gap-2 text-plum-400 uppercase tracking-widest text-[10px] font-bold hover:text-white transition-colors group">
              Meet the Visionaries <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section id="gallery" className="py-24 sm:py-32 bg-black border-y border-stone-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-end mb-16 reveal">
            <div className="space-y-4">
              <h2 className="serif text-white text-4xl sm:text-5xl">Seva Captured</h2>
              <p className="text-stone-500 italic serif">The beauty of quiet service.</p>
            </div>
            <Link to="/gallery" className="hidden sm:flex items-center gap-2 text-plum-400 uppercase tracking-widest text-[10px] font-bold hover:text-white transition-colors group">
              View Full Gallery <ImageIcon size={14} className="group-hover:scale-110 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {[1012, 1015, 1018].map((id, idx) => (
              <div key={idx} className="reveal overflow-hidden rounded-2xl aspect-square border border-stone-800 bg-stone-900 group" style={{ animationDelay: `${idx * 0.1}s` }}>
                <img src={`https://picsum.photos/id/${id}/800/800`} className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Gallery Teaser" />
              </div>
            ))}
          </div>
          <Link to="/gallery" className="sm:hidden flex items-center justify-center gap-2 text-plum-400 uppercase tracking-widest text-[10px] font-bold py-4 bg-stone-900 rounded-xl">
            View All Photos <ImageIcon size={14} />
          </Link>
        </div>
      </section>

      {/* Contact / Footer CTA */}
      <section id="contact" className="py-24 sm:py-40 bg-stone-950 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-plum-900 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl reveal relative z-10">
          <span className="text-plum-400 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[8px] sm:text-[10px] mb-8 block">The Invitation</span>
          <h2 className="serif text-white text-3xl sm:text-6xl mb-10">Will you join the seva?</h2>
          <p className="text-stone-500 text-lg mb-12 serif italic max-w-xl mx-auto leading-relaxed">
            The path is open to all who feel the call. Every act of service begins with a simple conversation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/join" 
              className="bg-plum-950 border border-plum-800 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-plum-900 transform hover:-translate-y-1 transition-all shadow-2xl active:scale-95"
            >
              Become a Guardian
            </Link>
            <Link 
              to="/contact" 
              className="bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-stone-200 transform hover:-translate-y-1 transition-all shadow-xl active:scale-95"
            >
              Reach Out
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

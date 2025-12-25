
import React, { useState } from 'react';
import { Send, Sparkles, UserCheck, Heart } from 'lucide-react';

const JoinUs: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-32 bg-stone-950">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24 reveal">
          <span className="text-teal-400 font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[8px] sm:text-[10px] mb-4 sm:mb-6 block">Participation</span>
          <h1 className="serif text-white text-4xl sm:text-5xl md:text-7xl mb-6 sm:mb-8 leading-tight">Become a Guardian <br className="hidden sm:block"/> of the Soil</h1>
          <p className="text-stone-400 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed italic serif">
            "Every act of service begins with the simple intention to be useful to something greater than oneself."
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-32 reveal delay-1">
          {[
            { title: "Students", desc: "For the youth seeking purpose beyond the classroom." },
            { title: "Locals", desc: "For the residents reclaiming their ancestral landscape." },
            { title: "Professionals", desc: "For those offering their modern skills as sacred seva." },
            { title: "Devotees", desc: "For the pilgrims translating faith into physical action." }
          ].map((item, idx) => (
            <div key={idx} className="group bg-black p-8 sm:p-10 rounded-2xl sm:rounded-[32px] border border-stone-900 shadow-sm hover:border-teal-500 transition-all duration-500 hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-stone-900 rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-teal-500 group-hover:text-black transition-colors duration-500 text-teal-400">
                <UserCheck size={20} />
              </div>
              <h3 className="serif text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* The Journey Section */}
        <div className="bg-black text-white rounded-3xl sm:rounded-[48px] overflow-hidden mb-20 sm:mb-32 reveal shadow-3xl border border-stone-900">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-10 sm:p-16 lg:p-24 space-y-8 sm:space-y-12">
              <h2 className="serif text-white text-3xl sm:text-4xl md:text-6xl">The Path</h2>
              <div className="space-y-8 sm:space-y-10">
                {[
                  { step: "Orientation", desc: "Understand the spiritual and historical context of our work." },
                  { step: "Active Seva", desc: "Ground-level participation at the ghats and local centers." },
                  { step: "Stewardship", desc: "Take ownership of projects that align with your unique skills." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 sm:gap-8 group">
                    <span className="serif text-3xl sm:text-4xl font-light text-teal-900 group-hover:text-teal-400 transition-colors duration-500">0{idx + 1}</span>
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className="text-lg sm:text-xl font-bold text-stone-100">{item.step}</h4>
                      <p className="text-stone-500 text-sm sm:text-base font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                alt="Seva Journey"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r"></div>
            </div>
          </div>
        </div>

        {/* Improved Form UX */}
        <div id="join-form" className="max-w-3xl mx-auto reveal delay-2">
          {formSubmitted ? (
            <div className="bg-black p-10 sm:p-20 rounded-3xl sm:rounded-[48px] border border-stone-900 shadow-2xl text-center space-y-6 sm:space-y-8">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-teal-950 text-teal-400 rounded-full flex items-center justify-center mx-auto scale-110 animate-bounce border border-teal-500/20">
                <Sparkles size={32} />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="serif text-white text-3xl sm:text-4xl font-bold">Your intent is received.</h3>
                <p className="text-stone-500 text-base sm:text-lg max-w-md mx-auto leading-relaxed px-4">
                  We treat every application with reverence. A team member will reach out soon to begin the conversation.
                </p>
              </div>
              <button 
                onClick={() => setFormSubmitted(false)} 
                className="text-stone-600 hover:text-white transition-colors uppercase tracking-[0.2em] text-[8px] sm:text-[10px] font-bold"
              >
                Submit another intent
              </button>
            </div>
          ) : (
            <div className="bg-black p-8 sm:p-12 md:p-20 rounded-3xl sm:rounded-[48px] border border-stone-900 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 sm:p-12 opacity-5 pointer-events-none hidden xs:block">
                <Heart size={200} className="text-teal-900" />
              </div>
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-8 sm:space-y-10">
                <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
                  <h3 className="serif text-white text-3xl sm:text-4xl md:text-5xl font-bold">Join the Seva</h3>
                  <p className="text-stone-500 text-sm sm:text-base font-medium">No pressure. No rush. Just alignment.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] font-bold text-teal-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input required type="text" className="w-full bg-stone-950 text-white border border-stone-900 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:border-teal-500 outline-none transition-all placeholder:text-stone-800 text-sm sm:text-base" placeholder="e.g. Radhika Sharma" />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[10px] font-bold text-teal-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-stone-950 text-white border border-stone-900 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:border-teal-500 outline-none transition-all placeholder:text-stone-800 text-sm sm:text-base" placeholder="name@domain.com" />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] font-bold text-teal-500 uppercase tracking-widest ml-1">I am a...</label>
                  <select className="w-full bg-stone-950 text-white border border-stone-900 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:border-teal-500 outline-none transition-all appearance-none cursor-pointer text-sm sm:text-base">
                    <option className="bg-stone-950">Student / New Generation</option>
                    <option className="bg-stone-950">Local Resident</option>
                    <option className="bg-stone-950">Devotee / Spiritual Aspirant</option>
                    <option className="bg-stone-950">Professional Volunteer</option>
                  </select>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[10px] font-bold text-teal-500 uppercase tracking-widest ml-1">Your Intent</label>
                  <textarea rows={5} required className="w-full bg-stone-950 text-white border border-stone-900 rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3 sm:py-4 focus:border-teal-500 outline-none transition-all placeholder:text-stone-800 text-sm sm:text-base resize-none" placeholder="What calls you to serve the soil of Braj?"></textarea>
                </div>

                <button type="submit" className="w-full bg-white text-black font-bold py-4 sm:py-5 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-3 hover:bg-teal-400 transition-all group transform hover:-translate-y-1 shadow-xl active:scale-95">
                  <span className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs">Submit your intent</span>
                  <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

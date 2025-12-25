
import React from 'react';
import { Map, Sun, Mountain, Quote, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-stone-950">
      {/* Hero */}
      <section className="py-24 bg-stone-950 border-b border-stone-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto reveal">
            <span className="uppercase tracking-[0.3em] text-plum-400 text-xs font-bold block mb-4">Our Essence</span>
            <h1 className="serif text-white text-5xl md:text-7xl mb-12 leading-tight">A Promise to the <br/>Sacred Soil</h1>
            <p className="text-2xl text-stone-400 serif italic leading-relaxed">
              "Project Mathura is more than an organization; it is a promise made to the river and the soil of Braj."
            </p>
          </div>
        </div>
      </section>

      {/* Sacred Geography Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-32">
            <div className="w-full lg:w-1/2 space-y-8 reveal">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plum-950/30 border border-plum-900 text-plum-400 text-[10px] uppercase tracking-widest font-bold">
                <Map size={14} /> The Sacred Canvas
              </div>
              <h2 className="serif text-white text-4xl sm:text-5xl">Why Mathura?</h2>
              <p className="text-stone-400 leading-relaxed text-lg italic serif">
                Mathura is the heart of the 84-kos Braj Mandal, a geography where every forest, riverbank, and street corner is steeped in thousands of years of devotion.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1.5"><Sun className="text-plum-500" size={18} /></div>
                  <p className="text-stone-500 text-sm leading-relaxed"><strong>The Birthplace:</strong> As the literal birthplace of Sri Krishna, the city's ecology is seen as an extension of his own form.</p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1.5"><Mountain className="text-plum-500" size={18} /></div>
                  <p className="text-stone-500 text-sm leading-relaxed"><strong>The Dust (Braj-Raj):</strong> We treat the soil not as 'dirt' but as 'sacred dust'—this shift in perspective is the foundation of our work.</p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1.5"><Shield className="text-plum-500" size={18} /></div>
                  <p className="text-stone-500 text-sm leading-relaxed"><strong>The Living Heritage:</strong> Our goal is to ensure the physical environment matches the spiritual majesty of this land.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 reveal delay-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-10 bg-stone-900/50 border border-stone-800 rounded-3xl text-center hover:border-plum-500/30 transition-all">
                  <div className="serif text-5xl font-bold text-plum-400 mb-2">84</div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-500">Kos Circumference</div>
                </div>
                <div className="p-10 bg-stone-900/50 border border-stone-800 rounded-3xl text-center hover:border-plum-500/30 transition-all">
                  <div className="serif text-5xl font-bold text-plum-400 mb-2">25+</div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-500">Active Ghats</div>
                </div>
                <div className="p-10 bg-stone-900/50 border border-stone-800 rounded-3xl text-center col-span-2 hover:border-plum-500/30 transition-all">
                  <div className="serif text-5xl font-bold text-plum-400 mb-2">10M+</div>
                  <div className="text-[10px] uppercase tracking-widest text-stone-500">Annual Pilgrims</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-stone-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div className="reveal">
                <h2 className="serif text-plum-400 text-3xl font-bold mb-6">The Origin Story</h2>
                <p className="text-stone-400 leading-relaxed mb-4">
                  Project Mathura didn't begin with a board meeting or a funding proposal. It began with a moment of silence on the banks of the Yamuna. Witnessing the contrast between the river's spiritual glory and its physical neglect triggered a realization: we cannot worship in spirit while we desecrate in form.
                </p>
                <p className="text-stone-400 leading-relaxed">
                  Our trigger was spiritual, not administrative. We saw the need for a 'Seva-first' approach that treats environmentalism as a byproduct of devotion.
                </p>
              </div>

              <div className="reveal delay-1">
                <h2 className="serif text-plum-400 text-3xl font-bold mb-6">Spiritual Foundation</h2>
                <p className="text-stone-400 leading-relaxed mb-4">
                  We are deeply rooted in the Rasik tradition of Braj, which emphasizes the presence of the Divine in every living and non-living element of this land. 
                </p>
                <p className="text-stone-400 leading-relaxed">
                  Seva (selfless service) is our method. We believe that by cleaning the ghats, we are cleaning the altar of the Divine. This perspective changes everything—from the way we pick up litter to the way we interact with the local community.
                </p>
              </div>
            </div>

            <div className="space-y-12 bg-plum-950/20 p-12 rounded-3xl border border-plum-900/40 reveal delay-2 shadow-2xl">
              <h2 className="serif text-white text-3xl font-bold mb-6">What Makes Us Different</h2>
              <ul className="space-y-8">
                {[
                  {
                    title: "Not Event-Based",
                    desc: "Most groups do 'cleanup drives'. We do daily seva. We don't believe in the flash-in-the-pan approach."
                  },
                  {
                    title: "Not PR-Driven",
                    desc: "Our priority is the result on the ground and the shift in the volunteer's heart, not the social media metric."
                  },
                  {
                    title: "Not Donation-Centric",
                    desc: "While support is needed, our primary 'currency' is time and devotion. We don't lead with a pitch for money; we lead with a pitch for participation."
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-plum-900 text-white border border-plum-700 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform shadow-lg shadow-plum-950">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-32 bg-black text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl reveal">
            <h2 className="serif text-4xl md:text-5xl mb-8">Our Vision for Braj</h2>
            <p className="text-xl text-stone-400 leading-relaxed mb-12">
              We envision a Braj where the heritage is not just preserved in museums but lived through the actions of its people. A cultural renaissance where the youth are the primary guardians of their sacred landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-stone-800 bg-black/40 p-8 rounded-2xl hover:border-plum-500 transition-colors group">
                <h4 className="serif text-xl font-bold mb-3 text-plum-400 group-hover:text-plum-300 transition-colors">Cultural Renaissance</h4>
                <p className="text-stone-500 text-sm">Restoring the aesthetic and spiritual dignity of sacred spaces.</p>
              </div>
              <div className="border border-stone-800 bg-black/40 p-8 rounded-2xl hover:border-plum-500 transition-colors group">
                <h4 className="serif text-xl font-bold mb-3 text-plum-400 group-hover:text-plum-300 transition-colors">Youth Empowerment</h4>
                <p className="text-stone-500 text-sm">Transforming local students into visionary leaders and stewards.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-plum-700 via-transparent to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default About;

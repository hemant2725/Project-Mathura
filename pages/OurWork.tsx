
import React from 'react';
import { ShieldCheck, Workflow, BarChart3, Users2, Clock } from 'lucide-react';

const OurWork: React.FC = () => {
  const dailyRhythm = [
    { time: "05:00 AM", activity: "Yamuna Aarti & Cleaning", detail: "Starting the day with a prayer followed by the physical removal of plastic from the central ghats." },
    { time: "10:00 AM", activity: "Heritage Stewardship", detail: "Maintenance of forgotten kunds and temple peripheries often overlooked by civic bodies." },
    { time: "04:00 PM", activity: "Youth Satsang & Workshop", detail: "Educating local students on the intersection of Braj history and environmental ethics." },
    { time: "07:00 PM", activity: "Community Reflection", detail: "Evening gatherings to discuss progress and plan for the coming days' seva." }
  ];

  return (
    <div className="pt-24 bg-stone-950">
      {/* Hero */}
      <section className="py-20 sm:py-24 border-b border-stone-900">
        <div className="container mx-auto px-4 sm:px-6 reveal">
          <h1 className="serif text-white text-4xl sm:text-5xl md:text-7xl mb-6 sm:mb-8">Devotion into Action</h1>
          <p className="text-lg sm:text-xl text-stone-400 max-w-2xl leading-relaxed">
            Our approach combines traditional values with modern operational strategy to ensure sustainability and impact.
          </p>
        </div>
      </section>

      {/* The Daily Rhythm Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-24 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plum-950/30 border border-plum-900 text-plum-400 text-[10px] uppercase tracking-widest font-bold mb-4">
              <Clock size={14} /> Living the Seva
            </div>
            <h2 className="serif text-white text-4xl sm:text-5xl mb-4">The Daily Rhythm</h2>
            <p className="text-stone-500 italic serif">How devotion translates into morning, noon, and night.</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {dailyRhythm.map((item, idx) => (
              <div key={idx} className="flex gap-8 sm:gap-12 items-start reveal group" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="w-16 sm:w-24 flex-shrink-0 text-plum-500 font-bold serif text-xl sm:text-2xl mt-1">
                  {item.time}
                </div>
                <div className="flex-grow pb-12 border-l border-stone-800 pl-8 sm:pl-12 relative">
                  <div className="absolute top-2 -left-[5px] w-2 h-2 bg-plum-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(219,68,143,0.5)]"></div>
                  <h3 className="serif text-white text-xl sm:text-2xl font-bold mb-3">{item.activity}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm sm:text-base">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: The Challenge */}
      <section className="py-20 sm:py-24 bg-stone-950">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="serif text-white text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center reveal">The Problem We Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Awareness Gap", desc: "Local residents often overlook the slow degradation of their sacred environment due to normalization." },
              { title: "Volunteer Instability", desc: "Most initiatives rely on sporadic enthusiasm, leading to 'burnout' and incomplete projects." },
              { title: "Operational Strain", desc: "A lack of structured feedback and coordination between local government and community groups." }
            ].map((item, idx) => (
              <div key={idx} className={`p-8 sm:p-10 bg-black rounded-2xl sm:rounded-3xl border border-stone-900 text-center hover:border-plum-500/30 transition-all reveal delay-${idx}`}>
                <h3 className="serif text-plum-400 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-stone-500 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Ecosystem Model */}
      <section className="py-20 sm:py-24 bg-black border-y border-stone-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="serif text-white text-3xl sm:text-4xl mb-12 sm:mb-16">The Seva Ecosystem</h2>
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-stone-800 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
                {[
                  { icon: ShieldCheck, title: "Government", desc: "Policy and Infrastructure support" },
                  { icon: Users2, title: "Community", desc: "Local wisdom and participation" },
                  { icon: Workflow, title: "Youth", desc: "The energetic execution core" },
                  { icon: BarChart3, title: "Leadership", desc: "Strategy and long-term vision" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-plum-950/20 border border-plum-900/30 p-6 sm:p-8 rounded-2xl text-center space-y-3 sm:space-y-4 hover:border-plum-500 transition-colors group">
                    <item.icon className="mx-auto text-plum-400 group-hover:scale-110 transition-transform" size={32} />
                    <h4 className="font-bold text-white text-base sm:text-lg">{item.title}</h4>
                    <p className="text-stone-500 text-[10px] sm:text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Shift */}
      <section className="py-20 sm:py-24 bg-stone-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 reveal">
              <h2 className="serif text-white text-3xl sm:text-4xl">Strategy Shift: Continuous Flow</h2>
              <p className="text-stone-400 text-base sm:text-lg leading-relaxed">
                Traditional NGO models often focus on <strong>retention</strong>, which can lead to volunteer burnout. Our model focuses on <strong>Continuous Flow</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                <div className="flex-1 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-500">Old Model</span>
                  <div className="h-1.5 bg-stone-900 rounded-full overflow-hidden">
                    <div className="h-full bg-red-900 w-1/3"></div>
                  </div>
                  <p className="text-[10px] text-stone-600">Retention-based burnout</p>
                </div>
                <div className="flex-1 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-plum-500">Our Model</span>
                  <div className="h-1.5 bg-stone-900 rounded-full overflow-hidden">
                    <div className="h-full bg-plum-500 w-full animate-pulse"></div>
                  </div>
                  <p className="text-[10px] text-stone-600">Continuous flow & replenishment</p>
                </div>
              </div>
            </div>
            <div className="bg-plum-950/30 p-8 sm:p-12 rounded-2xl sm:rounded-3xl border border-plum-900/40 reveal delay-1 shadow-2xl">
              <h3 className="serif text-white text-2xl font-bold mb-6 sm:mb-8">How We Operate</h3>
              <ul className="space-y-6">
                <li className="flex gap-4 group">
                  <div className="w-1.5 h-1.5 bg-plum-500 rounded-full mt-2 sm:mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h5 className="font-bold text-stone-200 text-sm sm:text-base">Coaching Centres</h5>
                    <p className="text-stone-500 text-xs sm:text-sm">Embedding seva values into existing local education hubs.</p>
                  </div>
                </li>
                <li className="flex gap-4 group">
                  <div className="w-1.5 h-1.5 bg-plum-500 rounded-full mt-2 sm:mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h5 className="font-bold text-stone-200 text-sm sm:text-base">Workshops</h5>
                    <p className="text-stone-500 text-xs sm:text-sm">Intensive training on the spiritual and practical aspects of Braj care.</p>
                  </div>
                </li>
                <li className="flex gap-4 group">
                  <div className="w-1.5 h-1.5 bg-plum-500 rounded-full mt-2 sm:mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h5 className="font-bold text-stone-200 text-sm sm:text-base">Volunteer Funnel</h5>
                    <p className="text-stone-500 text-xs sm:text-sm">A systematic journey from curious visitor to dedicated seva-leader.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 sm:py-24 bg-black text-center">
        <div className="container mx-auto px-4 sm:px-6 reveal">
          <h2 className="serif text-white text-3xl sm:text-4xl mb-12 sm:mb-16">The Long-Term Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12">
            {[
              { val: "Daily", label: "Uninterrupted Seva", sub: "Presence on the ghats 365 days a year." },
              { val: "100%", label: "Youth Led", sub: "Driven by the energy of the local new generation." },
              { val: "∞", label: "Cultural Awareness", sub: "A sustainable legacy for the future of Braj." }
            ].map((stat, idx) => (
              <div key={idx} className="reveal" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="serif text-5xl sm:text-6xl font-bold text-plum-500 mb-2 sm:mb-4">{stat.val}</div>
                <p className="text-base sm:text-lg font-medium text-white">{stat.label}</p>
                <p className="text-stone-500 text-[10px] sm:text-xs mt-1 sm:mt-2">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;

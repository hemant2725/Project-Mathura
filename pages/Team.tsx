
import React from 'react';

const Team: React.FC = () => {
  const team = {
    leadership: [
      { id: 1011, name: "Siddharth Sharma", role: "Founder & Spiritual Core", phi: "Seva is the breath of the soul." },
      { id: 1012, name: "Anjali Dev", role: "Lead Strategy", phi: "Balance between ancient wisdom and modern efficiency." }
    ],
    strategic: [
      { id: 1013, name: "Rahul Verma", role: "Youth Coordination", phi: "Youth energy is the sacred fire." },
      { id: 1014, name: "Priya Singh", role: "Community Relations", phi: "Connection is the first step to change." }
    ],
    onGround: [
      { id: 1015, name: "Gopal Das", role: "Seva Coordinator (Yamuna)", phi: "The river knows who serves her with love." },
      { id: 1016, name: "Meera Bai", role: "Education Lead", phi: "Learning begins when the ego bows down." }
    ]
  };

  const Section = ({ title, members }: { title: string, members: any[] }) => (
    <div className="mb-24 reveal">
      <h2 className="serif text-3xl font-bold mb-12 text-plum-400 border-b border-stone-900 pb-4 tracking-wide">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {members.map((m, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left bg-black/40 p-8 rounded-3xl border border-stone-900 hover:border-plum-500/30 transition-all group">
            <div className="w-32 h-32 flex-shrink-0 bg-stone-900 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ring-4 ring-stone-950">
              <img src={`https://picsum.photos/id/${m.id}/200/200`} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2">
              <h3 className="serif text-2xl font-bold text-white">{m.name}</h3>
              <p className="text-plum-400 font-medium uppercase tracking-[0.2em] text-[10px]">{m.role}</p>
              <p className="text-stone-500 italic text-sm leading-relaxed max-w-sm">"{m.phi}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-32 pb-24 bg-stone-950 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24 space-y-6 reveal">
          <h1 className="serif text-white text-5xl md:text-6xl leading-tight">The People Behind <br className="hidden md:block"/> the Promise</h1>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto italic serif">
            A collective of devotees, strategists, and workers united by a single goal.
          </p>
        </div>

        <Section title="Leadership Core" members={team.leadership} />
        <Section title="Strategic Team" members={team.strategic} />
        <Section title="On-Ground Team" members={team.onGround} />
      </div>
    </div>
  );
};

export default Team;

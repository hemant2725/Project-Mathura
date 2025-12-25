
import React from 'react';

const Gallery: React.FC = () => {
  const sections = [
    {
      title: "Seva in Action",
      images: [
        { url: "https://picsum.photos/id/1012/800/800", cap: "The quiet effort of cleaning a forgotten ghat." },
        { url: "https://picsum.photos/id/1015/800/800", cap: "Morning seva rituals at the edge of the Yamuna." },
        { url: "https://picsum.photos/id/1016/800/800", cap: "Collective strength in restoring sacred dust." }
      ]
    },
    {
      title: "Youth Participation",
      images: [
        { url: "https://picsum.photos/id/1018/800/800", cap: "The next generation taking their first step in stewardship." },
        { url: "https://picsum.photos/id/1019/800/800", cap: "Learning the values of humility through shared labor." },
        { url: "https://picsum.photos/id/1020/800/800", cap: "Smiles that follow a morning of hard service." }
      ]
    },
    {
      title: "Sacred Spaces",
      images: [
        { url: "https://picsum.photos/id/1021/800/800", cap: "The stillness of Braj at dawn." },
        { url: "https://picsum.photos/id/1022/800/800", cap: "Ancient stones witnessing modern devotion." },
        { url: "https://picsum.photos/id/1023/800/800", cap: "Yamuna Maharani in her serene flow." }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-stone-950">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-24 space-y-4 reveal">
          <h1 className="serif text-white text-5xl md:text-6xl">Seva Captured</h1>
          <p className="text-stone-500 italic serif">Moments of quiet devotion and the beauty of restored spaces.</p>
        </div>

        {sections.map((section, sIdx) => (
          <div key={sIdx} className="mb-32 reveal" style={{ animationDelay: `${sIdx * 0.2}s` }}>
            <h2 className="serif text-3xl font-bold mb-12 text-teal-400 border-b border-stone-900 pb-4">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {section.images.map((img, iIdx) => (
                <div key={iIdx} className="space-y-4 group cursor-pointer">
                  <div className="overflow-hidden rounded-3xl aspect-square bg-black border border-stone-900 shadow-2xl">
                    <img 
                      src={img.url} 
                      alt={img.cap} 
                      className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                  </div>
                  <p className="serif italic text-stone-500 text-sm leading-relaxed">{img.cap}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

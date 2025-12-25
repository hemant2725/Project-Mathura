
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-stone-950 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 py-16">
          <div className="space-y-12 reveal">
            <div className="space-y-6">
              <span className="text-plum-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Connect</span>
              <h1 className="serif text-white text-5xl md:text-6xl font-bold leading-tight">Talk to Us</h1>
              <p className="text-stone-400 text-lg leading-relaxed font-light">
                Whether you have a question, a suggestion, or just want to share your thoughts, we are here to listen with an open heart.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-black border border-stone-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-plum-400 group-hover:border-plum-500 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-[10px] mb-1">Email Us</h4>
                  <p className="text-stone-500">contact@projectmathura.org</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-black border border-stone-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-plum-400 group-hover:border-plum-500 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-[10px] mb-1">Call Us</h4>
                  <p className="text-stone-500">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 bg-black border border-stone-800 rounded-2xl flex items-center justify-center flex-shrink-0 text-plum-400 group-hover:border-plum-500 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-widest text-[10px] mb-1">Location</h4>
                  <p className="text-stone-500">Yamuna Kunj, Mathura-Vrindavan Road, Mathura, UP 281001</p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-stone-900">
              <p className="serif italic text-stone-600 text-lg">
                "Every act of service begins with a conversation."
              </p>
            </div>
          </div>

          <div className="bg-black p-10 md:p-12 rounded-[40px] border border-stone-900 shadow-2xl reveal delay-1">
            <form className="space-y-8">
              <div className="space-y-2">
                <h2 className="serif text-white text-3xl font-bold mb-2 flex items-center gap-3">
                  <MessageSquare className="text-plum-400" size={24} />
                  Send Intent
                </h2>
                <p className="text-stone-600 text-sm font-medium">We respond to every sincere message.</p>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-plum-500 uppercase tracking-widest ml-1">Name</label>
                <input required type="text" className="w-full bg-stone-950 text-white border border-stone-900 rounded-2xl px-6 py-4 outline-none focus:border-plum-500 transition-all placeholder:text-stone-800 shadow-inner" placeholder="Full Name" />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-plum-500 uppercase tracking-widest ml-1">Email</label>
                <input required type="email" className="w-full bg-stone-950 text-white border border-stone-900 rounded-2xl px-6 py-4 outline-none focus:border-plum-500 transition-all placeholder:text-stone-800 shadow-inner" placeholder="your@email.com" />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-plum-500 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={5} className="w-full bg-stone-950 text-white border border-stone-900 rounded-2xl px-6 py-4 outline-none focus:border-plum-500 transition-all placeholder:text-stone-800 shadow-inner resize-none" placeholder="How can we walk this path together?"></textarea>
              </div>

              <button className="w-full bg-white text-black font-bold py-5 rounded-2xl hover:bg-plum-950 hover:text-white transition-all transform hover:-translate-y-1 shadow-xl active:scale-95 border border-transparent hover:border-plum-800">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 w-full h-[500px] bg-black rounded-[48px] border border-stone-900 overflow-hidden relative reveal">
          <div className="absolute inset-0 z-10 bg-black/60 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-plum-950/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto text-plum-400 border border-plum-900/50">
                <MapPin size={32} />
              </div>
              <p className="serif text-white text-xl italic">Our presence in Mathura</p>
            </div>
          </div>
          <img src="https://picsum.photos/id/1039/1200/800" className="w-full h-full object-cover brightness-[0.2] grayscale" alt="Map" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

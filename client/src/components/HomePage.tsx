import { DoorOpen, ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row bg-black text-white font-sans overflow-hidden">

      <section className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12 z-10">
        
        <div className="max-w-md w-full mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-10">
            <Sparkles className="w-3.5 h-3.5 text-green-500" />
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-[0.2em]">v1.0 Protocol</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
            Chat<span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">X</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 font-medium">
            Encrypted messaging for the modern web. <br className="hidden md:block"/>
            Create a room, share the link, and disappear.
          </p>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Display Name"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-5 px-6 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all shadow-inner"
            />

            <button className="w-full bg-white hover:bg-zinc-200 text-black font-black py-5 rounded-2xl transition-all active:scale-98 flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              <DoorOpen className="w-6 h-6" />
              CREATE SECURE ROOM
            </button>

            <div className="relative group">
              <input
                type="text"
                placeholder="Paste room code here..."
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-5 px-6 text-green-400 placeholder:text-zinc-700 font-mono tracking-[0.3em] focus:outline-none focus:border-green-500/50 transition-colors"
              />
              <button className="absolute right-3 top-3 bottom-3 bg-zinc-800 hover:bg-green-500 hover:text-black text-zinc-400 px-4 rounded-xl transition-all flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-4 text-[10px] text-zinc-700 font-bold uppercase tracking-widest">
            <span>No Tracking</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span>Fully Secured</span>
          </div>
        </div>
      </section>

      <section className="hidden md:block flex-1 relative border-l border-zinc-900">
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20 z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-black to-transparent z-10" />
        
        <img
          src="/cat.jpg"
          alt="Abstract Workspace"
          className="h-full w-full object-cover grayscale-20 contrast-125"
        />

        <div className="absolute bottom-12 right-12 z-20 bg-zinc-900/80 backdrop-blur-md p-6 rounded-3xl border border-white/5 max-w-xs shadow-2xl">
          <p className="text-zinc-400 text-sm leading-relaxed">
            "The fastest way to spin up a private conversation without leaving a digital footprint."
          </p>
          <div className="mt-4 flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-1 bg-green-500/30 rounded-full" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
import { Send, Users, LogOut, Copy, Hash } from "lucide-react";

export default function ChatArea({ roomId, name }: { roomId: string, name: string }) {
  return (
    <div className="flex h-screen w-full bg-black text-white font-sans overflow-hidden">
      
      <aside className="hidden md:flex w-72 flex-col border-r border-zinc-900 bg-zinc-950/50 backdrop-blur-xl">
        <div className="p-6 border-bottom border-zinc-900 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <Hash className="w-6 h-6 text-black font-bold" />
          </div>
          <div>
            <h2 className="font-black tracking-tight text-sm">ROOM ID</h2>
            <p className="text-green-500 font-mono text-xs uppercase tracking-widest">{roomId}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4 px-2">Active Now — 3</div>

          {['Sarah_Dev', name, 'Quantum_Cat'].map((user) => (
            <div key={user} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors group cursor-default">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px] font-bold">
                  {user[0].toUpperCase()}
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full" />
              </div>
              <span className={`text-sm font-medium ${user === name ? 'text-green-500' : 'text-zinc-300'}`}>
                {user} {user === name && "(You)"}
              </span>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-zinc-900">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 text-xs font-bold transition-all uppercase tracking-widest">
            <LogOut className="w-4 h-4" />
            Leave Room
          </button>
        </div>
      </aside>

      <section className="flex-1 flex flex-col relative">
        <header className="h-20 border-b border-zinc-900 flex items-center justify-between px-8 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="md:hidden w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
              <Hash className="w-5 h-5 text-black" />
            </div>
            <h1 className="text-lg font-bold tracking-tight">Main Channel</h1>
          </div>
          <button className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-xl text-xs font-bold transition-all">
            <Copy className="w-3.5 h-3.5 text-green-500" />
            Invite Code
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">

          <div className="flex flex-col items-start max-w-xl gap-2">
            <div className="flex items-center gap-2 ml-1">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Sarah_Dev</span>
              <span className="text-[10px] text-zinc-700">12:44 PM</span>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl rounded-tl-none text-zinc-300 text-sm leading-relaxed">
              Hey! Just joined the room. This end-to-end encryption feels snappy. ⚡️
            </div>
          </div>

          <div className="flex flex-col items-end max-w-xl ml-auto gap-2">
            <div className="flex items-center gap-2 mr-1">
              <span className="text-[10px] text-zinc-700">12:45 PM</span>
              <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">You</span>
            </div>
            <div className="bg-green-600 text-black p-4 rounded-2xl rounded-tr-none text-sm font-medium leading-relaxed shadow-[0_10px_30px_rgba(34,197,94,0.15)]">
              Welcome to the protocol. No logs, no traces. Just pure vibes.
            </div>
          </div>
        </div>

        <footer className="p-6 md:p-10 bg-linear-to-t from-black to-transparent">
          <div className="max-w-4xl mx-auto relative flex items-center gap-3">
            <input 
              type="text" 
              placeholder={`Message as ${name}...`}
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl py-5 px-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500/50 transition-all shadow-2xl"
            />
            <button className="bg-white hover:bg-green-500 text-black p-4 rounded-2xl transition-all active:scale-95 group">
              <Send className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
}
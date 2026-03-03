export default function MessageBubble({ msg }: { msg: string }) {
  return (
    <div className="flex justify-start mb-3 animate-in fade-in slide-in-from-left-2">
      <div className="relative max-w-[80%] px-4 py-2 bg-zinc-800/50 border border-white/10 backdrop-blur-md rounded-2xl rounded-bl-none shadow-lg">
        <p className="text-zinc-100 text-sm md:text-base selection:bg-green-500/30">
          {msg}
        </p>
        <div className="absolute inset-0 bg-green-500/5 blur-xl -z-10 rounded-full" />
      </div>
    </div>
  );
}
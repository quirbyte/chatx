import {
  DoorOpen,
  ArrowRight,
  Sparkles,
  AlertCircle,
  X,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const roomArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const getRoomCode = () => {
  let roomId = "";
  const randomValues = new Uint32Array(6);
  window.crypto.getRandomValues(randomValues);
  for (let i = 0; i < 6; i++) {
    const randomIndex = randomValues[i] % roomArray.length;
    roomId += roomArray[randomIndex];
  }
  return roomId;
};

export default function HomePage({
  onJoin,
}: {
  onJoin: (id: string, name: string) => void;
}) {
  const [name, setName] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const [toast, setToast] = useState<{
    message: string;
    show: boolean;
    type: "success" | "error";
  }>({
    message: "",
    show: false,
    type: "error",
  });

  const showToast = (msg: string, type: "success" | "error" = "error") => {
    setToast({ message: msg, show: true, type });
    setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 4000);
  };

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "") {
      showToast("Please enter a display name first.", "error");
      return;
    }
    const generatedId = getRoomCode();
    setRoomId(generatedId);
    showToast("Secure room generated!", "success");
    setTimeout(() => onJoin(generatedId, name), 800);
  };

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "" || roomId.trim() === "") {
      showToast("Display name and Room ID are both required.", "error");
      return;
    }
    onJoin(roomId, name);
  };

  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row bg-black text-white font-sans overflow-hidden relative">
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${toast.show ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"}`}
      >
        <div
          className={`bg-zinc-900 border ${toast.type === "success" ? "border-green-500/50" : "border-red-500/50"} p-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[320px] backdrop-blur-xl`}
        >
          <div
            className={`${toast.type === "success" ? "bg-green-500/20" : "bg-red-500/20"} p-2 rounded-xl`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-500" />
            )}
          </div>
          <div className="flex-1">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-0.5">
              {toast.type === "success" ? "System Ready" : "System Halt"}
            </p>
            <p className="text-sm font-medium text-zinc-200">{toast.message}</p>
          </div>
          <button
            onClick={() => setToast((prev) => ({ ...prev, show: false }))}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
      <section className="flex-1 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12 z-10">
        <div className="max-w-md w-full mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-10">
            <Sparkles className="w-3.5 h-3.5 text-green-500" />
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-[0.2em]">
              v1.0 Protocol
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
            Chat
            <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">
              X
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 font-medium">
            Encrypted messaging for the modern web.
            <br className="hidden md:block" />
            Create a room, share the link, and disappear.
          </p>

          <div className="space-y-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Display Name"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-5 px-6 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all shadow-inner"
            />

            <button
              className="w-full bg-white hover:bg-zinc-200 text-black font-black py-5 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
              onClick={handleCreateRoom}
            >
              <DoorOpen className="w-6 h-6" />
              CREATE SECURE ROOM
            </button>

            <div className="relative group">
              <input
                type="text"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value.toUpperCase())}
                placeholder="Paste room code here..."
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-5 px-6 text-green-400 placeholder:text-zinc-700 font-mono tracking-[0.3em] focus:outline-none focus:border-green-500/50 transition-colors"
              />
              <button
                onClick={handleJoinRoom}
                className="absolute right-3 top-3 bottom-3 bg-zinc-800 hover:bg-green-500 hover:text-black text-zinc-400 px-4 rounded-xl transition-all flex items-center justify-center"
              >
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
          alt="Workspace"
          className="h-full w-full object-cover grayscale-[0.2] contrast-125"
        />

        <div className="absolute bottom-12 right-12 z-20 bg-zinc-900/80 backdrop-blur-md p-6 rounded-3xl border border-white/5 max-w-xs shadow-2xl">
          <p className="text-zinc-400 text-sm leading-relaxed">
            "The fastest way to spin up a private conversation without leaving a
            digital footprint."
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

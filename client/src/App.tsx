import { useState } from "react";
import ChatArea from "./components/ChatArea";
import HomePage from "./components/HomePage";

export default function App() {
  const [joined, setJoined] = useState(false);
  const [roomId, setRoomId] = useState<string>("");
  const [name,setName] = useState<string>("");
  return (
    <div className="bg-black text-white h-screen w-screen flex justify-center items-center">
      {joined ? (
        <ChatArea roomId={roomId} name={name} />
      ) : (
        <HomePage
          onJoin={(id:string,name:string) => {
            setJoined(true);
            setRoomId(id);
            setName(name)
          }}
        />
      )}
    </div>
  );
}

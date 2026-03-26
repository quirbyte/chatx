import ChatBubble from "@/components/chatbubble";
import Groupbar from "@/components/groupbar";
import { CopyIcon } from "lucide-react";
import { SendIcon } from "lucide-react";

export default function Dashboard(){
    return <div className="absolute h-screen w-screen flex items-center justify-center">
        <div className="bg-blue-200 h-[90%] w-[90%] rounded-2xl flex">
            <div className="relative bg-blue-400 w-[30%] h-full rounded-l-2xl pt-5 flex flex-col gap-4 items-center">
                <Groupbar title="Group 1" />
                <Groupbar title="BEFGERF" />
                <Groupbar title="HJ5YGERFWEF" />
                <Groupbar title="TH4EGWFWEF" />
                <Groupbar title="HWFFWFFF" />
                <div className="absolute bottom-2 bg-white text-black font-bold text-center py-2 px-7 rounded-full">Create / Join Room</div>
            </div>
            <div className="w-[70%] h-full relative">
                <div className="flex justify-between px-4 bg-blue-800 text-white rounded-tr-2xl p-3">
                    <div className="flex gap-3">
                        <div className="font-extrabold underline">ROOM CODE :</div>
                        <div className="flex gap-2 items-center justify-center">
                            <div>ABCDEF</div>
                            <div className="text-zinc-500"><CopyIcon size={12} /></div>
                        </div>
                    </div>
                    <div className="bg-white text-red-600 font-bold px-2 rounded-full cursor-default">Leave Room</div>
                </div>
                <div className="p-4 flex flex-col gap-2.5">
                    <ChatBubble sender="Ranjan" msg="Hi everyone!" time="9:05 PM" />
                    <ChatBubble sender="Ranjan" msg="Hi everyone!" time="10:05 PM" />
                </div>
                <textarea className="absolute bottom-0 resize-none rounded-br-2xl bg-white h-12 w-full focus:outline-0 p-2 text-md">
                </textarea>
                <div className="absolute right-4 bottom-3"><SendIcon size={20}/></div>
            </div>
        </div>
        <div className="absolute bottom-2 left-[6%] text-red-600 hover:text-red-300 cursor-default">Log out</div>
    </div>
}
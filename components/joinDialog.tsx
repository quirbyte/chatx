import { XIcon } from "lucide-react"

interface DialogProps{
    closeDialog: ()=>void
}

export default function JoinDialog(props:DialogProps){
    const {closeDialog} = props;
    return <div className="relative h-100 w-100 bg-backgroundlight rounded-2xl flex flex-col text-white items-center p-7 gap-5">
        <div className="absolute top-2 right-2 cursor-default" onClick={closeDialog} >
            <XIcon size={30} />
        </div>
        <h1 className="font-bold tracking-tight text-2xl">JOIN ROOM</h1>
        <div className="flex flex-col gap-2.5 w-full">
            <label>ROOM CODE:</label>
            <input type="text" placeholder="Enter Room Code" className="bg-blue-900 w-full focus:outline-0 p-3 rounded-full" />
            <button className="w-full p-3 bg-white text-black font-bold text-xl mt-2 rounded-full">JOIN ROOM</button>
        </div>
        <h1 className="font-bold tracking-tight text-2xl">CREATE ROOM</h1>
        <button className="w-full p-3 bg-white text-black font-bold text-xl mt-2 rounded-full">CREATE ROOM</button>
    </div>
}
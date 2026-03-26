interface bubbleProps{
    sender: string;
    msg: string;
    time: string;
}

export default function ChatBubble(props: bubbleProps){
    return <div className="">
        <div className="pl-1">{props.sender}</div>
        <div className="bg-blue-400 p-2 max-w-80 rounded-t-2xl rounded-br-2xl relative">
            <div className="text-white">{props.msg}</div>
            <div className="absolute bottom-0 right-3 text-[10px] text-white">
                {props.time}
            </div>
        </div>
        
        
    </div>
}
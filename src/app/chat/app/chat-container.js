
import UserChatbox from "@/app/user_input/app/user-chatbox"

export default function ChatContainer (){

    

    return <div className="border-white overflow-scroll self-center w-96 h-80">
        <h1>some contents</h1>
        <div className="self-baseline">
            <UserChatbox />
        </div>
    </div>

}
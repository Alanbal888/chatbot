
"use client"

import { useState, useContext} from "react";


export default function UserChatbox() { 

    const [userInput, setUserInput] = useState("");

    //const [userConversation] = useContext();

    const onUserType = event => {
        setUserInput(event.target.value);
        console.log("User typed:", event.target.value);
    }

    const submitInput = event => { 
        if (event.key.trim() === "Enter") { 
            console.log("pressed Enter");
            event.preventDefault();
            setUserInput("");
        }

    }

    return (
        <div className="w-26 max-h-3 text-green-500">
            <input value={userInput} className="bg-transparent border-0" onKeyDown={submitInput} type="text" onChange={onUserType}/>
        </div>
    );

}
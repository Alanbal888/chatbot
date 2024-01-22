"use client"

import { useState } from 'react';
import ChatContainer from './chat/app/chat-container';

export default function Home() {

  const [showCursor, setShowCursor] = useState(true);

  setTimeout(() => {
    setShowCursor(!showCursor);
  }, 500);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="content-center text-green-500	inline-flex	">
        <h1 className="font-mono">My First ChatBot </h1><span className="text-sm" hidden={showCursor}>|</span>
      </div>
      <div className="align-bottom">
        <ChatContainer />
      </div>
    </main>
  )
}

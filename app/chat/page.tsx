"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { chatMessages } from "@/lib/mock-data";

export default function ChatPage() {
  const [messages, setMessages] = useState(chatMessages);
  const [draft, setDraft] = useState("");

  const onSend = () => {
    if (!draft.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), user: "me", text: draft.trim(), self: true }]);
    setDraft("");
  };

  return (
    <AppShell>
      <main className="page">
        <div className="toolbar">
          <h1>실시간 채팅방</h1>
          <button>참여자 보기</button>
        </div>

        <div className="card">
          <div className="chat-box">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.self ? "self" : ""}`}>
                <strong>{message.user}</strong>
                <div>{message.text}</div>
              </div>
            ))}
          </div>

          <div className="input-row">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="메시지를 입력하세요"
            />
            <button onClick={onSend}>전송</button>
          </div>
        </div>
      </main>
    </AppShell>
  );
}

"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";

export default function LoginPage() {
  const [nickname, setNickname] = useState("stay99");
  const [remember, setRemember] = useState(true);

  return (
    <AppShell>
      <main className="page">
        <div className="hero">
          <h1>닉네임 로그인</h1>
          <p>닉네임은 중복될 수 없으며, 자동 로그인이 유지됩니다. 관리자 계정은 stay99입니다.</p>
        </div>

        <div className="card" style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2>로그인</h2>
          <div style={{ display: "grid", gap: 16 }}>
            <div>
              <label>닉네임</label>
              <input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="닉네임을 입력하세요"
                style={{ width: "100%", marginTop: 8, padding: 12, borderRadius: 10, border: "1px solid #d1d5db" }}
              />
            </div>

            <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} />
              자동 로그인 유지
            </label>

            <button style={{ width: "100%" }}>로그인</button>
          </div>
        </div>
      </main>
    </AppShell>
  );
}

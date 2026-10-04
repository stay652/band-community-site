"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { resources } from "@/lib/mock-data";

export default function ResourcesPage() {
  const [passwords, setPasswords] = useState<Record<number, string>>({ 2: "", 3: "" });

  const handlePasswordChange = (level: number, value: string) => {
    setPasswords((prev) => ({ ...prev, [level]: value }));
  };

  return (
    <AppShell>
      <main className="page">
        <div className="toolbar">
          <h1>자료실</h1>
          <button>업로드</button>
        </div>

        <div className="card">
          {resources.map((resource) => (
            <div key={resource.level} className="resource-row">
              <div>
                <h3>{resource.title}</h3>
                <div className="meta">{resource.access}</div>
                {resource.password ? (
                  <div className="password-box">
                    <input
                      type="password"
                      maxLength={6}
                      value={passwords[resource.level] ?? ""}
                      onChange={(e) => handlePasswordChange(resource.level, e.target.value)}
                      placeholder="6자리 비밀번호"
                    />
                    <button>확인</button>
                  </div>
                ) : (
                  <div className="meta" style={{ marginTop: 8 }}>공개 접근 가능</div>
                )}
              </div>
              <span className="badge">Lv.{resource.level}</span>
            </div>
          ))}
        </div>
      </main>
    </AppShell>
  );
}

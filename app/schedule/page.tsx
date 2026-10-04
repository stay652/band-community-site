"use client";

import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { schedules } from "@/lib/mock-data";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState("2026-10-12");

  return (
    <AppShell>
      <main className="page">
        <div className="toolbar">
          <h1>전체 일정</h1>
          <button>일정 추가</button>
        </div>

        <div className="sched-grid">
          <div className="calendar">
            <h2>캘린더</h2>
            <div className="calendar-grid">
              {Array.from({ length: 35 }, (_, index) => {
                const day = index + 1;
                const active = day === 12;
                return (
                  <div key={day} className={`day ${active ? "active" : ""}`} onClick={() => setSelectedDate(`2026-10-${String(day).padStart(2, "0")}`)}>
                    <strong>{day}</strong>
                    {active ? <span>회의</span> : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card">
            <h2>일정 목록</h2>
            <ul className="list">
              {schedules.map((item) => (
                <li key={item.title}>
                  <div className="meta">{item.type}</div>
                  <strong>{item.title}</strong>
                  <div>{item.date} · {item.time}</div>
                </li>
              ))}
            </ul>
            <div className="notice" style={{ marginTop: 16 }}>
              선택된 일정: {selectedDate}
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}

import Link from "next/link";
import { stats, newsItems, posts, schedules } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <span className="badge">Community</span>
        <h1>밴드 웹사이트</h1>
        <p>
          닉네임 로그인, 일정, 게시판, 채팅, 자료실, 알림, 관리자 패널까지 통합된 커뮤니티 서비스입니다.
        </p>
      </section>

      <section className="stats">
        {stats.map((item) => (
          <div className="stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="grid" style={{ marginTop: 24 }}>
        <div className="card">
          <h3>최근 소식</h3>
          <ul className="list">
            {newsItems.map((news) => (
              <li key={news.title}>
                <div className="meta">{news.date} · {news.tag}</div>
                <strong>{news.title}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>공지사항</h3>
          <div className="notice">
            전체 일정 자동 연동, 실시간 채팅, 자료실 비밀번호 정책이 적용됩니다.
          </div>
          <ul className="list">
            <li>닉네임 로그인 유지 및 중복 체크</li>
            <li>관리자 계정 stay99 고정</li>
            <li>모바일 사용성 개선 적용</li>
          </ul>
        </div>

        <div className="card">
          <h3>다가오는 일정</h3>
          <ul className="list">
            {schedules.slice(0, 3).map((item) => (
              <li key={item.title}>
                <div className="meta">{item.type}</div>
                <strong>{item.title}</strong>
                <div>{item.date} · {item.time}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card" style={{ marginTop: 24 }}>
        <h2>최근 게시글</h2>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="meta">{post.author} · {post.date}</div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className="comment-box">
              {post.comments.map((comment) => (
                <div className="comment" key={`${post.id}-${comment.author}`}>
                  <strong>{comment.author}</strong>: {comment.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href="/board" className="button">게시판 바로가기</Link>
        <Link href="/schedule" className="button secondary">일정 보기</Link>
      </div>
    </main>
  );
}

import { AppShell } from "@/components/AppShell";
import { posts } from "@/lib/mock-data";

export default function BoardPage() {
  return (
    <AppShell>
      <main className="page">
        <div className="toolbar">
          <h1>자유 / 공지 게시판</h1>
          <button>새 글 작성</button>
        </div>

        {posts.map((post) => (
          <article className="post" key={post.id}>
            <div className="meta">{post.author} · {post.date}</div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>

            <div className="comment-box">
              <h4>댓글</h4>
              {post.comments.map((comment) => (
                <div className="comment" key={`${post.id}-${comment.author}`}>
                  <strong>{comment.author}</strong>: {comment.text}
                </div>
              ))}
            </div>
          </article>
        ))}
      </main>
    </AppShell>
  );
}

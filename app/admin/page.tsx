import { AppShell } from "@/components/AppShell";
import { admins } from "@/lib/mock-data";

export default function AdminPage() {
  return (
    <AppShell>
      <main className="page">
        <div className="toolbar">
          <h1>관리자 패널</h1>
          <button>설정 저장</button>
        </div>

        <section className="admin-panel">
          <div className="card">
            <h3>회원 등급 관리</h3>
            <table className="mini-table">
              <thead>
                <tr>
                  <th>닉네임</th>
                  <th>등급</th>
                  <th>역할</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((admin) => (
                  <tr key={admin.name}>
                    <td>{admin.name}</td>
                    <td>{admin.grade}</td>
                    <td>{admin.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>게시판 관리</h3>
            <ul className="list">
              <li>자유게시판: 공개</li>
              <li>공지게시판: 관리자 전용 작성</li>
              <li>댓글 허용: 전체</li>
              <li>메인 노출: 공지 우선</li>
            </ul>
          </div>

          <div className="card">
            <h3>자료실 관리</h3>
            <ul className="list">
              <li>1등급: 공개</li>
              <li>2등급: 비밀번호 필요</li>
              <li>3등급: 비밀번호 필요</li>
              <li>비밀번호는 6자리 제한</li>
            </ul>
          </div>
        </section>
      </main>
    </AppShell>
  );
}

export type MenuItem = {
  label: string;
  href: string;
};

export const menuItems: MenuItem[] = [
  { label: "메인", href: "/" },
  { label: "로그인", href: "/login" },
  { label: "게시판", href: "/board" },
  { label: "일정", href: "/schedule" },
  { label: "채팅", href: "/chat" },
  { label: "자료실", href: "/resources" },
  { label: "관리자", href: "/admin" },
];

export const stats = [
  { label: "회원수", value: "8,420" },
  { label: "실시간 채팅", value: "128" },
  { label: "오늘 일정", value: "24" },
  { label: "자료 보관", value: "390" },
];

export const newsItems = [
  { title: "정기 밴드 오프라인 모임", date: "2026.10.04", tag: "공지" },
  { title: "자료실 비밀번호 정책 안내", date: "2026.10.02", tag: "안내" },
  { title: "신규 멤버 환영 티켓 배포", date: "2026.10.01", tag: "뉴스" },
];

export const posts = [
  {
    id: 1,
    title: "첫 번째 자유게시판 글",
    author: "sky123",
    date: "2026.10.04",
    content: "이번 주 밴드 일정과 활동 계획 공유합니다. 참여하고 싶은 분은 댓글로 남겨주세요.",
    comments: [
      { author: "mira", text: "저도 참여할게요!" },
      { author: "stay99", text: "좋습니다. 일정표는 관리자 페이지에서 확인해주세요." },
    ],
  },
  {
    id: 2,
    title: "공지: 자료실 접근 기준 변경",
    author: "stay99",
    date: "2026.10.02",
    content: "자료실 등급별 비밀번호 정책이 적용됩니다. 관리자만 비밀번호를 갱신할 수 있습니다.",
    comments: [{ author: "sora", text: "확인했습니다." }],
  },
];

export const schedules = [
  { title: "정기 밴드 회의", date: "2026-10-12", time: "19:00", type: "정기" },
  { title: "신입 멤버 환영파티", date: "2026-10-15", time: "18:30", type: "행사" },
  { title: "스터디 모임", date: "2026-10-19", time: "20:00", type: "스터디" },
  { title: "월간 공지 정리", date: "2026-10-22", time: "17:00", type: "관리" },
];

export const chatMessages = [
  { id: 1, user: "mira", text: "오늘 저녁 회의 참여 가능할까요?", self: false },
  { id: 2, user: "me", text: "네, 정오까지 들어오면 됩니다.", self: true },
  { id: 3, user: "sora", text: "자료실 비밀번호는 2등급 123456 형태로 관리되고 있나요?", self: false },
];

export const resources = [
  { level: 1, title: "공개 자료실", access: "모든 회원 접근 가능", password: null },
  { level: 2, title: "2등급 자료실", access: "별도 비밀번호 필요", password: "123456" },
  { level: 3, title: "3등급 자료실", access: "관리자 승인 후 접근", password: "654321" },
];

export const admins = [
  { name: "stay99", grade: "관리자", role: "전체 관리" },
  { name: "mira", grade: "서포트멤버", role: "콘텐츠 관리" },
  { name: "sora", grade: "정식멤버", role: "일정 관리" },
];

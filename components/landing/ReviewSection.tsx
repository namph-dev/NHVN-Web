type Review = {
  name: string;
  role: string;
  content: string;
  initials: string;
  avatarColor: string;
};

const reviews: Review[] = [
  {
    name: "Nguyen Dinh Anh",
    role: "Chu cua hang",
    content:
      "Ung dung nay giup toi quan ly cong viec hang ngay mot cach hieu qua hon rat nhieu.",
    initials: "NA",
    avatarColor: "from-cyan-400 to-blue-500",
  },
  {
    name: "Le Lien",
    role: "Chu cua hang",
    content:
      "Toi da tiet kiem duoc rat nhieu thoi gian nho tinh nang tu dong cap nhat kho va quan ly don hang hieu qua.",
    initials: "LL",
    avatarColor: "from-emerald-400 to-teal-500",
  },
  {
    name: "Hieu Nguyen",
    role: "Chu cua hang",
    content:
      "Giao dien than thien, de su dung, doi ngu cua toi lam quen rat nhanh va van hanh on dinh moi ngay.",
    initials: "HN",
    avatarColor: "from-rose-400 to-red-500",
  },
  {
    name: "Thao Tran",
    role: "Chu cua hang",
    content:
      "Bao cao ro rang, bieu do de doc, giup toi ra quyet dinh nhap hang chinh xac hon truoc.",
    initials: "TT",
    avatarColor: "from-amber-400 to-orange-500",
  },
  {
    name: "Minh Pham",
    role: "Chu cua hang",
    content:
      "Toi danh gia cao kha nang dong bo du lieu va theo doi don hang theo thoi gian thuc, rat huu ich.",
    initials: "MP",
    avatarColor: "from-violet-400 to-purple-500",
  },
];

const marqueeItems = [...reviews, ...reviews];

export function ReviewSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2f6eea] via-[#2c68e4] to-[#2563eb] py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-white/10" />
        <div className="absolute right-[-120px] top-[-40px] h-96 w-96 rounded-full bg-white/8" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[#1f5cd6]/35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1900px]">
        <h2 className="px-6 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Đánh giá ứng dụng
        </h2>

        <div className="relative mt-10 overflow-hidden">
          <div className="review-marquee-track flex w-max gap-6 px-6 md:px-8">
            {marqueeItems.map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="w-[86vw] min-w-[300px] max-w-[500px] rounded-[28px] bg-white p-7 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.18)]"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-xl font-semibold text-white ${review.avatarColor}`}
                    aria-hidden="true"
                  >
                    {review.initials}
                  </span>
                  <div>
                    <p className="text-2xl font-semibold leading-tight">
                      {review.name}
                    </p>
                    <p className="mt-1 text-lg text-slate-500">{review.role}</p>
                  </div>
                </div>

                <p className="mt-6 text-6xl leading-none text-slate-300">“</p>
                <p className="mt-2 text-[32px]/[1.45] text-slate-600">
                  {review.content}
                </p>

                <div className="mt-7 flex gap-2 text-4xl leading-none text-[#F4B400]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#2f6eea] to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#2563eb] to-transparent md:w-24" />
        </div>
      </div>
    </section>
  );
}

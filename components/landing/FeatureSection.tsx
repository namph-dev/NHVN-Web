import Image from "next/image";

const reviewers = [
  { initials: "AN", color: "from-amber-300 to-rose-400" },
  { initials: "LY", color: "from-cyan-300 to-blue-500" },
  { initials: "PH", color: "from-fuchsia-300 to-pink-500" },
  { initials: "TR", color: "from-emerald-300 to-teal-500" },
];

export function FeatureSection() {
  return (
    <section id="features" className="px-6 py-20 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div className="rounded-[32px]  p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:p-12">
          <div className="mx-auto max-w-[660px]">
            <Image
              src="/image/banner.png"
              alt="Minh hoa tinh nang quan ly ban hang"
              width={760}
              height={620}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="max-w-lg text-5xl leading-[1.12] font-bold tracking-tight text-slate-700 sm:text-6xl">
            Quản lý bán hàng toàn diện
          </h2>

          <p className="max-w-xl text-xl leading-relaxed text-slate-400 sm:text-2xl">
            Quản lý và theo dõi mọi giao dịch bán hàng từ ứng dụng, với các
            tính năng như lập hóa đơn, theo dõi thanh toán và quản lý đối tác
            như khách hàng và nhà cung cấp.
          </p>

          <a
            href="#contact"
            className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[#2f6eea] px-11 text-xl font-medium text-white transition hover:bg-[#1f5cd6] sm:w-auto sm:text-2xl"
          >
            Xem chi tiết
          </a>

          <div className="flex items-center gap-4 pt-1">
            <div className="flex -space-x-7">
              {reviewers.map((reviewer) => (
                <span
                  key={reviewer.initials}
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-[#f2f3f5] bg-gradient-to-br text-sm font-semibold text-white ${reviewer.color}`}
                  aria-hidden="true"
                >
                  {reviewer.initials}
                </span>
              ))}
            </div>
            <p className="whitespace-nowrap text-base text-slate-400 sm:text-lg lg:text-xl">
              +500+ đánh giá tốt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

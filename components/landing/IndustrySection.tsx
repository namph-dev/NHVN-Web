type IndustryItem = {
  title: string;
  description: string;
  icon: "fashion" | "accessories" | "production";
};

const industries: IndustryItem[] = [
  {
    title: "Thời trang may mặc",
    description: "Quản lý hàng hóa nhanh chóng theo loại mặt hàng, màu sắc, kích thước",
    icon: "fashion",
  },
  {
    title: "Phụ kiện",
    description: "Quản lý quy trình phục vụ - chuẩn xác, thuận lợi.",
    icon: "accessories",
  },
  {
    title: "Sản xuất",
    description: "Quản lý được cắt, máy in, thêu, giặt,gập là , khuy khuyết...",
    icon: "production",
  },
];

function FashionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M8 5.5 10.5 4h3L16 5.5l2 1.5-1 3h-2v9h-6v-9H7L6 7l2-1.5Z" />
      <path d="M9 5.5 12 8l3-2.5" />
    </svg>
  );
}

function AccessoriesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5.5 8.5h8a2 2 0 0 1 2 2v5h-10a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" />
      <path d="M15.5 10.5h3v3h-3z" />
      <path d="M7.5 8.5v-2h6v2" />
      <path d="M4.5 17.5h12" />
    </svg>
  );
}

function ProductionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="4" y="6.5" width="13" height="10" rx="1.8" />
      <path d="M17 9.5h2.8c.9 0 1.7.8 1.7 1.7v2.6c0 .9-.8 1.7-1.7 1.7H17" />
      <circle cx="8" cy="15.5" r="1.3" />
      <circle cx="13" cy="15.5" r="1.3" />
    </svg>
  );
}

function IndustryIcon({ icon }: { icon: IndustryItem["icon"] }) {
  if (icon === "fashion") return <FashionIcon />;
  if (icon === "accessories") return <AccessoriesIcon />;
  return <ProductionIcon />;
}

export function IndustrySection() {
  return (
    <section className="bg-[#F3F4F7] px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight text-slate-700 sm:text-5xl lg:text-6xl">
         Phần mềm quản lý bán hàng đa ngàng nghề
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => (
            <article
              key={item.title}
              className="rounded-[26px] border border-[#E2E6EE] bg-white p-7 text-center shadow-[0_1px_0_rgba(255,255,255,0.9)]"
            >
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#E4EEF9] text-[#2F6EEA]">
                <IndustryIcon icon={item.icon} />
              </span>

              <h3 className="mt-5 text-3xl font-bold text-slate-700">
                {item.title}
              </h3>
              <p className="mt-3 text-xl leading-relaxed text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

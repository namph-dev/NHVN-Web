type Highlight = {
  id: string;
  title: string;
  description: string;
  gridClass: string;
  icon: "operations" | "partners" | "security" | "finance" | "cost";
};

const highlights: Highlight[] = [
  {
    id: "operations",
    title: "Quản lý: cắt, may, in, thêu, giặt...",
    description:
      "Quản lý bán cắt, may, in, thêu, cập nhật đơn hàng mới, kiểm tra tình trạng đơn và quản lý chi tiết.",
    gridClass: "lg:col-span-2",
    icon: "operations",
  },
  {
    id: "partners",
    title: "Quản lý đối tác",
    description:
      "Theo dõi và duy trì mối quan hệ với các bên liên quan như đơn vị cắt, may, in thêu, giặt, gấp là.",
    gridClass: "lg:col-span-2",
    icon: "partners",
  },
  {
    id: "security",
    title: "Bảo mật dữ liệu",
    description:
      "Dữ liệu sản phẩm, khách hàng và nhà cung cấp được mã hóa an toàn, bảo vệ tối đa theo chính sách bảo mật.",
    gridClass: "lg:col-span-2",
    icon: "security",
  },
  {
    id: "finance",
    title: "Tài chính và báo cáo",
    description:
      "Theo dõi doanh thu, lợi nhuận và chi phí theo thời gian thực, hỗ trợ ra quyết định và tùy chỉnh báo cáo linh hoạt.",
    gridClass: "lg:col-span-3",
    icon: "finance",
  },
  {
    id: "cost",
    title: "Tiết kiệm chi phí",
    description:
      "Tiết kiệm đến 30% chi phí quản lý kho hàng nhờ tự động hóa, tối ưu chuỗi cung ứng và giảm chi phí vận hành.",
    gridClass: "lg:col-span-3",
    icon: "cost",
  },
];

function IconOperations() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-12 w-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="2.5" y="3.5" width="8.5" height="6" rx="1.5" />
      <rect x="13" y="3.5" width="8.5" height="6" rx="1.5" />
      <rect x="2.5" y="14.5" width="8.5" height="6" rx="1.5" />
      <path d="M14 20.5c3 0 5.5-2.5 5.5-5.5" />
      <path d="m17.5 17.5 2 2.5 2-2.5" />
      <path d="M10 3.5C7 3.5 4.5 6 4.5 9" />
      <path d="m7 6  -2.5 2.5L2 6" />
    </svg>
  );
}

function IconPartners() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-12 w-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="10" cy="6.5" r="3.2" />
      <path d="M3 19.5c0-3.3 3.1-5.8 7-5.8s7 2.5 7 5.8" />
      <path d="m16 16.5 2 2 3.5-4" />
    </svg>
  );
}

function IconSecurity() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-12 w-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6" />
      <path d="M10 7.3v5.4" />
      <path d="M8.4 8.8h3.2" />
      <path d="M8.4 12.6h3.2" />
      <circle cx="18.5" cy="16.5" r="3.2" />
    </svg>
  );
}

function IconFinance() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-12 w-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M4 3.5h16v12H4z" />
      <path d="M7 18.5h10" />
      <path d="M12 15.5v3" />
      <path d="m7.5 12 3-2.5 2.4 2 3.6-3.5" />
    </svg>
  );
}

function IconCost() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-12 w-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="6" />
      <path d="M9.2 7.8h1.7a1.4 1.4 0 1 1 0 2.8H9.1a1.4 1.4 0 1 0 0 2.8h1.8" />
      <path d="M10 6.8v1.1" />
      <path d="M10 13.4v1.1" />
      <circle cx="18.5" cy="16.5" r="3.2" />
    </svg>
  );
}

function HighlightIcon({ type }: { type: Highlight["icon"] }) {
  if (type === "operations") return <IconOperations />;
  if (type === "partners") return <IconPartners />;
  if (type === "security") return <IconSecurity />;
  if (type === "finance") return <IconFinance />;
  return <IconCost />;
}

export function WorkflowSection() {
  return (
    <section id="workflow" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <h2 className="mb-10 text-center text-4xl font-bold tracking-tight text-slate-700 sm:text-5xl">
          Nổi bật
        </h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {highlights.map((item) => (
            <article
              key={item.id}
              className={`group relative min-h-[290px] overflow-hidden rounded-[26px] border border-[#dfe5ef] bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2f6eea] hover:bg-[#2f6eea] hover:shadow-[0_16px_34px_rgba(47,110,234,0.35)] ${item.gridClass}`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full bg-white/16 blur-sm" />
                <div className="absolute right-[-48px] bottom-[-64px] h-52 w-52 rounded-full bg-[#1f5cd6]/45" />
              </div>

              <div className="relative z-10">
                <div className="text-slate-600 transition-colors group-hover:text-white">
                  <HighlightIcon type={item.icon} />
                </div>
                <h3 className="mt-5 text-3xl font-bold text-slate-700 transition-colors group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-slate-500 transition-colors group-hover:text-white/90">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

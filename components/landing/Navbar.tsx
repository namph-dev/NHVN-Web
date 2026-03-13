import Image from "next/image";

const navItems = [
  { label: "Trang chủ", href: "#" },
  { label: "Về chúng tôi", href: "#features" },
  { label: "Phí dịch vụ", href: "#workflow" },
  { label: "Liên hệ", href: "#contact" },
  { label: "Điều khoản sử dụng", href: "#contact" },
];

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-slate-400"
      aria-hidden="true"
    >
      <path
        d="M11 4.75a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5Zm0 0l8.25 8.25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-6 py-5 sm:px-10 lg:px-14">
        <a href="#" className="inline-flex shrink-0 items-center">
          <Image
            src="/image/logo.png"
            alt="NHVN logo"
            width={220}
            height={56}
            priority
            className="h-12 w-auto object-contain"
          />
        </a>

        <nav className="ml-8 hidden flex-1 items-center justify-center gap-8 text-[17px] text-slate-400 lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={
                index === 0
                  ? "font-semibold text-[#2f6eea]"
                  : "font-medium transition hover:text-slate-600"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <label className="flex h-12 w-[280px] items-center gap-2 rounded-xl bg-slate-100 px-4">
            <SearchIcon />
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="w-full border-0 bg-transparent text-[15px] text-slate-500 outline-none placeholder:text-slate-400"
            />
          </label>

          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#2f6eea] px-8 text-[17px] font-semibold text-white transition hover:bg-[#1f5cd6]"
          >
            Đăng ký dùng thử miễn phí
          </a>
        </div>

        <a
          href="#contact"
          className="ml-auto inline-flex h-11 items-center justify-center rounded-full bg-[#2f6eea] px-6 text-sm font-semibold text-white transition hover:bg-[#1f5cd6] xl:hidden"
        >
          Đăng ký
        </a>
      </div>
    </header>
  );
}

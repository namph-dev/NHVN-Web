import Image from "next/image";

const APPLE_ICON_URL =
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg";
const GOOGLE_PLAY_ICON_URL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/960px-Google_Play_2022_icon.svg.png";

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex h-16 min-w-[220px] items-center gap-3 rounded-xl bg-black px-4 text-white transition hover:opacity-90"
    >
      <Image
        src={APPLE_ICON_URL}
        alt="Apple logo"
        width={24}
        height={24}
        className="h-6 w-auto invert"
      />
      <span className="leading-tight">
        <span className="block text-[11px] text-white/75">Download on the</span>
        <span className="block text-[17px]/[1.1] font-semibold">App Store</span>
      </span>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex h-16 min-w-[220px] items-center gap-3 rounded-xl bg-black px-4 text-white transition hover:opacity-90"
    >
      <Image
        src={GOOGLE_PLAY_ICON_URL}
        alt="Google Play icon"
        width={28}
        height={28}
        className="h-7 w-7"
      />
      <span className="leading-tight">
        <span className="block text-[11px] text-white/75">GET IT ON</span>
        <span className="block text-[17px]/[1.1] font-semibold">Google Play</span>
      </span>
    </a>
  );
}

export function HeroSection() {
  return (
    <section className="px-6 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-12 lg:grid-cols-2">
        <div className="space-y-7">
          <h1 className="max-w-xl text-5xl leading-[1.1] font-bold tracking-tight text-slate-700 sm:text-6xl">
            Tối ưu hóa với ứng dụng quản lý bán hàng!
          </h1>

          <p className="max-w-xl text-xl leading-relaxed text-slate-400 sm:text-2xl">
            Ứng dụng NHVN quản lý bán hàng được xây dựng theo các ngành nghề
            giúp quản lý hoạt động kinh doanh, nhập hàng, bán hàng, kiểm soát
            hàng tồn kho, tăng tốc xử lý đơn hàng và tối ưu quy trình doanh
            nghiệp.
          </p>

          <div className="flex flex-wrap gap-3">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>

          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#2f6eea] px-9 text-lg font-medium text-white transition hover:bg-[#1f5cd6]"
          >
            Đăng ký dùng thử miễn phí
          </a>
        </div>

        <div className="mx-auto w-full max-w-[760px]">
          <Image
            src="/image/baner-hero.png"
            alt="Banner hero ứng dụng quản lý bán hàng"
            width={760}
            height={620}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

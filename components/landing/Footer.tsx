import Image from "next/image";

const pageLinks = [
  { label: "Trang chu", href: "#" },
  { label: "Về chúng tôi", href: "#about" },
  { label: "Phi dich vu", href: "#pricing" },
  { label: "Lien he", href: "#contact" },
  { label: "Dieu khoan su dung", href: "#guide" },
];

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 21V4h12v17" />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20 16.5v2a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4h2a2 2 0 0 1 2 1.7l.3 2a2 2 0 0 1-.6 1.7l-1.2 1.2a13 13 0 0 0 5.4 5.4l1.2-1.2a2 2 0 0 1 1.7-.6l2 .3a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.5-3h-3.2V9.1c0-.9.3-1.5 1.6-1.5h1.8V5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.6V11H7v3h2.7v8h3.8Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.6 8.2a2.9 2.9 0 0 0-2-2c-1.7-.5-7.6-.5-7.6-.5s-5.9 0-7.6.5a2.9 2.9 0 0 0-2 2A30.4 30.4 0 0 0 2 12a30.4 30.4 0 0 0 .4 3.8 2.9 2.9 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.9 2.9 0 0 0 2-2A30.4 30.4 0 0 0 22 12a30.4 30.4 0 0 0-.4-3.8ZM10 15.2V8.8l5.5 3.2L10 15.2Z" />
    </svg>
  );
}

function AppStoreBadge() {
  return (
    <a
      href="#"
      className="inline-flex h-11 items-center gap-2 rounded-lg bg-black px-3 text-white transition hover:opacity-90"
    >
      <span className="text-sm font-semibold">Apple</span>
      <span className="text-sm font-semibold">App Store</span>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex h-11 items-center gap-2 rounded-lg bg-black px-3 text-white transition hover:opacity-90"
    >
      <span className="h-4 w-4 rounded-xs bg-gradient-to-br from-emerald-400 via-yellow-400 to-red-500" />
      <span className="text-sm font-semibold">Google Play</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#3f87f8] bg-gradient-to-br from-[#2f6eea] via-[#2c68e4] to-[#2563eb] px-6 py-16 text-white lg:px-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/12" />
        <div className="absolute left-1/3 top-[-120px] h-96 w-96 rounded-full bg-white/8" />
        <div className="absolute -right-20 bottom-[-100px] h-80 w-80 rounded-full bg-white/10" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="grid gap-10 xl:grid-cols-[1.3fr_0.8fr_1.25fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/image/logo.png"
                alt="NHVN logo"
                width={220}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/92">
              Ung dung quan ly ban hang toan dien danh cho linh vuc thoi trang,
              quan ly ban hang, don nhap, don ban va kho hang moi luc, moi noi.
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold">Trang</h3>
            <ul className="mt-4 space-y-3 text-2xl text-white/90">
              {pageLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-semibold">Lien he</h3>
            <ul className="mt-4 space-y-3 text-2xl text-white/92">
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <BuildingIcon />
                </span>
                <span>CONG TY TNHH NHVN GROUP</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <PinIcon />
                </span>
                <span>Thon 4, Xa Ninh Hiep, Huyen Gia Lam, Thanh pho Ha Noi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <MailIcon />
                </span>
                <a href="mailto:lienhe@nhvngroup.com" className="hover:text-white">
                  lienhe@nhvngroup.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <PhoneIcon />
                </span>
                <a href="tel:+84964833717" className="hover:text-white">
                  0964 833 717
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-4xl font-semibold">Theo doi chung toi</h3>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2F6EEA] transition hover:scale-105"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#2F6EEA] transition hover:scale-105"
                aria-label="Youtube"
              >
                <YoutubeIcon />
              </a>
            </div>

            <p className="mt-5 text-2xl font-medium text-white/95">Tai xuong ngay</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-white/60" />
        <p className="mt-8 text-2xl text-white/95">
          © Copyright 2024 NHVN Group Corporation. All Right Reserved
        </p>
      </div>
    </footer>
  );
}

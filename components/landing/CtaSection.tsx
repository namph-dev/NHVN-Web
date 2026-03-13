import Image from "next/image";

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

export function CtaSection() {
  return (
    <section id="contact" className="bg-[#F3F4F7] px-6 py-20 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1600px] gap-8 xl:grid-cols-[1fr_0.95fr]">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-[#2F6EEA] sm:text-5xl">
            Lien he voi chung toi
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-2xl">
            Chung toi rat mong nhan duoc phan hoi tu ban. Hay dien vao form duoi
            day de lien he hoac gui yeu cau ho tro. Doi ngu cua chung toi se
            phan hoi trong thoi gian som nhat.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3 text-lg sm:text-2xl">
              <span className="mt-1 text-slate-600">
                <BuildingIcon />
              </span>
              <span className="font-semibold">CONG TY TNHH NHVN GROUP</span>
            </li>
            <li className="flex items-start gap-3 text-lg sm:text-2xl">
              <span className="mt-1 text-slate-600">
                <PinIcon />
              </span>
              <span>Thon 4, Xa Ninh Hiep, Huyen Gia Lam, Thanh pho Ha Noi, Viet Nam</span>
            </li>
            <li className="flex items-start gap-3 text-lg sm:text-2xl">
              <span className="mt-1 text-slate-600">
                <MailIcon />
              </span>
              <a href="mailto:lienhe@nhvngroup.com" className="hover:text-[#2F6EEA]">
                lienhe@nhvngroup.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-lg sm:text-2xl">
              <span className="mt-1 text-slate-600">
                <PhoneIcon />
              </span>
              <a href="tel:+84964833717" className="font-semibold hover:text-[#2F6EEA]">
                0964 833 717
              </a>
            </li>
          </ul>

          <div className="mt-7 overflow-hidden rounded-[24px] bg-[#3096d5]">
            <Image
              src="/image/cta.png"
              alt="Contact illustration"
              width={960}
              height={620}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-[20px] border border-[#D9E0EB] bg-[#F3F4F7] p-5 sm:p-8">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-xl font-medium text-slate-500 sm:text-2xl">
                Ho va ten
              </label>
              <input
                type="text"
                placeholder="Nhap ho va ten"
                className="h-14 w-full rounded-xl border border-transparent bg-[#E9EBF0] px-4 text-lg text-slate-700 outline-none transition focus:border-[#2F6EEA] focus:bg-white sm:h-16 sm:text-xl"
              />
            </div>

            <div>
              <label className="mb-2 block text-xl font-medium text-slate-500 sm:text-2xl">
                So dien thoai
              </label>
              <input
                type="tel"
                placeholder="Nhap so dien thoai"
                className="h-14 w-full rounded-xl border border-transparent bg-[#E9EBF0] px-4 text-lg text-slate-700 outline-none transition focus:border-[#2F6EEA] focus:bg-white sm:h-16 sm:text-xl"
              />
            </div>

            <div>
              <label className="mb-2 block text-xl font-medium text-slate-500 sm:text-2xl">
                Loi nhan
              </label>
              <textarea
                placeholder="De lai loi nhan"
                rows={7}
                className="w-full rounded-xl border border-transparent bg-[#E9EBF0] px-4 py-4 text-lg text-slate-700 outline-none transition focus:border-[#2F6EEA] focus:bg-white sm:text-xl"
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-14 w-full items-center justify-center rounded-xl bg-[#2F6EEA] text-2xl font-semibold text-white transition hover:bg-[#1F5CD6] sm:h-16"
            >
              Gui
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

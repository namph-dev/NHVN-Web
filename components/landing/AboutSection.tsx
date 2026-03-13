import Image from "next/image";

const aboutPoints = [
  "Doi ngu giau kinh nghiem",
  "Giai phap toan dien, toi uu cho doanh nghiep vua va nho",
  "Ho tro khach hang chuyen nghiep va tan tam",
  "Cam ket cai tien va nang cap khong ngung",
];

const valueCards = [
  {
    key: "vision",
    title: "TẦM NHÌN",
    description:
      "Chuyển đổi số phương thức bán hàng truyền thống với chi phí thấp và độ ổn định cao",
  },
  {
    key: "mission",
    title: "SỨ MỆNH",
    description:
      "Dẫn đầu cung cấp phần mềm quản lý bán hàng cho các ngành nghề NHVN đang cung cấp như thời trang may mặc, quản lí cắt may, ...",
  },
  {
    key: "value",
    title: "GIÁ TRỊ",
    description:
      "Nghiên cứu, phát triển nhiều giải pháp kinh doanh tối ưu hơn cho các doanh nghiệp.",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8" fill="currentColor" stroke="none" />
      <path d="m6.2 10.1 2.4 2.5 5.2-5.1" stroke="#fff" strokeLinecap="round" />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-24 w-24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M12 40 28 22h10l8 8-6 6-8 18-8 4 2-10-8-8Z" fill="#2f8df3" />
      <circle cx="35" cy="30" r="6" fill="#fff" />
      <circle cx="35" cy="30" r="3" fill="#2f8df3" stroke="none" />
      <path d="m10 52 8-8M18 58l8-8" stroke="#153d96" strokeLinecap="round" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-24 w-24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M32 10c10 0 18 8 18 18s-8 18-18 18-18-8-18-18 8-18 18-18Z" fill="#2f8df3" />
      <path d="M32 22v12h9" stroke="#fff" strokeLinecap="round" />
      <path d="M24 46h16v8H24z" fill="#fff" />
      <path d="M26 54h12" stroke="#153d96" strokeLinecap="round" />
      <path d="M32 4v5M49 11l-4 4M60 28h-5M15 15l4 4M4 28h5" stroke="#153d96" strokeLinecap="round" />
    </svg>
  );
}

function ValueIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-24 w-24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path
        d="m32 10 6 14h15l-12 9 5 15-14-9-14 9 5-15-12-9h15l6-14Z"
        fill="#2f8df3"
        stroke="#153d96"
      />
      <path
        d="M8 20v4M12 14v4M52 14v4M56 20v4M8 44v4M12 50v4M52 50v4M56 44v4"
        stroke="#153d96"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ValueCardIcon({ type }: { type: string }) {
  if (type === "vision") return <VisionIcon />;
  if (type === "mission") return <MissionIcon />;
  return <ValueIcon />;
}

export function AboutSection() {
  return (
    <section className="bg-white">
      <div className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1600px] items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[24px] bg-[#eef3fb]">
            <Image
              src="/image/company.png"
              alt="NHVN building"
              width={900}
              height={560}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold tracking-tight text-slate-700 sm:text-6xl">
              Về chúng tôi
            </h2>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-500">
            NHVN GROUP là tên viết tắt của CÔNG TY TNHH NHVN GROUP. 
            Chúng tôi cung cấp các sản phẩm quản lý bán hàng phục vụ cho doanh nghiệp, nổi bật là NHVN quản lý bán hàng. 
            Phần mềm phát hành trên App Store và Google Play
            </p>

            <ul className="mt-7 space-y-3">
              {aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-xl text-slate-600">
                  <span className="mt-1 text-[#2F6EEA]">
                    <CheckIcon />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F4F7] px-6 py-11 lg:px-10">
        <p className="mx-auto max-w-5xl text-center text-4xl font-bold leading-tight text-slate-700 sm:text-5xl">
         Có hơn 500+ doanh nghiệp và chủ cửa hàng tin tưởng và sử dụng phần mềm NHVN   
        </p>
      </div>

      <div className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid w-full max-w-[1600px] gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#E3E7EF]">
          {valueCards.map((item) => (
            <article key={item.key} className="px-4 text-center md:px-9">
              <div className="mx-auto mb-3 inline-flex text-[#153d96]">
                <ValueCardIcon type={item.key} />
              </div>
              <h3 className="text-4xl font-bold text-[#2F6EEA]">{item.title}</h3>
              <div className="mx-auto mt-3 h-[2px] w-40 bg-[#7fb3ff]" />
              <p className="mx-auto mt-5 max-w-sm text-lg leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

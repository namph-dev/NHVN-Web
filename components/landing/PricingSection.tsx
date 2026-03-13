"use client";

import { useMemo, useState } from "react";

type IndustryKey = "fashion" | "restaurant" | "delivery";

type Plan = {
  name: string;
  price: string;
  subtitle: string;
  cta: string;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

type IndustryConfig = {
  key: IndustryKey;
  label: string;
  icon: "fashion" | "restaurant" | "delivery";
  plans: Plan[];
};

const industryConfigs: IndustryConfig[] = [
  {
    key: "fashion",
    label: "Thoi trang, may mac",
    icon: "fashion",
    plans: [
      {
        name: "GOI CO BAN",
        price: "100.000d",
        subtitle: "ap dung cho 1 tai khoan/thang",
        cta: "Lien he mua ngay",
        description:
          "Danh cho mo hinh kinh doanh vua va nho hoac ca nhan moi bat dau.",
        features: [
          "Quan ly don nhap va don ban 50 don/thang",
          "Quan ly ton kho len den 50 loai mat hang",
          "Bao cao doanh thu co ban",
          "Nhan ho tro qua email va tin nhan",
        ],
      },
      {
        name: "GOI CHUYEN NGHIEP",
        price: "200.000d",
        subtitle: "ap dung cho 1 tai khoan/thang",
        cta: "Lien he mua ngay",
        description:
          "Danh cho mo hinh kinh doanh chuyen nghiep, yeu cau toi uu quy trinh van hanh va mo rong.",
        features: [
          "Khong gioi han so luong don nhap va don ban",
          "Khong gioi han so luong ton kho mat hang",
          "Bao cao doanh thu nang cao, chi tiet",
          "Tich hop ban hang da kenh",
          "Nhan ho tro qua email, tin nhan hoac truc tiep",
        ],
        featured: true,
        badge: "Pho bien nhat",
      },
      {
        name: "GOI CAO CAP",
        price: "300.000d",
        subtitle: "ap dung cho 1 tai khoan/thang",
        cta: "Lien he mua ngay",
        description:
          "Danh cho mo hinh kinh doanh vua va nho hoac ca nhan moi bat dau.",
        features: [
          "Khong gioi han so luong don nhap va don ban",
          "Khong gioi han so luong ton kho mat hang",
          "Bao cao doanh thu nang cao, chi tiet",
          "Tich hop ban hang da kenh",
          "Nhan ho tro qua email, tin nhan hoac truc tiep",
          "Tich hop bao cao tuy chinh va tu dong hoa",
        ],
      },
    ],
  },
  {
    key: "restaurant",
    label: "Nha hang, quan an",
    icon: "restaurant",
    plans: [
      {
        name: "GOI CO BAN",
        price: "120.000d",
        subtitle: "ap dung cho 1 tai khoan/thang",
        cta: "Lien he mua ngay",
        description: "Phu hop cho quan nho, menu gon va nhu cau van hanh co ban.",
        features: [
          "Quan ly mon an va gia ban",
          "Theo doi don theo ban va theo ca",
          "Bao cao doanh thu co ban",
          "Ho tro qua email va tin nhan",
        ],
      },
      {
        name: "GOI CHUYEN NGHIEP",
        price: "240.000d",
        subtitle: "ap dung cho 1 tai khoan/thang",
        cta: "Lien he mua ngay",
        description: "Danh cho quan an can toi uu van hanh va mo rong nhanh.",
        features: [
          "Khong gioi han don theo ban va take-away",
          "Quan ly kho nguyen lieu nang cao",
          "Thong ke doanh thu theo mon va khung gio",
          "Tich hop in bep, in thu ngan",
          "Ho tro truc tiep uu tien",
        ],
        featured: true,
        badge: "Pho bien nhat",
      },
      {
        name: "GOI CAO CAP",
        price: "360.000d",
        subtitle: "ap dung cho 1 tai khoan/thang",
        cta: "Lien he mua ngay",
        description: "Danh cho he thong cua hang can quan ly tap trung.",
        features: [
          "Dong bo nhieu chi nhanh",
          "Bao cao loi nhuan chi tiet",
          "Quan ly khach hang than thiet",
          "Tu dong chuong trinh khuyen mai",
          "Ho tro truc tiep 1-1",
          "API ket noi he thong ngoai",
        ],
      },
    ],
  },
  {
    key: "delivery",
    label: "Van chuyen, giao hang",
    icon: "delivery",
    plans: [
      {
        name: "GOI CO BAN",
        price: "150.000d",
        subtitle: "ap dung cho 1 tai khoan/thang",
        cta: "Lien he mua ngay",
        description: "Phu hop cho doi giao hang quy mo nho.",
        features: [
          "Quan ly don giao co ban",
          "Theo doi trang thai don theo thoi gian thuc",
          "Bao cao hieu suat co ban",
          "Ho tro qua email",
        ],
      },
      {
        name: "GOI CHUYEN NGHIEP",
        price: "280.000d",
        subtitle: "ap dung cho 1 tai khoan/thang",
        cta: "Lien he mua ngay",
        description: "Toi uu luong giao va theo doi nhan vien giao hang.",
        features: [
          "Khong gioi han so don giao",
          "Dieu phoi shipper thong minh",
          "Toi uu lo trinh giao hang",
          "Bao cao tre han va chi phi",
          "Ho tro uu tien truc tiep",
        ],
        featured: true,
        badge: "Pho bien nhat",
      },
      {
        name: "GOI CAO CAP",
        price: "420.000d",
        subtitle: "ap dung cho 1 tai khoan/thang",
        cta: "Lien he mua ngay",
        description: "Danh cho doanh nghiep giao van can mo rong da khu vuc.",
        features: [
          "Quan ly da kho va da khu vuc",
          "Bao cao KPI shipper nang cao",
          "Tich hop doi tac van chuyen",
          "Canh bao rui ro don hang",
          "Phan quyen van hanh chi tiet",
          "Ho tro SLA doanh nghiep",
        ],
      },
    ],
  },
];

function ShirtIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
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

function RestaurantIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
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

function DeliveryIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
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

function IndustryIcon({ icon }: { icon: IndustryConfig["icon"] }) {
  if (icon === "fashion") return <ShirtIcon />;
  if (icon === "restaurant") return <RestaurantIcon />;
  return <DeliveryIcon />;
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-1 h-5 w-5 shrink-0 text-[#2F6EEA] transition-colors group-hover:text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <path d="m4.2 10.4 3.2 3.2 8.2-8.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PricingSection() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>("fashion");

  const currentIndustry = useMemo(
    () => industryConfigs.find((item) => item.key === activeIndustry) ?? industryConfigs[0],
    [activeIndustry],
  );

  return (
    <section className="bg-[#F3F4F7] px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto w-full max-w-[1600px]">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold leading-[1.15] tracking-tight text-slate-700 sm:text-4xl lg:text-5xl">
          Chọn ngành nghề để xem phí dịch vụ
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {industryConfigs.map((industry) => {
            const active = industry.key === currentIndustry.key;
            return (
              <button
                key={industry.key}
                type="button"
                onClick={() => setActiveIndustry(industry.key)}
                className={`group inline-flex h-14 items-center gap-2 rounded-full border px-5 text-sm font-medium transition sm:h-16 sm:gap-3 sm:px-8 sm:text-lg ${
                  active
                    ? "border-[#2F6EEA] bg-[#2F6EEA] text-white"
                    : "border-[#D6DEEA] bg-transparent text-slate-700 hover:border-[#2F6EEA] hover:bg-[#2F6EEA] hover:text-white"
                }`}
              >
                <span
                  className={`transition-colors ${
                    active ? "text-white" : "text-slate-700 group-hover:text-white"
                  }`}
                >
                  <IndustryIcon icon={industry.icon} />
                </span>
                <span>{industry.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {currentIndustry.plans.map((plan) => (
            <article
              key={plan.name}
              className="group relative overflow-hidden rounded-[24px] border border-[#D6DEEA] bg-[#F3F4F7] p-7 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-[#3D7DEE] hover:via-[#2F6EEA] hover:to-[#2A64DB] hover:text-white hover:shadow-[0_18px_40px_rgba(47,110,234,0.35)]"
            >
              {plan.featured && plan.badge ? (
                <span className="absolute right-6 top-6 rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#2F6EEA] opacity-0 transition-opacity group-hover:opacity-100 sm:text-base">
                  {plan.badge}
                </span>
              ) : null}

              <p className="text-xl font-semibold text-slate-700 transition-colors group-hover:text-white sm:text-2xl">
                {plan.name}
              </p>
              <p className="mt-2 text-4xl font-bold text-slate-800 transition-colors group-hover:text-white sm:text-5xl">
                {plan.price}
              </p>
              <p className="mt-1 text-base italic text-slate-500 transition-colors group-hover:text-white/90 sm:text-xl">
                {plan.subtitle}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#B8D6F4] text-base font-medium text-[#2F6EEA] transition hover:bg-[#a8caee] group-hover:bg-white group-hover:text-[#2F6EEA] sm:h-14 sm:text-lg"
              >
                {plan.cta}
              </a>

              <p className="mt-5 text-sm leading-relaxed text-slate-500 transition-colors group-hover:text-white/95 sm:text-base">
                {plan.description}
              </p>

              <ul className="mt-4 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm leading-relaxed text-slate-700 transition-colors group-hover:text-white sm:text-base"
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

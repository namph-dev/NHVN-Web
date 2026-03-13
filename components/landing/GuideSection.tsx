"use client";

import { useState } from "react";

type GuideItem = {
  id: string;
  title: string;
  content: string;
};

const guideItems: GuideItem[] = [
  {
    id: "01",
    title: "Bắt đầu nhanh: Hướng dẫn cài đặt và thiết lập ứng dụng của bạn",
    content:
      "Tai app, tao tai khoan, thiet lap thong tin cua hang, cau hinh danh muc san pham va mau in hoa don trong vai phut de san sang su dung.",
  },
  {
    id: "02",
    title: "Quản lý đơn hàng và kho hàng: Các bước đơn giản để tối ưu quy trình bán hàng",
    content:
      "Tao don nhanh, cap nhat trang thai xu ly, theo doi ton kho theo thoi gian thuc va canh bao tu dong khi sap het hang.",
  },
  {
    id: "03",
    title: "Cập nhật và quản lý thông tin sản phẩm",
    content:
      "Dong bo gia ban, thuoc tinh, hinh anh va bien the san pham de quan ly tap trung, tranh sai sot khi ban tren nhieu kenh.",
  },
  {
    id: "04",
    title: "Theo dõi tài chính và báo cáo",
    content:
      "Xem doanh thu, loi nhuan, cong no va cac chi so quan trong theo ngay, tuan, thang de de dang ra quyet dinh.",
  },
  {
    id: "05",
    title: "Chính sách bảo mật và điều khoản sử dụng",
    content:
      "Tim hieu cach du lieu duoc ma hoa, luu tru an toan va cac quy dinh su dung de van hanh ben vung, tuan thu quy trinh.",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      <path d="M5 12h13" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GuideSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className=" px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-[1600px]">
        <h2 className="text-center text-4xl font-bold tracking-tight text-slate-700 sm:text-5xl lg:text-6xl">
         Hướng dẫn sử dụng 
        </h2>

        <div className="mt-10 space-y-5">
          {guideItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-[24px] border border-[#D7DFEB] bg-[#F3F4F7]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center gap-4 px-5 py-6 text-left sm:px-9 sm:py-8"
                  aria-expanded={isOpen}
                >
                  <span className="w-14 text-4xl font-semibold tabular-nums text-slate-400 sm:w-16 sm:text-5xl">
                    {item.id}
                  </span>
                  <span className="flex-1 text-xl font-semibold text-slate-700 sm:text-2xl">
                    {item.title}
                  </span>
                  <span
                    className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all sm:h-12 sm:w-12 ${
                      isOpen
                        ? "rotate-90 border-[#2F6EEA] bg-[#2F6EEA] text-white"
                        : "border-[#D7DFEB] bg-transparent text-slate-600"
                    }`}
                  >
                    <ArrowIcon />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-[#D7DFEB] px-5 pb-7 pt-5 text-base leading-relaxed text-slate-500 sm:px-9 sm:text-lg">
                      {item.content}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[#2F6EEA] px-10 text-2xl font-medium text-white transition hover:bg-[#1F5CD6]"
          >
            Xem thêm
          </a>
        </div>
      </div>
    </section>
  );
}

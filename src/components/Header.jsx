import React from "react";

const Header = () => {
  return (
    <header className="h-20 md:h-24 bg-background px-6 md:px-12 flex items-center justify-between">
      <a>
        <img src="/img/logo.png" alt="Logo" className="h-40" />
      </a>

      <nav className="flex gap-12 items-center">
        <a
          href="#services"
          className="hidden md:block text-lg font-semibold text-gray-700 hover:text-shade duration-300 ease-linear"
        >
          Dịch vụ
        </a>

        <a
          href="#pricing"
          className="hidden md:block text-lg font-semibold text-gray-700 hover:text-shade duration-300 ease-linear"
        >
          Bảng giá
        </a>
        <a
          href="#testimonials"
          className="hidden md:block text-lg font-semibold text-gray-700 hover:text-shade duration-300 ease-linear"
        >
          Đánh giá
        </a>
        <a
          href="#contact"
          className="py-1.5 px-2.5 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-shade duration-300 ease-linear"
        >
          Trải nghiệm ngay
        </a>
      </nav>
    </header>
  );
};

export default Header;

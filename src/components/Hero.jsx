import React from "react";

const Hero = () => {
  return (
    <section className="bg-background py-8">
      <div className="container mx-auto px-8 lg:px-0 flex flex-col lg:flex-row items-center text-center lg:text-left lg:justify-between gap-10 lg:gap-24">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-5xl lg:text-6xl tracking-tight font-bold text-gray-800 mb-6">
            Việc gì khó,
            <p>
              có <span className="text-shade">Cô Tấm</span> lo
            </p>
          </h1>
          <p className="text-gray-600 mb-10">
            Cô Tấm giúp việc - Để Cô Tấm cùng chăm sóc tổ ấm của bạn. Dịch vụ uy
            tín, chất lượng với đội ngũ nhân viên được đào tạo bài bản.
          </p>
          <div className="flex space-x-5 justify-center lg:justify-start">
            <button className="btn px-2 py-4">Đặt dịch vụ ngay</button>
            <button className="btn-secondary px-2 py-4">
              Tìm hiểu thêm &darr;
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <picture>
            <source srcset="img/hero.webp" type="image/webp" />
            <source srcset="img/hero-min.png" type="image/png" />

            <img src="img/hero-min.png" alt="Người phụ nữ đang làm việc nhà" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;

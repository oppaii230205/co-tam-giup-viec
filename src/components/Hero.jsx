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
            Chúng tôi cung cấp dịch vụ vệ sinh nhà ở cá nhân hóa, kết nối các
            gia đình bận rộn với nhân viên vệ sinh chuyên nghiệp, phù hợp với
            từng nhu cầu và phong cách sống.
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
            {/* <source srcset="img/hero.webp" type="image/webp" /> */}
            <source srcset="img/co-tam-giup-viec_1.jpg" type="image/png" />

            <img
              src="img/co-tam-giup-viec_1.jpg"
              alt="Người phụ nữ đang làm việc nhà"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;

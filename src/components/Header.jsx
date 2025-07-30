import React from "react";

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <div className="text-2xl font-bold text-rose-500">Cô Tấm</div>
//             <div className="ml-2 text-2xl font-light text-gray-600">
//               Giúp Việc
//             </div>
//           </div>
//           <nav className="hidden md:flex space-x-8">
//             <a
//               href="#services"
//               className="text-gray-700 hover:text-rose-500 transition"
//             >
//               Dịch Vụ
//             </a>
//             <a
//               href="#pricing"
//               className="text-gray-700 hover:text-rose-500 transition"
//             >
//               Bảng Giá
//             </a>
//             <a
//               href="#testimonials"
//               className="text-gray-700 hover:text-rose-500 transition"
//             >
//               Đánh Giá
//             </a>
//             <a
//               href="#contact"
//               className="text-gray-700 hover:text-rose-500 transition"
//             >
//               Liên Hệ
//             </a>
//           </nav>
//           <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full transition shadow-md">
//             Đặt Ngay
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

const Header = () => {
  return (
    <header className="h-20 md:h-24 bg-background px-6 md:px-12 flex items-center justify-between">
      <a>
        <img src="/img/logo.png" alt="Logo" className="h-5" />
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

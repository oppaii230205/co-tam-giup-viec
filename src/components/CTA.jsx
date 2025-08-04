import React from "react";

// const CTA = () => {
//   return (
//     <section
//       id="contact"
//       className="py-20 bg-gradient-to-r from-rose-500 to-pink-500 text-white"
//     >
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">
//           Sẵn sàng trải nghiệm dịch vụ?
//         </h2>
//         <p className="text-xl mb-8 max-w-2xl mx-auto">
//           Đăng ký ngay hôm nay để nhận ưu đãi 10% cho lần sử dụng dịch vụ đầu
//           tiên
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//           <button className="bg-white text-rose-500 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium transition shadow-lg">
//             Đặt dịch vụ ngay
//           </button>
//           <button className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 px-8 py-3 rounded-full text-lg font-medium transition">
//             Liên hệ tư vấn
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

const CTA = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-[rgb(113,157,205)] to-[rgb(52,115,184)] rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="sm:col-span-2 sm:row-start-1 text-blue-950 p-6 sm:p-14 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Trải nghiệm dịch vụ lần đầu miễn phí!
            </h2>
            <p className="text-lg mb-8">
              Đăng ký ngay hôm nay để nhận ưu đãi cho lần sử dụng dịch vụ đầu
              tiên.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-end">
              <div>
                <h3 className="text-left text-sm font-semibold mb-2">
                  Họ và tên
                </h3>
                <input
                  type="text"
                  className="bg-background p-2 rounded-md w-full text-md"
                  placeholder="Nguyễn Văn A"
                />
              </div>

              <div>
                <h3 className="text-left text-sm font-semibold mb-2">Email</h3>
                <input
                  type="text"
                  className="bg-background p-2 rounded-md w-full text-md"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <h3 className="text-left text-sm font-semibold mb-2">
                  Số điện thoại
                </h3>
                <input
                  type="text"
                  className="bg-background p-2 rounded-md w-full text-md"
                  placeholder="0123456789"
                />
              </div>

              <button className="bg-blue-950 font-bold text-white px-4 py-2 rounded-md mt-4 hover:bg-white hover:text-blue-950 duration-100 ease-in">
                Đăng ký ngay
              </button>
            </div>
          </div>
          <div
            className="row-start-1 bg-[linear-gradient(to_bottom_right,rgba(113,157,205,0.35),rgb(52,115,184,0.35)),url('/img/cta_2.jpg')] h-64 sm:h-auto bg-cover bg-center rounded-r-xl"
            role="img"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

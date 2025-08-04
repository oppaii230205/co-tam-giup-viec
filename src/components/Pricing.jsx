import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Giúp việc theo giờ",
      price: "80.000",
      duration: "1 giờ",
      features: [
        "Quét nhà, lau nhà",
        "Lau bụi đồ đạc",
        "Dọn dẹp phòng tắm",
        "Đổ rác",
      ],
      popular: false,
    },
    {
      name: "Giúp việc ở lại",
      price: "110.000",
      duration: "1 giờ",
      features: [
        "Tất cả dịch vụ cơ bản",
        "Lau cửa sổ, cửa kính",
        "Sắp xếp đồ đạc",
        "Giặt ủi cơ bản",
      ],
      popular: true,
    },
    // {
    //   name: "Dọn dẹp cao cấp",
    //   price: "400.000",
    //   duration: "5 giờ",
    //   features: [
    //     "Tất cả dịch vụ tiêu chuẩn",
    //     "Vệ sinh nhà bếp sâu",
    //     "Giặt ủi toàn bộ",
    //     "Nấu 1 bữa ăn",
    //   ],
    //   popular: false,
    // },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Bảng Giá Dịch Vụ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu của gia đình bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 shadow-md hover:shadow-lg duration-150 ease-in transform ${
                plan.popular
                  ? "bg-pre-shade text-white hover:-translate-y-1"
                  : "bg-white hover:-translate-y-1"
              }`}
            >
              {/* {plan.popular && (
                <div className="absolute -translate-y-6 -translate-x-4 bg-yellow-300 text-blue-900 text-xs font-extrabold px-3 py-1 rounded-full inline-block mb-4">
                  PHỔ BIẾN
                </div>
              )} */}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-gray-800"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.popular ? "text-white" : "text-primary"
                  }`}
                >
                  {plan.price}
                </span>
                <span className="text-lg">đ/{plan.duration}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-2 mt-1 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-primary"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={` w-full py-3 rounded-full font-medium ${
                  plan.popular
                    ? "bg-white text-shade hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-shade"
                }`}
              >
                Đặt Ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

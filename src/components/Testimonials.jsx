import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Chị Nguyễn Thị Lan",
      role: "Nhân viên văn phòng",
      content:
        "Từ khi sử dụng dịch vụ của Cô Tấm, cuộc sống của gia đình tôi nhẹ nhàng hơn hẳn. Nhà cửa luôn sạch sẽ mà không phải lo lắng gì.",
      avatar: "/img/customers/customer-1.jpg",
    },
    {
      name: "Anh Trần Văn Nam",
      role: "Doanh nhân",
      content:
        "Dịch vụ rất chuyên nghiệp, nhân viên nhiệt tình và đáng tin cậy. Tôi hoàn toàn yên tâm khi giao nhà cửa cho Cô Tấm chăm sóc.",
      avatar: "/img/customers/customer-2.jpg",
    },
    {
      name: "Chị Lê Thị Mai",
      role: "Bác sĩ",
      content:
        "Là bác sĩ bận rộn, tôi không có thời gian chăm sóc nhà cửa. Cô Tấm đã giúp tôi giải quyết vấn đề này một cách hoàn hảo.",
      avatar: "/img/customers/customer-3.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hàng nghìn gia đình đã tin tưởng sử dụng dịch vụ của Cô Tấm
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
              <div className="flex mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🧹",
      title: "Dọn dẹp định kỳ",
      description:
        "Dọn dẹp nhà cửa theo tuần/tháng, giữ không gian sống luôn sạch sẽ",
    },
    {
      icon: "👩‍🍳",
      title: "Nấu ăn gia đình",
      description: "Chuẩn bị bữa ăn ngon, đảm bảo dinh dưỡng theo yêu cầu",
    },
    {
      icon: "👶",
      title: "Chăm sóc trẻ em",
      description: "Trông trẻ, chăm sóc trẻ khi bố mẹ bận rộn",
    },
    {
      icon: "👵",
      title: "Chăm sóc người già",
      description: "Hỗ trợ người cao tuổi trong sinh hoạt hàng ngày",
    },
    {
      icon: "🛒",
      title: "Đi chợ, mua sắm",
      description: "Đi chợ theo yêu cầu, mua sắm đồ dùng thiết yếu",
    },
    {
      icon: "🧺",
      title: "Giặt ủi",
      description: "Giặt, phơi, ủi quần áo và sắp xếp gọn gàng",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cô Tấm cung cấp đa dạng dịch vụ giúp việc nhà chất lượng cao, đáp
            ứng mọi nhu cầu của gia đình bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

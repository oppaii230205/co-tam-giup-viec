import React, { useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  Star,
  CheckCircle,
  Users,
  Shield,
  Award,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function CoTamLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: "Dọn dẹp nhà cửa",
      description: "Vệ sinh tổng thể, lau chùi đồ đạc, sắp xếp gọn gàng",
      price: "150.000đ - 300.000đ",
      time: ["2 giờ", "4 giờ", "Cả ngày"],
      icon: "🏠",
    },
    {
      id: 2,
      name: "Nấu ăn gia đình",
      description: "Chuẩn bị bữa ăn ngon miệng, đảm bảo dinh dưỡng",
      price: "200.000đ - 400.000đ",
      time: ["1 bữa", "2 bữa", "Cả ngày"],
      icon: "👩‍🍳",
    },
    {
      id: 3,
      name: "Chăm sóc trẻ em",
      description: "Trông trẻ, dạy bé, vui chơi và hỗ trợ học tập",
      price: "100.000đ - 200.000đ/giờ",
      time: ["2 giờ", "4 giờ", "8 giờ", "Qua đêm"],
      icon: "👶",
    },
    {
      id: 4,
      name: "Chăm sóc người già",
      description: "Đồng hành, chăm sóc sức khỏe, trò chuyện",
      price: "120.000đ - 250.000đ/giờ",
      time: ["4 giờ", "8 giờ", "Cả ngày"],
      icon: "👵",
    },
    {
      id: 5,
      name: "Giặt ủi quần áo",
      description: "Giặt sạch, ủi phẳng, sắp xếp tủ đồ ngăn nắp",
      price: "80.000đ - 150.000đ",
      time: ["Theo kg", "Theo bộ đồ"],
      icon: "👔",
    },
    {
      id: 6,
      name: "Mua sắm tạp hóa",
      description: "Mua sắm thực phẩm, đồ dùng theo yêu cầu",
      price: "50.000đ + tiền hàng",
      time: ["1-2 giờ", "Theo danh sách"],
      icon: "🛒",
    },
  ];

  const testimonials = [
    {
      name: "Chị Hương - Quận 1",
      rating: 5,
      comment:
        "Cô Tấm rất chu đáo và làm việc sạch sẽ. Tôi yên tâm khi giao nhà cho cô chăm sóc.",
    },
    {
      name: "Anh Minh - Quận 7",
      rating: 5,
      comment:
        "Dịch vụ chuyên nghiệp, đúng giờ. Vợ chồng tôi có thêm thời gian cho nhau nhờ Cô Tấm.",
    },
    {
      name: "Chị Mai - Bình Thạnh",
      rating: 5,
      comment:
        "Cô làm việc tận tâm, món ăn ngon. Con tôi rất thích cô và luôn mong cô đến.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center text-2xl">
                👩‍💼
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Cô Tấm giúp việc
                </h1>
                <p className="text-sm text-gray-600">
                  Đồng hành cùng gia đình Việt
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Dịch vụ
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Về chúng tôi
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Đánh giá
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Liên hệ ngay
              </a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 mt-4">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-pink-500"
                >
                  Dịch vụ
                </a>
                <a href="#about" className="text-gray-700 hover:text-pink-500">
                  Về chúng tôi
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-pink-500"
                >
                  Đánh giá
                </a>
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-2 rounded-full text-center"
                >
                  Liên hệ ngay
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Để{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Cô Tấm
              </span>{" "}
              lo,
              <br />
              bạn tận hưởng cuộc sống!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dịch vụ giúp việc gia đình chuyên nghiệp dành cho người Việt bận
              rôn.
              <br />
              Chúng tôi mang đến sự tiện lợi và an tâm cho ngôi nhà của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2">
                Đặt dịch vụ ngay <ArrowRight size={20} />
              </button>
              <button className="border-2 border-pink-300 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all">
                Tư vấn miễn phí
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-pink-500 mb-2">1000+</div>
              <div className="text-gray-600">Khách hàng tin tưởng</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-purple-500 mb-2">50+</div>
              <div className="text-gray-600">Cô giúp việc</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-pink-500 mb-2">24/7</div>
              <div className="text-gray-600">Hỗ trợ khách hàng</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-purple-500 mb-2">5⭐</div>
              <div className="text-gray-600">Đánh giá trung bình</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Dịch vụ của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Từ việc nhà hàng ngày đến chăm sóc đặc biệt, chúng tôi có đủ dịch
              vụ cho mọi nhu cầu của gia đình bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer border border-pink-100"
                onClick={() => setSelectedService(service)}
              >
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Giá:</span>
                    <span className="font-semibold text-pink-600">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.time.map((time, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-xs"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white py-2 rounded-lg hover:shadow-md transition-all">
                  Đặt dịch vụ
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-pink-50 to-purple-50 px-4"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Tại sao chọn Cô Tấm?
            </h2>
            <p className="text-xl text-gray-600">
              Chúng tôi hiểu những khó khăn của gia đình hiện đại
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Đáng tin cậy
              </h3>
              <p className="text-gray-600">
                Tất cả nhân viên đều được kiểm tra lý lịch và đào tạo bài bản
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Linh hoạt
              </h3>
              <p className="text-gray-600">
                Đặt lịch theo nhu cầu, từ vài giờ đến cả ngày, cuối tuần hay
                ngày lễ
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Chất lượng
              </h3>
              <p className="text-gray-600">
                Cam kết chất lượng dịch vụ, hoàn tiền 100% nếu không hài lòng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Khách hàng nói gì về chúng tôi?
            </h2>
            <p className="text-xl text-gray-600">
              Sự hài lòng của khách hàng là niềm tự hào của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-white" size={20} />
                  </div>
                  <span className="font-semibold text-gray-800">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sẵn sàng để có thêm thời gian cho bản thân?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Đừng để việc nhà chiếm hết thời gian quý báu của bạn. Hãy để Cô Tấm
            lo, bạn tận hưởng!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
              Đặt dịch vụ ngay
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transition-all">
              Gọi: 0123 456 789
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-xl text-gray-600">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Điện thoại
              </h3>
              <p className="text-gray-600">0123 456 789</p>
              <p className="text-gray-600">0987 654 321</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">info@cotamgiupviec.com</p>
              <p className="text-gray-600">support@cotamgiupviec.com</p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Giờ làm việc
              </h3>
              <p className="text-gray-600">Thứ 2 - Chủ nhật</p>
              <p className="text-gray-600">6:00 - 22:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center text-lg">
                  👩‍💼
                </div>
                <span className="text-xl font-bold">Cô Tấm giúp việc</span>
              </div>
              <p className="text-gray-400">
                Đồng hành cùng gia đình Việt, mang lại cuộc sống thoải mái và
                hạnh phúc.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Dịch vụ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dọn dẹp nhà cửa</li>
                <li>Nấu ăn gia đình</li>
                <li>Chăm sóc trẻ em</li>
                <li>Chăm sóc người già</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Thông tin</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Về chúng tôi</li>
                <li>Chính sách bảo mật</li>
                <li>Điều khoản sử dụng</li>
                <li>Câu hỏi thường gặp</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 0123 456 789</li>
                <li>✉️ info@cotamgiupviec.com</li>
                <li>📍 TP. Hồ Chí Minh</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 Cô Tấm giúp việc. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedService.name}
              </h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="text-center mb-4">
              <div className="text-6xl mb-4">{selectedService.icon}</div>
              <p className="text-gray-600 mb-4">
                {selectedService.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Giá:</span>
                  <span className="font-semibold text-pink-600">
                    {selectedService.price}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Thời gian:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedService.time.map((time, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-xs"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedService(null)}
              className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-lg hover:shadow-md transition-all"
            >
              Đặt dịch vụ ngay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

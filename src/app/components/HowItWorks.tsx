"use client"

const HowItWorks = () => {
  const services = [
    {
      title: "Premium Fuel",
      description: "We provide high-quality fuel to ensure your vehicle runs smoothly and efficiently.",
      icon: "⛽"
    },
    {
      title: "Convenience Store",
      description: "Our convenience store offers snacks, drinks, and other essentials for your journey.",
      icon: "🏪"
    },
    {
      title: "Safety First",
      description: "We follow strict safety procedures to ensure the quality of our fuel and the safety of our customers.",
      icon: "🛡️"
    },
    {
      title: "EV Charging",
      description: "Our electric vehicle charging stations support sustainable transportation options.",
      icon: "🔌"
    },
    {
      title: "Car Wash",
      description: "Keep your vehicle clean with our professional car wash facilities.",
      icon: "🚗"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">HOW IT WORK</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
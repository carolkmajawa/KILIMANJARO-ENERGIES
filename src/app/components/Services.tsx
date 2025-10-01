"use client"

const Services = () => {
  const services = [
    {
      title: "Quality Petrol, Diesel, and Alternative Fuels",
      description: "We provide premium quality fuels that meet all industry standards for optimal vehicle performance.",
      icon: "⛽"
    },
    {
      title: "Car Wash and Vehicle Care Products",
      description: "Keep your vehicle looking its best with our professional car wash services and quality care products.",
      icon: "🚗"
    },
    {
      title: "Electric Vehicle Charging Stations",
      description: "Supporting sustainable transportation with modern EV charging infrastructure for all electric vehicles.",
      icon: "🔌"
    }
  ];

  const advantages = [
    {
      title: "Fair Pricing",
      description: "Competitive prices without compromising on service quality."
    },
    {
      title: "Quality Fuel",
      description: "Compliant, high-quality fuels that keep your engine running smoothly."
    },
    {
      title: "Modern Technology",
      description: "State-of-the-art equipment and eco-friendly options."
    },
    {
      title: "Convenient Location",
      description: "Strategically located near Mount Kilimanjaro for easy access."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">SERVICES WE OFFER</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
                <div className="text-5xl mb-6 text-center text-orange-500">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">WHY CHOOSE US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
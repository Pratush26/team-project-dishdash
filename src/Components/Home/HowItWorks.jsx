const steps = [
  { id: 1, title: "Browse Restaurants", desc: "Explore nearby restaurants & menus" },
  { id: 2, title: "Choose Your Meal", desc: "Pick delicious items you love" },
  { id: 3, title: "Place Order", desc: "Checkout securely in seconds" },
  { id: 4, title: "Track Delivery", desc: "Get real-time order updates" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map(step => (
            <div key={step.id} className="text-center p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl font-bold text-orange-500 mb-4">
                {step.id}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

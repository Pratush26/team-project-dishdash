const benefits = [
  "Multiple Restaurants",
  "Fast Ordering",
  "Secure Payments",
  "Real-time Tracking",
  "Trusted Reviews",
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {benefits.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow text-center">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

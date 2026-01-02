const stats = [
  { label: "Restaurants", value: "100+" },
  { label: "Orders Delivered", value: "10k+" },
  { label: "Happy Customers", value: "5k+" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 text-center gap-6">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-bold text-orange-500">{stat.value}</h3>
            <p className="mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

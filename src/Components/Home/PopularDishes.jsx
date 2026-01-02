const dishes = [
  { id: 1, name: "Grilled Chicken", price: 450 },
  { id: 2, name: "Cheese Burger", price: 350 },
  { id: 3, name: "Special Biryani", price: 550 },
];

const PopularDishes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Dishes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="border rounded-xl p-6 text-center hover:shadow transition"
            >
              <h3 className="font-semibold text-lg">{dish.name}</h3>
              <p className="text-orange-500 font-bold mt-2">৳ {dish.price}</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;

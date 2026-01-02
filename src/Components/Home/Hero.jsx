import heroImg from '../../assets/hero.png'
const Hero = () => {
  return (
    <section className="bg-linear-to-r from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Order Food from <br />
            <span className="text-orange-500">Your Favorite Restaurants</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Discover multiple restaurants, place orders easily, and track your
            food in real-time — all from one platform.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
              Explore Restaurants
            </button>

            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium transition">
              Become a Partner
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Food delivery"
            className="w-full max-w-md drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

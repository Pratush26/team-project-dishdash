const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">
            About Our Platform
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A modern multi-restaurant food ordering platform connecting
            customers, restaurants, and administrators in one powerful system.
          </p>
        </div>

        {/* Mission Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl font-semibold text-gray-800">Our Mission</h1>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">
            Our mission is to simplify food ordering by bringing multiple
            restaurants under one platform. We empower restaurant owners with
            smart tools, give customers a seamless ordering experience, and
            provide administrators full control and insights.
          </p>
        </div>

        {/* Roles Section */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8">
            Who Is This Platform For?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto">
            {/* Admin */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                Admin
              </h3>
              <p className="text-gray-600">
                Manage restaurants, users, analytics, and ensure smooth
                operation of the entire platform.
              </p>
            </div>

            {/* Owner */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                Restaurant Owner
              </h3>
              <p className="text-gray-600">
                Add menus, manage orders, track revenue, and grow your business
                digitally.
              </p>
            </div>

            {/* Customer */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-orange-500">
                Customer
              </h3>
              <p className="text-gray-600">
                Browse restaurants, order food, track deliveries, and leave
                reviews easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

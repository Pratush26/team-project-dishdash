import { Link } from "react-router";

const OwnerCTA = () => {
  return (
    <section className="py-20 bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">
          Grow Your Restaurant Business
        </h2>
        <p className="m-4">
          Manage orders, menus, and revenue from one dashboard
        </p>
        <Link to='/register' className="mt-6 bg-white text-orange-500 px-6 py-3 rounded font-medium">
          Become a Partner
        </Link>
      </div>
    </section>
  );
};

export default OwnerCTA;

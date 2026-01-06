import '../Utils/form.css'

const Contact = () => {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have questions, feedback, or partnership inquiries?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 mx-auto place-content-center-safe">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-600">
              <p><strong>Email:</strong> support@foodplatform.com</p>
              <p><strong>Phone:</strong> +880 1234-567890</p>
              <p><strong>Address:</strong> Dhaka, Bangladesh</p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">
                Sunday – Thursday: 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-50 p-8 rounded-xl shadow w-full">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-medium"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;

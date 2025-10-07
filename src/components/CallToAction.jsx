export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gray-600 pt-20 text-white text-center rounded-xl shadow-md mt-16">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Ready to Find Products Near You?
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-blue-100 mb-8">
          Join thousands of shoppers finding the products they need in local stores.
          Create an account and start searching today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition flex items-center justify-center gap-2">
            <span className="material-icons">shopping_cart</span>
            Get Started
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-blue-500 transition flex items-center justify-center gap-2">
            <span className="material-icons">info</span>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

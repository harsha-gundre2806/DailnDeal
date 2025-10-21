import { Link } from "react-router-dom";

export default function Footer() {
  const categories = [
    "Electronics",
    "Fashion",
    "Groceries",
    "Home & Living",
    "Health & Beauty",
  ];

  return (
    <footer className="bg-gray-800 text-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Where to Purchase</h3>
          <p className="text-gray-400">
            Find products nearby. Connecting shoppers with local retailers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/search" className="hover:underline">Search Products</Link>
            </li>
            <li>
              <Link to="/search" className="hover:underline">Browse Shops</Link>
            </li>
            <li>
              <Link to="/register-shop" className="hover:underline">Register your Shop</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
  <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
  <ul className="space-y-2">
    {categories.map((cat) => (
      <li key={cat}>
        <Link
          to={`/search?category=${encodeURIComponent(cat)}`}
          className="hover:underline"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {cat}
        </Link>
      </li>
    ))}
  </ul>
</div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <p>123 Market Street, Suite 456</p>
          <p>San Francisco, CA 94103</p>
          <p className="mt-2">+1 (555) 123-4567</p>
          <p>support@wheretopurchase.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2025 Where to Purchase. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/t&c" className="hover:underline">Terms of Service</Link>
          <Link to="/help" className="hover:underline">Help Center</Link>
        </div>
      </div>
    </footer>
  );
}

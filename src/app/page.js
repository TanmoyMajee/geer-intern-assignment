
// src/app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-blue-600">Geer Store</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your one-stop destination for premium electronics, gadgets, and more.
            Discover amazing products at unbeatable prices.
          </p>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Shop Now
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your products delivered quickly and safely to your doorstep.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Secure Payment
            </h3>
            <p className="text-gray-600">
              Shop with confidence using our secure payment gateway.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quality Guarantee
            </h3>
            <p className="text-gray-600">
              All products come with quality assurance and warranty.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-gray-600 mb-6">
            Browse our extensive collection of products and find exactly what you're looking for.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
            <Link
              href="/products"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Search Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

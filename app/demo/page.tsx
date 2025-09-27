import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request a Demo',
  description: 'Schedule a personalized demo of Oblinor Equity Hub and see how it can transform your PE operations.',
}

export default function DemoPage() {
  return (
    <div className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-oblinor-primary mb-4">
              See Oblinor Equity Hub in Action
            </h1>
            <p className="text-xl text-gray-600">
              Get a personalized demo tailored to your firm's specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-oblinor-primary mb-6">
                Schedule Your Demo
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oblinor-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oblinor-accent focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oblinor-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oblinor-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="fundSize" className="block text-sm font-medium text-gray-700 mb-2">
                    Fund Size (AUM)
                  </label>
                  <select
                    id="fundSize"
                    name="fundSize"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oblinor-accent focus:border-transparent"
                  >
                    <option value="">Select fund size</option>
                    <option value="<100M">Less than $100M</option>
                    <option value="100M-500M">$100M - $500M</option>
                    <option value="500M-1B">$500M - $1B</option>
                    <option value="1B-5B">$1B - $5B</option>
                    <option value=">5B">More than $5B</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    What are you looking to achieve?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-oblinor-accent focus:border-transparent"
                    placeholder="Tell us about your specific needs and challenges..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Schedule Demo
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-oblinor-accent hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>

            {/* Benefits Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-oblinor-primary mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">30-minute personalized walkthrough</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Live Q&A with our PE experts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Custom pricing based on your needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">No commitment required</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-oblinor-primary mb-2">
                  Join 100+ PE Firms
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Leading private equity firms trust Oblinor to manage over $50B in AUM
                </p>
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-600"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 bg-oblinor-accent rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-white">
                    +95
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <p className="text-sm text-gray-600 mb-4">
                  "Oblinor transformed how we manage our portfolio. The efficiency gains have been remarkable."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold text-oblinor-primary">Sarah Chen</p>
                    <p className="text-sm text-gray-600">Managing Partner, Apex Capital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
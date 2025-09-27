import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Educational resources, guides, and insights for private equity professionals.',
}

const resources = {
  guides: [
    {
      title: 'The Complete Guide to PE Portfolio Management',
      description: 'Best practices for managing and monitoring your portfolio companies.',
      type: 'Guide',
      readTime: '15 min',
    },
    {
      title: 'LP Reporting Best Practices',
      description: 'How to create transparent and effective investor communications.',
      type: 'Guide',
      readTime: '10 min',
    },
    {
      title: 'Due Diligence Checklist',
      description: 'Comprehensive checklist for evaluating potential investments.',
      type: 'Template',
      readTime: '5 min',
    },
  ],
  webinars: [
    {
      title: 'Digital Transformation in Private Equity',
      description: 'How technology is reshaping the PE landscape.',
      date: 'October 15, 2024',
      duration: '45 min',
    },
    {
      title: 'ESG Integration Strategies',
      description: 'Implementing ESG considerations in your investment process.',
      date: 'October 22, 2024',
      duration: '60 min',
    },
  ],
  caseStudies: [
    {
      title: 'How Apex Partners Increased Portfolio Returns by 35%',
      description: 'Learn how a mid-market fund transformed their operations with Oblinor.',
      industry: 'Technology',
    },
    {
      title: 'Streamlining LP Communications at Scale',
      description: 'Case study on managing 100+ LP relationships efficiently.',
      industry: 'Healthcare',
    },
  ],
}

export default function ResourcesPage() {
  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-oblinor-primary mb-4">
            Resources & Insights
          </h1>
          <p className="text-xl text-gray-600">
            Stay ahead with the latest insights, best practices, and tools for private equity success.
          </p>
        </div>

        {/* Guides Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-oblinor-primary mb-8">
            Guides & Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.guides.map((guide) => (
              <div
                key={guide.title}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-oblinor-accent transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-oblinor-accent">
                    {guide.type}
                  </span>
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <Link
                  href="#"
                  className="text-oblinor-accent font-semibold hover:underline inline-flex items-center"
                >
                  Download
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Webinars Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-oblinor-primary mb-8">
            Upcoming Webinars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.webinars.map((webinar) => (
              <div
                key={webinar.title}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-oblinor-accent">
                    {webinar.date}
                  </span>
                  <span className="text-sm text-gray-500">{webinar.duration}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{webinar.title}</h3>
                <p className="text-gray-600 mb-4">{webinar.description}</p>
                <button className="btn-primary w-full">Register Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-oblinor-primary mb-8">
            Customer Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.caseStudies.map((study) => (
              <div
                key={study.title}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                <span className="inline-block px-3 py-1 bg-oblinor-accent/10 text-oblinor-accent text-sm font-semibold rounded-full mb-4">
                  {study.industry}
                </span>
                <h3 className="text-lg font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Link
                  href="#"
                  className="text-oblinor-accent font-semibold hover:underline inline-flex items-center"
                >
                  Read Case Study
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-oblinor-primary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get the latest PE insights and product updates delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-oblinor-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oblinor-accent"
            />
            <button type="submit" className="btn-primary bg-oblinor-accent hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
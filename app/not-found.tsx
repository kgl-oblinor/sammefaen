import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-oblinor-accent">404</h1>
        <h2 className="text-3xl font-bold text-oblinor-primary mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-4 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}
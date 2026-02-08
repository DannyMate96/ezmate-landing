import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4 py-12">
      <div className="max-w-xl mx-auto text-center">
        <div className="bg-[#1e293b] rounded-2xl p-8 md:p-12 shadow-xl border border-white/10">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your AI Profit Blueprint is on its way!
          </h1>

          <div className="bg-[#0f172a] rounded-xl p-6 mb-8 text-left border border-white/10">
            <h2 className="font-semibold text-white mb-4">What happens next:</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                <span className="text-gray-400 pt-1">Check your inbox (and spam folder) for the download link</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                <span className="text-gray-400 pt-1">Video 1 of our AI training series arrives tomorrow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                <span className="text-gray-400 pt-1">Over 7 days, you will receive our complete AI framework</span>
              </li>
            </ul>
          </div>

          {/* Qualification CTA */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 mb-4">
              <strong className="text-white">While you wait...</strong><br />
              Want to get a personalized AI roadmap for your business?
            </p>
            <a
              href="/qualify"
              className="btn-primary w-full justify-center"
            >
              Get Your AI Recommendation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-sm text-gray-500 mt-3">
              Takes 2 minutes | No obligation | Personalized results
            </p>
          </div>
        </div>

        {/* Back to home */}
        <Link href="/" className="inline-flex items-center gap-2 mt-6 text-gray-500 hover:text-primary transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </main>
  )
}

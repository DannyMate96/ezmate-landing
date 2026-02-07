export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <a href="/" className="text-primary hover:underline text-sm mb-8 inline-block">&larr; Back to Home</a>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: February 2026</p>

        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>
              When you download our AI Profit Blueprint or contact us, we collect the following information:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>First name</li>
              <li>Email address</li>
              <li>Business type (optional)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Send you the AI Profit Blueprint and related training materials</li>
              <li>Send you our email series with tips and strategies</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Email Communications</h2>
            <p>
              By providing your email address, you agree to receive our email series. You can
              unsubscribe at any time by clicking the unsubscribe link in any email we send.
              We will never sell or share your email address with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies and Analytics</h2>
            <p>
              We use Google Analytics and similar tools to understand how visitors use our website.
              These tools may use cookies to collect information about your browsing behaviour.
              You can disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information. However, no method
              of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from our emails at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hello@ezmate.ai" className="text-primary hover:underline">hello@ezmate.ai</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

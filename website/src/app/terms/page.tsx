export default function TermsOfService() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-gray-300">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <a href="/" className="text-primary hover:underline text-sm mb-8 inline-block">&larr; Back to Home</a>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: February 2026</p>

        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the ezmate.ai website and services, you agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use
              our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p>
              ezmate.ai provides AI automation solutions for small and medium businesses,
              including AI chatbots, voice AI agents, and workflow automation. We also provide
              free educational content including the AI Profit Blueprint.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Free Content</h2>
            <p>
              The AI Profit Blueprint and associated training materials are provided free of charge
              for educational purposes. We reserve the right to modify or discontinue this free
              content at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Paid Services</h2>
            <p>
              For paid services, specific terms and pricing will be provided during the AI
              Audit and outlined in a separate service agreement. Our guarantees (30-day money-back,
              90-day ROI) apply as described on our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the
              property of ezmate.ai and is protected by intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              ezmate.ai provides information and services on an &ldquo;as is&rdquo; basis. We make no
              warranties, expressed or implied, and hereby disclaim all warranties. We shall not
              be liable for any damages arising from the use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective
              immediately upon posting to this page. Your continued use of the website constitutes
              acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:info@ezmate.ai" className="text-primary hover:underline">info@ezmate.ai</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0f172a]/95 shadow-lg shadow-black/20' : 'bg-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">ez</span>
            </div>
            <span className="font-bold text-lg text-white">
              ezmate<span className="text-primary">.ai</span>
            </span>
          </a>
          <a href="#get-blueprint" className="btn-primary text-sm py-2.5 px-5">
            Get Free Blueprint
          </a>
        </div>
      </div>
    </header>
  )
}

// Soft Cover Book Component
function SoftCoverBook({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Shadow under book */}
      <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/10 blur-xl rounded-full"></div>

      {/* Book container with 3D effect */}
      <div className="relative" style={{ perspective: '1000px' }}>
        <div className="relative" style={{ transform: 'rotateY(-5deg)' }}>
          {/* Page edges (right side) */}
          <div className="absolute right-0 top-2 bottom-2 w-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-r-sm"
               style={{ transform: 'translateX(100%)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"></div>
          </div>

          {/* Main book cover */}
          <div className="relative bg-gradient-to-br from-[#2596be] via-[#1e7a9c] to-[#164e63] rounded-sm overflow-hidden shadow-xl"
               style={{ aspectRatio: '3/4' }}>
            {/* Spine highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/20 via-black/5 to-transparent"></div>

            {/* Cover texture overlay */}
            <div className="absolute inset-0 opacity-5"
                 style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}></div>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
              {/* Top badge */}
              <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-medium text-white self-start">
                FREE GUIDE
              </div>

              {/* Title */}
              <div className="flex-1 flex flex-col justify-center py-6">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
                  The AI Profit
                </h3>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white/90 leading-tight tracking-tight">
                  Blueprint
                </h3>

                <div className="w-16 h-1 bg-white/40 rounded mt-4 mb-4"></div>

                <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-[90%]">
                  How Australian SMBs Are Saving 20+ Hours/Week With AI Automation
                </p>
              </div>

              {/* Bottom branding */}
              <div className="flex items-center gap-2 pt-4 border-t border-white/20">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">ez</span>
                </div>
                <span className="text-white/70 text-sm font-medium">ezmate.ai</span>
              </div>
            </div>

            {/* Glossy effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Bottom page edges */}
          <div className="absolute bottom-0 left-2 right-2 h-2 bg-gradient-to-b from-gray-100 to-gray-200 rounded-b-sm"
               style={{ transform: 'translateY(100%)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/50 via-transparent to-gray-300/50"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// CTA Button Component
function CTAButton({ className = '', children }: { className?: string, children?: React.ReactNode }) {
  return (
    <a href="#get-blueprint" className={`btn-cta ${className}`}>
      {children || 'Yes, Send Me The Free Blueprint'}
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  )
}

// Highlight Text Component
function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-highlight">{children}</span>
}

// Main Page
export default function LandingPage() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    businessType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log('Form submitted:', formData)
    window.location.href = '/thank-you'
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#0f172a] pt-24 pb-16 md:pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="animate-fade-in-up">
                <div className="badge mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>For Australian Business Owners</span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                  Discover How To <Highlight>Capture 3x More Leads</Highlight> And Save 20+ Hours Every Week
                </h1>

                <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                  The free blueprint reveals the exact AI automation system that 500+ Australian SMBs
                  are using to respond to every inquiry in <strong className="text-white">under 30 seconds</strong>, 24/7.
                </p>

                <CTAButton />

                <p className="text-gray-400 text-sm mt-6 flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free instant download. No credit card required.
                </p>
              </div>

              {/* Right: Book */}
              <div className="flex justify-center lg:justify-end animate-fade-in-up delay-200">
                <SoftCoverBook className="w-48 sm:w-56 md:w-64" />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-[#0a0f1a] py-8 px-4 border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                { value: '500+', label: 'Businesses Helped' },
                { value: '20+ hrs', label: 'Saved Per Week' },
                { value: '16', label: 'Industries Served' },
                { value: '30 sec', label: 'Avg Response Time' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="stat-number text-2xl md:text-3xl">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="section-padding bg-[#0f172a]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge badge-accent mb-4">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Let Me Ask You Something...
              </h2>
            </div>

            <div className="space-y-6 text-gray-400">
              <p className="text-xl text-gray-200">
                How many leads have you lost this month because you could not respond fast enough?
              </p>

              <p>
                Think about it. A potential customer visits your website at 9pm on a Tuesday.
                They have a question. They fill out your contact form... and then what?
              </p>

              <p>
                They wait. And wait. And by the time you get back to them the next morning,
                they have already called your competitor who answered immediately.
              </p>

              {/* Callout Box */}
              <div className="highlight-box my-10">
                <p className="text-gray-200 m-0">
                  Studies show that responding to a lead within 5 minutes makes you
                  <span className="text-highlight"> 21 times more likely</span> to qualify that lead.
                  After 30 minutes? Your chances drop by over 80%.
                </p>
              </div>

              <p>
                But here is the problem most Australian business owners face:
              </p>

              <div className="space-y-4 my-8">
                {[
                  'You cannot afford to hire someone to answer inquiries 24/7 (that would cost you $60,000+ per year)',
                  'You are already working 50+ hours a week and cannot add more to your plate',
                  'You have tried chatbots before but they were clunky, robotic, and actually drove customers away',
                ].map((item, index) => (
                  <div key={index} className="feature-card p-5 flex items-start gap-4">
                    <span className="warning-icon flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xl text-white font-medium">
                Sound familiar?
              </p>

              <p>
                If you are nodding your head right now, keep reading. Because what I am about to share
                with you changed everything for my clients... and it can do the same for you.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-[#0a0f1a]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge mb-4">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                The Discovery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How I Accidentally Discovered The System That Now Saves My Clients Over 1,000 Hours Per Year...
              </h2>
            </div>

            <div className="space-y-6 text-gray-400">
              <p>
                Two years ago, I was consulting for a mortgage brokerage in Melbourne.
              </p>

              <p>
                Sarah, the owner, was brilliant at her job. She knew the lending landscape inside out.
                Her clients loved her. But she had one massive problem...
              </p>

              {/* Quote Box */}
              <div className="blockquote my-10 py-4">
                <p className="text-xl text-gray-200 not-italic font-medium">
                  She was losing <span className="text-highlight">40% of her leads</span> because she simply could not respond fast enough.
                </p>
              </div>

              <p>
                Loan inquiries would come in at all hours. Weekends. Evenings.
                While she was in meetings with other clients. And by the time she got back to them...
              </p>

              <p className="text-xl text-white font-medium">
                Gone. To another broker who happened to pick up the phone first.
              </p>

              <p>
                I told her: <em className="text-gray-300">"What if you had someone who could respond to every single inquiry
                within 30 seconds? Someone who never sleeps, never takes holidays, and never
                has a bad day?"</em>
              </p>

              <p>
                She laughed and said that would cost a fortune.
              </p>

              <p>
                But here is the thing... <strong className="text-white">it did not.</strong>
              </p>

              <p>
                We built her an AI system that did exactly that. And within 60 days:
              </p>

              {/* Results Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
                {[
                  { metric: '4hrs → 30sec', label: 'Response Time' },
                  { metric: '3x', label: 'Qualified Leads' },
                  { metric: '15+ hrs', label: 'Saved Per Week' },
                  { metric: null, label: 'Weekends Off', highlight: true },
                ].map((item, index) => (
                  <div key={index} className="feature-card p-5 flex flex-col items-center justify-center min-h-[100px]">
                    {item.highlight ? (
                      <div className="text-highlight text-lg md:text-xl font-bold text-center">{item.label}</div>
                    ) : (
                      <>
                        <div className="text-primary text-xl md:text-2xl font-bold mb-1 text-center">{item.metric}</div>
                        <div className="text-gray-500 text-sm text-center">{item.label}</div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <p>
                That is when I realised this was not just a one-off success. This system could
                work for almost any service-based business in Australia.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="section-padding bg-[#0f172a]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge badge-green mb-4">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Here Is Exactly What We Build For You
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                No cookie-cutter solutions. Every system is custom-built for your specific business needs.
              </p>
            </div>

            <div className="space-y-6">
              {/* Service 1 */}
              <div className="feature-card group">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">AI Chatbot That Actually Converts</h3>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/20 text-primary">Most Popular</span>
                    </div>
                    <p className="text-gray-400 mb-4">
                      Forget those robotic chatbots that frustrate your customers. Our AI chatbot has
                      natural conversations, answers complex questions, qualifies leads, and books
                      appointments directly into your calendar. It works on your website, WhatsApp,
                      Facebook Messenger, and SMS - wherever your customers are.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400 font-semibold">Average Result:</span>
                      <span className="text-gray-300">67% increase in lead capture rate within 30 days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="feature-card group">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">AI Voice Agent For Phone Calls</h3>
                    <p className="text-gray-400 mb-4">
                      Yes, an AI that answers your phone. It sounds natural, handles inquiries,
                      schedules appointments, and even makes outbound follow-up calls to leads
                      you have not had time to contact. No more missed calls. No more voicemail
                      black holes where leads go to die.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400 font-semibold">Average Result:</span>
                      <span className="text-gray-300">40% reduction in missed calls and no-shows</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="feature-card group">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Workflow Automation</h3>
                    <p className="text-gray-400 mb-4">
                      All those repetitive tasks eating up your day? Data entry, follow-up emails,
                      invoice reminders, appointment confirmations... we automate all of it. Your
                      systems talk to each other automatically, so you can focus on what actually
                      grows your business.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-green-400 font-semibold">Average Result:</span>
                      <span className="text-gray-300">15-20 hours saved per week on admin tasks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <CTAButton />
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="section-padding bg-[#0a0f1a]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge badge-green mb-4">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Real Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Do Not Take My Word For It...
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  quote: "I was skeptical. Really skeptical. I had tried chatbots before and they were terrible. But this was different. Within the first week, the AI booked 4 property viewings while I was asleep. ASLEEP. One of those turned into a $1.2M sale. The ROI is insane.",
                  name: "Sarah Mitchell",
                  role: "Real Estate Agent",
                  location: "Melbourne VIC",
                  result: "$1.2M sale from AI-booked lead",
                  initials: "SM",
                  color: "bg-primary"
                },
                {
                  quote: "We run an e-commerce store and were drowning in customer service inquiries. Returns, shipping questions, product questions... it was killing us. Now the AI handles 80% of it automatically. My team can actually focus on growth instead of answering the same questions 50 times a day.",
                  name: "James Thompson",
                  role: "E-commerce Business Owner",
                  location: "Sydney NSW",
                  result: "80% of inquiries automated",
                  initials: "JT",
                  color: "bg-green-600"
                },
                {
                  quote: "Patient no-shows were costing us thousands every month. The automated reminder system alone paid for everything within the first 3 weeks. Now patients get confirmation calls, text reminders, and can even reschedule through the AI. Our no-show rate dropped from 23% to 8%.",
                  name: "Dr. Lisa Chen",
                  role: "Healthcare Clinic Director",
                  location: "Brisbane QLD",
                  result: "No-shows reduced from 23% to 8%",
                  initials: "LC",
                  color: "bg-purple-600"
                },
              ].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="badge badge-green text-xs">
                      {testimonial.result}
                    </span>
                  </div>
                  <p className="text-lg mb-6 leading-relaxed text-gray-300">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}, {testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Is In The Blueprint */}
        <section className="section-padding bg-[#0f172a] overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <span className="badge badge-orange mb-4">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                What Is Inside
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Here Is Exactly What You Will Discover Inside This Free Blueprint...
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                This is not some fluffy ebook filled with generic advice you have heard a thousand times.
                It is a practical, no-BS guide packed with the exact strategies we use with our paying clients.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left: Book */}
              <div className="flex justify-center order-2 lg:order-1">
                <SoftCoverBook className="w-56 sm:w-64 md:w-72 lg:w-80" />
              </div>

              {/* Right: Chapter List */}
              <div className="order-1 lg:order-2">
                <div className="space-y-3 md:space-y-4">
                  {[
                    { chapter: 1, title: 'The $50,000 AI Mistake', subtitle: '90% of businesses make this (and how to avoid it)' },
                    { chapter: 2, title: 'The Only 3 AI Tools You Need', subtitle: 'Forget the rest - these actually work' },
                    { chapter: 3, title: 'Copy-Paste Chatbot Scripts', subtitle: 'Convert visitors into leads while you sleep' },
                    { chapter: 4, title: 'The "Set & Forget" Framework', subtitle: 'Save 20+ hours every single week' },
                    { chapter: 5, title: 'ROI Calculator Worksheet', subtitle: 'See exactly how much you will save' },
                    { chapter: 6, title: '7-Day Implementation Roadmap', subtitle: 'Your step-by-step action plan' },
                  ].map((item) => (
                    <div key={item.chapter} className="feature-card p-4 md:p-5 group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="chapter-number flex-shrink-0">
                          {item.chapter}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-500 text-xs md:text-sm mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                        <svg className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 md:mt-10 text-center lg:text-left">
                  <CTAButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Free Section */}
        <section className="section-padding bg-[#0a0f1a]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                So Why Am I Giving This Book Away For Free...?
              </h2>
            </div>

            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                Good question.
              </p>

              <p>
                Here is the deal. After you read this blueprint, one of two things will happen:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="feature-card p-8">
                  <div className="text-primary text-xl font-bold mb-4">Option 1</div>
                  <p className="text-gray-300 m-0">
                    You take all the strategies from this book and implement them yourself.
                    You boost your business by adapting AI automation on your own.
                  </p>
                  <p className="text-gray-500 mt-4 text-base italic">
                    Some people actually do this. And I am genuinely happy that I can help people who visited my website.
                  </p>
                </div>
                <div className="feature-card p-8">
                  <div className="text-primary text-xl font-bold mb-4">Option 2</div>
                  <p className="text-gray-300 m-0">
                    You realise this AI stuff is powerful but you would rather have someone
                    who knows what they are doing handle it for you.
                  </p>
                  <p className="text-gray-500 mt-4 text-base italic">
                    And when that happens... I hope you will think of us.
                  </p>
                </div>
              </div>

              <p>
                Either way, you win. There is no catch. No hidden upsell. No annoying sales calls
                every day. Just genuinely useful information that will help your business.
              </p>

              <p className="text-xl text-white font-medium">
                Simple as that.
              </p>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="section-padding bg-[#0f172a]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-950/50 rounded-2xl p-8 md:p-12 border border-green-900/50">
              {/* Badge */}
              <div className="text-center mb-8">
                <span className="badge badge-green">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Triple Guarantee
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
                Our "Put Your Money Where Your Mouth Is" Guarantee
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: '7-Day Delivery Guarantee',
                    desc: 'Your AI system will be live and capturing leads within 7 days, or we continue working for free until it is.'
                  },
                  {
                    title: '30-Day Money-Back Guarantee',
                    desc: 'If you are not completely satisfied within 30 days, we will refund every cent. No questions asked. No hoops to jump through.'
                  },
                  {
                    title: '90-Day ROI Guarantee',
                    desc: 'If you do not see at least 3x your investment in saved time within 90 days, we will work for free until you do.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">{item.title}</p>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-500 mt-10 text-sm">
                We can offer these guarantees because our systems actually work. Simple as that.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section id="get-blueprint" className="section-padding bg-primary-soft">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Your Free AI Profit Blueprint Now
              </h2>
              <p className="text-gray-400">
                Enter your details below and I will send it straight to your inbox. Takes 2 seconds.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#1e293b] rounded-2xl p-8 shadow-xl border border-white/10">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="input-field"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">What's the best email address to send this ebook?</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="input-field"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">What type of business do you run?</label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                    className="input-field"
                  >
                    <option value="">Select one...</option>
                    <option value="ecommerce">E-commerce / Retail</option>
                    <option value="realestate">Real Estate</option>
                    <option value="healthcare">Healthcare / Medical</option>
                    <option value="professional">Professional Services (Law, Accounting, etc.)</option>
                    <option value="trades">Trades & Construction</option>
                    <option value="hospitality">Hospitality / Food Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cta w-full justify-center mt-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Me The Free Blueprint'}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No Spam
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Unsubscribe Anytime
                </span>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-[#0a0f1a]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Questions You Might Have
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'I am not technical at all. Can this still work for me?',
                  a: 'Absolutely. We handle all the technical setup. You just tell us what problems you want to solve, and we build the system for you. Most of our clients have zero technical background.'
                },
                {
                  q: 'How much does it cost to work with you?',
                  a: 'Every project is custom-quoted based on your specific needs. After a free Discovery Call, we provide a detailed proposal with transparent pricing. Most clients see ROI within the first month.'
                },
                {
                  q: 'I have tried chatbots before and they were terrible. How is this different?',
                  a: 'Those old chatbots were basically digital FAQ pages - they could only answer pre-programmed questions with scripted responses. Our AI actually understands what your customers are asking, remembers the conversation context, and responds naturally. Think of the difference between talking to an automated phone menu versus a real person.'
                },
                {
                  q: 'How long until I see results?',
                  a: 'Most clients see their first results within the first week of going live. Our 7-day delivery guarantee means you will have a working system capturing leads within a week of starting.'
                },
                {
                  q: 'What if it does not work for my industry?',
                  a: 'We have worked across 16 different industries in Australia - from dentists to dog groomers, accountants to auto mechanics. If you have customers who contact you, this can work for you.'
                },
              ].map((faq, index) => (
                <div key={index} className="feature-card">
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-[#0f172a]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Choice Is Yours
            </h2>

            <div className="space-y-4 text-gray-400 mb-10">
              <p>
                You can keep doing things the way you have always done them. Keep losing leads
                to competitors who respond faster. Keep spending hours on tasks that could be automated.
              </p>
              <p>
                Or you can take 2 minutes to download this free blueprint and discover a better way.
              </p>
              <p className="text-xl text-white font-medium">
                500+ Australian business owners have already made that choice.
                <br />The question is: will you?
              </p>
            </div>

            <CTAButton />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">ez</span>
              </div>
              <span className="font-bold text-lg text-white">
                ezmate<span className="text-primary">.ai</span>
              </span>
            </a>

            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="divider my-8 bg-gray-800"></div>

          <div className="text-center text-sm text-gray-500">
            <p>© 2026 ezmate.ai. All rights reserved.</p>
            <p className="mt-2">AI automation solutions for Australian small and medium businesses.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

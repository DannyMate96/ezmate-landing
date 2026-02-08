'use client'

import { useState } from 'react'

// ─── Question Data ───────────────────────────────────────────────

interface Option {
  label: string
  points: number
}

interface Question {
  id: number
  question: string
  subtitle: string
  options: Option[]
  multiSelect: boolean
  scored: boolean
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your business type?",
    subtitle: "Select the industry that best describes your business",
    multiSelect: false,
    scored: true,
    options: [
      { label: "E-commerce / Retail", points: 4 },
      { label: "Real Estate", points: 4 },
      { label: "Healthcare / Medical", points: 4 },
      { label: "Professional Services", points: 3 },
      { label: "Hospitality / Food", points: 3 },
      { label: "Construction / Trades", points: 2 },
      { label: "Education / Training", points: 2 },
      { label: "Other", points: 1 },
    ],
  },
  {
    id: 2,
    question: "Which service are you mostly interested in?",
    subtitle: "Select all that apply",
    multiSelect: true,
    scored: false,
    options: [
      { label: "AI Chatbot", points: 0 },
      { label: "AI Voice Agent", points: 0 },
      { label: "Automation", points: 0 },
      { label: "Website", points: 0 },
    ],
  },
  {
    id: 3,
    question: "How many employees does your business have?",
    subtitle: "Include both full-time and part-time",
    multiSelect: false,
    scored: true,
    options: [
      { label: "Just me (Solo)", points: 1 },
      { label: "2 – 5 employees", points: 2 },
      { label: "6 – 20 employees", points: 3 },
      { label: "21 – 50 employees", points: 4 },
      { label: "50+ employees", points: 4 },
    ],
  },
  {
    id: 4,
    question: "Have you tried any AI tools before?",
    subtitle: "This helps us tailor the conversation to your level",
    multiSelect: false,
    scored: true,
    options: [
      { label: "Never heard of them", points: 1 },
      { label: "Heard about AI but never tried", points: 2 },
      { label: "Tried a few (ChatGPT, etc.)", points: 3 },
      { label: "Currently using AI tools", points: 4 },
    ],
  },
  {
    id: 5,
    question: "What's your biggest challenge right now?",
    subtitle: "Select all that apply",
    multiSelect: true,
    scored: true,
    options: [
      { label: "Slow response to customer inquiries", points: 4 },
      { label: "Too much time on repetitive tasks", points: 4 },
      { label: "Losing leads outside business hours", points: 3 },
      { label: "Don't know where to start with AI", points: 2 },
      { label: "Need a website or better online presence", points: 2 },
      { label: "Competitors are ahead with technology", points: 3 },
    ],
  },
  {
    id: 6,
    question: "What's your approximate annual revenue?",
    subtitle: "This helps us recommend the right solution for your scale",
    multiSelect: false,
    scored: true,
    options: [
      { label: "Under $200K", points: 1 },
      { label: "$200K – $500K", points: 2 },
      { label: "$500K – $2M", points: 3 },
      { label: "$2M+", points: 4 },
    ],
  },
  {
    id: 7,
    question: "How soon do you want to implement AI?",
    subtitle: "There's no wrong answer — we work with every timeline",
    multiSelect: false,
    scored: true,
    options: [
      { label: "As soon as possible", points: 4 },
      { label: "Within 1 – 3 months", points: 3 },
      { label: "Within 3 – 6 months", points: 2 },
      { label: "Just exploring for now", points: 1 },
    ],
  },
  {
    id: 8,
    question: "Are you the decision maker for this project?",
    subtitle: "We want to make sure we're talking to the right person",
    multiSelect: false,
    scored: true,
    options: [
      { label: "Yes, I make the final call", points: 4 },
      { label: "I'm part of the decision team", points: 3 },
      { label: "I'm researching for someone else", points: 1 },
    ],
  },
]

// ─── Icons ───────────────────────────────────────────────────────

const icons: Record<string, string> = {
  "E-commerce / Retail": "🛒",
  "Real Estate": "🏠",
  "Healthcare / Medical": "🏥",
  "Professional Services": "💼",
  "Hospitality / Food": "🍽️",
  "Construction / Trades": "🔨",
  "Education / Training": "📚",
  "Other": "🏢",
  "AI Chatbot": "💬",
  "AI Voice Agent": "📞",
  "Automation": "⚡",
  "Website": "🌐",
  "Just me (Solo)": "👤",
  "2 – 5 employees": "👥",
  "6 – 20 employees": "🏢",
  "21 – 50 employees": "🏗️",
  "50+ employees": "🏭",
  "Never heard of them": "🤷",
  "Heard about AI but never tried": "👀",
  "Tried a few (ChatGPT, etc.)": "🧪",
  "Currently using AI tools": "🚀",
  "Slow response to customer inquiries": "⏰",
  "Too much time on repetitive tasks": "🔄",
  "Losing leads outside business hours": "😴",
  "Don't know where to start with AI": "🤔",
  "Need a website or better online presence": "🌐",
  "Competitors are ahead with technology": "📉",
  "Under $200K": "📊",
  "$200K – $500K": "📈",
  "$500K – $2M": "💰",
  "$2M+": "🏆",
  "As soon as possible": "🔥",
  "Within 1 – 3 months": "📅",
  "Within 3 – 6 months": "🗓️",
  "Just exploring for now": "🔍",
  "Yes, I make the final call": "✅",
  "I'm part of the decision team": "🤝",
  "I'm researching for someone else": "📋",
}

// ─── Scoring ─────────────────────────────────────────────────────

type Answers = Record<number, string[]>

function calculateScore(answers: Answers): number {
  let score = 0
  questions.forEach((q) => {
    if (!q.scored) return
    const selected = answers[q.id] || []
    if (q.multiSelect) {
      // For multi-select scored questions, take the highest point value selected
      const maxPoints = selected.reduce((max, label) => {
        const opt = q.options.find((o) => o.label === label)
        return opt && opt.points > max ? opt.points : max
      }, 0)
      score += maxPoints
    } else {
      const opt = q.options.find((o) => selected.includes(o.label))
      if (opt) score += opt.points
    }
  })
  return score
}

type Tier = 'qualified' | 'warm' | 'not_ready'

function getTier(score: number): Tier {
  if (score >= 20) return 'qualified'
  if (score >= 13) return 'warm'
  return 'not_ready'
}

// ─── Main Component ──────────────────────────────────────────────

export default function QualifyPage() {
  const [step, setStep] = useState(0) // 0 = intro, 1-8 = questions, 9 = result
  const [answers, setAnswers] = useState<Answers>({})
  const [animating, setAnimating] = useState(false)

  const totalQuestions = questions.length
  const currentQuestion = step >= 1 && step <= totalQuestions ? questions[step - 1] : null

  function selectOption(label: string) {
    if (!currentQuestion) return

    setAnswers((prev) => {
      const current = prev[currentQuestion.id] || []
      if (currentQuestion.multiSelect) {
        const updated = current.includes(label)
          ? current.filter((l) => l !== label)
          : [...current, label]
        return { ...prev, [currentQuestion.id]: updated }
      }
      return { ...prev, [currentQuestion.id]: [label] }
    })

    // Auto-advance for single select after short delay
    if (!currentQuestion.multiSelect) {
      goNext([label])
    }
  }

  function goNext(selectedOverride?: string[]) {
    const selected = selectedOverride || answers[currentQuestion?.id || 0] || []
    if (currentQuestion && selected.length === 0) return

    setAnimating(true)
    setTimeout(() => {
      setStep((s) => s + 1)
      setAnimating(false)
    }, 300)
  }

  function goBack() {
    if (step <= 0) return
    setAnimating(true)
    setTimeout(() => {
      setStep((s) => s - 1)
      setAnimating(false)
    }, 300)
  }

  // ── Intro Screen ──
  if (step === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-xl lg:max-w-2xl w-full text-center">
          <a href="/" className="inline-flex items-center gap-2.5 mb-10">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">ez</span>
            </div>
            <span className="font-bold text-lg text-white">
              ezmate<span className="text-primary">.ai</span>
            </span>
          </a>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Before We Talk, Help Us<br className="hidden md:block" /> Understand Your Business
          </h1>
          <p className="text-gray-400 text-lg mb-3">
            So we can come prepared with the right AI strategy for <strong className="text-white">your</strong> specific situation.
          </p>

          <div className="card max-w-md mx-auto text-left mb-8 !p-5">
            <p className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-wide">After 8 quick questions, you&apos;ll get:</p>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-primary">✓</span> A personalized AI recommendation for your business
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-primary">✓</span> Access to book a free 60-min AI Audit with our team
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-primary">✓</span> We&apos;ll already know your needs before the call
              </li>
            </ul>
          </div>

          <button
            onClick={() => setStep(1)}
            className="btn-primary text-lg px-10 py-4"
          >
            Get Started — Takes Under 2 Minutes →
          </button>

          <p className="text-gray-500 text-sm mt-6">
            No signup required. No spam. 100% free.
          </p>
        </div>
      </div>
    )
  }

  // ── Result Screen ──
  if (step > totalQuestions) {
    const score = calculateScore(answers)
    const tier = getTier(score)
    const services = answers[2] || []

    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className={`max-w-xl lg:max-w-2xl w-full text-center transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <a href="/" className="inline-flex items-center gap-2.5 mb-10">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">ez</span>
            </div>
            <span className="font-bold text-lg text-white">
              ezmate<span className="text-primary">.ai</span>
            </span>
          </a>

          {tier === 'qualified' && (
            <>
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-3">
                You&apos;re a Great Fit!
              </h1>
              <p className="text-gray-400 text-lg mb-4">
                Based on your answers, AI can make a real impact on your business.
                Let&apos;s jump on a <strong className="text-white">free 60-minute AI Audit</strong> to map out your custom solution.
              </p>
              {services.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {services.map((s) => (
                    <span key={s} className="badge">{icons[s]} {s}</span>
                  ))}
                </div>
              )}
              <a
                href="https://calendly.com/ezmate-ai/audit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-lg px-10 py-4 w-full sm:w-auto"
              >
                Book Your Free AI Audit →
              </a>
              <p className="text-gray-500 text-sm mt-4">
                60-minute call. No obligation. No sales pressure.
              </p>
            </>
          )}

          {tier === 'warm' && (
            <>
              <div className="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💡</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-3">
                AI Can Help You — Let&apos;s Explore
              </h1>
              <p className="text-gray-400 text-lg mb-4">
                You have great potential for AI implementation.
                We recommend starting with our <strong className="text-white">free AI Profit Blueprint</strong> to see what&apos;s possible, then booking an audit when you&apos;re ready.
              </p>
              {services.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {services.map((s) => (
                    <span key={s} className="badge">{icons[s]} {s}</span>
                  ))}
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/#get-blueprint"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Get Free Blueprint
                </a>
                <a
                  href="https://calendly.com/ezmate-ai/audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-lg px-8 py-4"
                >
                  Book AI Audit Anyway
                </a>
              </div>
            </>
          )}

          {tier === 'not_ready' && (
            <>
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📘</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-3">
                Start With the Basics
              </h1>
              <p className="text-gray-400 text-lg mb-4">
                It looks like you&apos;re early in your AI journey. Our <strong className="text-white">free AI Profit Blueprint</strong> is the perfect starting point.
                It&apos;ll show you exactly what AI can do and how to get started step by step.
              </p>
              <a
                href="/#get-blueprint"
                className="btn-primary text-lg px-10 py-4 w-full sm:w-auto"
              >
                Download Free Blueprint →
              </a>
              <p className="text-gray-500 text-sm mt-4">
                Come back and book your audit whenever you&apos;re ready.
              </p>
            </>
          )}
        </div>
      </div>
    )
  }

  // ── Question Screen ──
  if (!currentQuestion) return null
  const selected = answers[currentQuestion.id] || []

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="px-4 pt-6 pb-4">
        <div className="max-w-2xl lg:max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xs">ez</span>
              </div>
              <span className="font-bold text-white">
                ezmate<span className="text-primary">.ai</span>
              </span>
            </a>
            <span className="text-gray-500 text-sm">
              {step} of {totalQuestions}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${(step / totalQuestions) * 100}%`,
                background: 'linear-gradient(90deg, var(--primary), var(--primary-light))',
              }}
            />
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex items-center justify-center px-4 pb-8">
        <div className={`max-w-2xl lg:max-w-3xl w-full transition-all duration-300 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {currentQuestion.question}
          </h2>
          <p className="text-gray-400 mb-8">
            {currentQuestion.subtitle}
          </p>

          {/* Options */}
          <div className="grid gap-3 lg:grid-cols-2">
            {currentQuestion.options.map((opt) => {
              const isSelected = selected.includes(opt.label)
              return (
                <button
                  key={opt.label}
                  onClick={() => selectOption(opt.label)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ${
                    isSelected
                      ? 'border-[var(--primary)] bg-[var(--primary)]/10 shadow-[0_0_20px_rgba(37,150,190,0.15)]'
                      : 'border-white/10 bg-[var(--bg-card)] hover:border-white/25 hover:bg-[var(--bg-card-hover)]'
                  }`}
                >
                  <span className="text-xl flex-shrink-0">{icons[opt.label] || "•"}</span>
                  <span className={`text-base font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                    {opt.label}
                  </span>
                  {isSelected && (
                    <span className="ml-auto text-[var(--primary)]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goBack}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>

            {currentQuestion.multiSelect && (
              <button
                onClick={() => goNext()}
                disabled={selected.length === 0}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selected.length > 0
                    ? 'btn-primary'
                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

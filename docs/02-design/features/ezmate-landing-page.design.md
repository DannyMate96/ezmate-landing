# ezmate.ai Landing Page & Funnel Design

> **Version**: 1.0
> **Created**: 2026-02-05
> **Status**: Draft
> **Reference**: [Business Strategy Plan](../../01-plan/features/ezmate-business-strategy.plan.md)

---

## 1. Overview

### 1.1 Purpose

Design the HVCO (High-Value Content Offer) landing page, lead magnet content structure, and email nurture sequence to convert visitors into qualified leads for AI audits.

### 1.2 Scope

| Component | Description |
|-----------|-------------|
| Landing Page | HVCO capture page for "AI Profit Blueprint" |
| HVCO Content | PDF guide + 3-part video series structure |
| Email Sequence | Magic Lantern 7-day nurture sequence |

### 1.3 Success Metrics

| Metric | Target |
|--------|--------|
| Landing Page Conversion | >25% |
| Email Open Rate | >35% |
| Email Click Rate | >5% |
| AI Audit Booking | >10% of leads |

---

## 2. Landing Page Design

### 2.1 Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│  HERO SECTION                                               │
│  ─────────────────────────────────────────────────────────  │
│  Headline: "Stop Losing Leads While You Sleep"              │
│  Subhead: "Download the FREE AI Profit Blueprint and        │
│           discover how Australian SMBs are saving 20+       │
│           hours/week with AI automation"                    │
│  CTA: [Get Free Access] → Email Capture Form                │
│  Trust: "Join 500+ Australian business owners"              │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  PAIN AGITATION SECTION                                     │
│  ─────────────────────────────────────────────────────────  │
│  "Does This Sound Familiar?"                                │
│  • Losing leads because you can't respond fast enough       │
│  • Spending hours on repetitive tasks                       │
│  • Competitors using AI while you fall behind               │
│  • Wanting to adopt AI but not knowing where to start       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  SOLUTION PREVIEW SECTION                                   │
│  ─────────────────────────────────────────────────────────  │
│  "What You'll Learn in the AI Profit Blueprint"             │
│  ✅ The $50,000 AI Mistake (and how to avoid it)            │
│  ✅ 3 AI Tools Every SMB Needs in 2025                      │
│  ✅ Copy-Paste Chatbot Scripts That Convert                 │
│  ✅ The "Set & Forget" Automation Framework                 │
│  ✅ ROI Calculator: Your AI Profit Potential                │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  SOCIAL PROOF SECTION                                       │
│  ─────────────────────────────────────────────────────────  │
│  Testimonials (3 minimum)                                   │
│  • Real estate agent: "Saved 15 hours/week"                 │
│  • E-commerce owner: "3X more leads captured"               │
│  • Healthcare clinic: "Reduced no-shows by 40%"             │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  FINAL CTA SECTION                                          │
│  ─────────────────────────────────────────────────────────  │
│  "Ready to Transform Your Business with AI?"                │
│  [Get Your Free AI Profit Blueprint Now]                    │
│  "No credit card required. Instant access."                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  FOOTER                                                     │
│  ─────────────────────────────────────────────────────────  │
│  © 2026 ezmate.ai | Privacy Policy | Terms                  │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Email Capture Form

**Fields:**
| Field | Required | Purpose |
|-------|----------|---------|
| Email | Yes | Primary contact |
| First Name | Yes | Personalization |
| Business Type | No | Segmentation (dropdown) |

**Business Type Options:**
- E-commerce / Retail
- Real Estate
- Healthcare / Medical
- Professional Services (Law, Accounting)
- Trades & Construction
- Other

### 2.3 Thank You Page

After form submission, redirect to Thank You page:

```
┌─────────────────────────────────────────────────────────────┐
│  "Your AI Profit Blueprint is on its way!"                  │
│                                                             │
│  ✅ Check your inbox (and spam folder)                      │
│  ✅ Video 1 arrives tomorrow                                │
│                                                             │
│  "While you wait..."                                        │
│  [Book a Free AI Audit] → Calendly                    │
│  "Get a personalized AI roadmap for your business"          │
└─────────────────────────────────────────────────────────────┘
```

### 2.4 Technical Requirements

| Requirement | Solution |
|-------------|----------|
| Platform | Carrd ($19/year) or Webflow (free tier) |
| Form Handler | ConvertKit or Mailerlite |
| Analytics | Google Analytics 4 + Meta Pixel |
| Speed | < 3 second load time |
| Mobile | Fully responsive |

---

## 3. HVCO Content Structure

### 3.1 PDF Guide: "The 5-Step AI Profit Blueprint"

**Document Specs:**
- Length: 15-20 pages
- Format: PDF (branded)
- Design: Professional, clean, scannable

**Table of Contents:**

```
Cover Page
─────────────────────────────
"The 5-Step AI Profit Blueprint"
How Australian SMBs Are Saving 20+ Hours/Week
and Converting 3X More Leads with AI

Page 1-2: Introduction
─────────────────────────────
• The AI revolution is here (but most are doing it wrong)
• Who this guide is for
• What you'll learn

Page 3-5: Step 1 - The $50,000 AI Mistake
─────────────────────────────
• Common AI implementation failures
• Why 73% of AI projects fail
• The "shiny object syndrome" trap
• Case study: A business that wasted $50K

Page 6-8: Step 2 - The 3 AI Tools Every SMB Needs
─────────────────────────────
• Tool 1: AI Chatbot (24/7 customer response)
• Tool 2: AI Voice Agent (phone automation)
• Tool 3: Workflow Automation (repetitive task elimination)
• When to use each tool

Page 9-11: Step 3 - Copy-Paste Chatbot Scripts
─────────────────────────────
• Welcome script template
• Lead qualification script
• FAQ response templates
• Appointment booking script
• After-hours script

Page 12-14: Step 4 - The "Set & Forget" Framework
─────────────────────────────
• 5-step automation implementation process
• Prioritization matrix (impact vs effort)
• Integration checklist
• Maintenance requirements

Page 15-17: Step 5 - ROI Calculator
─────────────────────────────
• Time savings calculation worksheet
• Lead capture improvement estimation
• Cost comparison: AI vs human staff
• Break-even analysis template

Page 18-19: Next Steps
─────────────────────────────
• Quick wins you can implement today
• When to consider professional help
• Invitation to AI Audit

Page 20: About ezmate.ai
─────────────────────────────
• Our approach
• Who we help
• CTA: Book AI Audit
```

### 3.2 Video Series Structure

**Video 1: "Why 73% of AI Projects Fail" (Day 1)**

| Element | Content |
|---------|---------|
| Hook (0:00-0:30) | "Most businesses waste thousands on AI that never works..." |
| Problem (0:30-3:00) | 3 main reasons AI projects fail |
| Agitate (3:00-5:00) | Cost of inaction, competitors winning |
| Tease (5:00-6:00) | "Tomorrow I'll show you our framework that changes everything" |
| CTA (6:00-6:30) | "Reply to this email with your biggest AI challenge" |
| Length | 6-7 minutes |

**Video 2: "The ezmate AI Framework" (Day 3)**

| Element | Content |
|---------|---------|
| Recap (0:00-0:30) | Quick summary of Video 1 |
| Solution (0:30-4:00) | Introduce the 3-tool framework |
| Demo (4:00-7:00) | Quick walkthrough of each tool in action |
| Tease (7:00-8:00) | "Next video: real case study with exact numbers" |
| CTA (8:00-8:30) | "Have questions? Book a quick call" |
| Length | 8-9 minutes |

**Video 3: "Case Study: From 0 to $47K/mo" (Day 5)**

| Element | Content |
|---------|---------|
| Hook (0:00-0:30) | "Let me show you exactly what we did for [Client]..." |
| Before (0:30-2:00) | Client situation before AI |
| Implementation (2:00-5:00) | Step-by-step what we built |
| Results (5:00-7:00) | Specific numbers, ROI, time savings |
| Offer (7:00-9:00) | Godfather Offer introduction |
| CTA (9:00-10:00) | "Book your AI Audit now" |
| Length | 9-10 minutes |

### 3.3 Video Production Specs

| Spec | Requirement |
|------|-------------|
| Format | 1080p MP4 |
| Hosting | Loom (free) or Wistia |
| Style | Talking head + screen share |
| Branding | ezmate.ai lower third |
| Captions | Auto-generated + reviewed |

---

## 4. Email Sequence Design

### 4.1 Sequence Overview

```
Day 0: Immediate → Welcome + PDF Delivery
Day 1: Morning  → Video 1 + Problem Agitation
Day 2: Morning  → Social Proof Email
Day 3: Morning  → Video 2 + Solution
Day 4: Morning  → FAQ / Objection Handling
Day 5: Morning  → Video 3 + Case Study
Day 6: Morning  → Scarcity / Urgency
Day 7: Morning  → Final Offer + Deadline
```

### 4.2 Email Templates

#### Email 0: Welcome + PDF (Immediate)

```
Subject: Your AI Profit Blueprint is here [Download Inside]

Hey {first_name},

Thanks for grabbing the AI Profit Blueprint.

Here's your download link:
[DOWNLOAD THE PDF]

Over the next 7 days, I'll also send you a 3-part video series
that goes deeper into each strategy.

Video 1 arrives tomorrow morning.

Talk soon,
[Founder Name]
ezmate.ai

P.S. If you're eager to get started, you can book a free
AI Audit here: [CALENDLY LINK]
```

#### Email 1: Video 1 (Day 1)

```
Subject: Why 73% of AI projects fail (Video 1)

Hey {first_name},

Quick question:

Have you ever wondered why so many businesses waste money on AI
that never delivers results?

I just recorded a short video explaining the 3 biggest reasons
AI projects fail—and how to avoid them.

[WATCH VIDEO 1 (7 min)]

This is the stuff most AI agencies won't tell you because...
well, it's how they make money.

Watch it before tomorrow's email. It'll make the next video
make a lot more sense.

Talk soon,
[Founder Name]

P.S. Reply and let me know: what's your biggest AI challenge
right now? I read every response.
```

#### Email 2: Social Proof (Day 2)

```
Subject: How Sarah saved 15 hours/week

Hey {first_name},

Quick story:

Sarah runs a real estate agency in Melbourne. 6 months ago,
she was drowning in inquiry emails. Leads were slipping
through the cracks.

Now? Her AI chatbot handles 80% of inquiries automatically.
She books 3X more property viewings. And she actually takes
weekends off.

"I was skeptical at first," she told me. "But the ROI was
obvious within the first month."

Tomorrow I'll show you the exact framework we used.

[WATCH VIDEO 1 IF YOU MISSED IT]

Talk soon,
[Founder Name]
```

#### Email 3: Video 2 (Day 3)

```
Subject: The 3-tool AI framework (Video 2)

Hey {first_name},

Yesterday I mentioned Sarah's results.

Today I'm showing you HOW we did it.

In this 8-minute video, I break down our 3-tool framework:

1. The 24/7 Lead Catcher (AI Chatbot)
2. The Phone Closer (AI Voice Agent)
3. The Time Machine (Workflow Automation)

[WATCH VIDEO 2]

By the end, you'll know exactly which tool makes sense for
your business.

Talk soon,
[Founder Name]

P.S. Have questions? Grab a free AI Audit: [CALENDLY]
```

#### Email 4: FAQ (Day 4)

```
Subject: "But what if AI doesn't work for MY business?"

Hey {first_name},

After sending these videos, I always get the same questions.

Let me answer the top 3:

**"I'm not technical. Can I really do this?"**
You don't need to be. We handle everything. You just tell us
what problems to solve.

**"How long until I see results?"**
Most clients see their first ROI within 7 days. We guarantee it.

**"What if it doesn't work?"**
30-day money-back guarantee. No questions asked. Plus our
90-day ROI guarantee on larger projects.

Tomorrow's video shows you a real case study with exact numbers.

Don't miss it.

[WATCH VIDEO 2 IF YOU MISSED IT]

Talk soon,
[Founder Name]
```

#### Email 5: Video 3 (Day 5)

```
Subject: From 0 to $47K/mo (Case Study Video)

Hey {first_name},

This is the one you've been waiting for.

In today's video, I break down a real case study:

• Before: Overwhelmed owner, missed leads, 60-hour weeks
• After: Automated systems, 3X revenue, 35-hour weeks

I show you exactly what we built and the specific numbers.

[WATCH THE CASE STUDY (10 min)]

After watching, if you're ready to explore what's possible
for YOUR business...

[BOOK A FREE AI AUDIT]

No pressure. Just a conversation about your goals.

Talk soon,
[Founder Name]
```

#### Email 6: Urgency (Day 6)

```
Subject: Quick heads up {first_name}

Hey {first_name},

I wanted to let you know:

We're only taking 3 new clients this month.

(We keep it small so we can deliver real results, not just
collect payments.)

If you've been thinking about hopping on a AI Audit,
now's the time.

[BOOK YOUR SPOT]

Tomorrow I'll send one final email with a special offer for
people who've gone through this training.

Talk soon,
[Founder Name]
```

#### Email 7: Final Offer (Day 7)

```
Subject: Your AI system (decision time)

Hey {first_name},

This is my last email in this series.

Over the past week, you've learned:
• Why most AI projects fail
• The 3-tool framework that actually works
• Real results from real businesses

Now it's decision time.

You can:
A) Keep doing things the way you've been doing them
B) Book a free AI Audit and see what's possible

If you choose B, here's what you get:

→ 60-minute personalized AI Audit (FREE)
→ Custom AI roadmap for your business
→ Honest assessment: is AI right for you?

Plus, if you book in the next 48 hours, I'll include a
FREE AI Audit ($297 value) with any engagement.

[BOOK YOUR AI AUDIT]

Whatever you decide, I hope this training was valuable.

To your success,
[Founder Name]

P.S. Our Godfather Offer: Your AI system live in 7 days
EZmate AI experts handle everything. 30-day money-back guarantee.
Zero risk.
```

### 4.3 Email Technical Specs

| Spec | Requirement |
|------|-------------|
| Platform | ConvertKit or Mailerlite |
| Format | Plain text (P Group style) |
| Send Time | 8:00 AM recipient local time |
| From Name | [Founder First Name] from ezmate |
| Reply-To | Real monitored inbox |

### 4.4 Segmentation Rules

| Trigger | Action |
|---------|--------|
| Clicked Calendly link | Tag: "high-intent", skip to Email 7 |
| Opened all emails | Tag: "engaged" |
| No opens after Day 3 | Add to re-engagement sequence |
| Booked call | Remove from sequence |

---

## 5. Integration Architecture

### 5.1 System Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     DATA FLOW                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [Landing Page Form]                                        │
│         ↓                                                   │
│  [ConvertKit/Mailerlite]                                    │
│         ↓                                                   │
│  [Webhook → n8n]                                            │
│         ↓                                                   │
│  [HubSpot CRM] ←─────────── [Calendly]                     │
│         ↓                          ↑                        │
│  [Email Sequence]                  │                        │
│         ↓                          │                        │
│  [Calendly Booking] ──────────────┘                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Tool Configuration

| Tool | Setup Required |
|------|----------------|
| ConvertKit | Create form, sequence, tags |
| Calendly | AI Audit event type |
| n8n | Webhook → CRM sync workflow |
| HubSpot | Contact properties, pipeline |
| GA4 | Conversion events |

---

## 6. Implementation Checklist

### Phase 1: Landing Page (Week 1)
- [ ] Write landing page copy
- [ ] Design in Carrd/Webflow
- [ ] Set up email capture form
- [ ] Create thank you page
- [ ] Connect analytics
- [ ] Mobile optimization test
- [ ] Speed test (<3s)

### Phase 2: HVCO Content (Week 1-2)
- [ ] Write PDF guide content
- [ ] Design PDF in Canva
- [ ] Script Video 1
- [ ] Script Video 2
- [ ] Script Video 3
- [ ] Record videos
- [ ] Edit and upload to Loom

### Phase 3: Email Sequence (Week 2)
- [ ] Set up ConvertKit account
- [ ] Create email templates
- [ ] Build automation sequence
- [ ] Set up tags and segments
- [ ] Test email delivery
- [ ] Connect Calendly integration

### Phase 4: Integration (Week 2)
- [ ] Set up HubSpot CRM
- [ ] Create Calendly event
- [ ] Build n8n webhook workflow
- [ ] Test end-to-end flow
- [ ] Set up conversion tracking

---

## 7. Next Steps

1. **Approve this Design** → Proceed to Do phase
2. **Start with Landing Page** → Write copy first
3. **Parallel: HVCO Content** → Begin PDF outline

---

> **Document Status**: Draft - Awaiting Approval
> **Next Phase**: `/pdca do ezmate-landing-page` (after approval)

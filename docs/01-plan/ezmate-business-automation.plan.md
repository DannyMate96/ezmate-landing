# ezmate.ai Full Business Automation Plan

> **Version**: 1.0
> **Created**: 2026-02-07
> **Goal**: 리드 수집부터 오퍼 전달까지 전체 비즈니스 프로세스 자동화
> **Human Touch Point**: 오퍼 수락 후 미팅 단계에서만 개입

---

## 1. 전체 자동화 파이프라인 개요

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    ezmate.ai AUTOMATION PIPELINE                        │
│                                                                         │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐          │
│  │ STAGE 1  │───→│ STAGE 2  │───→│ STAGE 3  │───→│ STAGE 4  │          │
│  │ CAPTURE  │    │ NURTURE  │    │ QUALIFY   │    │ OFFER    │          │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘          │
│       ↓               ↓               ↓               ↓                │
│  웹사이트 방문    이북 + 링크      Qualification    AI가 분석 +         │
│  → 이북 신청     자동 발송        Questions        맞춤 오퍼 생성       │
│                                   → AI 분석                             │
│                                                        ↓                │
│                                                  ┌──────────┐          │
│                                                  │ STAGE 5  │          │
│                                                  │ CLOSE    │          │
│                                                  └──────────┘          │
│                                                       ↓                │
│                                                  오퍼 수락 시           │
│                                                  → 미팅 예약            │
│                                                  → 상담 진행            │
│                                                  → 프로젝트 시작        │
│                                                                         │
│  🤖 자동화: Stage 1~4 (100%)                                           │
│  👤 사람: Stage 5 (미팅 + 프로젝트)                                    │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Stage별 상세 설계

---

### STAGE 1: CAPTURE (리드 수집)

**트리거**: 방문자가 웹사이트에서 이북 신청 폼 제출

**자동화 흐름:**
```
방문자 → 웹사이트 폼 제출 (이름, 이메일, 비즈니스 유형)
  ↓
/api/subscribe API 호출
  ↓
Make.com Webhook 트리거
  ↓
3가지 동시 실행:
  ├─ 1) CRM에 리드 저장 (Google Sheets / HubSpot)
  ├─ 2) 이메일 발송 (이북 PDF + 서비스 링크)
  └─ 3) 리드 태깅 (source: website, status: new)
```

**필요한 도구:**
| 도구 | 역할 | 비용 |
|------|------|------|
| Next.js API Route | 폼 수신 | 무료 (Vercel) |
| Make.com | 자동화 오케스트라 | $9/month |
| ConvertKit / Mailerlite | 이메일 발송 + 시퀀스 | 무료 tier |
| Google Sheets / HubSpot | CRM | 무료 |

**이메일 내용:**
```
Subject: Your AI Profit Blueprint is here! [Download Inside]

Hey {first_name},

Here's your AI Profit Blueprint:
📘 [DOWNLOAD PDF]

While you're reading, I want to show you something...

We've helped 500+ businesses implement the exact AI systems
described in this guide. Want to see if it's right for YOUR business?

👉 [TAKE THE FREE AI READINESS ASSESSMENT]
   (Takes 3 minutes. Get a personalized AI recommendation.)

This link is also inside your Blueprint (page XX).

Talk soon,
[Founder Name]
ezmate.ai
```

---

### STAGE 2: NURTURE (자동 이메일 시퀀스)

**트리거**: Stage 1 완료 직후 자동 시작

**7일 이메일 시퀀스:**

| Day | 이메일 | 목적 | CTA |
|-----|--------|------|-----|
| 0 | 이북 + 서비스 링크 | 즉시 가치 전달 | Assessment 링크 |
| 1 | Video 1: AI 기회 | 흥분 유발 | Assessment 링크 |
| 2 | 소셜 프루프 (Sarah 사례) | 신뢰 구축 | Assessment 링크 |
| 3 | Video 2: 3-Tool Framework | 교육 | Assessment 링크 |
| 4 | FAQ + 반론 처리 | 의심 제거 | Assessment 링크 |
| 5 | Video 3: Case Study | 결과 증명 | Assessment 링크 |
| 6 | 긴급성 (3 slots left) | 행동 촉구 | Assessment 링크 |
| 7 | 최종 오퍼 | 결정 유도 | Assessment 링크 |

**핵심**: 모든 이메일에 동일한 Assessment 링크 포함.
이북 내에도 동일 링크 삽입 (Ch7 + Final Offer 페이지).

**자동화 규칙:**
- Assessment 완료 시 → 이메일 시퀀스 중단 → Stage 3으로 이동
- 7일 후에도 미완료 → "Last chance" 이메일 1회 추가
- 이메일 미오픈 3일 → re-engagement 이메일 자동 발송

---

### STAGE 3: QUALIFY (AI 기반 리드 검증)

**트리거**: 고객이 Assessment 링크 클릭

**방식**: 전용 웹페이지 (Typeform / 자체 빌드)에서 상세 질문

**Qualification Questions (15-20개):**

**Section A: 비즈니스 기본 정보**
1. 비즈니스 이름은?
2. 어떤 산업/업종인가요? (드롭다운)
3. 현재 직원 수는? (1-5 / 6-20 / 21-50 / 50+)
4. 연 매출 규모는? ($50K 미만 / $50K-$200K / $200K-$500K / $500K-$1M / $1M+)
5. 웹사이트 URL은?

**Section B: 현재 Pain Points**
6. 현재 가장 큰 비즈니스 과제는? (복수 선택)
   - 리드 대응 속도가 느림
   - 전화 응대를 놓침
   - 반복 업무에 시간 소모
   - 고객 follow-up 놓침
   - 예약 노쇼가 많음
   - 야간/주말 문의 처리 불가
   - 기타 (직접 입력)
7. 하루에 고객 문의가 몇 건 정도 들어오나요?
8. 현재 문의 응답 시간은 평균 얼마인가요?
9. 주당 몇 시간을 반복 업무에 쓰고 있나요?

**Section C: AI 도입 준비도**
10. 이전에 AI 도구를 사용해 본 적 있나요? (없음 / 약간 / 적극 사용 중)
11. 현재 사용 중인 도구는? (CRM, 이메일 도구, 예약 시스템 등)
12. AI로 가장 먼저 해결하고 싶은 것은? (자유 입력)
13. 예산 범위는? ($500-$1K / $1K-$3K / $3K-$5K / $5K+ / 모르겠다)

**Section D: 의사결정 관련**
14. 이 결정을 내리는 사람은 본인인가요?
15. AI 시스템을 얼마나 빨리 도입하고 싶으신가요? (즉시 / 1개월 내 / 3개월 내 / 탐색 중)

**자동화 흐름:**
```
고객이 Assessment 완료
  ↓
Make.com이 응답 데이터 수집
  ↓
Claude API로 데이터 전송 + 분석 요청
  ↓
AI가 리드 분석:
  ├─ Lead Score (1-100) 산출
  ├─ 적합한 서비스 패키지 추천
  ├─ 예상 ROI 계산
  ├─ 맞춤 오퍼 문구 생성
  └─ 리드 등급 분류:
      ├─ 🔥 HOT (Score 70+): 즉시 맞춤 오퍼 발송
      ├─ 🟡 WARM (Score 40-69): 추가 너처링 후 오퍼
      └─ 🔵 COLD (Score 1-39): 장기 너처링 시퀀스
```

**AI 분석 프롬프트 (Claude API):**
```
You are a sales qualification AI for ezmate.ai, an AI automation agency.

Analyze this lead's assessment responses and provide:

1. LEAD SCORE (1-100) based on:
   - Business size and revenue (higher = better)
   - Pain point urgency (more pain points = higher score)
   - Budget alignment (higher budget = higher score)
   - Decision timeline (sooner = higher score)
   - Decision authority (yes = higher score)

2. RECOMMENDED PACKAGE:
   - Starter ($X): Chatbot only
   - Growth ($X): Chatbot + Voice AI
   - Scale ($X): Chatbot + Voice AI + Full Automation

3. ESTIMATED ROI:
   - Based on their hours/week on repetitive tasks
   - Based on their inquiry volume and response time
   - Calculate time savings and lead capture improvement

4. PERSONALIZED OFFER MESSAGE:
   - Reference their specific pain points
   - Use their business name and industry
   - Include specific ROI projections for THEIR business
   - Include the Godfather Offer (7-day delivery, 30-day money-back, 90-day ROI guarantee)

Lead Assessment Data:
{assessment_responses}
```

---

### STAGE 4: OFFER (AI 맞춤 오퍼 발송)

**트리거**: Stage 3 AI 분석 완료

**🔥 HOT Lead (Score 70+) — 즉시 오퍼:**

```
Make.com이 Claude API 분석 결과 수신
  ↓
AI가 생성한 맞춤 오퍼 이메일 자동 발송
  ↓
동시에:
  ├─ CRM 업데이트 (status: qualified, score: XX)
  ├─ Slack 알림 (파운더에게 "🔥 Hot lead!" 알림)
  └─ 48시간 후 follow-up 이메일 예약
```

**맞춤 오퍼 이메일 (AI 생성):**
```
Subject: {first_name}, here's your personalized AI plan for {business_name}

Hey {first_name},

Thanks for completing the AI Readiness Assessment!

I've analyzed your responses and here's what I found:

📊 YOUR AI OPPORTUNITY:
- You're spending approximately {hours}/week on tasks AI can handle
- At your current rate, that's ${amount}/year in recoverable time
- With AI, you could capture an estimated {X} more leads per month

🎯 RECOMMENDED SOLUTION FOR {business_name}:
{AI-generated recommendation based on their specific pain points}

Package: {recommended_package}
Investment: ${price}/month
Estimated ROI: {X}% within 90 days

🛡️ OUR GUARANTEE:
- Live in 7 days or we build it free
- 30-day money-back, no questions asked
- 90-day ROI guarantee

Ready to move forward?

✅ [ACCEPT THIS OFFER] → 미팅 예약 페이지로 이동
❌ [I HAVE QUESTIONS] → FAQ 페이지 또는 이메일 회신

This offer is valid for 7 days.

To your success,
[Founder Name]
ezmate.ai
```

**🟡 WARM Lead (Score 40-69) — 추가 너처링:**
```
3일간 추가 이메일 시퀀스:
  Day 1: 맞춤 케이스 스터디 (같은 산업군)
  Day 2: ROI 상세 분석 결과
  Day 3: 한정 오퍼 (urgency)
  → 이후 오퍼 발송
```

**🔵 COLD Lead (Score 1-39) — 장기 너처링:**
```
주 1회 뉴스레터 자동 발송:
  - AI 팁, 케이스 스터디, 업계 뉴스
  - 매번 Assessment 재참여 CTA 포함
  - 3개월 후 자동 재평가
```

---

### STAGE 5: CLOSE (미팅 + 계약)

**트리거**: 고객이 오퍼 이메일에서 [ACCEPT THIS OFFER] 클릭

**흐름:**
```
고객이 "Accept" 클릭
  ↓
Calendly 미팅 예약 페이지로 이동
  ↓
미팅 예약 완료
  ↓
자동 실행:
  ├─ 확인 이메일 발송 (미팅 시간, 준비 사항)
  ├─ CRM 업데이트 (status: meeting_booked)
  ├─ 파운더 캘린더에 자동 추가
  ├─ 파운더에게 Slack 알림 + 리드 분석 요약 전달
  └─ 24시간 전 리마인더 자동 발송 (양쪽 모두)
```

**미팅 전 파운더가 받는 자동 브리핑:**
```
🔔 MEETING BRIEFING: {business_name}

Lead Score: {score}/100
Assessment Summary:
- Industry: {industry}
- Size: {employees} employees
- Revenue: {revenue_range}
- Main Pain Points: {pain_points}
- Current Tools: {current_tools}
- Budget: {budget_range}
- Timeline: {timeline}
- AI Experience: {ai_experience}

Recommended Package: {package}
Estimated ROI: {roi}
AI-Generated Talking Points:
1. {talking_point_1}
2. {talking_point_2}
3. {talking_point_3}

Assessment 원본: [링크]
```

**👤 이 단계부터 사람이 개입:**
- 파운더가 미팅 진행 (30분 AI Audit)
- 최종 서비스 범위 확정
- 계약서 발송 (이것도 자동화 가능: PandaDoc / DocuSign)
- 결제 처리
- 프로젝트 킥오프

---

## 3. 기술 아키텍처

```
┌─────────────────────────────────────────────────────────────────┐
│                    TECH STACK                                    │
│                                                                  │
│  FRONTEND                                                        │
│  ├─ Landing Page (Next.js / Vercel) ──── 이북 신청 폼           │
│  ├─ Assessment Page (Next.js or Typeform) ── Qualification      │
│  └─ Offer Page (Next.js) ──── Accept/Decline                    │
│                                                                  │
│  AUTOMATION ENGINE                                               │
│  └─ Make.com                                                     │
│     ├─ Scenario 1: 이북 신청 → 이메일 + CRM                    │
│     ├─ Scenario 2: Assessment 완료 → AI 분석 → 오퍼             │
│     ├─ Scenario 3: 오퍼 수락 → 미팅 예약                        │
│     ├─ Scenario 4: 이메일 시퀀스 트리거                          │
│     └─ Scenario 5: Re-engagement + 장기 너처링                   │
│                                                                  │
│  AI ENGINE                                                       │
│  └─ Claude API (Anthropic)                                       │
│     ├─ Lead 분석 + 스코어링                                      │
│     ├─ 맞춤 오퍼 문구 생성                                       │
│     ├─ ROI 계산                                                   │
│     └─ 미팅 브리핑 생성                                          │
│                                                                  │
│  EMAIL                                                           │
│  └─ ConvertKit / Mailerlite                                      │
│     ├─ 이북 전달                                                  │
│     ├─ 7일 너처링 시퀀스                                         │
│     ├─ 맞춤 오퍼 이메일                                          │
│     └─ 장기 뉴스레터                                             │
│                                                                  │
│  CRM                                                             │
│  └─ Google Sheets → HubSpot (스케일업 시)                        │
│     ├─ 리드 데이터                                                │
│     ├─ Assessment 응답                                           │
│     ├─ Lead Score + 등급                                         │
│     ├─ 오퍼 상태                                                  │
│     └─ 미팅 기록                                                  │
│                                                                  │
│  SCHEDULING                                                      │
│  └─ Calendly                                                     │
│     ├─ AI Audit 예약                                        │
│     └─ 자동 리마인더                                              │
│                                                                  │
│  NOTIFICATIONS                                                   │
│  └─ Slack (파운더 알림)                                          │
│     ├─ 새 리드 알림                                               │
│     ├─ 🔥 Hot lead 알림                                          │
│     ├─ 오퍼 수락 알림                                             │
│     └─ 미팅 브리핑                                                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. 자동화 vs 수동 업무 분류

| 업무 | 자동화 | 수동 | 도구 |
|------|:------:|:----:|------|
| 리드 수집 (이북 신청) | ✅ | | Next.js + Make.com |
| 이북 + 서비스 링크 발송 | ✅ | | ConvertKit + Make.com |
| 7일 이메일 시퀀스 | ✅ | | ConvertKit |
| Assessment 질문 수집 | ✅ | | Typeform / Next.js |
| 리드 분석 + 스코어링 | ✅ | | Claude API + Make.com |
| 맞춤 오퍼 생성 | ✅ | | Claude API |
| 오퍼 이메일 발송 | ✅ | | Make.com + ConvertKit |
| Follow-up 이메일 | ✅ | | ConvertKit |
| CRM 업데이트 | ✅ | | Make.com |
| Slack 알림 | ✅ | | Make.com |
| 미팅 예약 | ✅ | | Calendly |
| 미팅 리마인더 | ✅ | | Calendly |
| 미팅 브리핑 생성 | ✅ | | Claude API + Make.com |
| **실제 미팅 진행** | | **✅** | Zoom / Google Meet |
| **서비스 범위 확정** | | **✅** | 사람 판단 |
| **계약서 발송** | ✅ (반자동) | | PandaDoc / DocuSign |
| **결제 처리** | ✅ | | Stripe |
| **프로젝트 진행** | | **✅** | 사람 작업 |

**자동화 비율: ~85% (18개 중 15개 자동화)**

---

## 5. 필요 개발 항목

### Phase 1: 즉시 구축 가능 (Week 1-2)

| # | 항목 | 설명 | 도구 |
|---|------|------|------|
| 1 | 이메일 서비스 연동 | /api/subscribe → ConvertKit/Mailerlite 실제 연결 | Make.com |
| 2 | 이북 PDF 제작 | AI Profit Blueprint 컨텐츠 작성 + 디자인 | Canva |
| 3 | 이메일 시퀀스 설정 | 7일 시퀀스 + Assessment CTA | ConvertKit |
| 4 | CRM 설정 | Google Sheets 리드 트래킹 시트 | Google Sheets |

### Phase 2: 핵심 자동화 (Week 2-3)

| # | 항목 | 설명 | 도구 |
|---|------|------|------|
| 5 | Assessment 페이지 제작 | 15-20개 Qualification Questions | Typeform 또는 Next.js |
| 6 | Make.com 시나리오 구축 | 이북 → Assessment → AI 분석 파이프라인 | Make.com |
| 7 | Claude API 연동 | 리드 분석 + 오퍼 생성 자동화 | Claude API + Make.com |
| 8 | 오퍼 이메일 템플릿 | AI 생성 맞춤 오퍼 발송 | ConvertKit + Make.com |

### Phase 3: 클로징 자동화 (Week 3-4)

| # | 항목 | 설명 | 도구 |
|---|------|------|------|
| 9 | Calendly 설정 | AI Audit 이벤트 + 자동 리마인더 | Calendly |
| 10 | Slack 알림 설정 | Hot lead / 오퍼 수락 / 미팅 브리핑 | Make.com + Slack |
| 11 | 미팅 브리핑 자동화 | Claude API로 미팅 전 분석 요약 | Claude API + Make.com |
| 12 | Follow-up 자동화 | 오퍼 미응답 / 미팅 후 follow-up | ConvertKit + Make.com |

### Phase 4: 최적화 (Week 4+)

| # | 항목 | 설명 | 도구 |
|---|------|------|------|
| 13 | A/B 테스트 | 이메일 제목, 오퍼 문구 최적화 | ConvertKit |
| 14 | 리드 스코어링 튜닝 | AI 분석 정확도 향상 | Claude API 프롬프트 |
| 15 | 대시보드 구축 | 전환율, ROI 실시간 모니터링 | Google Sheets / Notion |
| 16 | 계약 자동화 | PandaDoc 연동 | PandaDoc + Make.com |

---

## 6. 월간 운영 비용 예상

| 도구 | 비용 | 비고 |
|------|------|------|
| Vercel (호스팅) | $0 | Hobby plan |
| Make.com | $9/month | Core plan (10,000 ops) |
| ConvertKit | $0-$29/month | Free up to 1,000 subscribers |
| Claude API | $10-$50/month | 사용량 기반 |
| Calendly | $0 | Free plan |
| Google Sheets | $0 | CRM |
| Slack | $0 | Free plan |
| Typeform | $0-$25/month | Free up to 10 responses/month |
| **Total** | **$19-$113/month** | 스케일에 따라 변동 |

---

## 7. KPI 및 모니터링

| Stage | KPI | 목표 |
|-------|-----|------|
| Stage 1 (Capture) | 이북 다운로드 전환율 | >25% |
| Stage 2 (Nurture) | 이메일 오픈율 | >35% |
| Stage 2 (Nurture) | 이메일 클릭율 | >5% |
| Stage 3 (Qualify) | Assessment 완료율 | >40% of leads |
| Stage 3 (Qualify) | Hot Lead 비율 | >20% of qualified |
| Stage 4 (Offer) | 오퍼 수락율 | >15% of offers sent |
| Stage 5 (Close) | 미팅 → 계약 전환율 | >30% |
| Overall | 방문자 → 고객 전환율 | >2% |

---

## 8. 실행 우선순위

```
지금 바로 시작 (이번 주)
  ├─ 1. 이북 PDF 컨텐츠 작성
  ├─ 2. ConvertKit/Mailerlite 계정 설정
  └─ 3. /api/subscribe → 이메일 서비스 연결

다음 주
  ├─ 4. 7일 이메일 시퀀스 작성 + 설정
  ├─ 5. Assessment 페이지 제작
  └─ 6. Make.com 기본 시나리오 구축

3주차
  ├─ 7. Claude API 리드 분석 연동
  ├─ 8. 오퍼 자동 생성 + 발송
  └─ 9. Calendly + Slack 설정

4주차
  ├─ 10. 전체 파이프라인 테스트
  ├─ 11. A/B 테스트 시작
  └─ 12. 첫 트래픽 유입 시작
```

---

> **Status**: Draft - Awaiting Approval
> **Next Step**: 이북 컨텐츠 작성 + 이메일 서비스 설정

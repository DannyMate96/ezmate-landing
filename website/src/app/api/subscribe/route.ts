import { NextResponse } from 'next/server'

const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, firstName, businessType } = body

    if (!email || !firstName) {
      return NextResponse.json(
        { error: 'Email and first name are required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.MAILERLITE_API_KEY
    if (!apiKey) {
      console.error('MAILERLITE_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Add subscriber to Mailerlite
    const response = await fetch(`${MAILERLITE_API_URL}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          name: firstName,
          company: businessType || '',
        },
      }),
    })

    const data = await response.json().catch(() => null)

    // 200 = created, 201 = created, 422 = already exists (treat as success)
    if (response.ok || response.status === 422) {
      return NextResponse.json({ success: true })
    }

    console.error('Mailerlite error:', response.status, data)
    return NextResponse.json(
      { error: 'Failed to subscribe', detail: data?.message || 'Unknown error' },
      { status: 500 }
    )
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

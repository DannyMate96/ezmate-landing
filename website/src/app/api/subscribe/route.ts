import { NextResponse } from 'next/server'

const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api'

export async function POST(request: Request) {
  const apiKey = process.env.MAILERLITE_API_KEY

  try {
    const body = await request.json()
    const { email, firstName, businessType } = body

    if (!email || !firstName) {
      return NextResponse.json(
        { error: 'Email and first name are required' },
        { status: 400 }
      )
    }

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured', debug: 'API key missing' },
        { status: 500 }
      )
    }

    // Add subscriber to Mailerlite
    const mlResponse = await fetch(`${MAILERLITE_API_URL}/subscribers`, {
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

    const data = await mlResponse.json().catch(() => null)

    // 200 = created, 201 = created, 422 = already exists (treat as success)
    if (mlResponse.ok || mlResponse.status === 422) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: 'Failed to subscribe', status: mlResponse.status, detail: data },
      { status: 500 }
    )
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Internal server error', debug: message, hasKey: !!apiKey },
      { status: 500 }
    )
  }
}

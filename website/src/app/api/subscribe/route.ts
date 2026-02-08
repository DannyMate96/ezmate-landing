import { NextResponse } from 'next/server'

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
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

    if (!MAILERLITE_API_KEY) {
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
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          name: firstName,
          last_name: '',
          company: businessType || '',
        },
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Mailerlite error:', error)

      // If subscriber already exists, still return success
      if (response.status === 422) {
        return NextResponse.json({ success: true, existing: true })
      }

      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

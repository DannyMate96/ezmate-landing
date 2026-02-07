import { NextResponse } from 'next/server'

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

    // TODO: Replace with your actual email service integration
    // Example integrations:
    //
    // ConvertKit:
    // await fetch('https://api.convertkit.com/v3/forms/FORM_ID/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     api_key: process.env.CONVERTKIT_API_KEY,
    //     email,
    //     first_name: firstName,
    //     fields: { business_type: businessType },
    //   }),
    // })
    //
    // Mailerlite:
    // await fetch('https://connect.mailerlite.com/api/subscribers', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     email,
    //     fields: { name: firstName, business_type: businessType },
    //     groups: ['YOUR_GROUP_ID'],
    //   }),
    // })

    console.log('New lead captured:', { email, firstName, businessType })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

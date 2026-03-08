import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory store for demo; in production use a DB or Resend/Mailchimp
// For Resend: npm install resend, add RESEND_API_KEY to .env.local
export async function POST(req: NextRequest) {
  const { email, niche } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Неверный email' }, { status: 400 })
  }

  // ── RESEND INTEGRATION (раскомментируй после npm install resend) ──
  // const { Resend } = require('resend')
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.contacts.create({
  //   email,
  //   firstName: '',
  //   unsubscribed: false,
  //   audienceId: process.env.RESEND_AUDIENCE_ID!,
  // })
  // Отправить приветственное письмо:
  // await resend.emails.send({
  //   from: 'БлогерКит <hi@blogerkit.ru>',
  //   to: email,
  //   subject: 'Добро пожаловать в БлогерКит!',
  //   html: `<h1>Привет!</h1><p>Ты подписался на еженедельные советы для блогеров ниши: ${niche}.</p>`,
  // })

  // Заглушка пока нет Resend:
  console.log(`New subscriber: ${email}, niche: ${niche}`)

  return NextResponse.json({ ok: true })
}

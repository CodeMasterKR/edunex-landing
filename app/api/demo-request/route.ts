import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { firstName, phone, centerName } = await req.json();

  if (!firstName || !phone || !centerName) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const token   = process.env.TELEGRAM_BOT_TOKEN!;
  const chat_id = process.env.TELEGRAM_CHAT_ID!;

  const text = `
🎓 *Yangi demo so'rovi!*

👤 *Ism:* ${firstName}
📞 *Telefon:* ${phone}
🏫 *Markaz:* ${centerName}

⏰ ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}
  `.trim();

  const tgRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id,
        text,
        parse_mode: 'Markdown',
      }),
    }
  );

  if (!tgRes.ok) {
    return NextResponse.json({ error: 'Telegram error' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
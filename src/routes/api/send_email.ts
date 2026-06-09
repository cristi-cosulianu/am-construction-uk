// src/routes/api/send-email.ts
import { createAPIFileRoute } from '@tanstack/start/api'

export const APIRoute = createAPIFileRoute('/api/send-email')({
  POST: async ({ request, env }) => {
    const { to, subject, message } = await request.json()
    
    try {
      // Cloudflare Email Service binding
      await env.SEND_EMAIL.send({
        to: [{ email: to }],
        from: { email: `contact@am-prime-construction.co.uk`, name: 'AM Construction' },
        subject: subject,
        text: message,
        html: `<p>${message}</p>`
      })
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 })
    }
  }
})
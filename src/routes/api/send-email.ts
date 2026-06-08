import { createAPIFileRoute } from '@tanstack/start/api'

export const APIRoute = createAPIFileRoute('/api/send-email')({
  POST: async ({ request, env }) => {
    try {
      const { name, email, phone, message } = await request.json()
      
      // For now, just log the message (since Email Service isn't fully configured)
      console.log('Contact form submission:', { name, email, phone, message })
      
      // You can replace this with actual email sending later
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Message received! We will contact you soon.' 
      }), {
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (error) {
      console.error('Error processing contact form:', error)
      return new Response(JSON.stringify({ 
        error: 'Failed to send message' 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      })
    }
  }
})
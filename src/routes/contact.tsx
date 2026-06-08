import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactComponent,
})

function ContactComponent() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent. We will contact you soon.' 
        })
        e.currentTarget.reset()
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or call us directly.' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      {status && (
        <div className={`p-4 mb-4 rounded ${
          status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {status.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name *</label>
          <input 
            type="text" 
            name="name" 
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email *</label>
          <input 
            type="email" 
            name="email" 
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone</label>
          <input 
            type="tel" 
            name="phone"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message *</label>
          <textarea 
            name="message" 
            rows={5}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
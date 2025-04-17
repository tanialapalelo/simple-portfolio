'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg"
        rows={5}
        required
      ></textarea>
      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
      >
        Send
      </button>
      {status && <p className="text-sm text-center">{status}</p>}
    </form>
  );
};

export default ContactForm;

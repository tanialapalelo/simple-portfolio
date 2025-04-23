"use client"

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaValue) {
      toast.error("Please verify you're not a robot.");
      console.error("Please verify you're not a robot.");
      return;
    }

    setIsSubmitting(true);
    console.log("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaValue }),
      });

      if (res.ok) {
        toast.success("Message sent!");
        console.log("Message sent!");
        
        setFormData({ name: "", email: "", message: "" });
        setRecaptchaValue(null);
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Error:", res.statusText);
        
      }
    } catch (err) {
      toast.error("Failed to send message. Please try again later.");
      console.error("Error:", err);
    } finally {
      setIsSubmitting(false);
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

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        onChange={handleRecaptchaChange}
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;

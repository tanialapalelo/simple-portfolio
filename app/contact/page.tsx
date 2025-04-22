import ContactForm from '@/components/ContactForm';
import SocialMediaLinks from '@/components/SocialMediaLinks';

export default function ContactPage() {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto text-center space-y-20">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-lg mb-10">Have a project or collaboration in mind? Let’s talk!</p>
      <ContactForm />
      <SocialMediaLinks />
    </main>
  );
}

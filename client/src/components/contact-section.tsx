import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { Profile } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { data: profile } = useQuery<Profile>({
    queryKey: ['/api/profile'],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form data
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const formatContactLink = (type: 'linkedin' | 'whatsapp' | 'phone', value?: string | null) => {
    if (!value) return '#';
    
    switch (type) {
      case 'linkedin':
        return value.startsWith('http') ? value : `https://linkedin.com/in/${value}`;
      case 'whatsapp':
        const cleanNumber = value.replace(/\D/g, '');
        return `https://wa.me/${cleanNumber}`;
      case 'phone':
        return `tel:${value}`;
      default:
        return '#';
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-dev-slate mb-4">Connect with Dev Pulse</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            Ready to collaborate on innovative solutions? Whether you're looking for engineering-focused software development, technical consulting, or want to discuss how traditional engineering can evolve through technology, I'm excited to connect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a 
              href={formatContactLink('linkedin', profile?.linkedinUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-50 p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-linkedin-in text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg text-dev-slate mb-2">LinkedIn</h3>
              <p className="text-slate-600">Professional networking</p>
            </a>

            <a 
              href={formatContactLink('whatsapp', profile?.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-50 p-8 rounded-2xl hover:bg-green-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-whatsapp text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg text-dev-slate mb-2">WhatsApp</h3>
              <p className="text-slate-600">Quick messaging</p>
            </a>

            <a 
              href={formatContactLink('phone', profile?.phoneNumber)}
              className="group bg-slate-50 p-8 rounded-2xl hover:bg-dev-cyan/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-dev-cyan rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-lg text-dev-slate mb-2">Phone Call</h3>
              <p className="text-slate-600">Direct conversation</p>
            </a>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-dev-slate mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-dev-blue focus:ring-2 focus:ring-dev-blue/20 outline-none transition-colors"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-dev-blue focus:ring-2 focus:ring-dev-blue/20 outline-none transition-colors"
                />
              </div>
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-dev-blue focus:ring-2 focus:ring-dev-blue/20 outline-none transition-colors"
              />
              <textarea 
                rows={5} 
                name="message"
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-dev-blue focus:ring-2 focus:ring-dev-blue/20 outline-none transition-colors resize-none"
              />
              <button 
                type="submit"
                className="w-full bg-dev-blue text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { Profile } from "@shared/schema";
import { Mail, MessageSquare, Phone, Linkedin, MapPin, Building, Search, Send, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    console.log('Contact form submitted:', formData);
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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I'm always open to new opportunities, whether it's a collaboration on a life-changing project or a potential job opportunity. 
              Let's build something great together!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">danielntulo@gmail.com</p>
                <Button asChild variant="outline" className="w-full rounded-xl">
                  <a href="mailto:danielntulo@gmail.com">
                    Email Me
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300 border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">083 491 3597</p>
                <Button asChild className="w-full rounded-xl">
                  <a href="https://wa.me/27834913597" target="_blank" rel="noopener noreferrer">
                    Send Message
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-2">Phone Call</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Direct conversation</p>
                <Button asChild variant="outline" className="w-full rounded-xl">
                  <a href="tel:+27834913597">
                    Call Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-slate-900 dark:bg-slate-950 p-10 text-white">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>danielntulo@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>083 491 3597</span>
                  </div>
                </div>

                <div className="mt-12 space-y-4">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Laptop className="w-5 h-5" />
                    <span>Remote Ready</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Building className="w-5 h-5" />
                    <span>On-site Available</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Search className="w-5 h-5" />
                    <span>Actively Job Seeking</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Project Inquiry" className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="How can I help you?" rows={5} className="rounded-xl resize-none" />
                  </div>
                  <Button type="submit" className="w-full rounded-xl py-6 gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

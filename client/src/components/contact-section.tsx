import { useState } from "react";
import { Mail, MessageSquare, Phone, Linkedin, Github, MapPin, Send, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Discuss New Opportunities & Projects
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            I am actively interviewing for full-stack developer and software engineering positions. Reach out directly via WhatsApp, email, or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                  Fastest Response
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">WhatsApp Direct</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-mono">+27 83 491 3597</p>
              </div>
              <Button
                asChild
                size="sm"
                className="rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shrink-0"
              >
                <a href="https://wa.me/27834913597" target="_blank" rel="noopener noreferrer">
                  Chat Now
                </a>
              </Button>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  Direct Email
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">danielntulo@gmail.com</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Response within 24 hours</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("danielntulo@gmail.com", "email")}
                  className="rounded-xl text-xs h-9 px-2.5 border-slate-300 dark:border-slate-700"
                  title="Copy email address"
                >
                  {copiedField === "email" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shrink-0"
                >
                  <a href="mailto:danielntulo@gmail.com">
                    Send Email
                  </a>
                </Button>
              </div>
            </div>

            {/* Phone & Location */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Phone Call</span>
                  <p className="text-sm font-bold text-slate-900 dark:text-white font-mono mt-0.5">083 491 3597</p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-xl text-xs border-slate-300 dark:border-slate-700"
                >
                  <a href="tel:+27834913597">Call</a>
                </Button>
              </div>

              <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Gauteng, Alberton 1458 · Open to Remote & Relocation</span>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://linkedin.com/in/khensani-ntulo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-500 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/Khensanintulo911"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>GitHub Repos</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Have a job opportunity or technical project? Leave a note and I will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-300">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-emerald-800 dark:text-emerald-400 max-w-sm mx-auto">
                    Thank you for reaching out! I will review your note and respond to your email shortly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setFormSubmitted(false)}
                    className="rounded-xl text-xs mt-2"
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        Your Name
                      </label>
                      <Input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        Email Address
                      </label>
                      <Input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. sarah@company.com"
                        className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Junior Software Developer Opening / Freelance Inquiry"
                      className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <Textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your role, company, or project details..."
                      rows={5}
                      className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 resize-none text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-xl py-5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

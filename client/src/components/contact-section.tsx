import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Loader2, 
  Inbox, 
  ExternalLink,
  ShieldCheck,
  BellRing,
  Clock,
  Sparkles,
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { ContactMessage } from "@shared/schema";

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    emailDispatched?: boolean;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showInboxModal, setShowInboxModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Query all stored messages for the live inbox view
  const { data: messages = [], refetch: refetchMessages } = useQuery<ContactMessage[]>({
    queryKey: ["/api/contact/messages"],
    queryFn: async () => {
      const res = await fetch("/api/contact/messages");
      if (!res.ok) throw new Error("Failed to load messages");
      return res.json();
    },
    enabled: showInboxModal
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // 1. Submit to portfolio backend (stores message and invokes email notification pipeline)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message. Please try again.");
      }

      setLastSubmitted({
        ...formData,
        emailDispatched: result.emailDispatched
      });
      setFormSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      refetchMessages();
    } catch (err: any) {
      console.error("Message send failure:", err);
      setErrorMessage(err.message || "Could not deliver message. Please contact via WhatsApp or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getWhatsAppUrgentLink = () => {
    if (!lastSubmitted) return "https://wa.me/27834913597";
    const text = `Hi Khensani, I just left a note on your portfolio regarding: "${lastSubmitted.subject || 'Opportunity Inquiry'}"\n\nName: ${lastSubmitted.name}\nEmail: ${lastSubmitted.email}\nMessage: ${lastSubmitted.message}`;
    return `https://wa.me/27834913597?text=${encodeURIComponent(text)}`;
  };

  const getMailtoLink = () => {
    if (!lastSubmitted) return "mailto:danielntulo@gmail.com";
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${lastSubmitted.subject || 'Contact from ' + lastSubmitted.name}`);
    const body = encodeURIComponent(`Hi Khensani,\n\n${lastSubmitted.message}\n\nBest regards,\n${lastSubmitted.name}\n${lastSubmitted.email}`);
    return `mailto:danielntulo@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with live notification guarantee */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/50 mb-3">
              <BellRing className="w-3.5 h-3.5" />
              <span>Direct Messaging & Instant Notification</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Let's Discuss New Opportunities & Projects
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              I am actively interviewing for full-stack developer and software engineering positions. Reach out directly via WhatsApp, email, or send a message below with instant inbox delivery.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setShowInboxModal(true);
                refetchMessages();
              }}
              className="rounded-xl text-xs font-medium border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 gap-2 h-9"
            >
              <Inbox className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Portfolio Message Log</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Fastest Response · Instant
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
                <p className="text-xs text-slate-500 dark:text-slate-400">Delivered directly to mobile inbox</p>
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

            {/* Notification Guarantee Note */}
            <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-300">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>How Your Message Is Delivered</span>
              </div>
              <p className="leading-relaxed">
                When you submit the form, it is saved securely to the database and automatically forwarded via email dispatch to <strong className="text-slate-900 dark:text-white">danielntulo@gmail.com</strong> with your reply-to address attached.
              </p>
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

          {/* Right Column: Active Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active & Forwarding
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Have a job opportunity or technical project? Fill out this form and Khensani will receive an instant notification to respond promptly.
              </p>

              {errorMessage && (
                <div className="p-4 rounded-2xl mb-6 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-xs text-red-700 dark:text-red-300 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {formSubmitted && lastSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-300">
                      Message Successfully Sent & Dispatched!
                    </h4>
                    <p className="text-xs text-emerald-800 dark:text-emerald-400 max-w-md mx-auto">
                      Your message was recorded in Khensani's portfolio log and forwarded directly to <strong>danielntulo@gmail.com</strong>.
                    </p>
                  </div>

                  {/* Summary of sent note */}
                  <div className="bg-white/80 dark:bg-slate-900/80 p-4 rounded-xl border border-emerald-200/60 dark:border-emerald-900/50 text-left text-xs space-y-1.5 max-w-md mx-auto">
                    <div className="flex justify-between text-slate-500">
                      <span>Sender:</span>
                      <strong className="text-slate-800 dark:text-slate-200">{lastSubmitted.name} ({lastSubmitted.email})</strong>
                    </div>
                    {lastSubmitted.subject && (
                      <div className="flex justify-between text-slate-500">
                        <span>Subject:</span>
                        <strong className="text-slate-800 dark:text-slate-200">{lastSubmitted.subject}</strong>
                      </div>
                    )}
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 italic">
                      "{lastSubmitted.message}"
                    </div>
                  </div>

                  {/* Fast-Track Actions */}
                  <div className="pt-2 space-y-2 max-w-md mx-auto">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Need an urgent reply? Send directly to phone:
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                      <Button
                        asChild
                        size="sm"
                        className="w-full sm:w-auto rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
                      >
                        <a href={getWhatsAppUrgentLink()} target="_blank" rel="noopener noreferrer">
                          <MessageSquare className="w-3.5 h-3.5" />
                          Send via WhatsApp Too
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto rounded-xl text-xs border-slate-300 dark:border-slate-700"
                      >
                        <a href={getMailtoLink()}>
                          <Mail className="w-3.5 h-3.5 mr-1.5" />
                          Open in Mail App
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-emerald-200/50 dark:border-emerald-900/50">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setFormSubmitted(false)}
                      className="rounded-xl text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                        <span>Your Name</span>
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">*Required</span>
                      </label>
                      <Input
                        required
                        disabled={isSubmitting}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-10"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                        <span>Email Address</span>
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">*Required</span>
                      </label>
                      <Input
                        required
                        disabled={isSubmitting}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. sarah@company.com"
                        className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <Input
                      disabled={isSubmitting}
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Full-Stack Developer Role / Project Consultation"
                      className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-10"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                      <span>Message</span>
                      <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold">*Required</span>
                    </label>
                    <Textarea
                      required
                      disabled={isSubmitting}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your role, company, or project details..."
                      rows={5}
                      className="rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 resize-none text-sm p-3.5"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl py-6 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white gap-2 transition-all cursor-pointer shadow-md shadow-blue-500/10"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Message to Khensani's Inbox...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Direct Message</span>
                        </>
                      )}
                    </Button>
                    <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-2.5">
                      ✓ Instant email alert sent to danielntulo@gmail.com · Logged to portfolio record
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Message Inbox & History Modal for Khensani */}
      <Dialog open={showInboxModal} onOpenChange={setShowInboxModal}>
        <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col p-6 sm:rounded-2xl">
          <DialogHeader className="pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                  <Inbox className="w-5 h-5 text-blue-600" />
                  <span>Portfolio Direct Messages</span>
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-500 mt-0.5">
                  All messages sent through this form are logged here and emailed to danielntulo@gmail.com.
                </DialogDescription>
              </div>
              <div className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-900">
                {messages.length} {messages.length === 1 ? "Message" : "Messages"}
              </div>
            </div>
          </DialogHeader>

          <div className="overflow-y-auto space-y-3 py-4 flex-1 pr-1">
            {messages.length === 0 ? (
              <div className="text-center py-12 px-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                <Mail className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">No Messages Yet</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  When a recruiter or client fills out the "Send a Direct Message" form, their note will appear here and in your email.
                </p>
              </div>
            ) : (
              messages.map((msg) => (
                <div 
                  key={msg.id}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{msg.name}</span>
                      <span className="text-slate-400 font-normal">({msg.email})</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{new Date(msg.createdAt).toLocaleString("en-ZA", { dateStyle: "short", timeStyle: "short" })}</span>
                    </div>
                  </div>

                  {msg.subject && (
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      Subject: {msg.subject}
                    </div>
                  )}

                  <p className="text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-100 dark:border-slate-800 whitespace-pre-wrap leading-relaxed">
                    {msg.message}
                  </p>

                  <div className="flex items-center justify-end gap-2 pt-1">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-lg text-[11px] h-7 px-2.5 gap-1.5"
                    >
                      <a href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject || 'Portfolio Inquiry')}`}>
                        <Mail className="w-3 h-3 text-blue-600" />
                        Reply by Email
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(msg.email, msg.id)}
                      className="rounded-lg text-[11px] h-7 px-2"
                      title="Copy email address"
                    >
                      {copiedField === msg.id ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3 text-slate-500" />
                      )}
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

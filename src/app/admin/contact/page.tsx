"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { ContactInfoData, ContactMessage } from "@/lib/types/portfolio";
import LivePreviewPane from "@/components/admin/LivePreviewPane";
import { Mail, Save, CheckCircle, Inbox, Check } from "lucide-react";

export default function ContactCmsPage() {
  const [contact, setContact] = useState<ContactInfoData | null>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    portfolioService.getContactInfo().then(setContact);
    portfolioService.getMessages().then(setMessages);
  }, []);

  const handleSave = async () => {
    if (!contact) return;
    setSaving(true);
    await portfolioService.updateContactInfo(contact);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const markRead = async (id: string) => {
    const updated = await portfolioService.markMessageRead(id);
    setMessages(updated);
  };

  if (!contact) return null;

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Mail className="w-6 h-6 text-indigo-400" />
            Contact Info & Messages Inbox
          </h1>
          <p className="text-sm text-gray-400 mt-1">Manage contact channels and respond to recruiter messages</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
        >
          {savedSuccess ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
          <span>{saving ? "Saving..." : savedSuccess ? "Saved!" : "Save Contact Info"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info Form */}
        <div className="space-y-4 bg-[#0f1117] p-6 rounded-2xl border border-white/10">
          <h3 className="font-bold text-white text-sm border-b border-white/10 pb-3">Contact Details</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Email</label>
              <input
                type="email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">WhatsApp</label>
              <input
                type="text"
                value={contact.whatsapp}
                onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })}
                className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Location</label>
            <input
              type="text"
              value={contact.location}
              onChange={(e) => setContact({ ...contact, location: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase mb-1">Availability Banner</label>
            <input
              type="text"
              value={contact.availability}
              onChange={(e) => setContact({ ...contact, availability: e.target.value })}
              className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
            />
          </div>
        </div>

        {/* Incoming Messages Inbox */}
        <div className="space-y-4 bg-[#0f1117] p-6 rounded-2xl border border-white/10 max-h-[600px] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Inbox className="w-4 h-4 text-indigo-400" />
              Incoming Visitor Messages ({messages.length})
            </h3>
          </div>

          <div className="space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`p-4 rounded-xl border text-xs space-y-2 ${
                  m.read ? "bg-white/5 border-white/10 opacity-70" : "bg-indigo-950/20 border-indigo-500/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-bold text-white">{m.name} ({m.email})</div>
                  <span className="text-[10px] text-gray-400">{m.createdAt}</span>
                </div>
                <div className="font-semibold text-indigo-300">{m.subject}</div>
                <p className="text-gray-300 leading-relaxed">{m.message}</p>
                {!m.read && (
                  <button
                    onClick={() => markRead(m.id)}
                    className="text-[10px] font-semibold text-emerald-400 hover:underline flex items-center gap-1 pt-1"
                  >
                    <Check className="w-3 h-3" /> Mark as Read
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { portfolioService } from "@/lib/services/portfolioService";
import { CertificateItem } from "@/lib/types/portfolio";
import LivePreviewPane from "@/components/admin/LivePreviewPane";
import { Award, Save, Plus, Trash2, CheckCircle, ExternalLink } from "lucide-react";

export default function CertificatesCmsPage() {
  const [certs, setCerts] = useState<CertificateItem[]>([]);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    portfolioService.getCertificates().then(setCerts);
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await portfolioService.saveCertificates(certs);
    setSaving(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const addCert = () => {
    const newCert: CertificateItem = {
      id: `cert-${Date.now()}`,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "2025",
      credentialId: "AWS-SA-12903",
      credentialUrl: "https://aws.amazon.com/verification",
      category: "Cloud",
      tags: ["AWS", "Cloud Architecture"],
      order: certs.length + 1,
    };
    setCerts([newCert, ...certs]);
  };

  const removeCert = (id: string) => setCerts(certs.filter((c) => c.id !== id));

  const updateCert = (id: string, key: keyof CertificateItem, value: any) => {
    setCerts(certs.map((c) => (c.id === id ? { ...c, [key]: value } : c)));
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <Award className="w-6 h-6 text-indigo-400" />
            Certificates CMS
          </h1>
          <p className="text-sm text-gray-400 mt-1">Manage verified credentials, issuers, credential links, and documents</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={addCert}
            className="py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Certificate</span>
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
          >
            {savedSuccess ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Save className="w-4 h-4" />}
            <span>{saving ? "Saving..." : savedSuccess ? "Saved!" : "Save Changes"}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4 max-h-[700px] overflow-y-auto pr-2">
          {certs.map((cert) => (
            <div key={cert.id} className="p-5 bg-[#0f1117] border border-white/10 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={cert.title}
                  onChange={(e) => updateCert(cert.id, "title", e.target.value)}
                  className="bg-transparent font-bold text-base text-white focus:outline-none focus:underline"
                />
                <button onClick={() => removeCert(cert.id)} className="p-2 text-gray-500 hover:text-red-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase mb-1">Issuer</label>
                  <input
                    type="text"
                    value={cert.issuer}
                    onChange={(e) => updateCert(cert.id, "issuer", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase mb-1">Issue Date</label>
                  <input
                    type="text"
                    value={cert.issueDate}
                    onChange={(e) => updateCert(cert.id, "issueDate", e.target.value)}
                    className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 uppercase mb-1">Credential URL</label>
                <input
                  type="text"
                  value={cert.credentialUrl}
                  onChange={(e) => updateCert(cert.id, "credentialUrl", e.target.value)}
                  className="w-full bg-[#161922] border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                />
              </div>
            </div>
          ))}
        </div>

        <LivePreviewPane title="Certificates Grid">
          <div className="p-4 space-y-3">
            {certs.map((c) => (
              <div key={c.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{c.title}</h4>
                  <p className="text-xs text-gray-400">{c.issuer} • {c.issueDate}</p>
                </div>
                <a href={c.credentialUrl} target="_blank" className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </LivePreviewPane>
      </div>
    </div>
  );
}

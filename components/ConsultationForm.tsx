"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  Building2, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Globe2,
  FileText,
  UserCheck
} from "lucide-react";

interface ConsultationFormProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export default function ConsultationForm({ isOpenModal, onCloseModal }: ConsultationFormProps) {
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("Kenya");
  const [service, setService] = useState("Monitoring & Evaluation (M&E) & Baseline Surveys");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formContent = (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl space-y-6 text-slate-900">
      
      {/* Header Info */}
      <div className="space-y-3 pb-4 border-b border-slate-200">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold">
          <PhoneCall className="w-3.5 h-3.5 text-blue-800" /> Request RFP / Technical Proposal
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900">
          Contact Inter-Act Research Associates
        </h3>
        <p className="text-xs sm:text-sm text-slate-700">
          Partner with IARA for Monitoring & Evaluation, Accessibility Audits, Capacity Building, and Strategic Planning across East Africa.
        </p>

        {/* Official Contact Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 text-slate-700">
            <UserCheck className="w-4 h-4 text-blue-800 shrink-0" />
            <span>Contact Person: <strong className="text-slate-900">Kennedy S. Okumu</strong> (Executive Director)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <PhoneCall className="w-4 h-4 text-blue-800 shrink-0" />
            <span>Cell Phone: <strong className="text-slate-900">0702103653</strong> (+254 702 103 653)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Mail className="w-4 h-4 text-blue-800 shrink-0" />
            <span>Email: <strong className="text-blue-900 font-bold">interactresearchassociates@gmail.com</strong></span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin className="w-4 h-4 text-blue-800 shrink-0" />
            <span>HQ: <strong className="text-slate-900">Unipen Plaza 1st Flr Rm 4, Argwings Kodhek Rd, Nairobi</strong></span>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="p-8 bg-slate-50 rounded-xl border border-blue-200 text-center space-y-4">
          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-900">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">Proposal Request Received</h4>
          <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{contactName}</strong>. Your technical query has been routed to <strong>Kennedy S. Okumu</strong> (Executive Director) and the senior advisory team. We will respond to <strong>{email}</strong> within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              if (onCloseModal) onCloseModal();
            }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs px-6 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            Submit Another Technical Query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-800 mb-1">Organization / Institution Name *</label>
              <input
                required
                type="text"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="e.g. Government Agency / NGO / Development Partner"
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Contact Person Name *</label>
              <input
                required
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Full Name & Title"
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-800 mb-1">Official Email Address *</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="official@organization.org"
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-900"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Cell Phone Number / WhatsApp *</label>
              <input
                required
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+254 / +256 / +255 / +250..."
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-800 mb-1">Target Operational Country *</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-900"
              >
                <option value="Kenya">Kenya 🇰🇪</option>
                <option value="Uganda">Uganda 🇺🇬</option>
                <option value="Tanzania">Tanzania 🇹🇿</option>
                <option value="Rwanda">Rwanda 🇷🇼</option>
                <option value="East Africa Regional">East Africa Regional 🌍</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Required Practice Area *</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-900"
              >
                <option value="Monitoring & Evaluation (M&E) & Baseline Surveys">Monitoring & Evaluation (M&E) & Surveys</option>
                <option value="Disability Mainstreaming & Accessibility Audits">Disability Mainstreaming & Accessibility Audits</option>
                <option value="Capacity Building & Institutional Development">Capacity Building & Institutional Development</option>
                <option value="Project Proposal & Report Writing">Project Proposal & Narrative Report Writing</option>
                <option value="Strategic Planning & Devolved Governance">Strategic Planning & Devolved Governance</option>
                <option value="Environment, Livelihoods & MSME Growth">Environment, Livelihoods & MSME Growth</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-800 mb-1">Project Scope & TOR Summary</label>
            <textarea
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Briefly describe project objectives, target locations, or attach Terms of Reference (TOR)..."
              className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-blue-900"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            {onCloseModal && (
              <button
                type="button"
                onClick={onCloseModal}
                className="px-5 py-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 border border-slate-300"
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-950 text-white font-extrabold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-blue-200" />
              Submit Technical Proposal Request
            </button>
          </div>
        </form>
      )}
    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 text-slate-900 relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {formContent}
      </div>
    </section>
  );
}

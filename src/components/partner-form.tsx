"use client";

import { useState, type FormEvent } from "react";
import {
  Buildings,
  CaretDown,
  ChatCircleText,
  ChatText,
  CheckCircle,
  EnvelopeSimple,
  PaperPlaneRight,
  Phone,
  User,
  UserCircle,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzepjlao";

const enquirerTypes = [
  "Aspiring Apprentice",
  "Current Apprentice",
  "Alumni Apprentice",
  "School / College",
  "Employer / Organisation",
  "Other",
] as const;

const purposes = [
  "Partnerships & Collaboration",
  "Apprenticeship Support",
  "Events & Tickets",
  "Workshops & Education",
  "General Question",
  "Other",
] as const;

const fieldClass =
  "w-full rounded-xl border border-line-brass/30 bg-void py-3 pl-11 pr-4 text-sm text-bone placeholder:text-bone-soft/50 transition-colors duration-fast focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

const selectClass = `${fieldClass} appearance-none pr-10`;

const iconWrapClass =
  "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brass";

export function PartnerForm() {
  const [enquirerType, setEnquirerType] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orgName, setOrgName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");

  const needsOrgName =
    enquirerType === "School / College" || enquirerType === "Employer / Organisation";
  const orgLabel =
    enquirerType === "School / College" ? "School/College Name" : "Organisation Name";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "Your role": enquirerType,
          "What can we help with": purpose,
          "First name": firstName,
          "Last name": lastName,
          Email: email,
          Phone: phone || "Not provided",
          ...(needsOrgName ? { [orgLabel]: orgName } : {}),
          Enquiry: message,
          _subject: `LACE Network enquiry: ${purpose}`,
        }),
      });

      setStatus(res.ok ? "submitted" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div className="rounded-2xl border border-line-brass/30 bg-charcoal p-10 text-center sm:p-14">
        <CheckCircle size={40} className="mx-auto text-gold" aria-hidden="true" />
        <h3 className="mt-5 font-wordmark text-2xl font-bold text-bone">
          Thank you for your enquiry.
        </h3>
        <p className="mt-2 text-sm text-bone-soft">
          We aim to respond within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line-brass/30 bg-charcoal p-6 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="enquirerType" className="text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
            Your role*
          </label>
          <div className="relative mt-2">
            <span className={iconWrapClass}>
              <UserCircle size={18} aria-hidden="true" />
            </span>
            <select
              id="enquirerType"
              required
              value={enquirerType}
              onChange={(e) => setEnquirerType(e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>
                Choose one option...
              </option>
              {enquirerTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <CaretDown
              size={16}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-bone-soft"
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <label htmlFor="purpose" className="text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
            What can we help with?*
          </label>
          <div className="relative mt-2">
            <span className={iconWrapClass}>
              <ChatCircleText size={18} aria-hidden="true" />
            </span>
            <select
              id="purpose"
              required
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className={selectClass}
            >
              <option value="" disabled>
                Choose one option...
              </option>
              {purposes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <CaretDown
              size={16}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-bone-soft"
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
            First Name*
          </label>
          <div className="relative mt-2">
            <span className={iconWrapClass}>
              <User size={18} aria-hidden="true" />
            </span>
            <input
              id="firstName"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name..."
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
            Last Name*
          </label>
          <div className="relative mt-2">
            <span className={iconWrapClass}>
              <User size={18} aria-hidden="true" />
            </span>
            <input
              id="lastName"
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name..."
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
            Email Address*
          </label>
          <div className="relative mt-2">
            <span className={iconWrapClass}>
              <EnvelopeSimple size={18} aria-hidden="true" />
            </span>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
            Phone Number
          </label>
          <div className="relative mt-2">
            <span className={iconWrapClass}>
              <Phone size={18} aria-hidden="true" />
            </span>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number..."
              className={fieldClass}
            />
          </div>
        </div>

        {needsOrgName && (
          <div>
            <label htmlFor="orgName" className="text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
              {orgLabel}*
            </label>
            <div className="relative mt-2">
              <span className={iconWrapClass}>
                <Buildings size={18} aria-hidden="true" />
              </span>
              <input
                id="orgName"
                type="text"
                required
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder={`Enter your ${orgLabel.toLowerCase()}...`}
                className={fieldClass}
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.15em] text-bone-soft">
          Enquiry Details*
        </label>
        <div className="relative mt-2">
          <span className="pointer-events-none absolute left-3.5 top-3.5 text-brass">
            <ChatText size={18} aria-hidden="true" />
          </span>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us a little more about how we can help..."
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-5 flex items-center gap-2 text-sm text-gold-deep">
          <Warning size={18} aria-hidden="true" />
          Something went wrong sending your enquiry. Please try again, or email us directly at contact@lacenetwork.com.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-void transition-colors duration-fast hover:bg-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Submit Form"}
        <PaperPlaneRight size={18} weight="fill" aria-hidden="true" />
      </button>
    </form>
  );
}

"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { CheckCircle, PaperPlaneRight, X } from "@phosphor-icons/react/dist/ssr";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mljrpqbn";
const STORAGE_KEY = "lace-newsletter-dismissed";

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const cardRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    const focusable = cardRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        dismiss();
        return;
      }
      if (e.key !== "Tab" || !focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function dismiss() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  }

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
          Type: "Newsletter signup",
          "First name": firstName,
          "Last name": lastName,
          Email: email,
          _subject: "LACE Network newsletter signup",
        }),
      });

      if (res.ok) {
        setStatus("submitted");
        localStorage.setItem(STORAGE_KEY, "1");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-void/80 px-6 backdrop-blur-sm transition-opacity duration-base ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-heading"
        className={`relative w-full max-w-md rounded-2xl border border-line-brass/30 bg-charcoal p-8 text-center shadow-2xl transition-all duration-base sm:p-10 ${
          visible ? "translate-y-0 scale-100" : "translate-y-4 scale-95"
        }`}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          tabIndex={visible ? 0 : -1}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-bone-soft transition-colors duration-fast hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {status === "submitted" ? (
          <>
            <CheckCircle size={40} className="mx-auto text-gold" aria-hidden="true" />
            <h3 id="newsletter-heading" className="mt-5 font-wordmark text-2xl font-bold text-bone">
              You&apos;re subscribed!
            </h3>
            <p className="mt-2 text-sm text-bone-soft">
              Keep an eye on your inbox for updates from LACE Network.
            </p>
          </>
        ) : (
          <>
            <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full border border-brass/30 bg-void">
              <Image
                src="/lace-a-mark.png"
                alt=""
                width={128}
                height={128}
                className="h-12 w-12 object-contain"
              />
            </div>
            <h3 id="newsletter-heading" className="mt-6 font-wordmark text-2xl font-bold text-bone">
              Subscribe To Our Newsletter
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-bone-soft">
              Keep up to date with event announcements, exclusive
              opportunities, and the latest from LACE Network.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 text-left">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  aria-label="First name"
                  tabIndex={visible ? 0 : -1}
                  className="w-full rounded-full border border-line-brass/30 bg-void px-4 py-2.5 text-sm text-bone placeholder:text-bone-soft/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  aria-label="Last name"
                  tabIndex={visible ? 0 : -1}
                  className="w-full rounded-full border border-line-brass/30 bg-void px-4 py-2.5 text-sm text-bone placeholder:text-bone-soft/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                tabIndex={visible ? 0 : -1}
                className="mt-2 w-full rounded-full border border-line-brass/30 bg-void px-4 py-2.5 text-sm text-bone placeholder:text-bone-soft/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                tabIndex={visible ? 0 : -1}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-void transition-colors duration-fast hover:bg-gold-deep disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Subscribing..." : "Subscribe"}
                <PaperPlaneRight size={16} weight="fill" aria-hidden="true" />
              </button>

              <p className="mt-3 text-center text-xs leading-relaxed text-bone-soft/70">
                By signing up, you agree to receive marketing emails and SMS
                from LACE Network. You can unsubscribe at any time.
              </p>
            </form>

            {status === "error" && (
              <p className="mt-3 text-xs text-gold-deep">
                Something went wrong. Please try again.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useContent } from "@/context/LocaleContext";
import styles from "./ContactPage.module.scss";

type StepKey = "who" | "email" | "message";

interface Step {
  key: StepKey;
  label: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
}

export default function ContactPage({ isOpen = false }: { isOpen?: boolean }) {
  const content = useContent();
  const f = content.contactForm;

  const [entering, setEntering] = useState(false);
  const [who, setWho] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [reached, setReached] = useState(0);
  const [emailError, setEmailError] = useState("");
  const [generating, setGenerating] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const inputRefs = useRef<(HTMLInputElement | HTMLTextAreaElement | null)[]>([null, null, null]);

  useEffect(() => {
    if (!isOpen) { setEntering(false); return; }
    const id = requestAnimationFrame(() => setEntering(true));
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    const el = inputRefs.current[activeStep];
    if (!el) return;
    const id = setTimeout(() => el.focus(), 350);
    return () => clearTimeout(id);
  }, [activeStep]);

  const steps: Step[] = [
    { key: "who",     label: f.whoLabel,     placeholder: f.whoPlaceholder,     type: "text" },
    { key: "email",   label: f.emailLabel,   placeholder: f.emailPlaceholder,   type: "email" },
    { key: "message", label: f.messageLabel, placeholder: f.messagePlaceholder, type: "textarea" },
  ];

  const values: Record<StepKey, string> = { who, email, message };

  const setValue = (key: StepKey, val: string) => {
    if (key === "who") setWho(val);
    else if (key === "email") setEmail(val);
    else setMessage(val);
  };

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleNext = (i: number) => {
    const val = values[steps[i].key].trim();
    if (!val) return;
    if (steps[i].key === "email") {
      if (!isValidEmail(val)) { setEmailError(f.emailError); return; }
      setEmailError("");
    }
    const next = i + 1;
    if (next > reached) setReached(next);
    setActiveStep(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent, i: number) => {
    const isTextarea = steps[i].type === "textarea";
    if (e.key === "Enter" && !isTextarea) {
      e.preventDefault();
      handleNext(i);
    }
    if (e.key === "Enter" && e.metaKey && isTextarea) {
      e.preventDefault();
      handleNext(i);
    }
  };

  const handleOpen = (i: number) => {
    if (activeStep === i) return;
    setActiveStep(i);
  };

  async function handleGenerate() {
    setGenerating(true);
    setError("");
    try {
      const res = await fetch("/api/generate-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ who, email, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? f.errorGeneral);
      setMessage(data.message);
    } catch (e) {
      setError(e instanceof Error ? e.message : f.errorGeneral);
    } finally {
      setGenerating(false);
    }
  }

  async function handleSend() {
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, who, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? f.errorGeneral);
      setSent(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : f.errorGeneral);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className={`${styles.page} ${entering ? styles.entering : ""}`}>
      <div className={styles.layout}>

        <p className={styles.introText}>{content.contact.introText}</p>

        <div className={styles.form}>
          {steps.map((step, i) => {
            if (i > reached) return null;
            const isActive = activeStep === i;
            const value = values[step.key];
            const isDone = !isActive && value.trim() !== "";

            return (
              <div key={step.key} className={`${styles.step} ${isDone ? styles.stepDone : ""} ${isActive ? styles.stepActive : ""}`}>
                <button
                  className={styles.stepHeader}
                  onClick={() => handleOpen(i)}
                  disabled={isActive}
                  aria-expanded={isActive}
                >
                  <span className={styles.stepLabel}>{step.label}</span>
                  {isDone && (
                    <>
                      <span className={styles.stepPreview}>{value}</span>
                      <span className={styles.stepCheck} aria-hidden>✓</span>
                    </>
                  )}
                </button>

                <div className={`${styles.stepBody} ${!isActive ? styles.stepBodyCollapsed : ""}`}>
                  <div className={styles.stepBodyInner}>
                    {step.type === "textarea" ? (
                      <div className={styles.textareaWrap}>
                        <textarea
                          ref={(el) => { inputRefs.current[i] = el; }}
                          className={`${styles.input} ${styles.textarea}`}
                          placeholder={step.placeholder}
                          value={value}
                          onChange={(e) => setValue(step.key, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, i)}
                          rows={5}
                        />
                        <button
                          className={styles.aiBtn}
                          onClick={handleGenerate}
                          disabled={generating || !who.trim() || !email.trim()}
                          title={f.generateBtn}
                        >
                          {generating ? "..." : "✦ AI"}
                        </button>
                      </div>
                    ) : (
                      <input
                        ref={(el) => { inputRefs.current[i] = el; }}
                        className={`${styles.input} ${step.key === "email" && emailError ? styles.inputError : ""}`}
                        type={step.type}
                        placeholder={step.placeholder}
                        value={value}
                        onChange={(e) => { setValue(step.key, e.target.value); if (step.key === "email") setEmailError(""); }}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                      />
                    )}
                    {step.key === "email" && emailError && (
                      <p className={styles.fieldError}>{emailError}</p>
                    )}
                    <div className={styles.stepActions}>
                      {i < steps.length - 1 ? (
                        <button
                          className={styles.nextBtn}
                          onClick={() => handleNext(i)}
                          disabled={!value.trim()}
                        >
                          {f.nextBtn}
                        </button>
                      ) : (
                        <button
                          className={styles.sendBtn}
                          onClick={handleSend}
                          disabled={!value.trim() || !who.trim() || !email.trim() || sending}
                        >
                          {sending ? f.sendingBtn : f.sendBtn}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {(error || sent) && (
            <div className={styles.feedback}>
              {error && <p className={styles.error}>{error}</p>}
              {sent && <p className={styles.success}>{f.successMsg}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

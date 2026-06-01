"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/context/LocaleContext";
import styles from "./ContactPage.module.scss";

export default function ContactPage({ isOpen = false }: { isOpen?: boolean }) {
  const content = useContent();
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    if (!isOpen) { setEntering(false); return; }
    const id = requestAnimationFrame(() => setEntering(true));
    return () => cancelAnimationFrame(id);
  }, [isOpen]);
  const f = content.contactForm;

  const [email, setEmail] = useState("");
  const [who, setWho] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [generating, setGenerating] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const canGenerate = email.trim() && who.trim() && reason.trim();

  async function handleGenerate() {
    if (!canGenerate) return;
    setGenerating(true);
    setError("");
    try {
      const res = await fetch("/api/generate-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, who, reason }),
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
    if (!message.trim() || !email.trim() || !who.trim()) return;
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
      <div className={styles.columns}>
        {/* Left column — form */}
        <div className={styles.column}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-email">
              {f.emailLabel}
            </label>
            <input
              id="contact-email"
              type="email"
              className={styles.input}
              placeholder={f.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-who">
              {f.whoLabel}
            </label>
            <input
              id="contact-who"
              type="text"
              className={styles.input}
              placeholder={f.whoPlaceholder}
              value={who}
              onChange={(e) => setWho(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-reason">
              {f.reasonLabel}
            </label>
            <textarea
              id="contact-reason"
              className={`${styles.input} ${styles.textarea}`}
              placeholder={f.reasonPlaceholder}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={5}
            />
          </div>

          <button
            className={`${styles.button} ${styles.buttonGenerate}`}
            onClick={handleGenerate}
            disabled={!canGenerate || generating}
          >
            {generating ? f.generatingBtn : f.generateBtn}
          </button>
        </div>

        {/* Right column — preview & send */}
        <div className={styles.column}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-message">
              {f.messageLabel}
            </label>
            <textarea
              id="contact-message"
              className={`${styles.input} ${styles.textarea} ${styles.messageArea}`}
              placeholder={f.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={10}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          {sent ? (
            <p className={styles.success}>{f.successMsg}</p>
          ) : (
            <button
              className={`${styles.button} ${styles.buttonSend}`}
              onClick={handleSend}
              disabled={!message.trim() || !email.trim() || !who.trim() || sending}
            >
              {sending ? f.sendingBtn : f.sendBtn}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

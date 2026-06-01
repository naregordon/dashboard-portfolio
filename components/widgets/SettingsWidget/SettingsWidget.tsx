"use client";

import { useEffect, useState } from "react";
import Widget from "@/components/ui/Widget/Widget";
import { useContent, useLocale } from "@/context/LocaleContext";
import styles from "./SettingsWidget.module.scss";

type Settings = {
  light: boolean;
  accessible: boolean;
};

const DEFAULTS: Settings = { light: false, accessible: false };

function applySettings(s: Settings) {
  document.documentElement.classList.toggle("light", s.light);
  document.documentElement.classList.toggle("accessible", s.accessible);
}

export default function SettingsWidget() {
  const content = useContent();
  const { locale, setLocale } = useLocale();

  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const saved = localStorage.getItem("site-settings");
      if (saved) return JSON.parse(saved) as Settings;
    } catch {}
    return DEFAULTS;
  });

  useEffect(() => {
    applySettings(settings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggle(key: keyof Settings) {
    setSettings((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      localStorage.setItem("site-settings", JSON.stringify(next));
      applySettings(next);
      return next;
    });
  }

  const themeOptions = [
    { value: false, label: "Dark" },
    { value: true, label: "Light" },
  ];

  return (
    <Widget>
      <ul className={styles.list}>
        {/* Theme */}
        <li className={styles.item}>
          <div className={styles.info}>
            <span className={styles.label}>
              {content.ui.settings.lightMode.label}
            </span>
          </div>
          <div
            className={styles.langSwitch}
            role="group"
            aria-label={content.ui.settings.lightMode.label}
          >
            <span
              className={styles.langSlider}
              style={{
                transform: settings.light
                  ? "translateX(100%)"
                  : "translateX(0)",
              }}
            />
            {themeOptions.map(({ value, label }) => (
              <button
                key={label}
                className={`${styles.langOption} ${settings.light === value ? styles.langActive : ""}`}
                onClick={() => settings.light !== value && toggle("light")}
                aria-pressed={settings.light === value}
              >
                {label}
              </button>
            ))}
          </div>
        </li>

        {/* Accessibility */}
        <li className={styles.item}>
          <div className={styles.info}>
            <span className={styles.label}>
              {content.ui.settings.accessible.label}
            </span>
          </div>
          <button
            role="switch"
            aria-checked={settings.accessible}
            aria-label={content.ui.settings.accessible.label}
            className={`${styles.toggle} ${settings.accessible ? styles.on : ""}`}
            onClick={() => toggle("accessible")}
          >
            <span className={styles.thumb} />
          </button>
        </li>

        {/* Language */}
        <li className={styles.item}>
          <div className={styles.info}>
            <span className={styles.label}>
              {content.ui.settings.language.label}
            </span>
          </div>
          <div className={styles.langSwitch} role="group" aria-label="Language">
            <span
              className={styles.langSlider}
              style={{
                transform:
                  locale === "en" ? "translateX(100%)" : "translateX(0)",
              }}
            />
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                className={`${styles.langOption} ${locale === l ? styles.langActive : ""}`}
                onClick={() => setLocale(l)}
                aria-pressed={locale === l}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </li>
      </ul>
    </Widget>
  );
}

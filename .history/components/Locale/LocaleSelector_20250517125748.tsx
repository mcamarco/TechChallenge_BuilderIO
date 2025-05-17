"use client";
import React from "react";
import {builder} from "@builder.io/react"

interface LocaleSelectorProps {
  locale: string; // Current locale
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
}

const localeOptions = [
  { label: "English (US)", value: "en-US" },
  { label: "English (UK)", value: "en-GB" },
  { label: "Spanish (ES)", value: "es-ES" },
];

const LocaleSelector: React.FC<LocaleSelectorProps> = ({
  locale,
  onChange,
}) => {
  // add local change function
  const handleChange=(e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale=e.target.value;
    builder.setUserAttributes({locale:newLocale});
    // window.location.reload()
  }
  return (
    <div>
      <label htmlFor="locale-select" style={{ marginRight: "1em" }}>
        Select Language:
      </label>
      <select
        id="locale-select"
        // value={locale} 
        defaultValue="en-US"
        // onChange={onChange} 
        onchange={handleChange}
        style={{ padding: "0.5em 1em" }}
      >
        {localeOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSelector;
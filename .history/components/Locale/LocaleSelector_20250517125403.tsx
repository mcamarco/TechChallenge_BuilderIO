"use client";
import React from "react";
import {builder} from "@builder.io/react"

interface LocaleSelectorProps {
  locale: string; // Current locale
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Change handler
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
  const handleChange=(e: )
  return (
    <div>
      <label htmlFor="locale-select" style={{ marginRight: "1em" }}>
        Select Language:
      </label>
      <select
        id="locale-select"
        value={locale} // Controlled component
        onChange={onChange} // Triggers parent's handleChange
        // onchange = local change function (setuserattributes)
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
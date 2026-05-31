"use client";

import { useState } from "react";
import { admissionCourseOptions, siteConfig } from "@/lib/site-data";

type FormData = {
  name: string;
  mobile: string;
  course: string;
  city: string;
};

const initial: FormData = { name: "", mobile: "", course: "", city: "" };

export default function AdmissionForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  }

  function validate(): boolean {
    if (!form.name.trim()) {
      setError("Please enter your name.");
      return false;
    }
    if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
      setError("Enter a valid 10-digit mobile number.");
      return false;
    }
    if (!form.course) {
      setError("Please select a course.");
      return false;
    }
    if (!form.city.trim()) {
      setError("Please enter your city.");
      return false;
    }
    return true;
  }

  function buildMessage() {
    return [
      "🎓 *New Admission Inquiry*",
      "",
      `*Name:* ${form.name.trim()}`,
      `*Mobile:* ${form.mobile.trim()}`,
      `*Course:* ${form.course}`,
      `*City:* ${form.city.trim()}`,
      "",
      "Sent via Bright Future Admission website",
    ].join("\n");
  }

  function handleWhatsAppSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const url = `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank");
    setSubmitted(true);
    setForm(initial);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <h3 className="text-lg font-bold text-green-800">Inquiry Sent!</h3>
        <p className="mt-2 text-sm text-green-700">
          Your details were shared on WhatsApp. Our team will contact you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold text-brand-red hover:underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="input-field"
          />
        </Field>

        <Field label="Mobile Number" htmlFor="mobile" required>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="numeric"
            maxLength={10}
            value={form.mobile}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="input-field"
          />
        </Field>
      </div>

      <Field label="Course Interested In" htmlFor="course" required>
        <select
          id="course"
          name="course"
          value={form.course}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">Select a course</option>
          {admissionCourseOptions.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </Field>

      <Field label="City" htmlFor="city" required>
        <input
          id="city"
          name="city"
          type="text"
          value={form.city}
          onChange={handleChange}
          placeholder="Your city or district"
          className="input-field"
        />
      </Field>

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
        >
          Submit via WhatsApp
        </button>
        <a
          href={`tel:+91${siteConfig.primaryPhone}`}
          className="flex flex-1 items-center justify-center rounded-xl border-2 border-brand-navy px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
        >
          Call Instead
        </a>
      </div>

      <p className="text-center text-xs text-muted">
        By submitting, your inquiry opens in WhatsApp — no account needed.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </label>
      {children}
    </div>
  );
}

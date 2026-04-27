"use client";

import { useState } from "react";

const SPECIALTIES = [
  "Family Medicine",
  "Internal Medicine",
  "Cardiology",
  "Orthopedics",
  "Pediatrics",
  "Behavioral Health",
  "Dermatology",
  "Urgent Care",
  "Telehealth",
  "Other",
];

export default function HeroForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: (formData.get("name") as string)?.trim() || "",
      email: (formData.get("email") as string)?.trim() || "",
      phone: (formData.get("phone") as string)?.trim() || "",
      practice: (formData.get("practice") as string)?.trim() || "",
      specialty: (formData.get("specialty") as string) || "",
    };

    // Validate required fields
    const inputs = form.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
      "[required]",
    );
    let valid = true;

    inputs.forEach((inp) => {
      if (!inp.value.trim()) {
        inp.style.borderColor = "#e05270";
        inp.style.boxShadow = "0 0 0 3px rgba(224, 82, 112, .12)";
        valid = false;
        inp.addEventListener(
          "input",
          () => {
            inp.style.borderColor = "";
            inp.style.boxShadow = "";
          },
          { once: true },
        );
      }
    });

    if (!valid) {
      setErrorMessage("Please fill all required fields");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.message || "Something went wrong");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="hero-inline-form" id="heroFormWrap">
        <div
          id="hfSuccess"
          style={{ padding: "8px 0 4px", textAlign: "center" }}
        >
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "17px",
              fontWeight: 800,
              color: "var(--navy)",
              marginBottom: "6px",
            }}
          >
            You're Confirmed! 🎉
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            A billing specialist will call you within{" "}
            <strong style={{ color: "var(--navy)" }}>1 business hour</strong>.
            Check your email for the meeting link.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-inline-form" id="heroFormWrap">
      <div className="hform-label">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2c8d93"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        Book a Free Consultation — Limited Slots This Month
      </div>
      <form id="heroForm" noValidate onSubmit={handleSubmit}>
        <div className="hform-row">
          <input
            className="hform-input"
            type="text"
            id="hf-name"
            name="name"
            placeholder="Full Name"
            required
            autoComplete="name"
          />
          <input
            className="hform-input"
            type="email"
            id="hf-email"
            name="email"
            placeholder="Work Email"
            required
            autoComplete="email"
          />
          <input
            className="hform-input"
            type="tel"
            id="hf-phone"
            name="phone"
            placeholder="Phone Number"
            required
            autoComplete="tel"
          />
        </div>
        <div className="hform-row2">
          <input
            className="hform-input"
            type="text"
            id="hf-practice"
            name="practice"
            placeholder="Practice / Organization Name"
            required
          />
          <select
            className="hform-input"
            id="hf-spec"
            name="specialty"
            required
            defaultValue=""
            style={{
              appearance: "none",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238eabaa' stroke-width='2.5' stroke-linecap='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
              paddingRight: "30px",
              cursor: "pointer",
            }}
          >
            <option value="" disabled>
              Select Specialty
            </option>
            {SPECIALTIES.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div
            style={{
              color: "#e05270",
              fontSize: "12px",
              fontWeight: 600,
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            {errorMessage}
          </div>
        )}

        <button
          className="hform-btn"
          type="submit"
          id="hfBtn"
          disabled={isLoading}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
          </svg>
          <span id="hfBtnTxt">
            {isLoading ? "Booking…" : "Book a Free Consultation"}
          </span>
        </button>
        <div className="hform-note">
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8eabaa"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          100% HIPAA-secure · No contracts · No obligations
        </div>
      </form>
    </div>
  );
}

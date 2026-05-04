"use client";

import { useState, useEffect } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // ESC key & body scroll lock
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Reset form state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      // Optional: reset form on close
      setTimeout(() => {
        setIsSubmitted(false);
        setErrorMessage("");
        setIsLoading(false);
      }, 300);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: (formData.get("name") as string)?.trim() || "",
      email: (formData.get("email") as string)?.trim() || "",
      phone: (formData.get("phone") as string)?.trim() || "",
    };

    // Validate required fields
    const inputs = form.querySelectorAll<HTMLInputElement>("[required]");
    let valid = true;

    inputs.forEach((inp) => {
      if (!inp.value.trim()) {
        inp.style.borderColor = "#e05270";
        inp.style.boxShadow = "0 0 0 3px rgba(224, 82, 112, .12)";
        valid = false;
        inp.addEventListener(
          "input",
          () => {
            inp.style.borderColor = "#e0e0e0";
            inp.style.boxShadow = "none";
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

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={styles.closeBtn}
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isSubmitted ? (
          /* Success State */
          <div style={styles.successWrap}>
            <div style={styles.successTitle}>You're Confirmed! 🎉</div>
            <p style={styles.successText}>
              A billing specialist will call you within{" "}
              <strong style={{ color: "#1a1a2e" }}>1 business hour</strong>.
              <br />
              Check your email for the meeting link.
            </p>
            <button onClick={onClose} style={styles.successBtn}>
              Close
            </button>
          </div>
        ) : (
          /* Form State */
          <>
            <div style={styles.header}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2c8d93"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <h3 style={styles.headerTitle}>Book a Free Consultation</h3>
              <p style={styles.headerSubtitle}>Limited Slots This Month</p>
            </div>

            <form noValidate onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <input
                  style={styles.input}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  autoComplete="name"
                />
              </div>
              <div style={styles.inputGroup}>
                <input
                  style={styles.input}
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  required
                  autoComplete="email"
                />
              </div>
              <div style={styles.inputGroup}>
                <input
                  style={styles.input}
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  autoComplete="tel"
                />
              </div>

              {errorMessage && <div style={styles.error}>{errorMessage}</div>}

              <button
                style={styles.submitBtn}
                type="submit"
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
                <span style={{ marginLeft: "8px" }}>
                  {isLoading ? "Booking…" : "Book a Free Consultation"}
                </span>
              </button>

              <div style={styles.note}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8eabaa"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>100% HIPAA-secure · No contracts · No obligations</span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// Styles Object
const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
    backdropFilter: "blur(4px)",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    padding: "30px",
    width: "100%",
    maxWidth: "480px",
    position: "relative",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#666",
    padding: "5px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    zIndex: 1,
  },
  header: {
    textAlign: "center",
    marginBottom: "24px",
    marginTop: "10px",
  },
  headerTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "20px",
    fontWeight: 800,
    color: "#1a1a2e",
    margin: "12px 0 4px",
  },
  headerSubtitle: {
    fontSize: "13px",
    color: "#666",
    margin: 0,
  },
  inputGroup: {
    marginBottom: "16px",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    border: "2px solid #e0e0e0",
    borderRadius: "10px",
    fontSize: "15px",
    fontFamily: "'Poppins', sans-serif",
    transition: "all 0.3s ease",
    outline: "none",
    boxSizing: "border-box",
  },
  error: {
    color: "#e05270",
    fontSize: "12px",
    fontWeight: 600,
    marginBottom: "10px",
    textAlign: "center",
  },
  submitBtn: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#2c8d93",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    marginTop: "8px",
    fontFamily: "'Poppins', sans-serif",
  },
  note: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginTop: "16px",
    fontSize: "12px",
    color: "#8eabaa",
  },
  successWrap: {
    padding: "40px 20px",
    textAlign: "center",
  },
  successTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "20px",
    fontWeight: 800,
    color: "#1a1a2e",
    marginBottom: "10px",
  },
  successText: {
    fontSize: "14px",
    color: "#666",
    lineHeight: 1.6,
    margin: "10px 0 20px",
  },
  successBtn: {
    padding: "10px 30px",
    backgroundColor: "#2c8d93",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: 600,
    fontFamily: "'Poppins', sans-serif",
  },
};

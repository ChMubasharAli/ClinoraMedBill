import Link from "next/link";

export default function FloatingCallButton() {
  return (
    <div className="float-call" id="floatCall">
      <div className="call-number">
        <div className="call-number-label">Call Us Directly</div>
        <div className="call-number-val">
          <Link href="tel:+18005551234">+1 (800) 555-1234</Link>
        </div>
        <div className="call-available">
          <span>● Online Now</span> · Mon–Fri 8am–7pm EST
        </div>
      </div>
      <div className="call-tooltip">Talk to a billing specialist →</div>
      <Link
        className="call-btn"
        href="tel:+18005551234"
        aria-label="Call ClinoraMedBill"
      >
        <svg
          className="phone-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006 6l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
        </svg>
      </Link>
    </div>
  );
}

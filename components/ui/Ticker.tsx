const TICKER_ITEMS = [
  { value: "98.7%", label: "Clean Claim Rate" },
  { value: "$2.1B+", label: "Revenue Processed" },
  { value: "35%", label: "Average Revenue Increase" },
  { value: "2,400+", label: "Healthcare Providers" },
  { value: "48hr", label: "Onboarding Time" },
  { value: "99.9%", label: "HIPAA Compliance" },
  { value: "4%", label: "Industry-Low Denial Rate" },
];

export default function Ticker() {
  const duplicatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {duplicatedItems.map((item, index) => (
          <span key={index} className="tick-item">
            <strong>{item.value}</strong> {item.label}{" "}
            <span className="tick-sep">///</span>
          </span>
        ))}
      </div>
    </div>
  );
}

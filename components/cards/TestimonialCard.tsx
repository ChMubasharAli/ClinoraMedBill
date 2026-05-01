interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorRole: string;
  authorInitials: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  authorName,
  authorRole,
  authorInitials,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="testi-card">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>
      <div className="card-p">{quote}</div>
      <div className="testi-author">
        <div className="avatar">{authorInitials}</div>
        <div>
          <div className="author-name">{authorName}</div>
          <div className="author-role">{authorRole}</div>
        </div>
      </div>
    </div>
  );
}

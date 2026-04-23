import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-section" id="audit">
      <div className="cta-inner">
        <div>
          <div className="cta-h">
            Stop Leaving Revenue
            <br />
            On The <em>Table.</em>
          </div>
          <p className="cta-sub">
            Get a complimentary billing audit and see exactly how much your
            practice could be recovering. No contracts. No obligations. Just
            clarity.
          </p>
        </div>
        <div className="cta-btns">
          <Link className="btn-cta-w" href="#contact">
            Get My Free Audit →
          </Link>
          <Link className="btn-cta-o" href="#demo">
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>
  );
}

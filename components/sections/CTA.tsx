import Link from "next/link";
interface WhyUsProps {
  onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: WhyUsProps) {
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
          <button onClick={onOpenModal} className="btn-cta-w">
            Get My Free Audit →
          </button>
          <button onClick={onOpenModal} className="btn-cta-o">
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}

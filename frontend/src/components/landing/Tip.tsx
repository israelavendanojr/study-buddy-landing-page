import { Lightbulb } from "lucide-react";
import { Mascot } from "./Mascot";

export const Tip = () => (
  <section className="px-6 py-20 md:py-24 border-t-2 border-foreground bg-paper-shadow/30">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="font-mono-label text-xs font-bold text-primary">A NOTE FROM BOBO</span>
      </div>
      <div className="relative">
        <div className="notebook-card p-7 md:p-10 border-l-[10px] border-l-primary">
          <p className="font-serif-display italic text-2xl md:text-3xl font-bold leading-snug">
            "The pan needs to be hot before the oil goes in. Not warm.{" "}
            <span className="text-primary not-italic font-bold">Hot.</span> You're looking for the
            oil to shimmer and just start smoking at the edges."
          </p>
          <div className="my-6 ink-divider" />
          <span className="font-mono-label text-xs font-bold text-foreground/60">WHY THIS MATTERS</span>
          <p className="mt-2 text-lg text-foreground/85 leading-relaxed">
            A cold pan means no crust. The protein sticks, tears, and steams instead of searing.
            Patience at this step pays off in flavor at every step after.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 max-w-2xl mx-auto">
          <div className="notebook-card-dashed p-4 flex-1 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary border-2 border-foreground flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-primary-foreground" strokeWidth={2.5} fill="currentColor" />
            </div>
            <p className="font-handwritten text-base pl-6">
              <span className="font-bold">* Pro Tip:</span> Use oil with a high smoke point, like
              grapeseed or avocado oil!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

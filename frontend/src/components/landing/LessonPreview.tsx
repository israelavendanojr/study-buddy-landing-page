import { useState } from "react";
import { Check, X, SkipForward } from "lucide-react";
import { Mascot } from "./Mascot";

const options = ["280°F", "212°F", "350°F", "165°F"];
const correct = "280°F";

export const LessonPreview = () => {
  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const reset = () => { setPicked(null); setChecked(false); };

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5">
          <span className="font-mono-label text-xs font-bold text-primary">A TASTE</span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold mt-2 leading-tight">
            Try a real lesson.<br />
            <span className="italic">Right here.</span>
          </h2>
          <p className="mt-5 text-foreground/80 leading-relaxed">
            Every lesson is bite-sized and hands-on. No videos to scrub through. No 800-word headnotes.
            Just the technique, the science, and a quick check that you actually got it.
          </p>
          <div className="mt-6 flex items-end gap-4">
            <Mascot size={90} />
            <div className="speech-bubble text-base mb-2">
              <em>Pick one. I'll wait.</em>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="notebook-card p-5 md:p-7">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono-label text-[11px] font-bold text-foreground/60">LESSON 3 OF 5</span>
              <span className="font-mono-label text-[11px] font-bold text-foreground/60">CHAPTER 1 · THE FOUNDATION</span>
            </div>
            <div className="h-3 border-2 border-foreground rounded-full overflow-hidden bg-background">
              <div className="h-full bg-primary" style={{ width: "60%" }} />
            </div>

            <div className="mt-6 ink-divider" />

            <p className="mt-6 font-handwritten text-base text-foreground/70">
              Complete the sentence with the correct term.
            </p>

            <div className="mt-4 notebook-card-soft p-5 md:p-6">
              <p className="font-serif-display text-2xl md:text-3xl leading-snug">
                The Maillard reaction requires temperatures above{" "}
                <span className={`fill-blank ${checked && picked === correct ? "text-primary" : checked ? "text-destructive" : ""}`}>
                  {picked ?? "_____"}
                </span>
                , which is why wet surfaces prevent browning.
              </p>
            </div>

            <div className="mt-6">
              <span className="font-mono-label text-[11px] font-bold text-foreground/60">WORD BANK</span>
              <div className="mt-2 notebook-card-dashed p-4 grid grid-cols-2 gap-3">
                {options.map((opt) => {
                  const isPicked = picked === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => !checked && setPicked(opt)}
                      disabled={checked}
                      className={`border-2 border-foreground rounded-sm py-3 font-bold font-serif-display text-lg transition-all ${
                        isPicked ? "bg-primary text-primary-foreground" : "bg-card hover:bg-paper-shadow"
                      } ${checked ? "opacity-70 cursor-default" : ""}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 ink-divider" />

            <div className="mt-5 flex items-center justify-between gap-3">
              <button onClick={reset} className="btn-ghost-ink !py-2.5 !px-4 text-xs">
                <SkipForward className="w-4 h-4" strokeWidth={2.25} /> Reset
              </button>
              {!checked ? (
                <button
                  onClick={() => picked && setChecked(true)}
                  disabled={!picked}
                  className="btn-amber disabled:opacity-50 disabled:cursor-not-allowed !py-3"
                >
                  <Check className="w-4 h-4" strokeWidth={2.5} /> Check
                </button>
              ) : picked === correct ? (
                <div className="flex items-center gap-2 font-mono-label text-sm font-bold text-primary">
                  <Check className="w-5 h-5" strokeWidth={2.5} /> CORRECT — +20 XP
                </div>
              ) : (
                <div className="flex items-center gap-2 font-mono-label text-sm font-bold text-destructive">
                  <X className="w-5 h-5" strokeWidth={2.5} /> NOT QUITE — TRY AGAIN
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

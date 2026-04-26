import { BookOpen, Camera, Flame } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: BookOpen,
    title: "Learn",
    sub: "5-minute techniques",
    body: "Mini-games for the fundamentals — multiple choice, image ID, sequencing, fill-in-the-blank. The science explained, not memorized.",
    examples: ["Maillard reaction", "Knife grip", "Leidenfrost point"],
  },
  {
    n: "02",
    icon: Flame,
    title: "Practice",
    sub: "Real kitchen missions",
    body: "Step away from the screen. Dice an onion. Sear a chicken breast. Deglaze the fond. The kitchen is the classroom.",
    examples: ["Dice an onion", "Sear chicken", "Build pan sauce"],
  },
  {
    n: "03",
    icon: Camera,
    title: "Prove",
    sub: "Photo evaluation",
    body: "Snap your work. We evaluate crust, sauce, and knife work based on visible evidence — and tells you exactly what to fix next time.",
    examples: ["Crust check", "Sauce body", "Cut uniformity"],
  },
];

export const Loop = () => (
  <section id="loop" className="px-6 py-20 md:py-28 border-t-2 border-foreground">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="font-mono-label text-xs font-bold text-primary">THE METHOD</span>
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold mt-2">
          Learn <span className="italic">→</span> Practice <span className="italic">→</span> Prove
        </h2>
        <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
          Cooking is a craft. Every chapter closes the loop between theory, repetition, and real evidence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-6">
        {steps.map((s) => (
          <article key={s.n} className="notebook-card p-6 md:p-7 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 border-2 border-foreground rounded-sm bg-primary text-primary-foreground flex items-center justify-center">
                <s.icon className="w-6 h-6" strokeWidth={2.25} />
              </div>
              <span className="font-mono-label text-xs font-bold text-foreground/50">{s.n}</span>
            </div>
            <span className="font-mono-label text-xs font-bold text-primary">{s.sub}</span>
            <h3 className="font-serif-display text-3xl font-bold mt-1">{s.title}</h3>
            <p className="mt-3 text-foreground/80 leading-relaxed">{s.body}</p>
            <div className="mt-5 pt-5 border-t border-dashed border-foreground/40 flex flex-wrap gap-2">
              {s.examples.map((e) => (
                <span
                  key={e}
                  className="text-[11px] font-mono-label font-bold border border-dashed border-foreground rounded-full px-2.5 py-1"
                >
                  {e}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

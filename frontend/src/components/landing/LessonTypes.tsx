import { CheckSquare, Image as ImageIcon, GripVertical, Pencil } from "lucide-react";

const types = [
  { icon: CheckSquare, label: "Multiple Choice", desc: "Diagnose what you hear, see, smell." },
  { icon: ImageIcon, label: "Image ID", desc: "Spot the perfect sear from the steaming sad one." },
  { icon: GripVertical, label: "Sequencing", desc: "Drag the steps into the right order." },
  { icon: Pencil, label: "Fill in the Blank", desc: "Lock in the term so it sticks." },
];

export const LessonTypes = () => (
  <section className="px-6 py-20 md:py-24 border-t-2 border-foreground bg-paper-shadow/30">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-mono-label text-xs font-bold text-primary">FOUR WAYS TO LEARN</span>
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold mt-2">
          Tiny games. <span className="italic">Real fluency.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {types.map((t) => (
          <div key={t.label} className="notebook-card-soft p-5">
            <div className="w-10 h-10 border-2 border-foreground rounded-sm flex items-center justify-center bg-background">
              <t.icon className="w-5 h-5" strokeWidth={2.25} />
            </div>
            <h3 className="font-serif-display text-xl font-bold mt-4">{t.label}</h3>
            <p className="text-sm text-foreground/75 mt-1.5 leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

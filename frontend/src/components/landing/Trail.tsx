import { Check, Lock, ChevronRight, Hand, ChefHat, Utensils, Flame, Zap } from "lucide-react";
import { Mascot } from "./Mascot";

const nodes = [
  { icon: ChefHat, label: "Knife Grip", state: "done" as const },
  { icon: Hand, label: "The Bear Claw", state: "done" as const },
  { icon: ChefHat, label: "Searing Chicken", state: "active" as const },
  { icon: ChefHat, label: "The Pan Flip", state: "locked" as const },
  { icon: Utensils, label: "Pan-Seared Chicken", state: "locked" as const, isRecipe: true },
];

export const Trail = () => (
  <section className="px-6 py-20 md:py-28">
    <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
      <div className="md:col-span-5">
        <span className="font-mono-label text-xs font-bold text-primary">THE TRAIL</span>
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold mt-2 leading-tight">
          A path through<br /><span className="italic">your kitchen.</span>
        </h2>
        <p className="mt-5 text-foreground/80 leading-relaxed">
          Chapters unlock as you build real skills. Earn XP, keep your daily streak alive, and
          stamp completed techniques on the trail. End every chapter with a recipe challenge that
          ties it all together.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <Mascot size={80} />
          <div className="speech-bubble text-sm">
            <em>Three down, two to go. Don't break the streak.</em>
          </div>
        </div>
      </div>

      <div className="md:col-span-7">
        <div className="notebook-card-soft p-5 md:p-7">
          <div className="flex items-center justify-between border-b-2 border-foreground pb-4 mb-5">
            <div className="font-serif-display italic text-xl font-bold">GarlicMonkey</div>
            <div className="flex items-center gap-2">
              <div className="border-2 border-foreground rounded-sm px-2.5 py-1 font-mono-label text-xs font-bold flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" strokeWidth={2.25} /> 7
              </div>
              <div className="border-2 border-foreground rounded-sm px-2.5 py-1 font-mono-label text-xs font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" strokeWidth={2.25} /> 1200 XP
              </div>
            </div>
          </div>

          <span className="font-mono-label text-[11px] font-bold text-foreground/60">CHAPTER 1:</span>
          <h3 className="font-serif-display italic text-3xl font-bold">The Foundation</h3>

          <div className="mt-5 space-y-2">
            {nodes.map((n, i) => {
              const isActive = n.state === "active";
              const isDone = n.state === "done";
              const isLocked = n.state === "locked";
              return (
                <div key={n.label}>
                  <div
                    className={`relative flex items-center gap-4 border-2 rounded-sm p-3 ${
                      isActive
                        ? "border-primary border-dashed bg-amber-soft/30"
                        : isLocked
                        ? "border-foreground/30 border-dashed opacity-60"
                        : "border-foreground bg-card"
                    }`}
                    style={!isLocked && !isActive ? { boxShadow: "4px 4px 0 0 hsl(var(--paper-shadow))" } : undefined}
                  >
                    <div
                      className={`w-11 h-11 border-2 rounded-sm flex items-center justify-center shrink-0 ${
                        isLocked
                          ? "border-foreground/40 text-foreground/40"
                          : isActive
                          ? "border-foreground bg-primary text-primary-foreground"
                          : "border-foreground bg-primary text-primary-foreground"
                      }`}
                    >
                      {isLocked ? <Lock className="w-5 h-5" strokeWidth={2.25} /> : <n.icon className="w-5 h-5" strokeWidth={2.25} />}
                    </div>
                    <div className="flex-1">
                      <div className={`font-mono-label text-[10px] font-bold ${isActive ? "text-primary" : "text-foreground/60"}`}>
                        {n.isRecipe ? "RECIPE CHALLENGE" : "TECHNIQUE"}
                      </div>
                      <div className={`font-serif-display text-lg font-bold ${isLocked ? "text-foreground/50" : ""}`}>
                        {n.label}
                      </div>
                    </div>
                    {isDone && (
                      <div className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center">
                        <Check className="w-4 h-4" strokeWidth={3} />
                      </div>
                    )}
                    {isActive && <ChevronRight className="w-5 h-5 text-primary" strokeWidth={2.5} />}
                  </div>
                  {i < nodes.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className={`w-px h-5 ${isLocked ? "border-l-2 border-dashed border-foreground/30" : "bg-foreground"}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

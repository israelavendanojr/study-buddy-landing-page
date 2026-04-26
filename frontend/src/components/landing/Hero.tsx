import { ArrowRight, ChefHat } from "lucide-react";
import { Mascot } from "./Mascot";

export const Hero = () => {
  return (
    <section className="relative px-6 pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-8 items-center">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 border-2 border-dashed border-foreground rounded-sm px-3 py-1.5 mb-6 font-mono-label text-xs font-bold">
            <ChefHat className="w-3.5 h-3.5" strokeWidth={2.25} />
            Private Beta · Chapter 1 Open
          </div>
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Stop following recipes.
            <br />
            Start <span className="italic highlighter-mark">understanding</span> food.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
            Master the <em className="font-serif-display">why</em> behind the sear. Short lessons, real-world
            missions, and instant feedback from your mentor.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#waitlist" className="btn-amber">
              Join the Private Beta
              <ArrowRight className="w-5 h-5" strokeWidth={2.25} />
            </a>
            <a href="#loop" className="btn-ghost-ink">See how it works</a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs font-mono-label text-foreground/70">
            <div>
              <div className="text-foreground font-bold text-base">5 min</div>
              avg lesson
            </div>
            <div className="w-px h-8 bg-foreground/30" />
            <div>
              <div className="text-foreground font-bold text-base">120 XP</div>
              per chapter
            </div>
            <div className="w-px h-8 bg-foreground/30" />
            
          </div>
        </div>

        <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="flex items-start gap-3">
            <div className="animate-float-slow flex-shrink-0">
              <Mascot size={180} />
            </div>
            <div className="speech-bubble text-base max-w-[220px] mt-10">
              
              "A cold pan means no crust. Get it screaming hot — then we cook."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

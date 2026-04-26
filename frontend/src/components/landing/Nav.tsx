import { Flame } from "lucide-react";

export const Nav = () => (
  <header className="border-b-2 border-foreground bg-background/80 backdrop-blur-sm sticky top-0 z-40">
    <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" className="font-serif-display italic text-2xl md:text-3xl font-bold tracking-tight">
        GarlicMonkey
      </a>
      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 border-2 border-foreground rounded-sm px-3 py-1.5 font-mono-label text-xs font-bold">
          <Flame className="w-4 h-4 text-primary" strokeWidth={2.25} />
          <span>Beta</span>
        </div>
        <a href="#waitlist" className="btn-amber !px-4 !py-2 text-xs">Join Beta</a>
      </div>
    </div>
  </header>
);

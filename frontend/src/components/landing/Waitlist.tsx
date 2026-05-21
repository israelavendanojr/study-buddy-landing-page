import { useState } from "react";
import { Mail, Award } from "lucide-react";
import { toast } from "sonner";

export const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    
    try {
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": import.meta.env.VITE_SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      if (data.already_joined) {
        toast.info("You're already on the list!");
      } else {
        setSubmitted(true);
        toast.success("You're on the list. Welcome, Founding Chef.");
        setEmail("");
      }
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="px-6 py-20 md:py-28 border-t-2 border-foreground">
      <div className="max-w-2xl mx-auto">
        <div className="notebook-card-dashed p-8 md:p-10 text-center bg-card">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary border-2 border-foreground mb-5">
            <Award className="w-7 h-7 text-primary-foreground" strokeWidth={2.25} />
          </div>
          <span className="font-mono-label text-xs font-bold text-primary">EARLY ACCESS</span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold mt-2">
            Prepping for launch.
          </h2>
          <p className="mt-4 text-foreground/80 text-lg leading-relaxed max-w-md mx-auto">
            Join the waitlist to earn the <em className="font-serif-display font-bold">"Founding Chef"</em> badge
            and first access to Chapter 1.
          </p>

          <form onSubmit={submit} className="mt-7 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 flex items-center gap-2 border-b-2 border-foreground px-1 py-2">
              <Mail className="w-4 h-4 shrink-0 text-foreground/60" strokeWidth={2.25} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@kitchen.com"
                className="flex-1 bg-transparent outline-none placeholder:text-foreground/40 font-sans text-base"
              />
            </div>
            <button type="submit" className="btn-amber !py-3 whitespace-nowrap" disabled={loading}>
                {loading ? "Saving..." : "Get Notified"}
            </button>
          </form>

          {submitted && (
            <p className="mt-4 font-handwritten text-primary">
              Saved you a spot at the pass. We will be in touch.
            </p>
          )}

          <p className="mt-6 font-mono-label text-[10px] font-bold text-foreground/50">
            NO SPAM · UNSUBSCRIBE ANY TIME · CRAFTED BY HOME COOKS
          </p>
        </div>
      </div>
    </section>
  );
};

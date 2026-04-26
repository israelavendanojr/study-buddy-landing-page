import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Loop } from "@/components/landing/Loop";
import { LessonPreview } from "@/components/landing/LessonPreview";
import { LessonTypes } from "@/components/landing/LessonTypes";
import { Trail } from "@/components/landing/Trail";
import { Tip } from "@/components/landing/Tip";
import { Waitlist } from "@/components/landing/Waitlist";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Nav />
    <main>
      <Hero />
      <Loop />
      <LessonPreview />
      <LessonTypes />
      <Trail />
      <Tip />
      <Waitlist />
    </main>
    <Footer />
  </div>
);

export default Index;

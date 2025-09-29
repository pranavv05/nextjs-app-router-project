import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Shuffle from "@/components/ui/shuffle";
import DecryptedText from "@/components/ui/DecryptedText";
import SpotlightCard from "@/components/SpotlightCard";

export default function PublicHomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Shuffle
              text="BabyCollab"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              tag="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight shuffle-main-title"
            />
            <p className="mt-5 text-lg text-muted-foreground max-w-prose">
              Learn the skills, build the projects, and launch the career you've always wanted. All in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/sign-up" className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90">
                Get Started for Free
              </a>
              <a href="#features" className="inline-flex h-11 items-center rounded-md border px-6 text-sm font-medium hover:bg-muted">
                Explore Features
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/10] rounded-lg border overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              alt="Students collaborating on laptops"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-20">
        <div className="text-center mb-12">
          <DecryptedText
            text="Everything you need to grow"
            animateOn="loop"
            loopDelay={2000}
            speed={80}
            maxIterations={20}
            revealDirection="center"
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            parentClassName="decrypted-text-container block"
            encryptedClassName="encrypted"
          />
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            From teaming up on real projects to AI-guided learning paths—BabyCollab brings it all together.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <SpotlightCard className="rounded-lg border p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              {/* Icon: Briefcase */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M3 7a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2"/><path d="M3 7h18"/><path d="M21 7a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2"/><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><path d="M12 12v4"/></svg>
            </div>
            <h3 className="text-xl font-semibold">Collaborate on Real Projects</h3>
            <p className="mt-2 text-muted-foreground">
              Find teammates, manage tasks, and build a portfolio that stands out.
            </p>
          </SpotlightCard>
          {/* Feature 2 */}
          <SpotlightCard className="rounded-lg border p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              {/* Icon: Map */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>
            </div>
            <h3 className="text-xl font-semibold">Get a Personalized Roadmap</h3>
            <p className="mt-2 text-muted-foreground">
              AI-powered learning paths with curated resources to guide your skill development.
            </p>
          </SpotlightCard>
          {/* Feature 3 */}
          <SpotlightCard className="rounded-lg border p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              {/* Icon: User */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3 className="text-xl font-semibold">Showcase Your Talent</h3>
            <p className="mt-2 text-muted-foreground">
              Build a dynamic profile that showcases your completed projects, skills, and endorsements.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="text-center mb-12">
          <DecryptedText
            text="Trusted by Aspiring Developers"
            animateOn="loop"
            loopDelay={2000}
            speed={80}
            maxIterations={20}
            revealDirection="center"
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            parentClassName="decrypted-text-container block"
            encryptedClassName="encrypted"
          />
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Hear from learners who used BabyCollab to jumpstart their careers.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card className="p-6 h-full">
            <blockquote className="text-base leading-relaxed">"BabyCollab helped me ship my first real app with a team. My portfolio finally tells a story."</blockquote>
            <div className="mt-4 flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e2e0dfb7-8a0a-4144-b9f9-443675a25f32/generated_images/professional-headshot-of-a-young-south-a-37e7ed16-20250921173553.jpg?" alt="Headshot of Aisha Singh" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Aisha Singh</div>
                <div className="text-sm text-muted-foreground">Frontend Developer</div>
              </div>
            </div>
          </Card>
          {/* Card 2 */}
          <Card className="p-6 h-full">
            <blockquote className="text-base leading-relaxed">"The AI roadmap kept me focused. I knew exactly what to learn next."</blockquote>
            <div className="mt-4 flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e2e0dfb7-8a0a-4144-b9f9-443675a25f32/generated_images/crisp-professional-headshot-of-a-young-b-e99380fa-20250921173620.jpg?" alt="Headshot of James Miller" />
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">James Miller</div>
                <div className="text-sm text-muted-foreground">CS Student</div>
              </div>
            </div>
          </Card>
          {/* Card 3 */}
          <Card className="p-6 h-full">
            <blockquote className="text-base leading-relaxed">"I landed interviews after showcasing my projects and endorsements on my profile."</blockquote>
            <div className="mt-4 flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e2e0dfb7-8a0a-4144-b9f9-443675a25f32/generated_images/professional-headshot-of-a-young-latina--526053b2-20250921173646.jpg?" alt="Headshot of Lena Rodriguez" />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Lena Rodriguez</div>
                <div className="text-sm text-muted-foreground">Full-Stack Intern</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-xl border bg-primary text-primary-foreground">
          <div className="px-6 sm:px-10 py-12 sm:py-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold">Ready to Build Your Future?</h3>
            <p className="mt-2 text-primary-foreground/90">Join BabyCollab today and start turning ambition into opportunity.</p>
            <div className="mt-6">
              <a href="/sign-up" className="inline-flex h-11 items-center rounded-md bg-background px-6 text-sm font-medium text-foreground hover:opacity-90">
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
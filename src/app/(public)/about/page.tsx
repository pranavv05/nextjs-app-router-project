import { Target, Layers, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <header className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Mission.</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-prose">
          We believe every student deserves a clear path into tech. CareerHub unifies learning, collaboration, and showcasing
          your work—so you can stop juggling tools and start building your future.
        </p>
      </header>

      <section className="grid gap-10 lg:grid-cols-3 lg:items-start">
        {/* Left: Narrative */}
        <div className="lg:col-span-2">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>
              Breaking into tech shouldn’t require mastering a maze of disconnected apps. Yet most students face exactly that:
              fragmented learning platforms, scattered project tools, and no cohesive way to prove real-world skills.
            </p>
            <p>
              CareerHub solves this with an integrated workspace—AI-powered roadmaps to guide what to learn next, project hubs
              to collaborate with peers, and a living profile that captures your progress, projects, and endorsements.
            </p>
            <p>
              The result? Less time context-switching, more time building. You’ll develop practical experience, grow a
              portfolio that tells your story, and connect your ambition with opportunity.
            </p>
          </div>
        </div>

        {/* Right: Visual highlights */}
        <aside className="space-y-4">
          <div className="rounded-lg border p-5">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Clarity over chaos</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Personalized learning paths keep you focused on what matters next.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border p-5">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Real project experience</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Team up, manage tasks, and build portfolio-worthy software.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border p-5">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                <Rocket className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Showcase your growth</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A dynamic profile highlights skills, endorsements, and shipped work.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left: Form */}
        <section>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Get in Touch</h1>
          <p className="mt-3 text-muted-foreground max-w-prose">
            Have questions or feedback? Send us a message and we'll get back to you within 1–2 business days.
          </p>

          <form className="mt-8 space-y-6" action="#">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="How can we help?" rows={6} required />
            </div>
            <div>
              <Button type="submit" className="h-11 px-6">Send Message</Button>
            </div>
          </form>
        </section>

        {/* Right: Contact Info */}
        <aside className="lg:pl-8">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="mt-3 text-muted-foreground max-w-prose">
            We typically respond within one business day. For urgent requests, please email us directly.
          </p>

          <div className="mt-6 rounded-lg border p-6 space-y-4 bg-white/10 backdrop-blur-sm border-white/20">
            <a
              href="mailto:hello@babycollab.app"
              className="flex items-center gap-3 hover:underline text-white"
            >
              <Mail className="h-5 w-5" /> hello@babycollab.app
>>>>>>> Stashed changes
            </a>
          <div className="mt-6 rounded-lg border p-6 space-y-4 bg-white/10 backdrop-blur-sm border-white/20">
            <a
              href="mailto:hello@babycollab.app"
              className="flex items-center gap-3 hover:underline text-white"
            >
              <Mail className="h-5 w-5" /> hello@babycollab.app
            </a>
=======
          <div className="mt-6 rounded-lg border p-6 space-y-4 bg-white/10 backdrop-blur-sm border-white/20">
            <a
              href="mailto:hello@babycollab.app"
              className="flex items-center gap-3 hover:underline text-white"
            >
              <Mail className="h-5 w-5" /> hello@babycollab.app
>>>>>>> Stashed changes
            </a>
            <div className="flex items-center gap-4 pt-2">
              <a className="inline-flex items-center gap-2 text-foreground/90 hover:underline" href="#" aria-label="GitHub">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a className="inline-flex items-center gap-2 text-foreground/90 hover:underline" href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 text-foreground/90 hover:underline" href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" /> Twitter
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
"use client";

import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SplitText from "@/components/ui/SplitText";
import MagnetButton from "@/components/ui/MagnetButton";
import ClickSpark from "@/components/ui/ClickSpark";
import GradientBlinds from "@/components/ui/GradientBlinds";
import LiquidEther from "@/components/ui/LiquidEther";

export default function ContactPage() {
  function handleSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
  }

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Full-page animated background */}
      {/*<div className="fixed inset-0 -z-10">
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={45}
          noise={0.15}
          blindCount={12}
          blindMinWidth={30}
          spotlightRadius={0.5}
          spotlightSoftness={0.35}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="right"
          mixBlendMode="lighten"
        />
      </div> */}
      <div className="fixed inset-0 -z-10">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      {/* Two-column layout on top of background */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left: Contact Form */}
        <section>
          <SplitText
            text="Get in Touch!"
            tag="h1"
            className="text-4xl font-bold text-white mb-4"
            delay={100}
            duration={0.8}
          />
          <p className="mt-3 text-muted-foreground max-w-prose">
            Have questions or feedback? Send us a message and we’ll get back to
            you within 1–2 business days.
          </p>

          <form className="mt-8 space-y-6" action="#">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                rows={6}
                required
              />
            </div>

            <div>
              <ClickSpark sparkColor="#3108d4ff" sparkCount={12}>
                <MagnetButton padding={10} magnetStrength={1}>
                  <button
                    onClick={handleSubmit}
                    className="
                      px-6 py-3 bg-primary text-black rounded-lg font-semibold
                      hover:bg-primary/90 transition-colors
                    "
                  >
                    Send Message
                  </button>
                </MagnetButton>
              </ClickSpark>
            </div>
          </form>
        </section>

        {/* Right: Contact Information */}
        <aside className="lg:pl-8">
          <SplitText
            text="Contact Information"
            tag="h2"
            className="text-2xl font-semibold text-white mb-3"
            delay={80}
            duration={0.6}
          />
          <p className="mt-3 text-muted-foreground max-w-prose">
            We typically respond within one to two business days. For urgent
            requests, please email us directly.
          </p>

          <div className="mt-6 rounded-lg border p-6 space-y-4 bg-white/10 backdrop-blur-sm border-white/20">
            <a
              href="mailto:hello@careerhub.app"
              className="flex items-center gap-3 hover:underline text-white"
            >
              <Mail className="h-5 w-5" /> hello@careerhub.app
            </a>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" /> Twitter
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
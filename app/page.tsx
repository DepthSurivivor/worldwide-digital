"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  Globe,
  Headphones,
  Menu,
  MessageSquare,
  Phone,
  Shield,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";

function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.1, ...options },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isIntersecting };
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whoWeHelp = [
    {
      title: "Law Firms",
      description:
        "Intake support for consultations, case screening, and missed-call follow-up.",
    },
    {
      title: "Home Service Companies",
      description:
        "Coverage for calls, estimates, and scheduling when your field teams are busy.",
    },
    {
      title: "Contractors",
      description:
        "Reliable call capture and lead qualification so work orders do not slip away.",
    },
    {
      title: "Appointment-Based Businesses",
      description:
        "Consistent customer response for bookings, confirmations, and inbound questions.",
    },
    {
      title: "Support Teams with Overflow",
      description:
        "Extra frontline coverage during peak demand, staffing gaps, and after-hours windows.",
    },
    {
      title: "Bilingual Customer Bases",
      description:
        "English-Spanish customer support that improves clarity and trust on first contact.",
    },
  ];

  const services = [
    {
      icon: Phone,
      title: "Missed Call Capture",
      description:
        "Capture inbound calls and route every lead or customer inquiry into a clear next step.",
      points: ["Fast call answer", "Lead logged", "No silent drop-off"],
      image: "/images/support-team.jpg",
    },
    {
      icon: UserCheck,
      title: "Intake & Lead Qualification",
      description:
        "Collect the right details up front so your team can prioritize and follow up with confidence.",
      points: ["Scripted intake", "Qualified handoff", "Clean notes"],
      image: "/images/blog-analytics.jpg",
    },
    {
      icon: MessageSquare,
      title: "Bilingual Customer Support",
      description:
        "Provide professional English-Spanish support for inbound customer questions and service updates.",
      points: ["Bilingual agents", "Consistent responses", "Customer-ready tone"],
      image: "/images/solutions-ai.jpg",
    },
    {
      icon: Headphones,
      title: "Overflow Call Handling",
      description:
        "Extend coverage during high volume periods so your internal team can stay focused on core work.",
      points: ["Peak-time support", "Queue relief", "Escalation paths"],
      image: "/images/global-network.jpg",
    },
    {
      icon: Clock,
      title: "After-Hours Response Coverage",
      description:
        "Maintain dependable response when your office is closed and urgent inquiries still come in.",
      points: ["Evening coverage", "Weekend support", "Urgency triage"],
      image: "/images/hero-globe.jpg",
    },
    {
      icon: ChevronRight,
      title: "Appointment Setting & Follow-Up",
      description:
        "Confirm appointments and complete follow-up workflows so leads and customers keep moving forward.",
      points: ["Scheduling support", "Reminder outreach", "Follow-up consistency"],
      image: "/images/blog-multilingual.jpg",
    },
  ];

  const whyWds = [
    "Veteran-owned leadership with a disciplined execution mindset",
    "Direct communication with clear ownership and practical decisions",
    "Nearshore flexibility that scales with your volume and workflow",
    "Bilingual support designed for real-world service operations",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assess Response Gaps",
      description:
        "We review your missed-call patterns, intake bottlenecks, and service response pressure points.",
    },
    {
      step: "02",
      title: "Align to Your Workflow",
      description:
        "We map scripts, escalation paths, and handoff standards to match how your team already works.",
    },
    {
      step: "03",
      title: "Deploy Support Coverage",
      description:
        "We activate bilingual nearshore coverage for inbound support, overflow, and after-hours response.",
    },
    {
      step: "04",
      title: "Improve Consistency",
      description:
        "Your team receives cleaner intake, faster response cycles, and better day-to-day support continuity.",
    },
  ];

  const useCases = [
    "Legal Intake",
    "Home Services",
    "Customer Support Overflow",
    "Appointment-Based Businesses",
    "Bilingual Frontline Support",
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden scroll-smooth">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/70 ring-1 ring-primary/20 flex items-center justify-center shadow-lg shadow-primary/25">
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)]" />
                <Globe className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground/90" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-bold tracking-tight">
                  <span className="text-foreground">Worldwide</span>
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {" "}
                    Digital Service
                  </span>
                </span>
                <span className="text-[9px] lg:text-[10px] text-muted-foreground/80 tracking-[0.2em] uppercase font-medium">
                  Veteran-Owned Nearshore Support
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {["Who We Help", "What We Do", "How It Works", "Use Cases"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                ),
              )}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>

            <button
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {["Who We Help", "What We Do", "How It Works", "Use Cases"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors px-4 py-2">
                <Shield className="h-3.5 w-3.5 mr-2" />
                Veteran-Owned | Bilingual Nearshore Coverage
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-balance">
                Bilingual Support Systems Built for Real Response Coverage
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                WDS helps growing businesses stay responsive with nearshore bilingual support for inbound calls, intake overflow, after-hours coverage, and customer follow-up.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 border-border hover:bg-secondary hover:border-primary/30 transition-all duration-300"
                >
                  See Services
                </Button>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Missed-call coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Bilingual intake support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Practical deployment</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
                <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
                  <Image
                    src="/images/hero-globe.jpg"
                    alt="Bilingual nearshore support operations"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <div className="absolute -left-4 lg:-left-8 top-1/4 bg-card/90 backdrop-blur-xl border border-border rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">Inbound</div>
                      <div className="text-xs text-muted-foreground">Call Coverage</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 lg:-right-8 bottom-1/4 bg-card/90 backdrop-blur-xl border border-border rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">Bilingual</div>
                      <div className="text-xs text-muted-foreground">English + Spanish</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="who-we-help" className="py-20 lg:py-28 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">Who We Help</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
              Built for Service Businesses That Need Better Response Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              WDS supports teams that lose opportunities to missed calls, inconsistent intake, and overloaded front desks.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whoWeHelp.map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 80}>
                <Card className="h-full p-6 border-border bg-card/60 hover:border-primary/50 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{group.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{group.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-do" className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">What We Do</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
              Practical Support Infrastructure for Inbound Response
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We provide bilingual systems that help your team answer faster, hand off cleaner, and follow through consistently.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <Card className="group h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] bg-card/50 hover:bg-card">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 h-12 w-12 rounded-xl bg-primary/90 flex items-center justify-center shadow-lg">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="why-wds" className="py-20 lg:py-28 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">Why WDS</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
                Direct, Disciplined Support Without Enterprise Friction
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are built for businesses that need support now. Our model is straightforward: define the response gaps, deploy bilingual coverage, and deliver reliable intake and customer support execution.
              </p>
              <ul className="space-y-4">
                {whyWds.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <Card className="p-8 border-border bg-card/80">
                <h3 className="text-2xl font-bold mb-6">WDS Operating Priorities</h3>
                <div className="space-y-5">
                  {[
                    { label: "Response Coverage", detail: "No missed opportunities from unanswered inbound demand." },
                    { label: "Intake Consistency", detail: "Clear information capture and clean internal handoff." },
                    { label: "Bilingual Access", detail: "English-Spanish support for better customer clarity." },
                    { label: "Scalable Support", detail: "Add capacity as volume changes without operational chaos." },
                  ].map((row) => (
                    <div key={row.label} className="pb-4 border-b border-border last:border-0">
                      <div className="font-semibold mb-1">{row.label}</div>
                      <div className="text-sm text-muted-foreground">{row.detail}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">How It Works</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Simple Rollout. Reliable Execution.</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 80}>
                <Card className="h-full p-6 border-border bg-card/50 hover:border-primary/40 transition-all duration-300">
                  <div className="text-sm font-semibold text-primary mb-3">Step {item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="py-20 lg:py-28 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">Use Cases</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Where WDS Fits Best</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We replaced generic testimonial and blog filler with practical use-case coverage that reflects real operations.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={useCase} delay={index * 70}>
                <Card className="p-5 h-full text-center border-border bg-card/60 hover:border-primary/50 transition-all duration-300">
                  <Users className="h-5 w-5 mx-auto mb-3 text-primary" />
                  <p className="font-medium text-sm">{useCase}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/30">
              <Zap className="h-3.5 w-3.5 mr-2" />
              Final Step
            </Badge>
            <h2 className="text-3xl lg:text-6xl font-bold mb-6 text-balance">Let&apos;s Build Your Response Coverage</h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a call and we&apos;ll show you where calls, intake opportunities, and customer responses are currently breaking down.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 h-14 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
              >
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 h-14 border-border hover:bg-secondary hover:border-primary/30 transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="border-t border-border bg-card/50 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/70 ring-1 ring-primary/20 flex items-center justify-center shadow-lg shadow-primary/25">
                  <Globe className="h-6 w-6 text-primary-foreground/90" />
                </div>
                <div>
                  <span className="text-xl font-bold">
                    <span className="text-foreground">Worldwide</span>
                    <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"> Digital Service</span>
                  </span>
                  <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Bilingual Nearshore Operations</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
                Veteran-owned bilingual support systems for missed calls, intake overflow, customer response, and scalable nearshore operations.
              </p>
            </div>

            {[
              { title: "Services", links: ["Missed Call Capture", "Intake Support", "Overflow Coverage", "After-Hours Response"] },
              { title: "Company", links: ["About WDS", "Who We Help", "How It Works", "Contact"] },
            ].map((column) => (
              <div key={column.title}>
                <h4 className="font-bold mb-4">{column.title}</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 Worldwide Digital Service. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

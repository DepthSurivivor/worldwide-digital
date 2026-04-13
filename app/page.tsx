"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Globe,
  MessageSquare,
  Users,
  TrendingUp,
  Check,
  ArrowRight,
  Menu,
  X,
  Send,
  Clock,
  Shield,
  Zap,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Play,
  Sparkles,
  Languages,
  Headphones,
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
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "agent",
      message:
        "Welcome to Worldwide Digital Service! How can we assist you today? Our bilingual team is available 24/7.",
    },
  ]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { role: "user", message: chatMessage },
      ]);
      setChatMessage("");
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            role: "agent",
            message:
              "Thank you for your message! A member of our bilingual support team will respond shortly. In the meantime, feel free to explore our services.",
          },
        ]);
      }, 1000);
    }
  };

  const solutions = [
    {
      icon: MessageSquare,
      title: "Multilingual Live Chat",
      description:
        "Real-time chat support with native speakers in English, Spanish, and 50+ languages with AI-powered instant translations.",
      features: [
        "Instant messaging",
        "AI-assisted responses",
        "Screen sharing",
      ],
      image: "/images/solutions-ai.jpg",
    },
    {
      icon: Phone,
      title: "Voice Call Center",
      description:
        "Professional phone support with certified native speakers providing personalized, culturally-aware assistance.",
      features: ["HD voice quality", "Smart call routing", "Call analytics"],
      image: "/images/support-team.jpg",
    },
    {
      icon: Mail,
      title: "Email Management",
      description:
        "Enterprise-grade email ticket system with fast response times and automated workflows in multiple languages.",
      features: ["Priority routing", "Auto-translation", "SLA tracking"],
      image: "/images/blog-analytics.jpg",
    },
    {
      icon: Clock,
      title: "24/7 Global Coverage",
      description:
        "Round-the-clock support across all time zones ensures your customers always have access to assistance.",
      features: ["Zero downtime", "Holiday coverage", "Emergency response"],
      image: "/images/global-network.jpg",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption with SOC 2 Type II, GDPR, HIPAA, and PCI-DSS compliance for complete data protection.",
      features: [
        "End-to-end encryption",
        "Compliance certified",
        "Data residency",
      ],
      image: "/images/hero-globe.jpg",
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Analytics",
      description:
        "Real-time dashboards with predictive insights, sentiment analysis, and actionable performance metrics.",
      features: [
        "Predictive analytics",
        "Custom dashboards",
        "Trend forecasting",
      ],
      image: "/images/blog-ai-support.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechFlow Solutions",
      industry: "Technology",
      quote:
        "Worldwide Digital transformed our customer experience. Our CSAT scores jumped from 72% to 96% within three months. The bilingual support team handles complex technical issues with remarkable expertise.",
      rating: 5,
      metrics: "+33% CSAT",
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Operations",
      company: "RetailPro International",
      industry: "E-commerce",
      quote:
        "We expanded into 12 new Latin American markets with confidence. The cultural expertise of their agents made all the difference. Our international revenue grew by 180% year-over-year.",
      rating: 5,
      metrics: "+180% Revenue",
    },
    {
      name: "Emily Chen",
      role: "Chief Customer Officer",
      company: "HealthCare Plus",
      industry: "Healthcare",
      quote:
        "In healthcare, communication is critical. Their HIPAA-compliant bilingual support ensures every patient feels understood and cared for. Patient satisfaction has never been higher.",
      rating: 5,
      metrics: "99% Satisfaction",
    },
    {
      name: "David Martinez",
      role: "COO",
      company: "FinanceHub Corp",
      industry: "Financial Services",
      quote:
        "The security standards exceeded our strict requirements. SOC 2 Type II certification and their proactive approach to compliance gives us complete peace of mind with sensitive financial data.",
      rating: 5,
      metrics: "SOC 2 Certified",
    },
    {
      name: "Jennifer Williams",
      role: "Head of Customer Success",
      company: "EduTech Global",
      industry: "EdTech",
      quote:
        "The analytics platform transformed how we understand our students. Predictive insights help us identify at-risk learners before they disengage. Retention improved by 40%.",
      rating: 5,
      metrics: "+40% Retention",
    },
    {
      name: "Robert Taylor",
      role: "Founder & CEO",
      company: "TravelWorld",
      industry: "Travel & Hospitality",
      quote:
        "24/7 multilingual support across 50+ languages means we never miss an opportunity. Our booking conversions increased by 65% since partnering with Worldwide Digital.",
      rating: 5,
      metrics: "+65% Bookings",
    },
  ];

  const blogPosts = [
    {
      category: "AI & Innovation",
      title:
        "How AI-Powered Multilingual Support is Revolutionizing Customer Experience in 2026",
      excerpt:
        "Explore how the fusion of artificial intelligence and human expertise creates unprecedented customer satisfaction rates.",
      date: "April 5, 2026",
      readTime: "5 min read",
      image: "/images/blog-ai-support.jpg",
    },
    {
      category: "Strategy",
      title:
        "10 Data-Driven Strategies to Improve Your Global Customer Experience",
      excerpt:
        "Proven methodologies from industry leaders for businesses expanding their international presence.",
      date: "April 2, 2026",
      readTime: "7 min read",
      image: "/images/blog-analytics.jpg",
    },
    {
      category: "Case Study",
      title:
        "How RetailPro Achieved 180% Revenue Growth with Bilingual Support",
      excerpt:
        "An in-depth analysis of how strategic multilingual customer service drove unprecedented market expansion.",
      date: "March 28, 2026",
      readTime: "10 min read",
      image: "/images/global-network.jpg",
    },
    {
      category: "Technology",
      title:
        "The Future of Language AI: Beyond Translation to True Understanding",
      excerpt:
        "How next-generation language models are enabling culturally nuanced customer interactions at scale.",
      date: "March 25, 2026",
      readTime: "6 min read",
      image: "/images/blog-multilingual.jpg",
    },
    {
      category: "Market Insights",
      title:
        "Why 73% of U.S. Enterprises Will Require Bilingual Support by 2027",
      excerpt:
        "Market analysis and demographic trends shaping the future of customer service in America.",
      date: "March 20, 2026",
      readTime: "8 min read",
      image: "/images/support-team.jpg",
    },
    {
      category: "Guide",
      title: "The Complete Guide to Choosing Your Multilingual Support Partner",
      excerpt:
        "Essential criteria, red flags, and evaluation frameworks for selecting the right customer service provider.",
      date: "March 15, 2026",
      readTime: "12 min read",
      image: "/images/hero-globe.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden scroll-smooth">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Header */}
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
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-primary/50 to-primary/30 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 rounded-full" />
                <div className="relative h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/70 ring-1 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300 shadow-lg shadow-primary/25">
                  <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground/90 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 lg:h-5 lg:w-5 rounded-full bg-background border border-primary/25 flex items-center justify-center shadow-sm">
                    <Headphones className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-primary" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-bold tracking-tight">
                  <span className="text-foreground group-hover:text-primary/90 transition-colors duration-300">
                    Worldwide
                  </span>
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {" "}
                    Digital
                  </span>
                </span>
                <span className="text-[9px] lg:text-[10px] text-muted-foreground/80 tracking-[0.2em] uppercase font-medium">
                  Premium Global Support
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {["Solutions", "Global Reach", "Testimonials"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>

            <button
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {["Solutions", "Global Reach", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors px-4 py-2">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Trusted by 500+ Leading U.S. Enterprises
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                <span className="text-foreground">Elevate Your</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/60">
                  Customer Experience
                </span>
                <br />
                <span className="text-foreground">Globally</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                Premium bilingual customer support powered by AI and human
                expertise. Connect with diverse audiences across 50+ languages,
                24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
                >
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-14 border-border hover:bg-secondary hover:border-primary/30 transition-all duration-300 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:text-primary transition-colors" />
                  Request Information
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>SOC 2 Type II</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>HIPAA Certified</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />

                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
                  <Image
                    src="/images/hero-globe.jpg"
                    alt="Global digital network visualization"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -left-4 lg:-left-8 top-1/4 bg-card/90 backdrop-blur-xl border border-border rounded-xl p-4 shadow-xl animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Languages className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        50+
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Languages
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -right-4 lg:-right-8 bottom-1/4 bg-card/90 backdrop-blur-xl border border-border rounded-xl p-4 shadow-xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Headphones className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        24/7
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Stats Grid */}
          <AnimatedSection delay={400} className="mt-20 lg:mt-28">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { value: "98%", label: "Customer Satisfaction", icon: Star },
                { value: "50+", label: "Languages Supported", icon: Languages },
                {
                  value: "15M+",
                  label: "Interactions Handled",
                  icon: MessageSquare,
                },
                { value: "<30s", label: "Avg Response Time", icon: Zap },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-6 lg:p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:bg-card"
                >
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <stat.icon className="h-6 w-6 text-primary mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
              Solutions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
              Complete Support Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive multilingual customer support solutions powered by
              AI and human expertise
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] bg-card/50 hover:bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/90 flex items-center justify-center shadow-lg">
                        <solution.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-pretty text-sm leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
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

      {/* Global Reach Section */}
      <section id="global-reach" className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
                Global Reach
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
                Expanding Your Business Worldwide
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                Our network of 7,500+ professional support agents spans across
                continents, ensuring cultural understanding and language
                expertise for every interaction.
              </p>

              <div className="space-y-4">
                {[
                  {
                    region: "North America",
                    languages: "15+ Languages",
                    agents: "2,500+ Agents",
                    color: "from-primary to-primary/60",
                  },
                  {
                    region: "Latin America",
                    languages: "20+ Languages",
                    agents: "3,200+ Agents",
                    color: "from-primary/80 to-primary/40",
                  },
                  {
                    region: "Europe & Asia",
                    languages: "30+ Languages",
                    agents: "1,800+ Agents",
                    color: "from-primary/60 to-primary/20",
                  },
                ].map((region, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 bg-card"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${region.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    <div className="relative p-5 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">
                          {region.region}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Globe className="h-3.5 w-3.5 text-primary" />
                            {region.languages}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="h-3.5 w-3.5 text-primary" />
                            {region.agents}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/images/global-network.jpg"
                    alt="Global network visualization"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Floating Card */}
                <Card className="absolute -bottom-6 -left-6 lg:-left-12 p-6 bg-card/95 backdrop-blur-xl border-border shadow-xl max-w-xs">
                  <h3 className="text-lg font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Native-speaking certified agents",
                      "Cultural expertise & local knowledge",
                      "Scalable enterprise solutions",
                      "AI-powered automation tools",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
              Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See how leading enterprises transformed their customer experience
              with our bilingual support
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group h-full p-6 lg:p-8 border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] bg-card/50 hover:bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <Badge
                      variant="outline"
                      className="text-primary border-primary/30 text-xs"
                    >
                      {testimonial.metrics}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 lg:py-32 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
              Blog & Insights
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
              Latest Industry Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Expert perspectives on customer service trends, multilingual
              support strategies, and industry innovations
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] bg-card/50 hover:bg-card cursor-pointer">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-0">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors text-balance leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm text-pretty leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      Read Article
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-primary/50 hover:bg-secondary"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/30">
              <Zap className="h-3.5 w-3.5 mr-2" />
              Start Today
            </Badge>
            <h2 className="text-3xl lg:text-6xl font-bold mb-6 text-balance">
              Ready to Transform Your
              <br />
              <span className="text-primary">Customer Experience?</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Join 500+ leading U.S. enterprises providing exceptional bilingual
              support. Start your free trial today with no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 h-14 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 h-14 border-border hover:bg-secondary hover:border-primary/30 transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. 14-day free trial. Cancel anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-primary to-primary/70 ring-1 ring-primary/20 flex items-center justify-center shadow-lg shadow-primary/25">
                  <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)]" />
                  <Globe className="h-6 w-6 text-primary-foreground/90" />
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-background border border-primary/25 flex items-center justify-center shadow-sm">
                    <Headphones className="h-2.5 w-2.5 lg:h-3 lg:w-3 text-primary" />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold">
                    <span className="text-foreground">Worldwide</span>
                    <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {" "}
                      Digital
                    </span>
                  </span>
                  <p className="text-[10px] text-muted-foreground tracking-widest uppercase">
                    Premium Global Support
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm text-pretty leading-relaxed">
                Premium bilingual customer support solutions for growing U.S.
                businesses. Connecting brands with customers across 50+
                languages worldwide.
              </p>
            </div>

            {[
              {
                title: "Solutions",
                links: [
                  "Live Chat",
                  "Voice Support",
                  "Email Support",
                  "AI Analytics",
                  "Enterprise",
                ],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press", "Partners", "Contact"],
              },
              {
                title: "Resources",
                links: [
                  "Documentation",
                  "Blog",
                  "Case Studies",
                  "Webinars",
                  "Support",
                ],
              },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-bold mb-4">{column.title}</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-foreground transition-colors"
                      >
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
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div
        className={`fixed bottom-24 right-4 lg:right-8 w-[90%] max-w-sm z-50 transition-all duration-300 ${isChatOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <Card className="overflow-hidden border-border shadow-2xl shadow-primary/10">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold">Live Chat Support</div>
                <div className="text-xs text-primary-foreground/80 flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  Online now
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 h-80 overflow-y-auto bg-card">
            <div className="space-y-4">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "agent" && (
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl p-3 max-w-[80%] ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                className="flex-1 bg-secondary border-0"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button
                size="icon"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleSendMessage}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Chat Button */}
      {/* <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 lg:bottom-8 right-4 lg:right-8 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center z-40 hover:scale-110"
      >
        <div className="relative">
          {isChatOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-400 border-2 border-primary animate-pulse" />
            </>
          )}
        </div>
      </button> */}
    </div>
  );
}

import {
  BookOpen,
  Brain,
  Download,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Users,
} from "lucide-react";
import type { ILandingPageConfig } from "../interfaces/interfaces";

export const initialLandingPageContentConfig: ILandingPageConfig = {
  branding: {
    logo: "AI Ebooks",
    companyName: "AI Ebooks",
  },
  navigation: [
    { label: "Home", href: "home" },
    { label: "Features", href: "features" },
    { label: "Testimonials", href: "testimonials" },
    { label: "Pricing", href: "pricing" },
  ],
  hero: {
    headline: "Master Artificial Intelligence",
    subHeadline:
      "Complete and practical AI ebooks that will transform your career and business. Learn from experts and apply real knowledge.",
    primaryCtaText: "Buy Ebook",
    secondaryCtaText: "View Preview",
    stats: [
      { value: "50k+", label: "Satisfied Readers" },
      { value: "4.9★", label: "Average Rating" },
      { value: "100+", label: "Pages of Content" },
    ],
  },
  features: {
    title: "Why Our AI Ebooks?",
    subtitle:
      "Quality content created by experts to accelerate your learning in artificial intelligence",
    items: [
      {
        icon: <Brain className="h-8 w-8 text-primary" />,
        title: "Specialized Content",
        description:
          "Ebooks written by AI experts with years of practical market experience.",
      },
      {
        icon: <BookOpen className="h-8 w-8 text-primary" />,
        title: "Accessible Language",
        description:
          "Complex concepts explained simply and practically, ideal for all levels.",
      },
      {
        icon: <Download className="h-8 w-8 text-primary" />,
        title: "Immediate Access",
        description:
          "Instant download after purchase. Read when and where you want, on any device.",
      },
      {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Exclusive Community",
        description:
          "Access to private group with other readers to exchange experiences and ask questions.",
      },
    ],
  },
  testimonials: {
    title: "What Our Readers Say",
    subtitle:
      "Real testimonials from professionals who transformed their careers with our AI ebooks",
    items: [
      {
        name: "Carlos Mendes",
        role: "Developer",
        company: "TechCorp",
        content:
          "This ebook helped me understand AI practically. I was able to implement real solutions at work and got promoted!",
        rating: 5,
        avatar: "/professional-man.png",
      },
      {
        name: "Ana Rodrigues",
        role: "Product Manager",
        company: "StartupAI",
        content:
          "Exceptional content! Clear language and practical examples. Now I lead AI projects at my company with much more confidence.",
        rating: 5,
        avatar: "/professional-woman-diverse.png",
      },
      {
        name: "Roberto Silva",
        role: "Entrepreneur",
        company: "InnovateAI",
        content:
          "Investment that was worth every penny. The knowledge acquired allowed me to create a startup focused on artificial intelligence solutions.",
        rating: 5,
        avatar: "/confident-business-woman.png",
      },
    ],
  },
  cta: {
    title: "Transform Your Career with AI",
    subtitle:
      "Join thousands of professionals who already master artificial intelligence",
    primaryCtaText: "Buy Now",
    secondaryCtaText: "View Free Sample",
    benefits: ["Immediate Download", "Lifetime Access", "30-day Guarantee"],
  },
  footer: {
    socialLinks: [
      {
        platform: "Facebook",
        href: "#",
        icon: <Facebook className="h-5 w-5" />,
      },
      { platform: "Twitter", href: "#", icon: <Twitter className="h-5 w-5" /> },
      {
        platform: "Instagram",
        href: "#",
        icon: <Instagram className="h-5 w-5" />,
      },
      {
        platform: "LinkedIn",
        href: "#",
        icon: <Linkedin className="h-5 w-5" />,
      },
    ],
  },
} as const;

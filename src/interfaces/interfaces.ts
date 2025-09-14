import type React from "react";

export interface INavigationItem {
  label: string;
  href: string;
}

export interface ISocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

export interface IFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ITestimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface IIStatistic {
  value: string;
  label: string;
}

export interface ILandingPageConfig {
  branding: {
    logo: string;
    companyName: string;
  };
  navigation: INavigationItem[];
  hero: {
    headline: string;
    subHeadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    stats: IIStatistic[];
  };
  features: {
    title: string;
    subtitle: string;
    items: IFeature[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: ITestimonial[];
  };
  cta: {
    title: string;
    subtitle: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    benefits: string[];
  };
  footer: {
    socialLinks: ISocialLink[];
  };
}

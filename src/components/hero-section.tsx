"use client";

import { Button } from "@/src/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { initialLandingPageContentConfig } from "../data/landing-config";

type HeroSectionProps = {
  headline?: string;
  subHeadline?: string;
  primaryCtaText?: string;
  backgroundImage?: string;
  secondaryCtaText?: string;
  stats?: Array<{ value: string; label: string }>;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
};

export const HeroSection = ({
  backgroundImage = "",
  stats = initialLandingPageContentConfig.hero.stats,
  headline = initialLandingPageContentConfig.hero.headline,
  subHeadline = initialLandingPageContentConfig.hero.subHeadline,
  primaryCtaText = initialLandingPageContentConfig.hero.primaryCtaText,
  secondaryCtaText = initialLandingPageContentConfig.hero.secondaryCtaText,
  onPrimaryCtaClick = () => {},
  onSecondaryCtaClick = () => {},
}: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background"
      style={
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
      }
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            {headline}
          </h1>

          {/* SubHeadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            {subHeadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={onPrimaryCtaClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              {primaryCtaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onSecondaryCtaClick}
              className="px-8 py-3 text-lg bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              {secondaryCtaText}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import { Button } from "@/src/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { initialLandingPageContentConfig } from "../data/landing-config";

type CtaSectionProps = {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  benefits?: string[];
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
};

export const CtaSection = ({
  title = initialLandingPageContentConfig.cta.title,
  subtitle = initialLandingPageContentConfig.cta.subtitle,
  primaryCtaText = initialLandingPageContentConfig.cta.primaryCtaText,
  secondaryCtaText = initialLandingPageContentConfig.cta.secondaryCtaText,
  benefits = initialLandingPageContentConfig.cta.benefits,
  onPrimaryCtaClick = () => {},
  onSecondaryCtaClick = () => {},
}: CtaSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={onPrimaryCtaClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
            >
              {primaryCtaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onSecondaryCtaClick}
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              {secondaryCtaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

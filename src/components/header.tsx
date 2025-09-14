"use client";

import { ThemeToggle } from "@/src/components/theme-toggle";
import { Button } from "@/src/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { initialLandingPageContentConfig } from "../data/landing-config";

type HeaderProps = {
  logo?: string;
  ctaText?: string;
  navigation?: Array<{ label: string; href: string }>;
  onCtaClick?: () => void;
};

export const Header = ({
  logo = initialLandingPageContentConfig.branding.logo,
  navigation = initialLandingPageContentConfig.navigation,
  ctaText = initialLandingPageContentConfig.branding.companyName,
  onCtaClick = () => {},
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground">{logo}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 ">
            <ThemeToggle />
            <Button
              onClick={onCtaClick}
              className="bg-primary hover:bg-primary/90"
            >
              {ctaText}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {/* <ThemeToggle /> */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={onCtaClick}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

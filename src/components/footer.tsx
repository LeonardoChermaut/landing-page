"use client";

import { ReactNode } from "react";
import { initialLandingPageContentConfig } from "../data/landing-config";

type FooterProps = {
  companyName?: string;
  socialLinks?: Array<{
    platform: string;
    href: string;
    icon: ReactNode;
  }>;
};

export const Footer = ({
  companyName = initialLandingPageContentConfig.branding.companyName,
  socialLinks = initialLandingPageContentConfig.footer.socialLinks,
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {currentYear} {companyName}. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.platform}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

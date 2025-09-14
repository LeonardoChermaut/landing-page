"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { initialLandingPageContentConfig } from "../data/landing-config";

interface ITestimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

type TestimonialsSectionProps = {
  title?: string;
  subtitle?: string;
  testimonials?: ITestimonial[];
};

export const TestimonialsSection = ({
  title = initialLandingPageContentConfig.testimonials.title,
  subtitle = initialLandingPageContentConfig.testimonials.subtitle,
  testimonials = initialLandingPageContentConfig.testimonials
    .items as ITestimonial[],
}: TestimonialsSectionProps) => {
  const [testimonialsCarrouselIndex, setTestimonialsCarrouselIndex] =
    useState<number>(0);

  const nextTestimonialMessage = () =>
    setTestimonialsCarrouselIndex((prev) => (prev + 1) % testimonials.length);

  const prevTestimonialMessage = () =>
    setTestimonialsCarrouselIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const getTestimonialRatings = (testimonialIndex: number) => {
    return [...Array(testimonials[testimonialsCarrouselIndex].rating)].map(
      (_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="bg-card border-border">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {getTestimonialRatings(testimonialsCarrouselIndex)}
                  </div>

                  {/* Content */}
                  <blockquote className="text-lg sm:text-xl text-foreground mb-8 text-pretty leading-relaxed">
                    "{testimonials[testimonialsCarrouselIndex].content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={
                        testimonials[testimonialsCarrouselIndex].avatar ||
                        "/placeholder.svg"
                      }
                      alt={testimonials[testimonialsCarrouselIndex].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-foreground">
                        {testimonials[testimonialsCarrouselIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[testimonialsCarrouselIndex].role} •{" "}
                        {testimonials[testimonialsCarrouselIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonialMessage}
                disabled={testimonials.length <= 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialsCarrouselIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === testimonialsCarrouselIndex
                        ? "bg-primary"
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonialMessage}
                disabled={testimonials.length <= 1}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

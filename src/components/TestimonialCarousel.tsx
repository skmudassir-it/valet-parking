"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[plugin.current]} opts={{ loop: true, align: "start" }} className="max-w-5xl mx-auto">
      <CarouselContent>
        {items.map((item, idx) => (
          <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
            <Card className="glass-card h-full p-6">
              <FontAwesomeIcon icon={faQuoteLeft} className="size-6 text-secondary mb-4 opacity-50" />
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">"{item.quote}"</p>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="size-3 text-secondary" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.role}, {item.company}</p>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}

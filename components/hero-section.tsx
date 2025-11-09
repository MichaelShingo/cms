"use client";

import FadeInView from "./animate-ui/fade-in-view";

export default function HeroSection() {
  return (
    <section className="relative space-y-6 py-8 md:py-12 lg:py-40">
      <div className="container flex flex-col items-center gap-4 text-center">
        <FadeInView
          delay={0.2}
          className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
        >
          CMS with Multi-Language Support <br />
        </FadeInView>
      </div>
    </section>
  );
}

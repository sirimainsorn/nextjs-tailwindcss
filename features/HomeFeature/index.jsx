import React from "react";
import FeatureSection from "./FeatureSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import LogoClouds from "./LogoClouds";
import NewsletterSection from "./NewsletterSection";
import PricingSection from "./PricingSection";
import StatsSection from "./StatsSection";
import TeamSection from "./TeamSection";
import Testimonials from "./Testimonials";

export default function HomeFeature() {
  return (
    <>
      <HeroSection />
      <HeaderSection />
      <FeatureSection />
      <PricingSection />
      <NewsletterSection />
      <StatsSection />
      <Testimonials />
      <TeamSection />
      <LogoClouds />
    </>
  );
}

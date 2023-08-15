import FAQsFeature from "@/features/FAQsFeature";
import LandingLayout from "@/layouts/LandingLayout";
import React from "react";

export default function FAQsPage() {
  return (
    <>
      <FAQsFeature />
    </>
  );
}

FAQsPage.layout = LandingLayout;

import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import FormatsSection from "@/components/formats-section"
import CtaSection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <FeaturesSection />
      <FormatsSection />
      <CtaSection />
    </div>
  )
}
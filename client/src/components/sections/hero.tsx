import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/19912008/19912008-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Elegant grid overlay */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_35%,rgba(255,255,255,.1)_65%,transparent_65%),linear-gradient(-45deg,transparent_35%,rgba(255,255,255,.1)_35%,rgba(255,255,255,.1)_65%,transparent_65%)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <AnimatedSection variant="fadeInUp" delay={0.2}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 gold-accent mr-2" />
              <span className="text-white/90 text-sm font-medium tracking-wide">Premium Excellence</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection variant="fadeInUp" delay={0.4}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Capital That{" "}
              <span className="gold-accent italic">
                Builds
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection variant="fadeInUp" delay={0.6}>
            <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Specialized commercial financing for construction, bridge loans, SBA products, and commercial real estate.<br />
              Empowering businesses to grow and thrive.
            </p>
          </AnimatedSection>
          
          <AnimatedSection variant="fadeInUp" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-12 py-4 tracking-wider uppercase shadow-2xl hover:shadow-accent/25 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get Financing
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 text-black bg-white/90 hover:bg-white hover:border-white text-lg px-12 py-4 tracking-wider uppercase backdrop-blur-sm transition-all duration-300"
                onClick={() => scrollToSection('about')}
              >
                Discover More
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Luxury geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"></div>
      </div>
      

    </section>
  );
}
import { Gem, Crown, Palette, Cog } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Services() {
  const services = [
    {
      icon: Crown,
      title: "Strategic Consulting",
      description: "Bespoke strategic guidance tailored to your unique vision and market position.",
      features: [
        "Executive advisory services",
        "Market analysis & positioning",
        "Growth strategy development",
        "Digital transformation roadmaps"
      ]
    },
    {
      icon: Gem,
      title: "Premium Development",
      description: "Cutting-edge solutions crafted with meticulous attention to detail and innovation.",
      features: [
        "Custom software architecture",
        "Advanced analytics platforms",
        "Enterprise-grade security",
        "Scalable cloud infrastructure"
      ]
    },
    {
      icon: Palette,
      title: "Brand Excellence",
      description: "Sophisticated brand experiences that resonate with discerning audiences.",
      features: [
        "Luxury brand identity design",
        "Premium user experiences",
        "Content strategy & creation",
        "Multi-channel campaigns"
      ]
    },
    {
      icon: Cog,
      title: "Operational Mastery",
      description: "Streamlined operations that maximize efficiency while maintaining quality standards.",
      features: [
        "Process optimization",
        "Automation implementation",
        "Performance monitoring",
        "Continuous improvement"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-primary mb-8">
              Exceptional{" "}
              <span className="gold-accent italic">Services</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              We deliver comprehensive solutions that elevate your business to new heights of success. 
              Each service is meticulously crafted to exceed expectations and drive extraordinary results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title}
              variant="fadeInUp" 
              delay={index * 0.1}
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-2xl hover:border-accent/20 transition-all duration-500 group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 gold-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-600">
                          <div className="w-2 h-2 rounded-full bg-accent mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection variant="fadeInUp" delay={0.6}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-slate-700 font-medium">
                Ready to transform your business? Let's discuss your vision.
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
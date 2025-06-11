import { Gem, Crown, Palette, Cog } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Services() {
  const services = [
    {
      icon: Crown,
      title: "Commercial Real Estate",
      description: "Comprehensive financing solutions for acquisition, refinancing, and development of commercial properties.",
      features: [
        "Office buildings & retail centers",
        "Industrial & warehouse properties",
        "Multi-family apartment complexes",
        "Hospitality & special purpose properties"
      ]
    },
    {
      icon: Gem,
      title: "Construction Loans",
      description: "Flexible construction financing to support your development projects from ground breaking to completion.",
      features: [
        "Ground-up construction",
        "Renovation & rehabilitation",
        "Spec building projects",
        "Owner-occupied construction"
      ]
    },
    {
      icon: Palette,
      title: "Bridge Loans",
      description: "Fast, short-term financing solutions to bridge capital gaps and seize time-sensitive opportunities.",
      features: [
        "Quick closing timelines",
        "Asset-based underwriting",
        "Flexible repayment terms",
        "Nationwide coverage"
      ]
    },
    {
      icon: Cog,
      title: "SBA Products",
      description: "Government-backed loan programs designed to help small businesses access affordable capital.",
      features: [
        "SBA 504 loans",
        "SBA 7(a) programs",
        "Express loan options",
        "Working capital solutions"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-primary mb-8">
              Financing{" "}
              <span className="gold-accent italic">Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive commercial capital solutions tailored to your business needs. 
              From construction projects to commercial real estate, we provide the funding to fuel your growth.
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
                Ready to secure funding for your next project? Let's discuss your capital needs.
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
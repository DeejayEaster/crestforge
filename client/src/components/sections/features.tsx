import { Diamond, Clock, Users, Award, Shield, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Features() {
  const features = [
    {
      icon: Diamond,
      title: "Unparalleled Quality",
      description: "Every solution is meticulously crafted with attention to the finest details, ensuring exceptional outcomes that exceed industry standards."
    },
    {
      icon: Clock,
      title: "Timeless Excellence",
      description: "Our commitment to enduring quality means solutions that stand the test of time, providing lasting value for your investment."
    },
    {
      icon: Users,
      title: "Dedicated Partnership",
      description: "Experience personalized service from a team of experts who understand your unique needs and are committed to your success."
    },
    {
      icon: Award,
      title: "Proven Leadership",
      description: "Industry-recognized expertise and a track record of delivering transformative results for the most discerning clients."
    },
    {
      icon: Shield,
      title: "Absolute Reliability",
      description: "Trust in our unwavering commitment to security, confidentiality, and delivering on every promise we make."
    },
    {
      icon: Sparkles,
      title: "Innovative Vision",
      description: "Stay ahead of the curve with cutting-edge solutions that anticipate tomorrow's challenges and opportunities."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-primary mb-8">
              Why Choose{" "}
              <span className="gold-accent italic">Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our distinguished approach combines traditional craftsmanship with modern innovation, 
              delivering solutions that reflect the highest standards of quality and sophistication.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={feature.title}
              variant="fadeInUp" 
              delay={index * 0.1}
            >
              <div className="group text-center p-8 rounded-3xl border border-slate-100 hover:border-accent/20 hover:shadow-xl transition-all duration-500 bg-white">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                  <feature.icon className="h-10 w-10 gold-accent" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to action */}
        <AnimatedSection variant="fadeInUp" delay={0.8}>
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Diamond className="h-8 w-8 gold-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary">
                Experience the Difference
              </h3>
              <p className="text-slate-600 max-w-md">
                Join our distinguished clientele and discover what sets us apart in delivering exceptional results.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
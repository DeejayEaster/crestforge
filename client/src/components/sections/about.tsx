import { Crown, Shield, Zap, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-primary mb-8">
              Commercial Capital{" "}
              <span className="gold-accent italic">Experts</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              With decades of experience in commercial lending, we provide tailored financing 
              solutions for construction projects, bridge loans, SBA products, and commercial 
              real estate investments nationwide.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeInLeft">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-3xl font-bold text-primary mb-6">
                    Our Approach
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    We understand that every business has unique capital needs. Our team works 
                    closely with you to structure financing solutions that align with your 
                    project timelines, cash flow requirements, and growth objectives.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Crown className="h-6 w-6 gold-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Competitive Rates</h4>
                      <p className="text-slate-600">Access to multiple lending sources ensures optimal terms and rates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 gold-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Proven Track Record</h4>
                      <p className="text-slate-600">Decades of successful commercial lending and client relationships</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 gold-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Fast Approvals</h4>
                      <p className="text-slate-600">Streamlined processes to get your projects funded quickly</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="h-8 w-8 gold-accent" />
                  </div>
                  <h4 className="font-display text-3xl font-bold text-primary mb-2">500+</h4>
                  <p className="text-slate-600 font-medium">Distinguished Clients</p>
                </div>
                
                <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Crown className="h-8 w-8 gold-accent" />
                  </div>
                  <h4 className="font-display text-3xl font-bold text-primary mb-2">15+</h4>
                  <p className="text-slate-600 font-medium">Years of Excellence</p>
                </div>
                
                <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 gold-accent" />
                  </div>
                  <h4 className="font-display text-3xl font-bold text-primary mb-2">99.9%</h4>
                  <p className="text-slate-600 font-medium">Client Satisfaction</p>
                </div>
                
                <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 gold-accent" />
                  </div>
                  <h4 className="font-display text-3xl font-bold text-primary mb-2">24/7</h4>
                  <p className="text-slate-600 font-medium">Premium Support</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
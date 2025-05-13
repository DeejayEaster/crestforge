import { 
  ShieldCheck, 
  Zap, 
  Lightbulb,
  ChevronRight 
} from "lucide-react";
import { AnimatedSection, AnimatedGroup } from "@/components/ui/animated-section";

export default function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <AnimatedSection variant="fadeInRight" className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-black">About Simple Commercial Capital</h2>
            <p className="mt-4 text-[#767676] text-lg">
              At Simple Commercial Capital, we believe that access to the right financing shouldn't be complicated. Our mission is to simplify the commercial financing process for businesses and investors by providing tailored solutions and expert guidance.
            </p>
            <p className="mt-4 text-[#767676] text-lg">
              Founded by industry veterans with decades of combined experience, we leverage our extensive network of lenders and deep understanding of financial markets to secure optimal funding options for our clients.
            </p>
            <p className="mt-4 text-[#767676] text-lg">
              Our approach is consultative and relationship-focused. We take the time to understand your specific needs and goals before recommending personalized financing strategies that align with your long-term objectives.
            </p>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center text-black font-medium hover:underline">
                Get in Touch
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection variant="fadeInLeft" delay={0.2} className="lg:w-1/2">
            <img 
              className="rounded-lg shadow-md w-full h-auto" 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Financial consultants meeting" 
            />
          </AnimatedSection>
        </div>

        <div className="mt-16">
          <AnimatedSection variant="fadeInUp" className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black">Our Values</h3>
          </AnimatedSection>
          
          <AnimatedGroup 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            staggerDelay={0.15}
          >
            <div className="text-center">
              <div className="mx-auto bg-[#f5f5f5] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <ShieldCheck className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-xl font-medium text-black">Integrity</h4>
              <p className="mt-2 text-[#767676]">
                We build relationships based on trust and always put our clients' best interests first.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-[#f5f5f5] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-xl font-medium text-black">Efficiency</h4>
              <p className="mt-2 text-[#767676]">
                We streamline complex processes to save you time and get you the funding you need when you need it.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto bg-[#f5f5f5] rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-xl font-medium text-black">Innovation</h4>
              <p className="mt-2 text-[#767676]">
                We constantly seek creative financing solutions to meet unique business challenges and opportunities.
              </p>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}

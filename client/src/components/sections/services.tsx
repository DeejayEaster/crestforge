import { 
  Building2, 
  Briefcase, 
  Home, 
  LineChart, 
  ChevronRight,
  Check 
} from "lucide-react";
import { AnimatedSection, AnimatedGroup } from "@/components/ui/animated-section";

export default function Services() {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeInUp" className="text-center">
          <h2 className="text-3xl font-bold text-black">Our Services</h2>
          <p className="mt-4 max-w-2xl text-xl text-[#767676] mx-auto">
            Comprehensive financing solutions tailored to your business needs.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Service 1 */}
          <AnimatedSection variant="fadeInUp" delay={0.1} duration={0.6}>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all">
              <img 
                className="h-48 w-full object-cover" 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=384" 
                alt="Commercial real estate property" 
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Building2 className="h-5 w-5 mr-2 text-black" />
                  <h3 className="text-xl font-bold text-black">Commercial Real Estate Loans</h3>
                </div>
                <p className="mt-2 text-[#767676]">
                  Financing solutions for acquisition, refinancing, and development of commercial properties including:
                </p>
                <ul className="mt-4 space-y-2 text-[#767676]">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Office buildings, retail centers, and industrial properties</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Multi-family apartment complexes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Hospitality and special purpose properties</span>
                  </li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center text-black font-medium hover:underline">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Service 2 */}
          <AnimatedSection variant="fadeInUp" delay={0.2} duration={0.6}>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all">
              <img 
                className="h-48 w-full object-cover" 
                src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=384" 
                alt="Business funding consultation" 
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Briefcase className="h-5 w-5 mr-2 text-black" />
                  <h3 className="text-xl font-bold text-black">Business Funding Solutions</h3>
                </div>
                <p className="mt-2 text-[#767676]">
                  Flexible funding options to help businesses grow, expand, and manage cash flow:
                </p>
                <ul className="mt-4 space-y-2 text-[#767676]">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>SBA loans and conventional business loans</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Equipment financing and working capital</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Merchant cash advances and invoice factoring</span>
                  </li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center text-black font-medium hover:underline">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Service 3 */}
          <AnimatedSection variant="fadeInUp" delay={0.3} duration={0.6}>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all">
              <img 
                className="h-48 w-full object-cover" 
                src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=384" 
                alt="Investment property" 
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Home className="h-5 w-5 mr-2 text-black" />
                  <h3 className="text-xl font-bold text-black">Investment Property Financing</h3>
                </div>
                <p className="mt-2 text-[#767676]">
                  Specialized loan programs for investors looking to expand their real estate portfolios:
                </p>
                <ul className="mt-4 space-y-2 text-[#767676]">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fix and flip loans for residential properties</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Long-term rental property financing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Portfolio loans for multiple properties</span>
                  </li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center text-black font-medium hover:underline">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Service 4 */}
          <AnimatedSection variant="fadeInUp" delay={0.4} duration={0.6}>
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all">
              <img 
                className="h-48 w-full object-cover" 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=384" 
                alt="Financial consulting session" 
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <LineChart className="h-5 w-5 mr-2 text-black" />
                  <h3 className="text-xl font-bold text-black">Financial Advisory Services</h3>
                </div>
                <p className="mt-2 text-[#767676]">
                  Expert guidance to optimize your financing strategy and improve business outcomes:
                </p>
                <ul className="mt-4 space-y-2 text-[#767676]">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Business financial planning and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Debt restructuring and refinancing strategies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                    <span>Investment property portfolio optimization</span>
                  </li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center text-black font-medium hover:underline">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

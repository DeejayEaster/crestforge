import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Client Success Stories</h2>
          <p className="mt-4 max-w-2xl text-xl text-[#767676] mx-auto">
            See what our clients say about working with Simple Commercial Capital.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="text-amber-400 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-[#767676]">
              "Simple Commercial Capital helped us secure financing for our retail expansion. Their expertise and dedication made the process seamless, allowing us to focus on growing our business."
            </blockquote>
            <div className="mt-4 font-medium text-black">
              Michael T. - Retail Business Owner
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="text-amber-400 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-[#767676]">
              "Finding the right financing for our multi-family property acquisition seemed overwhelming until we connected with Simple Commercial Capital. They found us the perfect loan product with competitive terms."
            </blockquote>
            <div className="mt-4 font-medium text-black">
              Sarah M. - Real Estate Investor
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="text-amber-400 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-[#767676]">
              "When our business needed working capital to expand, Simple Commercial Capital provided not just funding, but strategic advice that helped us optimize our growth plan. Their team's expertise was invaluable."
            </blockquote>
            <div className="mt-4 font-medium text-black">
              David K. - Manufacturing Company
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

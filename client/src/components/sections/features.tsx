import { DollarSign, Zap, Users } from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-black">Why Choose Us?</h2>
          <p className="mt-4 max-w-2xl text-xl text-[#767676] mx-auto">
            We pride ourselves on offering customized financing solutions with a simplified approach.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-[#f5f5f5] rounded-lg p-6 hover:shadow-md transition-all">
              <div className="inline-flex items-center justify-center rounded-md bg-white p-3 shadow-lg">
                <DollarSign className="h-6 w-6 text-black" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-black">Competitive Rates</h3>
              <p className="mt-2 text-[#767676]">
                Access to multiple lenders allows us to secure the most competitive rates and terms for your business needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#f5f5f5] rounded-lg p-6 hover:shadow-md transition-all">
              <div className="inline-flex items-center justify-center rounded-md bg-white p-3 shadow-lg">
                <Zap className="h-6 w-6 text-black" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-black">Fast Approvals</h3>
              <p className="mt-2 text-[#767676]">
                Our streamlined process ensures quick approvals and funding, so you can focus on growing your business.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#f5f5f5] rounded-lg p-6 hover:shadow-md transition-all">
              <div className="inline-flex items-center justify-center rounded-md bg-white p-3 shadow-lg">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-black">Expert Guidance</h3>
              <p className="mt-2 text-[#767676]">
                Our experienced team provides personalized guidance to help you navigate complex financing decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

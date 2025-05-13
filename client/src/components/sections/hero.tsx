import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-20 md:pt-0">
      <div className="relative bg-[#f5f5f5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-28 lg:max-w-2xl lg:w-full">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-black sm:text-5xl md:text-6xl">
                <span className="block">Simplified Commercial</span>
                <span className="block">Capital Solutions</span>
              </h1>
              <p className="mt-3 text-base text-[#767676] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We provide tailored financing solutions for your commercial real estate and business funding needs with a streamlined, hassle-free approach.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#contact">
                    <Button className="w-full px-8 py-3 md:py-4 md:text-lg md:px-10 bg-black hover:bg-[#333333] text-white">
                      Get Financing
                    </Button>
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#services">
                    <Button variant="outline" className="w-full px-8 py-3 md:py-4 md:text-lg md:px-10 border-black text-black hover:bg-[#f5f5f5]">
                      Our Services
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* Commercial real estate building */}
          <img 
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
            alt="Commercial real estate building" 
          />
        </div>
      </div>
    </section>
  );
}

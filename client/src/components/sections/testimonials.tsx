import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Their attention to detail and commitment to excellence transformed our entire business strategy. The results exceeded every expectation we had.",
      author: "Victoria Sterling",
      position: "CEO, Sterling Enterprises",
      rating: 5
    },
    {
      quote: "Working with them was like having a team of master craftsmen dedicated to our success. Truly exceptional service and unparalleled expertise.",
      author: "James Whitmore",
      position: "Founder, Whitmore Holdings",
      rating: 5
    },
    {
      quote: "The sophistication and innovation they brought to our project set a new standard for our industry. We couldn't be more impressed.",
      author: "Alexandra Chen",
      position: "Director, Chen Capital",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="container-custom">
        <AnimatedSection variant="fadeInUp">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-primary mb-8">
              Client{" "}
              <span className="gold-accent italic">Testimonials</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Discover what our distinguished clientele say about their experience 
              working with us and the exceptional results we've delivered together.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.author}
              variant="fadeInUp" 
              delay={index * 0.2}
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-2xl hover:border-accent/20 transition-all duration-500 group relative">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-slate-600 text-lg leading-relaxed mb-8 italic text-center">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-xl font-bold text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="font-semibold text-primary mb-1">
                    {testimonial.author}
                  </h4>
                  <p className="text-slate-500 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom section */}
        <AnimatedSection variant="fadeInUp" delay={0.8}>
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center space-y-6 p-12 rounded-3xl bg-white border border-slate-200 shadow-lg">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-primary mb-2">
                  Join Our Distinguished Clientele
                </h3>
                <p className="text-slate-600 max-w-md">
                  Experience the same level of excellence that has made us the preferred choice for industry leaders.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
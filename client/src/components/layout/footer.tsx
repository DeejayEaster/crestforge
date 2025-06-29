import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-bold mb-6 gold-accent">CRESTFORGE</h3>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md">
              We craft extraordinary solutions 
              that transform businesses, define industry standards, and let you focus on getting more done.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary transition-all duration-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary transition-all duration-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-primary transition-all duration-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.095.113.108.212.08.327-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/70 hover:text-accent transition-colors duration-200">About</a></li>
              <li><a href="#services" className="text-white/70 hover:text-accent transition-colors duration-200">Services</a></li>
              <li><a href="#features" className="text-white/70 hover:text-accent transition-colors duration-200">Features</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-accent transition-colors duration-200">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-accent transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-white/70">
              <li>One World Trade Center</li>
              <li>Suite 4000</li>
              <li>New York, NY 10007</li>
              <li className="pt-2">
                <a href="tel:+15551234567" className="hover:text-accent transition-colors duration-200">+1 (555) 123-4567</a>
              </li>
              <li>
                <a href="mailto:contact@luxe.com" className="hover:text-accent transition-colors duration-200">contact@luxe.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#services" className="hover:text-accent transition-colors duration-200">Strategic Consulting</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors duration-200">Premium Development</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors duration-200">Brand Excellence</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors duration-200">Operational Mastery</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60">
            <p>&copy; {currentYear} CRESTFORGE. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Link } from "react-router-dom";
import { Camera, Instagram, Youtube, Facebook, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Wedding Photography", path: "/services#weddings" },
    { name: "Pre-Wedding Shoots", path: "/services#prewedding" },
    { name: "Event Coverage", path: "/services#events" },
    { name: "Baby Showers", path: "/services#babyshower" },
    { name: "Maternity Shoots", path: "/services#maternity" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Packages & Pricing", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <Camera className="w-8 h-8 text-gold" />
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold text-gold-gradient">
                  TheFlashRoom
                </span>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  Studio
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Turning moments into timeless memories. We capture the emotions, traditions, 
              and celebrations that make your special day unforgettable.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/tfrstudio__"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-background transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-background transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-background transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm text-foreground">+91 91366 98930</p>
                  <p className="text-xs text-muted-foreground">Mon-Sat, 10am-7pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm text-foreground">tfrstudio07@gmail.com</p>
                  <p className="text-xs text-muted-foreground">We reply within 24hrs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <p className="text-sm text-foreground">Mumbai, India</p>
                  <p className="text-xs text-muted-foreground">Available Pan-India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TheFlashRoom Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

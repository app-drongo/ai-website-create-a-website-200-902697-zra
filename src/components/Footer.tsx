// Footer Component
// Generated: 2025-09-04T13:18:22.652Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Car,
  Shield,
  Clock,
  Users
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Fleet Management", href: "#services" },
        { name: "Corporate Rentals", href: "#services" },
        { name: "Long-term Leasing", href: "#services" },
        { name: "Executive Transport", href: "#services" },
        { name: "Airport Transfers", href: "#services" },
        { name: "Event Transportation", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About ProFleet", href: "#about" },
        { name: "Our Fleet", href: "#features" },
        { name: "Business Solutions", href: "#services" },
        { name: "Corporate Accounts", href: "/corporate" },
        { name: "Partner Program", href: "/partners" },
        { name: "Contact Us", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Booking Support", href: "/support" },
        { name: "Fleet Maintenance", href: "/maintenance" },
        { name: "Insurance Claims", href: "/claims" },
        { name: "Driver Resources", href: "/drivers" },
        { name: "24/7 Roadside", href: "/roadside" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Rental Agreement", href: "/agreement" },
        { name: "Insurance Policy", href: "/insurance" },
        { name: "Data Protection", href: "/data" },
        { name: "Compliance", href: "/compliance" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/profleetrentals" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/profleetrentals" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/profleetrentals" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/profleetrentals" }
  ]

  const features = [
    { icon: Shield, text: "Fully Insured Fleet" },
    { icon: Clock, text: "24/7 Support" },
    { icon: Users, text: "Corporate Solutions" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Car className="text-background size-5" />
                </div>
                <span className="font-bold text-xl text-foreground">ProFleet Rentals</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Professional car rental solutions for businesses and corporate clients. 
                Reliable fleet management with premium vehicles and exceptional service.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">bookings@profleetrentals.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (800) 555-FLEET</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">456 Business District, Corporate Plaza</span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <Icon className="size-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{feature.text}</span>
                  </div>
                )
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">Fleet Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter business email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get fleet updates and corporate rental offers. Professional use only.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 ProFleet Rentals. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Professional Car Rental Solutions</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="/fleet-locations" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Fleet Locations
            </Link>
            <Link href="/corporate-rates" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Corporate Rates
            </Link>
            <Link href="/driver-requirements" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Driver Requirements
            </Link>
            <Link href="/fleet-status" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Fleet Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
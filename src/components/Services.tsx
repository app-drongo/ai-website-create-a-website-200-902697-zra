// Services Component
// Generated: 2025-09-04T13:18:22.653Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.2

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Car,
  Shield,
  Users,
  Clock,
  MapPin,
  Headphones,
  FileText,
  Truck
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "short-term-rental",
      title: "Short-Term Business Rentals",
      description: "Flexible vehicle solutions for immediate business needs",
      longDescription: "Perfect for business trips, client meetings, and temporary transportation needs. Our premium fleet ensures you arrive in style and comfort, making the right impression every time.",
      icon: Car,
      benefits: [
        "Same-day availability for urgent needs",
        "Premium sedan and SUV options",
        "Comprehensive insurance coverage",
        "24/7 roadside assistance"
      ],
      pricing: "Starting at $89/day",
      timeline: "Available within 2 hours",
      featured: true,
      badge: "Most Popular"
    },
    {
      id: "long-term-leasing",
      title: "Corporate Fleet Leasing",
      description: "Cost-effective long-term vehicle solutions for businesses",
      longDescription: "Streamline your corporate transportation with our comprehensive fleet leasing program. Reduce overhead costs while providing reliable vehicles for your team members and operations.",
      icon: Users,
      benefits: [
        "Flexible lease terms from 6-60 months",
        "Maintenance and service included",
        "Fleet management dashboard",
        "Volume discounts for multiple vehicles"
      ],
      pricing: "Custom fleet pricing",
      timeline: "Setup within 5 business days"
    },
    {
      id: "executive-transport",
      title: "Executive Transportation",
      description: "Premium vehicles for C-level executives and VIP clients",
      longDescription: "Elevate your executive transportation with our luxury vehicle collection. From board meetings to airport transfers, ensure your leadership team travels with the prestige your company deserves.",
      icon: Shield,
      benefits: [
        "Luxury sedan and executive SUV fleet",
        "Professional chauffeur services available",
        "Priority booking and concierge support",
        "Confidential and secure transportation"
      ],
      pricing: "Starting at $199/day",
      timeline: "4-hour advance booking"
    },
    {
      id: "commercial-vehicles",
      title: "Commercial Vehicle Solutions",
      description: "Specialized vehicles for business operations and logistics",
      longDescription: "Support your business operations with our commercial vehicle fleet. From delivery vans to cargo trucks, we provide the right vehicles to keep your business moving efficiently.",
      icon: Truck,
      benefits: [
        "Cargo vans, box trucks, and specialty vehicles",
        "GPS tracking and fleet monitoring",
        "Flexible rental periods",
        "Commercial insurance options"
      ],
      pricing: "Custom quotes available",
      timeline: "24-48 hours setup",
      badge: "Business Essential"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Fleet Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional Vehicle Solutions
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Tailored for Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive vehicle rental and leasing solutions designed to meet the unique transportation needs of modern businesses and corporate fleets.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Availability:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Request Quote
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Need a Custom Fleet Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We specialize in creating tailored vehicle programs for businesses of all sizes. Let's discuss your specific transportation requirements.
          </p>
          <Button size="lg">
            Schedule Fleet Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
// Features Component
// Generated: 2025-09-04T13:18:22.653Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Car, 
  Shield, 
  Clock, 
  MapPin, 
  BarChart3, 
  CreditCard,
  Wrench,
  Headphones,
  FileText
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Car,
      title: "Premium Vehicle Fleet",
      description: "Access to luxury sedans, SUVs, and executive vehicles from top manufacturers for professional image.",
      badge: "Fleet"
    },
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description: "Full coverage protection with liability, collision, and comprehensive insurance included in every lease.",
      badge: "Protection"
    },
    {
      icon: Clock,
      title: "Flexible Lease Terms",
      description: "Short-term and long-term leasing options from 30 days to 5 years to match your business needs.",
      badge: "Flexibility"
    },
    {
      icon: MapPin,
      title: "Nationwide Network",
      description: "Coast-to-coast coverage with pickup and delivery services in over 200 major cities.",
      badge: "Coverage"
    },
    {
      icon: BarChart3,
      title: "Fleet Analytics",
      description: "Real-time tracking, usage reports, and cost analysis to optimize your transportation budget.",
      badge: "Analytics"
    },
    {
      icon: CreditCard,
      title: "Corporate Billing",
      description: "Streamlined invoicing with consolidated billing, expense tracking, and accounting integration.",
      badge: "Billing"
    },
    {
      icon: Wrench,
      title: "Maintenance Included",
      description: "Complete maintenance packages with scheduled service, repairs, and roadside assistance.",
      badge: "Service"
    },
    {
      icon: Headphones,
      title: "Dedicated Account Manager",
      description: "Personal fleet specialist available 24/7 to handle requests and resolve any issues quickly.",
      badge: "Support"
    },
    {
      icon: FileText,
      title: "Compliance Management",
      description: "Stay compliant with DOT regulations, driver verification, and automated documentation.",
      badge: "Compliance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Fleet Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete Corporate Transportation
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Management Platform
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything your business needs to manage professional transportation efficiently, 
            from vehicle selection to maintenance and compliance tracking.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to optimize your corporate transportation?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Fleet Pricing
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Download Fleet Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
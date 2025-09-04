// Pricing Component
// Generated: 2025-09-04T13:18:22.653Z
// Template: pricing-c001
// Context: Homepage
// Position: pages.0.sections.3

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Car, Users, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Pricing() {
  const plans = [
    {
      name: "Essential Fleet",
      description: "Perfect for small businesses and startups",
      price: "$299",
      period: "/month",
      badge: null,
      icon: Car,
      features: [
        "Up to 5 vehicles",
        "Standard sedan & compact cars",
        "Basic maintenance included",
        "24/7 roadside assistance",
        "Monthly billing flexibility",
        "Online fleet management",
        "Insurance coverage included"
      ],
      cta: "Request Fleet Quote",
      popular: false
    },
    {
      name: "Professional Fleet",
      description: "Ideal for growing companies and corporate teams",
      price: "$799",
      period: "/month",
      badge: "Most Popular",
      icon: Users,
      features: [
        "Up to 25 vehicles",
        "Premium sedans & SUVs available",
        "Comprehensive maintenance",
        "Priority roadside support",
        "Flexible lease terms",
        "Advanced fleet analytics",
        "Dedicated account manager",
        "Custom branding options",
        "Driver training programs"
      ],
      cta: "Schedule Fleet Consultation",
      popular: true
    },
    {
      name: "Enterprise Fleet",
      description: "For large corporations with complex transportation needs",
      price: "Custom",
      period: "",
      badge: "White Glove Service",
      icon: Shield,
      features: [
        "Unlimited vehicle capacity",
        "Full luxury & specialty vehicles",
        "Complete maintenance & detailing",
        "24/7 concierge support",
        "Custom lease agreements",
        "Real-time fleet tracking",
        "Executive transportation",
        "Multi-location management",
        "Compliance & reporting tools",
        "Strategic partnership benefits"
      ],
      cta: "Contact Enterprise Sales",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            Fleet Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional Fleet Solutions
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tailored for Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Streamline your corporate transportation with ProFleet Rentals. 
            Transparent pricing, premium vehicles, and dedicated support for your business needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly Plans
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Contract
              <Badge variant="secondary" className="ml-2 text-xs bg-accent/20 text-accent">
                Save 15%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                plan.popular 
                  ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                  : "border-border/50 hover:border-primary/20"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit border-accent/30 text-accent">
                    {plan.badge}
                  </Badge>
                )}
                
                <div className="mb-4">
                  <plan.icon className={cn(
                    "size-12 mx-auto",
                    plan.popular ? "text-primary" : "text-secondary"
                  )} />
                </div>
                
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={cn(
                    "w-full text-base py-6",
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : ""
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === "Professional Fleet" && (
                  <p className="text-center text-sm text-muted-foreground">
                    Free fleet assessment • No commitment required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Need a custom fleet solution?
          </h3>
          <p className="text-muted-foreground mb-6">
            Every business has unique transportation requirements. Our fleet specialists 
            will design a tailored solution that optimizes your corporate mobility and reduces costs.
          </p>
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            Book Fleet Strategy Session
          </Button>
        </div>
      </div>
    </section>
  )
}
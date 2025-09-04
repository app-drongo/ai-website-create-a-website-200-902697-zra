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
        "Basic insurance coverage",
        "24/7 roadside assistance",
        "Monthly billing",
        "Online fleet management",
        "Maintenance included"
      ],
      cta: "Request Fleet Quote",
      popular: false
    },
    {
      name: "Professional Fleet",
      description: "Ideal for growing companies and corporate teams",
      price: "$699",
      period: "/month",
      badge: "Most Popular",
      icon: Users,
      features: [
        "Up to 20 vehicles",
        "Premium sedans & SUVs available",
        "Comprehensive insurance",
        "Priority roadside support",
        "Flexible billing options",
        "Advanced fleet analytics",
        "Dedicated account manager",
        "Vehicle customization options",
        "GPS tracking included"
      ],
      cta: "Schedule Consultation",
      popular: true
    },
    {
      name: "Enterprise Fleet",
      description: "For large corporations with extensive vehicle needs",
      price: "Custom",
      period: "",
      badge: "Premium Solution",
      icon: Shield,
      features: [
        "Unlimited vehicle capacity",
        "Full luxury & specialty vehicles",
        "Premium insurance package",
        "24/7 dedicated support line",
        "Custom contract terms",
        "Real-time fleet monitoring",
        "Executive transportation services",
        "Multi-location management",
        "Custom branding options",
        "Quarterly business reviews"
      ],
      cta: "Contact Fleet Specialist",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Fleet Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transparent Fleet
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Professional vehicle leasing plans designed for business success. 
            No hidden costs, flexible terms, and comprehensive support included.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly Plans
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Contract
              <Badge variant="secondary" className="ml-2 text-xs">
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
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}
                
                <div className="mb-4">
                  <plan.icon className="size-12 mx-auto text-primary" />
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
                    Free consultation • No commitment required
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
            ProFleet Rentals specializes in tailored corporate transportation solutions. 
            Let our fleet experts design the perfect vehicle program for your business needs.
          </p>
          <Button variant="outline" size="lg">
            Book Fleet Assessment
          </Button>
        </div>
      </div>
    </section>
  )
}
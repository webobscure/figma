import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TrendingDown, TrendingUp, Shield, Clock } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Reduce Operating Costs",
      value: "25%",
      description: "Average cost reduction in the first year through optimized routes, fuel management, and maintenance scheduling."
    },
    {
      icon: TrendingUp,
      title: "Improve Efficiency",
      value: "40%",
      description: "Increase operational efficiency with automated workflows, real-time tracking, and data-driven insights."
    },
    {
      icon: Shield,
      title: "Enhance Safety",
      value: "60%",
      description: "Reduction in accidents and safety incidents through driver monitoring and real-time alerts."
    },
    {
      icon: Clock,
      title: "Save Time",
      value: "15hrs",
      description: "Average time saved per week on administrative tasks through automation and streamlined processes."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Measurable <span className="text-accent">Results</span> for Your 
            <span className="text-primary"> Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our fleet management system delivers tangible benefits that directly impact 
            your bottom line and operational success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
              alt="Fleet analytics dashboard"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Fleet Monitoring</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6 text-center bg-gray-50/50 border-0 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{benefit.value}</div>
                  <h4 className="font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
import { Card } from "./ui/card";
import { 
  MapPin, 
  Fuel, 
  Wrench, 
  FileText, 
  Users2, 
  BarChart4,
  AlertTriangle,
  Calendar
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time GPS Tracking",
      description: "Monitor your entire fleet's location, speed, and routes in real-time with precision GPS tracking."
    },
    {
      icon: Fuel,
      title: "Fuel Management",
      description: "Track fuel consumption, identify inefficiencies, and reduce fuel costs with detailed analytics."
    },
    {
      icon: Wrench,
      title: "Maintenance Scheduling",
      description: "Automated maintenance reminders and scheduling to keep your vehicles in optimal condition."
    },
    {
      icon: FileText,
      title: "Driver Performance",
      description: "Monitor driving behavior, safety scores, and performance metrics for each driver."
    },
    {
      icon: Users2,
      title: "Driver Management",
      description: "Complete driver profiles, licenses tracking, and performance management tools."
    },
    {
      icon: BarChart4,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to make data-driven fleet management decisions."
    },
    {
      icon: AlertTriangle,
      title: "Safety Alerts",
      description: "Instant notifications for speeding, harsh braking, accidents, and other safety concerns."
    },
    {
      icon: Calendar,
      title: "Route Optimization",
      description: "AI-powered route planning to reduce travel time, fuel consumption, and operational costs."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-accent">Essential</span> Features for 
            <span className="text-primary"> Modern Fleets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage your fleet efficiently, reduce costs, 
            and improve safety in one comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-white border-0 group">
                <div className="w-12 h-12 mb-4 bg-primary/10 group-hover:bg-primary group-hover:text-white rounded-xl flex items-center justify-center transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
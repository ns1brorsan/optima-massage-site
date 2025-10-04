import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
  price: string;
}

export const ServiceCard = ({ icon: Icon, title, description, duration, price }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 hover:scale-105 animate-slide-up">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tid:</span>
          <span className="font-medium">{duration}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Pris:</span>
          <span className="font-semibold text-primary">{price}</span>
        </div>
        <div className="flex gap-2 pt-2">
          <Button variant="default" size="sm" className="flex-1" asChild>
            <a href="https://www.bokadirekt.se/places/optima-massage-61950" target="_blank" rel="noopener noreferrer">
              Boka nu
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to="/tjanster">Läs mer</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
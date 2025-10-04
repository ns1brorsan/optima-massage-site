import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating?: number;
}

export const TestimonialCard = ({ name, text, rating = 5 }: TestimonialCardProps) => {
  return (
    <Card className="h-full animate-fade-in">
      <CardContent className="pt-6">
        <div className="flex gap-1 mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">&ldquo;{text}&rdquo;</p>
        <p className="font-semibold text-foreground">{name}</p>
      </CardContent>
    </Card>
  );
};
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Clock, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const Index = () => {
  const mainServices = services.slice(0, 6);

  const benefits = [
    {
      icon: Award,
      title: "Legitimerad massör",
      description: "Professionell utbildning och lång erfarenhet"
    },
    {
      icon: Heart,
      title: "Individuell behandling",
      description: "Anpassad efter dina specifika behov"
    },
    {
      icon: Clock,
      title: "Flexibel bokning",
      description: "Enkelt att boka tid som passar dig"
    },
    {
      icon: Sparkles,
      title: "Centralt läge",
      description: "Mitt i Stockholm, lätt att ta sig till"
    }
  ];

  const testimonials = [
    {
      name: "Anna S.",
      text: "Ivan är fantastisk! Jag kom med fruktansvärd ryggvärk och gick ut som en ny människa. Hans kunskap och teknik är verkligen i världsklass."
    },
    {
      name: "Erik L.",
      text: "Efter flera år av kronisk nackspänning hittade jag äntligen hjälp hos Optima Massage. Kan varmt rekommendera!"
    },
    {
      name: "Maria J.",
      text: "Professionell, trygg och avslappnande atmosfär. Gravidmassagen var precis vad jag behövde. Tack!"
    },
    {
      name: "Johan K.",
      text: "Som idrottare är regelbunden massage viktigt för min återhämtning. Ivans sportnassage är oslagbar!"
    },
    {
      name: "Sofia M.",
      text: "Mysigt ställe mitt i stan. Ivan är kunnig och lyssnar verkligen på vad man behöver. Kommer tillbaka!"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Din väg till
              <span className="bg-gradient-warm bg-clip-text text-transparent"> bättre hälsa </span>
              börjar här
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Professionell massageterapi i hjärtat av Stockholm. Vi hjälper dig att må bättre, röra dig friare och leva starkare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="hero" size="lg" className="text-lg h-14 px-8" asChild>
                <a href="https://www.bokadirekt.se/places/optima-massage-61950" target="_blank" rel="noopener noreferrer">
                  Boka tid nu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg h-14 px-8" asChild>
                <a href="#tjanster">Välj massage</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjanster" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Våra tjänster</h2>
            <p className="text-xl text-muted-foreground">
              Välj den behandling som passar dina behov bäst. Alla massager utförs av vår legitimerade massör Ivan Malbasic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={Heart}
                title={service.title}
                description={service.shortDescription}
                duration={`${service.durations[0].minutes}-${service.durations[service.durations.length - 1].minutes} min`}
                price={`från ${service.durations[0].price}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Varför välja Optima Massage?</h2>
            <p className="text-xl text-muted-foreground">
              Vi strävar efter att ge dig den bästa möjliga upplevelsen vid varje besök.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-xl bg-card hover:shadow-soft transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center mx-auto">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Vad våra kunder säger</h2>
            <p className="text-xl text-muted-foreground">
              Läs om andras upplevelser och upptäck varför våra kunder återkommer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Redo att må bättre?</h2>
            <p className="text-xl text-muted-foreground">
              Boka din massage idag och ta första steget mot ett friskare och starkare liv.
            </p>
            <Button variant="hero" size="lg" className="text-lg h-14 px-8" asChild>
              <a href="https://www.bokadirekt.se/places/optima-massage-61950" target="_blank" rel="noopener noreferrer">
                Boka tid nu
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
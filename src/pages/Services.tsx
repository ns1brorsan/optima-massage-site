import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tjänster & Priser</h1>
            <p className="text-xl text-muted-foreground">
              Utforska vårt utbud av professionella massagebehandlingar. Alla priser inkluderar moms och konsultation.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={service.id} className="overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="md:flex">
                  <div className="md:w-2/3">
                    <CardHeader>
                      <CardTitle className="text-3xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg pt-2">
                        {service.fullDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Benefits */}
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          Fördelar
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contraindications */}
                      {service.contraindications && service.contraindications.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <AlertCircle className="h-5 w-5 text-accent" />
                            Kontraindikationer
                          </h3>
                          <ul className="space-y-1">
                            {service.contraindications.map((contra, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                <AlertCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                                <span>{contra}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Recommended Frequency */}
                      {service.recommendedFrequency && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            Rekommenderad frekvens
                          </h3>
                          <p className="text-muted-foreground">{service.recommendedFrequency}</p>
                        </div>
                      )}
                    </CardContent>
                  </div>

                  {/* Pricing Section */}
                  <div className="md:w-1/3 bg-muted/30 p-6 md:p-8 flex flex-col">
                    <h3 className="font-semibold text-xl mb-4">Priser</h3>
                    <div className="space-y-3 flex-1">
                      {service.durations.map((duration, i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-card rounded-lg">
                          <span className="font-medium">{duration.minutes} min</span>
                          <span className="text-lg font-bold text-primary">{duration.price}</span>
                        </div>
                      ))}
                    </div>
                    <Separator className="my-6" />
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <a href="https://www.bokadirekt.se/places/optima-massage-61950" target="_blank" rel="noopener noreferrer">
                        Boka denna behandling
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-warm rounded-2xl text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Osäker på vilken massage som passar dig?</h2>
            <p className="text-lg mb-6 opacity-90">
              Kontakta oss så hjälper vi dig att hitta rätt behandling för dina behov.
            </p>
            <Button variant="outline" size="lg" className="bg-card text-foreground hover:bg-card/90" asChild>
              <a href="mailto:info@optimamassage.se">Kontakta oss</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
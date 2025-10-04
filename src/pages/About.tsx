import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Heart, Users } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Legitimerad massör",
      description: "Certifierad utbildning från erkänd massageskola"
    },
    {
      icon: Award,
      title: "15+ års erfarenhet",
      description: "Lång erfarenhet av behandling inom olika områden"
    },
    {
      icon: Heart,
      title: "Personlig approach",
      description: "Varje behandling anpassas efter dina unika behov"
    },
    {
      icon: Users,
      title: "1000+ nöjda kunder",
      description: "Många återkommande kunder och positiv feedback"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Om Optima Massage</h1>
            <p className="text-xl text-muted-foreground">
              Professionell massageterapi med fokus på din hälsa och välbefinnande.
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Profile Image Placeholder */}
              <div className="lg:col-span-1">
                <div className="aspect-square rounded-2xl bg-gradient-warm p-1">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 rounded-full bg-gradient-warm mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-16 w-16 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold">Ivan Malbasic</h3>
                      <p className="text-muted-foreground">Legitimerad massör</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Min historia</h2>
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Mitt namn är Ivan Malbasic och jag är legitimerad massör med över 15 års erfarenhet inom massageterapi. 
                      Min passion för att hjälpa människor att må bättre började tidigt, och genom åren har jag specialiserat 
                      mig på olika behandlingsmetoder för att kunna möta mina kunders varierande behov.
                    </p>
                    <p>
                      Jag tror på en holistisk approach där varje behandling anpassas efter individens unika situation. 
                      Genom noggrann lyssning och professionell bedömning skapar jag en behandlingsplan som ger bästa 
                      möjliga resultat. Min erfarenhet sträcker sig från klassisk massage till mer specialiserade 
                      behandlingar som triggerpunktsterapi och idrottsmassage.
                    </p>
                    <p>
                      På Optima Massage strävar jag efter att skapa en trygg och avslappnande miljö där du kan känna 
                      dig bekväm och omhändertagen. Min filosofi är enkel: din hälsa och välbefinnande står alltid i centrum.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">Utbildning & Specialiseringar</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p>Legitimerad massör - Axelsons Gymnastiska Institut</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p>Specialisering i djupvävnadsmassage och triggerpunktsterapi</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p>Certifierad idrottsmassör</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p>Fortbildning i gravidmassage</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p>Medlem i Sveriges Massageförbund</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {credentials.map((credential, index) => (
                <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-4">
                      <credential.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{credential.title}</h3>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Treatment Philosophy */}
            <Card className="bg-muted/30 border-none">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Min behandlingsfilosofi</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold text-lg">Lyssna</h3>
                    <p className="text-muted-foreground">
                      Jag börjar alltid med att lyssna på dina behov och önskemål för behandlingen.
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="font-semibold text-lg">Anpassa</h3>
                    <p className="text-muted-foreground">
                      Varje behandling skräddarsys efter din kropp och dina specifika behov.
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="font-semibold text-lg">Följa upp</h3>
                    <p className="text-muted-foreground">
                      Jag ger råd för hemmaträning och planerar för långsiktig förbättring.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold mb-4">Redo att börja din resa mot bättre hälsa?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Boka din första behandling idag och upplev skillnaden.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://www.bokadirekt.se/places/optima-massage-61950" target="_blank" rel="noopener noreferrer">
                  Boka tid nu
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
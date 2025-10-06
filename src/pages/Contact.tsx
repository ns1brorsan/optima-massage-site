import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Train, Bus, Car, Navigation as NavigationIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: "destructive",
        title: "Vänligen fyll i alla obligatoriska fält",
        description: "Namn, e-post och meddelande krävs."
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Ogiltig e-postadress",
        description: "Vänligen ange en giltig e-postadress."
      });
      return;
    }

    // Success feedback
    toast({
      title: "Meddelande skickat!",
      description: "Vi återkommer till dig inom 24 timmar."
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adress",
      content: "Karlavägen 7, 114 24 Stockholm",
      link: "https://www.google.com/maps/search/?api=1&query=Karlavägen+7+Stockholm"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "076-284 14 94",
      link: "tel:+46762841494"
    },
    {
      icon: Mail,
      title: "E-post",
      content: "info@optimamassage.se",
      link: "mailto:info@optimamassage.se"
    },
    {
      icon: Clock,
      title: "Öppettider",
      content: "Mån-Fre: 09:00-19:00, Lör: 10:00-16:00",
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Kontakta oss</h1>
            <p className="text-xl text-muted-foreground">
              Vi finns här för att svara på dina frågor och hjälpa dig boka rätt behandling.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Hitta till oss
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.4697894745892!2d18.076542!3d59.341682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5c3d5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sKarlav%C3%A4gen%207%2C%20114%2024%20Stockholm!5e0!3m2!1ssv!2sse!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Karta till Optima Massage"
                  />
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Karlavägen+7+Stockholm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <NavigationIcon className="mr-2 h-4 w-4" />
                    Öppna i Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Skicka ett meddelande</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Namn *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ditt namn"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-post *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="din@email.se"
                      required
                      maxLength={255}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+46 70 123 45 67"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Meddelande *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Skriv ditt meddelande här..."
                      required
                      maxLength={1000}
                      rows={5}
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Skicka meddelande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Transport Guide */}
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-2xl">Snabbaste vägen hit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Public Transport */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center">
                      <Bus className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg">Kollektivtrafik</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Närmaste hållplats är Karlaplan (T-bana, röda linjen). Därifrån är det ca 3 minuters promenad. 
                    Även busslinje 4 och 42 stannar i närheten.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://sl.se/planera-resa" target="_blank" rel="noopener noreferrer">
                      Planera resa med SL
                    </a>
                  </Button>
                </div>

                {/* Car */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center">
                      <Car className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg">Bil</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Gatuparkering finns längs Karlavägen och omkringliggande gator. 
                    Tänk på att det är parkeringsavgift mån-fre 08:00-18:00. 
                    Närmaste parkeringshus är Karlaplan Parkering.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Karlavägen+7+Stockholm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vägbeskrivning i Google Maps
                    </a>
                  </Button>
                </div>

                {/* Train */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center">
                      <Train className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg">Tåg</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Närmaste tågstation är Stockholm Odenplan (pendeltåg och Arlanda Express). 
                    Därifrån byter du till T-bana (röda linjen) mot Mörby centrum och går av vid Karlaplan.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://www.sj.se" target="_blank" rel="noopener noreferrer">
                      Planera tågresa
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <Button variant="default" size="lg" asChild>
              <a href="tel:+46762841494">
                <Phone className="mr-2 h-5 w-5" />
                Ring oss
              </a>
            </Button>
            <Button variant="default" size="lg" asChild>
              <a href="mailto:info@optimamassage.se">
                <Mail className="mr-2 h-5 w-5" />
                Maila oss
              </a>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <a href="https://www.bokadirekt.se/places/optima-massage-61950" target="_blank" rel="noopener noreferrer">
                <Clock className="mr-2 h-5 w-5" />
                Boka tid direkt
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
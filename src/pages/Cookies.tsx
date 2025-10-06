import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie-policy</h1>
          <p className="text-muted-foreground mb-12">Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Vad är cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Cookies är små textfiler som sparas på din enhet när du besöker en webbplats. 
                  De används för att förbättra din upplevelse och hjälpa webbplatsen att fungera korrekt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Hur använder vi cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Vi använder cookies för att:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Säkerställa att webbplatsen fungerar korrekt</li>
                  <li>Komma ihåg dina inställningar (t.ex. ljus/mörkt läge)</li>
                  <li>Förbättra webbplatsens prestanda</li>
                  <li>Förstå hur besökare använder vår webbplats (om du samtycker till analyticookies)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Typer av cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <h3 className="font-semibold text-foreground">Nödvändiga cookies</h3>
                <p>
                  Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av. 
                  De används endast för grundläggande funktionalitet.
                </p>

                <h3 className="font-semibold text-foreground mt-4">Funktionella cookies</h3>
                <p>
                  Dessa cookies gör det möjligt för webbplatsen att komma ihåg val du gör (som ditt användarnamn 
                  eller språk) och tillhandahålla förbättrade funktioner.
                </p>

                <h3 className="font-semibold text-foreground mt-4">Analyticookies</h3>
                <p>
                  Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla 
                  in och rapportera information anonymt. Vi använder endast dessa med ditt samtycke.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Tredjepartscookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Vi använder tjänster från tredje part som kan sätta cookies på vår webbplats:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Maps (för kartor och vägbeskrivningar)</li>
                  <li>BokaDirekt (för bokningssystem)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Hantera cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Du kan när som helst ändra dina cookie-inställningar genom din webbläsares inställningar. 
                  Observera att om du blockerar vissa cookies kan det påverka webbplatsens funktionalitet.
                </p>
                <p className="font-semibold text-foreground">Så här hanterar du cookies i olika webbläsare:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chrome: Inställningar → Sekretess och säkerhet → Cookies</li>
                  <li>Firefox: Inställningar → Sekretess och säkerhet → Cookies och webbplatsdata</li>
                  <li>Safari: Inställningar → Sekretess → Cookies och webbplatsdata</li>
                  <li>Edge: Inställningar → Cookies och webbplatsbehörigheter</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Uppdateringar av denna policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Vi kan uppdatera denna cookie-policy då och då för att återspegla ändringar i vår användning 
                  av cookies. Vi rekommenderar att du regelbundet kontrollerar denna sida för eventuella uppdateringar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Kontakta oss</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Om du har frågor om vår cookie-policy, kontakta oss på:
                </p>
                <p>
                  E-post: info@optimamassage.se<br />
                  Telefon: 076-284 14 94
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
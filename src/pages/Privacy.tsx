import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Integritetspolicy</h1>
          <p className="text-muted-foreground mb-12">Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Inledning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Optima Massage värnar om din integritet och är engagerade i att skydda dina personuppgifter. 
                  Denna integritetspolicy beskriver hur vi samlar in, använder och skyddar dina personuppgifter 
                  i enlighet med GDPR (Dataskyddsförordningen).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Personuppgiftsansvarig</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Optima Massage<br />
                  Karlavägen 7<br />
                  114 24 Stockholm<br />
                  E-post: info@optimamassage.se<br />
                  Telefon: 076-284 14 94
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Vilka personuppgifter samlar vi in?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Vi samlar in följande typer av personuppgifter:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kontaktuppgifter (namn, e-postadress, telefonnummer)</li>
                  <li>Bokningsinformation (datum, tid, vald behandling)</li>
                  <li>Hälsoinformation (endast relevant för behandlingen)</li>
                  <li>Betalningsinformation (hanteras via säkra tredjepartstjänster)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Hur använder vi dina personuppgifter?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Vi använder dina personuppgifter för att:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Administrera bokningar och utföra behandlingar</li>
                  <li>Kommunicera med dig angående dina besök</li>
                  <li>Förbättra våra tjänster</li>
                  <li>Uppfylla lagkrav</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Laglig grund för behandling</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Vi behandlar dina personuppgifter baserat på:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fullgörande av avtal (bokningar och behandlingar)</li>
                  <li>Samtycke (för marknadsföring och nyhetsbrev)</li>
                  <li>Berättigat intresse (för att förbättra våra tjänster)</li>
                  <li>Rättslig förpliktelse (bokföring och journalföring)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Hur länge sparar vi dina uppgifter?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Vi sparar dina personuppgifter endast så länge det är nödvändigt för att uppfylla de ändamål 
                  som beskrivs i denna policy eller enligt lagkrav. Journaluppgifter sparas i minst 10 år enligt 
                  patientdatalagen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Delning av personuppgifter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Vi delar inte dina personuppgifter med tredje part utan ditt samtycke, förutom när det krävs 
                  enligt lag eller för att tillhandahålla våra tjänster (t.ex. bokningssystem och betaltjänster).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Dina rättigheter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Du har rätt att:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Få tillgång till dina personuppgifter</li>
                  <li>Rätta felaktiga uppgifter</li>
                  <li>Radera dina uppgifter (rätten att bli glömd)</li>
                  <li>Begränsa behandlingen av dina uppgifter</li>
                  <li>Invända mot behandling</li>
                  <li>Dataportabilitet</li>
                  <li>Återkalla samtycke</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Säkerhet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter 
                  mot obehörig åtkomst, förlust eller missbruk.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Kontakta oss</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter, kontakta oss på:
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

export default Privacy;
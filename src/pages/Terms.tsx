import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Allmänna villkor</h1>
          <p className="text-muted-foreground mb-12">Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}</p>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Allmänt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Dessa allmänna villkor gäller för alla behandlingar och tjänster som tillhandahålls av 
                  Optima Massage. Genom att boka en behandling accepterar du dessa villkor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Bokning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Bokning sker via vårt bokningssystem på BokaDirekt eller genom direktkontakt via telefon eller e-post. 
                  Du får en bokningsbekräftelse via e-post eller SMS.
                </p>
                <p>
                  Vid bokning är du ansvarig för att lämna korrekta kontaktuppgifter och informera om eventuella 
                  hälsotillstånd som kan påverka behandlingen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Priser och betalning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Alla priser anges i svenska kronor och inkluderar moms. Prislistan på vår webbplats är vägledande 
                  och kan ändras utan föregående meddelande.
                </p>
                <p>
                  Betalning sker efter avslutad behandling och kan göras med kontanter, Swish eller kort. 
                  Vissa försäkringsbolag ersätter massage - kontakta ditt försäkringsbolag för mer information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Avbokning och ombokning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Avbokning eller ombokning måste ske senast 24 timmar före bokad tid för att undvika avgift. 
                  Vid avbokning senare än 24 timmar före bokad tid, eller vid uteblivet besök, debiteras 50% 
                  av behandlingspriset.
                </p>
                <p>
                  Ombokning kan göras via BokaDirekt, via telefon eller e-post.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Förseningar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Om du är försenad till din bokade tid kan behandlingstiden behöva kortas ner för att inte påverka 
                  efterföljande bokningar. Fullt pris debiteras även vid förkortad behandling.
                </p>
                <p>
                  Vid förseningar på mer än 15 minuter förbehåller vi oss rätten att avboka din tid och debitera 
                  enligt avbokningsreglerna.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Hälsoinformation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Du är skyldig att informera om eventuella hälsotillstånd, skador, allergier eller graviditet 
                  som kan påverka behandlingen. Detta inkluderar men är inte begränsat till:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hjärt- och kärlsjukdomar</li>
                  <li>Blodsjukdomar eller blodförtunnande medicin</li>
                  <li>Inflammationer eller infektioner</li>
                  <li>Nyligen genomgången operation</li>
                  <li>Graviditet</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Ansvarsbegränsning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Massage är en kompletterande behandling och ersätter inte medicinsk vård. Vid allvarliga 
                  hälsoproblem bör du alltid konsultera läkare.
                </p>
                <p>
                  Optima Massage ansvarar inte för skador som uppstår till följd av att du utelämnat viktig 
                  hälsoinformation eller inte följt givna råd.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Personuppgifter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Vi behandlar dina personuppgifter i enlighet med GDPR och vår integritetspolicy. 
                  Läs mer i vår integritetspolicy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Ändringar av villkor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Vi förbehåller oss rätten att när som helst ändra dessa villkor. Ändringar träder i kraft 
                  omedelbart vid publicering på vår webbplats. Det är ditt ansvar att hålla dig uppdaterad 
                  om gällande villkor.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Tillämplig lag</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Dessa villkor lyder under svensk lag. Eventuella tvister ska i första hand lösas genom dialog. 
                  Om överenskommelse inte kan nås kan du vända dig till Allmänna Reklamationsnämnden (ARN).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Kontaktuppgifter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Optima Massage<br />
                  Karlavägen 7<br />
                  114 24 Stockholm<br />
                  E-post: info@optimamassage.se<br />
                  Telefon: +46 12 345 67 89
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

export default Terms;
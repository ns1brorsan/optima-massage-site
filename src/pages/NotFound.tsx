import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navigation />

      <main className="flex-1 flex items-center">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-3xl shadow-soft p-10">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Sidan saknas</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vi hittar tyvärr inte den sidan</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Länken du följde verkar inte fungera eller så har sidan flyttats. Använd knapparna nedan för att komma rätt eller kontakta oss så hjälper vi dig.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Till startsidan
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/tjanster">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Visa våra tjänster
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="tel:+46762841494">
                  <Phone className="mr-2 h-5 w-5" />
                  Ring oss
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

export default NotFound;

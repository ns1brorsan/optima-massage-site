import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/optima-logo.jpeg";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="Optima Massage" className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground">
              Professionell massageterapi i hjärtat av Stockholm. Vi hjälper dig till bättre hälsa och välbefinnande.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={scrollToTop}
                >
                  Hem
                </Link>
              </li>
              <li>
                <Link
                  to="/tjanster"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={scrollToTop}
                >
                  Tjänster & Priser
                </Link>
              </li>
              <li>
                <Link
                  to="/om-oss"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={scrollToTop}
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={scrollToTop}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontaktuppgifter</h3>
            <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <span>Torsgatan 57, 113 37 Stockholm</span>
            </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+46762841494" className="hover:text-primary transition-colors">
                  076-284 14 94
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@optimamassage.se" className="hover:text-primary transition-colors">
                  info@optimamassage.se
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Öppettider</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium">Mån-Fre:</span>
                <span>09:00 - 19:00</span>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <span className="font-medium">Lör:</span>
                <span>10:00 - 16:00</span>
              </div>
              <div className="flex items-center gap-2 ml-6">
                <span className="font-medium">Sön:</span>
                <span>Stängt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Optima Massage. Alla rättigheter förbehållna.
          </p>
          <div className="flex gap-6">
            <Link
              to="/integritet"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Integritetspolicy
            </Link>
            <Link
              to="/cookies"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Cookies
            </Link>
            <Link
              to="/villkor"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Villkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

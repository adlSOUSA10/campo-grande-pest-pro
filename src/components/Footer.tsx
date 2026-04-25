import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Instagram,
  ShieldCheck,
} from "lucide-react";
import logoLZ from "@/assets/logo-lz.png";
import wpp from "@/assets/whatsapp.png";
import instagram from "@/assets/instagram.png";

const WHATSAPP_LINK =
  "https://wa.me/5521986722759?text=Olá! Gostaria de falar com um especialista da LZ Dedetização.";
const INSTAGRAM_LINK = "https://instagram.com/lzdedetizacao";

const Footer = () => {
  return (
    <footer
      id="contato"
      className="relative section-padding text-foreground border-t border-border overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(220 60% 97%) 0%, hsl(220 70% 94%) 60%, hsl(220 80% 92%) 100%)",
      }}
    >
      {/* Decorative glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoLZ}
                alt="LZ Dedetização"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/40"
              />
              <h3 className="font-display text-2xl font-bold">
                <span className="text-gradient">LZ</span> Dedetização
              </h3>
            </div>
            <p className="text-foreground/65 text-sm leading-relaxed mb-5">
              Soluções eficazes no controle de pragas, com atendimento
              profissional e garantia de serviço para sua total tranquilidade.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-foreground/70 bg-primary/10 border border-primary/25 px-3 py-1.5 rounded-full mb-5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Empresa registrada no INEA
            </div>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da LZ Dedetização"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 hover:bg-primary/30 transition-colors"
              >
                <img
                  src={instagram}
                  className="w-5 h-5 text-primary-foreground"
                />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--whatsapp))]/20 hover:bg-[hsl(var(--whatsapp))]/40 transition-colors"
              >
                <img
                  src={wpp}
                  alt="WhatsApp"
                  className="w-5 h-5"
                  style={{ color: "hsl(var(--whatsapp))" }}
                />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Contato</h4>
            <div className="space-y-3.5 text-sm text-foreground/65">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Campo Grande - RJ, Rio de Janeiro</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>(21) 98672-2759</span>
              </div>
              {/* <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary shrink-0" />
                <span>WhatsApp</span>
              </a> */}
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-foreground transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary shrink-0" />
                <span>lzdedetizacao</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Seg a Sáb: 7h às 18h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Serviços</h4>
            <ul className="space-y-2.5 text-sm text-foreground/65">
              <li>
                <a
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Descupinização
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Controle de Baratas
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Controle de Ratos
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Controle de Formigas
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Controle de Mosquitos
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Percevejos de cama
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Limpeza de Reservatórios d'água
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-foreground transition-colors"
                >
                  Entre outros
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8 text-center text-sm text-foreground/45">
          <p>
            © {new Date().getFullYear()} LZ Dedetização. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">
            Dedetização em Campo Grande - RJ | Controle de Pragas Profissional
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

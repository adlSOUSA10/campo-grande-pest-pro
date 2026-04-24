import { MapPin, Phone, MessageCircle, Clock, Instagram } from "lucide-react";
import logoLZ from "@/assets/logo-lz.jpeg";

const WHATSAPP_LINK = "https://wa.me/5521999999999?text=Olá! Gostaria de falar com um especialista da LZ Dedetização.";
const INSTAGRAM_LINK = "https://instagram.com/lzdedetizacao";

const Footer = () => {
  return (
    <footer id="contato" className="section-padding bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoLZ}
                alt="LZ Dedetização"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-background/20"
              />
              <h3 className="font-display text-2xl font-bold">
                <span className="opacity-90">LZ</span> Dedetização
              </h3>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-5">
              Especialistas em descupinização, controle de ratos, baratas, formigas,
              limpeza e higienização de reservatórios d'água em Campo Grande - RJ.
            </p>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da LZ Dedetização"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Contato</h4>
            <div className="space-y-3.5 text-sm text-background/60">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-background/40 shrink-0" />
                <span>Campo Grande - RJ, Rio de Janeiro</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-background/40 shrink-0" />
                <span>(21) 99999-9999</span>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-background transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-background/40 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-background transition-colors"
              >
                <Instagram className="w-4 h-4 text-background/40 shrink-0" />
                <span>Instagram</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-background/40 shrink-0" />
                <span>Seg a Sáb: 7h às 18h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">Serviços</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li><a href="#servicos" className="hover:text-background transition-colors">Descupinização</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Controle de Baratas</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Controle de Ratos</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Controle de Formigas</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Controle de Mosquitos</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Percevejos de cama</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Limpeza de Reservatórios d'água</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} LZ Dedetização. Todos os direitos reservados.</p>
          <p className="mt-1">Dedetização em Campo Grande - RJ | Controle de Pragas Profissional</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

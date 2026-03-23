import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521999999999?text=Olá! Gostaria de solicitar um orçamento para dedetização.";

const Footer = () => {
  return (
    <footer id="contato" className="section-padding bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-primary-foreground opacity-80">LZ</span> Dedetização
            </h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Especialistas em controle de pragas urbanas em Campo Grande - RJ, Rio de Janeiro.
              Atendimento residencial, comercial e industrial com garantia.
            </p>
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
              <li><a href="#servicos" className="hover:text-background transition-colors">Controle de Baratas</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Controle de Ratos</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Controle de Formigas</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Controle de Mosquitos</a></li>
              <li><a href="#servicos" className="hover:text-background transition-colors">Descupinização</a></li>
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

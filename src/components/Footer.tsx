import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5567999999999?text=Olá! Gostaria de solicitar um orçamento para dedetização.";

const Footer = () => {
  return (
    <footer id="contato" className="section-padding bg-card border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-gradient">LZ</span> Dedetização
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Especialistas em controle de pragas urbanas em Campo Grande - MS.
              Atendimento residencial, comercial e industrial com garantia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">Contato</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Campo Grande - MS</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>(67) 99999-9999</span>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary shrink-0" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Seg a Sáb: 7h às 18h</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-foreground">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-primary transition-colors">Controle de Baratas</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Controle de Ratos</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Controle de Formigas</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Controle de Mosquitos</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Descupinização</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LZ Dedetização. Todos os direitos reservados.</p>
          <p className="mt-1">Dedetização em Campo Grande - MS | Controle de Pragas Profissional</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/5567999999999?text=Olá! Gostaria de solicitar um orçamento para dedetização.";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Profissional de dedetização realizando controle de pragas em Campo Grande" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-radial" />
      </div>

      <div className="container mx-auto relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            ✅ Atendimento em Campo Grande - MS
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Dedetização em Campo Grande com{" "}
            <span className="text-gradient">Atendimento Rápido</span> e Garantia
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Especialistas em descupinização, controle de ratos, baratas, formigas e
            sanitização completa para residências e empresas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all animate-pulse-glow"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento no WhatsApp
            </a>
            <a
              href="tel:+5567999999999"
              className="flex items-center justify-center gap-2 border border-primary/40 text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Atendimento Imediato
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">🛡️ Produtos regulamentados</span>
            <span className="flex items-center gap-2">⚡ Resposta em até 1h</span>
            <span className="flex items-center gap-2">✅ Garantia no serviço</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

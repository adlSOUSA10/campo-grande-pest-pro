import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield, Zap, CheckCircle2 } from "lucide-react";
import logoLZ from "@/assets/logo-lz.png";

const WHATSAPP_LINK =
  "https://wa.me/5521999999999?text=Olá! Gostaria de solicitar um orçamento para dedetização.";

const badges = [
  { icon: Shield, text: "Mais de 500 clientes satisfeitos" },
  { icon: Zap, text: "Inspeção Técnica GRATUITA" },
  { icon: CheckCircle2, text: "Garantia no serviço" },
];

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-surface">
        {/* Logo as decorative background */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-[0.10] md:opacity-[0.14]"
          style={{
            backgroundImage: `url(${logoLZ})`,
            backgroundPosition: "right -80px center",
          }}
          aria-hidden="true"
        />
        {/* Soft glows */}
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        {/* Left fade for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="section-label mb-8 inline-flex"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Atendimento em Campo Grande - RJ
          </motion.span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 text-foreground">
            Dedetização em Campo Grande - RJ com{" "}
            <span className="text-gradient">Atendimento Rápido</span> e Garantia
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Especialistas em descupinização, controle de ratos, baratas,
            formigas, limpeza e higienização de reservatórios d'água.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-8 py-4 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento no WhatsApp
            </a>
            <a
              href="tel:+5521999999999"
              className="inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold text-base hover:border-primary/40 hover:bg-accent transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Atendimento Imediato
            </a>
          </div> */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {badges.map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2.5 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2.5 rounded-full border border-border"
              >
                <badge.icon className="w-4 h-4 text-primary" />
                {badge.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

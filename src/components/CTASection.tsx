import { motion } from "framer-motion";
import { MessageCircle, ShieldAlert } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5567999999999?text=Olá! Gostaria de solicitar um orçamento para dedetização.";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Proteja Sua Casa ou Empresa{" "}
            <span className="text-gradient">Agora Mesmo</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Evite prejuízos estruturais e riscos à saúde. Fale com um especialista e
            receba um orçamento gratuito em minutos.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold text-lg hover:brightness-110 transition-all animate-pulse-glow"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com Especialista no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

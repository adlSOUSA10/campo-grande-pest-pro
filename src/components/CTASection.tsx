import { motion } from "framer-motion";
import { MessageCircle, ShieldAlert, ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5521986722759?text=Olá! Gostaria de solicitar um orçamento para dedetização.";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.05]" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Proteja Sua Casa ou Empresa{" "}
            <span className="text-gradient">Agora Mesmo</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Evite prejuízos estruturais e riscos à saúde. Fale com um
            especialista e solicite sua avaliação técnica sem compromisso.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-10 py-5 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com Especialista no WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-muted-foreground/70 mt-4">
            Inspeção Técnica GRATUITA · Orçamento realizado pessoalmente
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

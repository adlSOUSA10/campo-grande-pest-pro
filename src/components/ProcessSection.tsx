import { motion } from "framer-motion";
import { Phone, Search, SprayCan, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Contato e Diagnóstico",
    description: "Entre em contato pelo WhatsApp e descreva seu problema. Fazemos o diagnóstico inicial.",
  },
  {
    icon: Search,
    title: "Inspeção Técnica",
    description: "Nosso técnico realiza uma inspeção detalhada no local para identificar a praga e o nível de infestação.",
  },
  {
    icon: SprayCan,
    title: "Aplicação Segura",
    description: "Aplicamos o tratamento com produtos regulamentados, garantindo segurança para sua família e pets.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia e Monitoramento",
    description: "Oferecemos garantia no serviço e monitoramento para assegurar a eliminação completa.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="section-padding bg-gradient-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Processo simples e eficaz em 4 etapas
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/15 border-2 border-primary/40 flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs text-primary font-bold mb-2">ETAPA {i + 1}</span>
                <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

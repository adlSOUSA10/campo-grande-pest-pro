import { motion } from "framer-motion";
import { Phone, Search, SprayCan, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Contato e Diagnóstico",
    description: "Entre em contato pelo WhatsApp e descreva seu problema. Fazemos o diagnóstico inicial.",
    color: "from-primary/5 to-primary/10",
  },
  {
    icon: Search,
    title: "Inspeção Técnica",
    description: "Nosso técnico realiza uma inspeção detalhada no local para identificar a praga e o nível de infestação.",
    color: "from-primary/8 to-primary/15",
  },
  {
    icon: SprayCan,
    title: "Aplicação Segura",
    description: "Aplicamos o tratamento com produtos regulamentados, garantindo segurança para sua família e pets.",
    color: "from-primary/10 to-primary/18",
  },
  {
    icon: ShieldCheck,
    title: "Garantia e Monitoramento",
    description: "Oferecemos garantia no serviço e monitoramento para assegurar a eliminação completa.",
    color: "from-primary/12 to-primary/20",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-6 inline-flex">Processo</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Processo simples e eficaz em 4 etapas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-[88px] h-[88px] rounded-3xl bg-accent flex items-center justify-center mb-5 relative z-10 border border-border">
                <step.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-2">
                Etapa {i + 1}
              </span>
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

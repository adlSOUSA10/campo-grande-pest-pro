import { motion } from "framer-motion";
import { Zap, BadgeCheck, GraduationCap, ShieldCheck, Baby, MessageCircle } from "lucide-react";

const reasons = [
  { icon: Zap, text: "Atendimento rápido em Campo Grande" },
  { icon: BadgeCheck, text: "Produtos aprovados pela ANVISA" },
  { icon: GraduationCap, text: "Técnicos especializados e certificados" },
  { icon: ShieldCheck, text: "Garantia em todos os serviços" },
  { icon: Baby, text: "Segurança para crianças e pets" },
  { icon: MessageCircle, text: "Orçamento rápido via WhatsApp" },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Por Que Escolher a <span className="text-gradient">LZ Dedetização</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium text-foreground">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

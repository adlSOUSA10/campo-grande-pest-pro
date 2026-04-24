import { motion } from "framer-motion";
import { Zap, BadgeCheck, GraduationCap, ShieldCheck, Baby, MessageCircle } from "lucide-react";

const reasons = [
  { icon: Zap, text: "Atendimento rápido em Campo Grande - RJ" },
  { icon: BadgeCheck, text: "Produtos aprovados pelo INEA" },
  { icon: GraduationCap, text: "Mais de 500 clientes satisfeitos" },
  { icon: ShieldCheck, text: "Inspeção Técnica GRATUITA" },
  { icon: Baby, text: "Segurança para crianças e pets" },
  { icon: MessageCircle, text: "Atendimento rápido via WhatsApp" },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-surface-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-6 inline-flex">Diferenciais</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Por Que Escolher a <span className="text-gradient">LZ Dedetização</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-elevated flex items-center gap-4 p-5"
            >
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <r.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <p className="font-medium text-foreground text-sm">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

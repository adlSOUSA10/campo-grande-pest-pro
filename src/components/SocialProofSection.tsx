import { motion } from "framer-motion";
import { Users, Star, Award, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Users, value: "+500", label: "Clientes satisfeitos" },
  { icon: Star, value: "4.9", label: "Avaliação média" },
  { icon: Award, value: "+10", label: "Anos de experiência" },
  { icon: ShieldCheck, value: "100%", label: "Garantia no serviço" },
];

const SocialProofSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-surface-alt border-y border-border">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-5 inline-flex">
            <Users className="w-3.5 h-3.5" />
            Confiança comprovada
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Mais de <span className="text-gradient">500 clientes satisfeitos</span> em Campo Grande
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Resultados que comprovam nossa dedicação ao controle de pragas com segurança e eficiência.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-elevated p-6 md:p-8 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 text-primary mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

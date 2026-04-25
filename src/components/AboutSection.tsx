import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Award,
  Building2,
  Star,
  ShieldCheck,
  Zap,
  Baby,
  MessageCircle,
  DollarSign,
} from "lucide-react";

const stats = [
  { icon: Users, value: "+500", label: "Clientes satisfeitos" },
  { icon: Award, value: "+10", label: "Anos de experiência" },
  { icon: ShieldCheck, value: "100%", label: "Garantia no serviço" },
];

const features = [
  { icon: Shield, text: "Produtos regulamentados pelo INEA" },
  { icon: Zap, text: "Atendimento rápido em Campo Grande - RJ" },
  { icon: Baby, text: "Segurança para crianças e pets" },
  { icon: Building2, text: "Residencial, comercial e industrial" },
  { icon: ShieldCheck, text: "Inspeção Técnica GRATUITA" },
  { icon: MessageCircle, text: "Atendimento rápido via WhatsApp" },
  {
    icon: DollarSign,
    text: "Preço justo, sem surpresas. Você investe em um serviço que resolve, não em soluções temporárias",
  },
];

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="section-padding bg-surface-alt border-y border-border relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="section-label mb-5 inline-flex">Sobre nós</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5 text-foreground">
            Sobre a <span className="text-gradient">LZ Dedetização</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Especialistas em controle de pragas urbanas em Campo Grande - RJ.
            Com técnicos treinados e produtos regulamentados pelo INEA,
            oferecemos soluções seguras e eficazes para residências, comércios e
            indústrias.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elevated p-5 md:p-6 text-center group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/15 text-primary mb-3 group-hover:bg-primary/25 transition-colors">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-white transition-colors">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Differentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`card-flat flex items-center gap-3 p-4 group hover:border-primary/40 ${
                i === features.length - 1
                  ? "sm:col-span-2 lg:col-span-1 lg:col-start-2"
                  : ""
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium text-foreground text-sm group-hover:text-white transition-colors">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

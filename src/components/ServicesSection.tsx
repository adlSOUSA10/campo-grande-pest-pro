import { motion } from "framer-motion";
import {
  Bug,
  Rat,
  Footprints,
  Zap,
  TreeDeciduous,
  MessageCircle,
  ArrowRight,
  Droplets,
  Bird,
  Shirt,
  Snowflake,
  ScanSearch,
  Bed,
  AlertTriangle,
} from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5521986722759?text=Olá! Gostaria de falar com um especialista da LZ Dedetização.";

const featured = {
  icon: TreeDeciduous,
  title: "Descupinização",
  description:
    "Cupins causam danos estruturais silenciosos, atacando móveis, portas e vigas. Utilizamos barreiras químicas, tratamento localizado e inspeção técnica gratuita especializada com garantia completa.",
};

const services = [
  {
    icon: Bug,
    title: "Controle de Baratas",
    description:
      "Eliminação completa com métodos seguros para residências e empresas.",
    main: true,
  },
  {
    icon: Rat,
    title: "Controle de Ratos",
    description: "Controle profissional contra danos estruturais e doenças.",
    main: true,
  },
  {
    icon: Footprints,
    title: "Controle de Formigas",
    description: "Tratamento profissional para eliminação total da colônia.",
    main: true,
  },
  {
    icon: Zap,
    title: "Controle de Mosquitos",
    description: "Prevenção contra dengue, zika e chikungunya.",
    main: true,
  },
  {
    icon: Bed,
    title: "Controle de Percevejos de cama",
    description: "Tratamento eficaz contra percevejos em colchões e mobília.",
    main: true,
  },
  {
    icon: Droplets,
    title: "Limpeza de Reservatórios d'água",
    description: "Limpeza e higienização completa de caixas d'água.",
    main: true,
  },
  {
    icon: Bird,
    title: "Controle de Moscas",
    description:
      "Tratamento contra moscas em ambientes residenciais e comerciais.",
    main: false,
  },
  {
    icon: Shirt,
    title: "Controle de Traças",
    description: "Proteção para roupas, livros e mobília contra traças.",
    main: false,
  },
  {
    icon: ScanSearch,
    title: "Controle de Aranhas",
    description: "Eliminação segura de aranhas em todos os ambientes.",
    main: false,
  },
  {
    icon: Snowflake,
    title: "Controle de Escorpiões",
    description: "Controle especializado e seguro contra escorpiões.",
    main: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-surface-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-6 inline-flex">Serviços</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas em controle de pragas para Campo Grande - RJ e
            região
          </p>
        </motion.div>

        {/* Featured - Descupinização */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 p-8 md:p-10 rounded-2xl bg-card border border-primary/30 relative overflow-hidden"
          style={{ boxShadow: "0 8px 30px hsl(240 80% 41% / 0.2)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold rounded-full tracking-wide flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> PRINCIPAL
          </div>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shrink-0">
              <featured.icon className="w-8 h-8 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-foreground">
                {featured.title}
              </h3>
              <p className="text-muted-foreground text-lg mb-5 leading-relaxed max-w-2xl">
                {featured.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {[
                  "Barreiras químicas",
                  "Tratamento localizado",
                  "Inspeção especializada",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-foreground bg-accent/50 px-4 py-2.5 rounded-xl"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              {/* <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-7 py-3.5 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Especialista
                <ArrowRight className="w-4 h-4" />
              </a> */}
            </div>
          </div>
        </motion.div>

        {/* Other services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`card-elevated p-6 group relative ${service.main ? "border-primary/30" : ""}`}
            >
              {service.main && (
                <div className="absolute top-4 right-4 text-[10px] font-bold tracking-wider text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <AlertTriangle className="w-2.5 h-2.5" /> PRINCIPAL
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2 text-foreground pr-16">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

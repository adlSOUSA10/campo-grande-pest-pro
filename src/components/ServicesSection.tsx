import { motion } from "framer-motion";
import { Bug, Rat, Footprints, Zap, TreeDeciduous, MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521999999999?text=Olá! Gostaria de solicitar um orçamento para dedetização.";

const services = [
  {
    icon: Bug,
    title: "Controle de Baratas",
    description:
      "Baratas transmitem doenças, contaminam alimentos e se proliferam rapidamente. Eliminamos infestações com métodos seguros e eficazes.",
    featured: false,
  },
  {
    icon: Rat,
    title: "Controle de Ratos",
    description:
      "Ratos causam danos estruturais e transmitem doenças graves como leptospirose. Realizamos controle profissional completo.",
    featured: false,
  },
  {
    icon: Footprints,
    title: "Controle de Formigas",
    description:
      "Formigas comprometem estruturas e invadem ambientes internos. Tratamento profissional para eliminação total da colônia.",
    featured: false,
  },
  {
    icon: Zap,
    title: "Controle de Mosquitos",
    description:
      "Prevenção contra dengue, zika e chikungunya com eliminação de focos e controle adulticida profissional.",
    featured: false,
  },
  {
    icon: TreeDeciduous,
    title: "Descupinização",
    description:
      "Cupins causam danos estruturais silenciosos, atacando móveis, portas e vigas. Utilizamos barreiras químicas, tratamento localizado e inspeção técnica especializada com garantia completa.",
    featured: true,
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
            Soluções completas em controle de pragas para Campo Grande - RJ e região
          </p>
        </motion.div>

        {/* Featured - Descupinização */}
        {services
          .filter((s) => s.featured)
          .map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 p-8 md:p-10 rounded-2xl bg-card border border-primary/15 relative overflow-hidden"
              style={{ boxShadow: "0 8px 30px hsl(240 80% 41% / 0.08)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold rounded-full tracking-wide">
                ★ DESTAQUE
              </div>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-5 leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {["Barreiras químicas", "Tratamento localizado", "Inspeção especializada"].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm text-foreground bg-accent/50 px-4 py-2.5 rounded-xl">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp px-7 py-3.5 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Solicitar Orçamento
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services
            .filter((s) => !s.featured)
            .map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-elevated p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-foreground">
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

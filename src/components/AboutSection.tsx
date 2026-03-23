import { motion } from "framer-motion";
import { Shield, Users, Award, Building2 } from "lucide-react";

const features = [
  { icon: Shield, text: "Produtos regulamentados pela ANVISA", desc: "Segurança comprovada" },
  { icon: Users, text: "Técnicos treinados e certificados", desc: "Equipe qualificada" },
  { icon: Award, text: "Garantia em todos os serviços", desc: "Compromisso total" },
  { icon: Building2, text: "Residencial, comercial e industrial", desc: "Atendimento completo" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="section-label mb-6 inline-flex">Sobre nós</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Sobre a <span className="text-gradient">LZ Dedetização</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos uma empresa especializada em controle de pragas urbanas atuando em
            Campo Grande, Rio de Janeiro, e região. Com técnicos altamente treinados e produtos
            regulamentados pela ANVISA, oferecemos soluções seguras e eficazes para
            residências, comércios e indústrias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-elevated p-6 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <p className="text-foreground font-semibold mb-1">{f.text}</p>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";
import { Shield, Users, Award, Building2 } from "lucide-react";

const features = [
  { icon: Shield, text: "Produtos regulamentados pela ANVISA" },
  { icon: Users, text: "Técnicos treinados e certificados" },
  { icon: Award, text: "Garantia em todos os serviços" },
  { icon: Building2, text: "Residencial, comercial e industrial" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Sobre a <span className="text-gradient">LZ Dedetização</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos uma empresa especializada em controle de pragas urbanas atuando em
            Campo Grande e região. Com técnicos altamente treinados e produtos
            regulamentados pela ANVISA, oferecemos soluções seguras e eficazes para
            residências, comércios e indústrias. Nosso compromisso é garantir a
            segurança da sua família e do seu patrimônio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

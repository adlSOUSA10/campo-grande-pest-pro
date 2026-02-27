import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente serviço! A equipe foi super profissional e resolveu nosso problema com cupins rapidamente. Recomendo demais!",
    rating: 5,
    location: "Campo Grande - MS",
  },
  {
    name: "Carlos Mendes",
    text: "Atendimento rápido e eficiente. Tivemos um problema sério com baratas no restaurante e a LZ resolveu com garantia.",
    rating: 5,
    location: "Campo Grande - MS",
  },
  {
    name: "Ana Oliveira",
    text: "Muito satisfeita com o serviço de descupinização. Os técnicos foram cuidadosos e o resultado foi perfeito.",
    rating: 5,
    location: "Campo Grande - MS",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos <span className="text-gradient">Clientes</span> Dizem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

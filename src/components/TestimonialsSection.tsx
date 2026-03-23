import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Excelente serviço! A equipe foi super profissional e resolveu nosso problema com cupins rapidamente. Recomendo demais!",
    rating: 5,
    location: "Campo Grande - RJ",
  },
  {
    name: "Carlos Mendes",
    text: "Atendimento rápido e eficiente. Tivemos um problema sério com baratas no restaurante e a LZ resolveu com garantia.",
    rating: 5,
    location: "Campo Grande - RJ",
  },
  {
    name: "Ana Oliveira",
    text: "Muito satisfeita com o serviço de descupinização. Os técnicos foram cuidadosos e o resultado foi perfeito.",
    rating: 5,
    location: "Campo Grande - RJ",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-6 inline-flex">Depoimentos</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
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
              className="card-elevated p-7 relative"
            >
              <Quote className="w-8 h-8 text-primary/10 absolute top-5 right-5" />
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-accent-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

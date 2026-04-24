import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa uma dedetização em Campo Grande - RJ?",
    answer:
      "O valor varia de acordo com o tipo de praga, tamanho do imóvel e nível de infestação. Entre em contato pelo WhatsApp para receber um orçamento personalizado e gratuito.",
  },
  {
    question: "Quanto tempo dura o efeito da descupinização?",
    answer:
      "O tratamento contra cupins tem efeito prolongado, podendo durar de 3 a 5 anos dependendo do método utilizado. Oferecemos garantia e monitoramento periódico.",
  },
  {
    question: "É seguro para pets e crianças?",
    answer:
      "Sim! Utilizamos produtos regulamentados pelo INEA que são seguros para pessoas e animais. Orientamos sobre o tempo necessário antes de retornar ao ambiente tratado.",
  },
  {
    question: "Preciso sair do imóvel durante a dedetização?",
    answer:
      "Em alguns casos, recomendamos a saída temporária do ambiente durante a aplicação. Nosso técnico orientará sobre o procedimento adequado para cada situação.",
  },
  {
    question: "A LZ Dedetização atende toda Campo Grande - RJ?",
    answer:
      "Sim! Atendemos todos os bairros de Campo Grande e região do Rio de Janeiro, incluindo áreas residenciais, comerciais e industriais.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-surface-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-6 inline-flex">Dúvidas</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="card-flat px-6 data-[state=open]:border-primary/20 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-[15px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

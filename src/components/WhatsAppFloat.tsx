import wpp from "@/assets/whatsapp.png";

const WHATSAPP_LINK =
  "https://wa.me/5521986722759?text=Olá! Gostaria de solicitar um orçamento para dedetização.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center animate-float btn-whatsapp !rounded-full"
    >
      <img src={wpp} alt="WhatsApp" className="w-7 h-7 object-contain" />
    </a>
  );
};

export default WhatsAppFloat;

export const WHATSAPP_NUMBER = "5561995845093";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Jean da Cultura! Vim pelo seu site e gostaria de fazer uma pergunta sobre sua atuação e suas ideias para o Distrito Federal. Podemos conversar?";

export const WHATSAPP_CULTURA_MESSAGE =
  "Olá, Jean da Cultura! Vim pela página Cultura do site e quero receber informações sobre cultura e ações no Distrito Federal.";

export const WHATSAPP_DEFAULT_URL = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);

export const WHATSAPP_CULTURA_URL = buildWhatsAppUrl(WHATSAPP_CULTURA_MESSAGE);
import { CheckCircle, Heart, Sparkles, User } from 'lucide-react';

export const CONTACT_INFO = {
  address: "Carrer Mossen Francisco Cabrera 5, 03720 Benissa",
  phoneEs: "+34 711 079 714",
  phoneDe: "+49 173 62 92 133",
  email: "sentio.wohlfuehlen@gmail.com",
  bookingNote: "Booking by Ramona or by Dany"
};

export const SERVICES_DATA = [
  {
    id: 'bowen',
    title: 'Bowen Therapy',
    icon: Heart,
    descriptionEs: "Una técnica holística suave que estimula la capacidad de curación del cuerpo. Certificada en el 'Bowen Therapy Concept'.",
    descriptionDe: "Eine sanfte, ganzheitliche Technik, die die Selbstheilungskräfte des Körpers anregt. Zertifiziert im 'Bowen Therapy Concept'.",
    descriptionEn: "A gentle, holistic technique that stimulates the body's healing capacity. Certified in the 'Bowen Therapy Concept'.",
    price60: 50,
    price30: 30
  },
  {
    id: 'tibetan',
    title: 'Tibetan Massage',
    icon: Sparkles,
    descriptionEs: "Experiencia profunda de relajación centrada en el flujo de energía y la liberación de tensiones mediante técnicas ancestrales.",
    descriptionDe: "Ein tiefes Entspannungserlebnis, das sich auf den Energiefluss und das Lösen von Verspannungen durch uralte Techniken konzentriert.",
    descriptionEn: "A deep relaxation experience focused on energy flow and releasing tension using ancient techniques.",
    price60: 50,
    price30: 30
  },
  {
    id: 'personalized',
    title: 'Personalized Treatment',
    icon: User,
    descriptionEs: "Masaje personalizado e individual adaptado a sus necesidades, incluyendo Gua Sha y ventosas.",
    descriptionDe: "Persönlich individuelle Massage, individuell auf Ihre Bedürfnisse abgestimmte Massage, inkl. Gua Sha und Schröpfgläser.",
    descriptionEn: "Personalized individual massage, individually tailored to your needs, including Gua Sha and cupping.",
    price60: 50,
    price30: 30
  },
  {
    id: 'relaxation',
    title: 'Relaxation Massage',
    icon: CheckCircle,
    descriptionEs: "Un masaje clásico diseñado para calmar la mente y relajar los músculos, ideal para desconectar del estrés diario.",
    descriptionDe: "Eine klassische Massage zur Beruhigung des Geistes und Entspannung der Muskeln, ideal um vom Alltagsstress abzuschalten.",
    descriptionEn: "A classic massage designed to calm the mind and relax muscles, ideal for disconnecting from daily stress.",
    price60: 50,
    price30: 30
  },
  {
    id: 'lymphatic',
    title: 'Lymphatic Massage',
    icon: CheckCircle, // Assuming a default icon, can be changed
    descriptionEs: "Para estimular el flujo linfático en caso de enfermedad o congestión.",
    descriptionDe: "Zur Anregung des Lymphflusses bei Krankheit oder Stauungen.",
    descriptionEn: "To stimulate lymph flow in case of illness or congestion.",
    price60: 50, // Assuming default price, can be changed
    price30: 30  // Assuming default price, can be changed
  }
];

export const GALLERY_IMAGES = [
  "https://files.catbox.moe/ykhk9r.JPG",
  "https://files.catbox.moe/dbqn1r.JPG",
  "https://files.catbox.moe/otb5am.JPG",
  "https://files.catbox.moe/b4tf9y.JPG"
];

export const TESTIMONIALS_DATA = [
  {
    name: "Nicole Bruns",
    lang: 'de',
    text: {
      de: "Ich bin wirklich schwer begeistert! Die Massage war etwas ganz Besonderes: Es wurde mit Schröpfgläsern und einem Schaber gearbeitet – eine Technik, die ich so noch nie erlebt habe. Ich hatte erstmals das Gefühl, dass wirklich tief an meinen Faszien gearbeitet wurde. Schon während der Behandlung merkte ich, wie alles leichter wurde. Sogar meine Schmerzen im unteren Rücken sind komplett verschwunden. Eine absolut empfehlenswerte Erfahrung!",
      es: "¡Estoy realmente impresionada! El masaje fue algo muy especial: se trabajó con ventosas y un raspador, una técnica que nunca antes había experimentado. Por primera vez sentí que se trabajaba profundamente en mis fascias. Ya durante el tratamiento noté cómo todo se aligeraba. Incluso mi dolor en la parte baja de la espalda ha desaparecido por completo. ¡Una experiencia absolutamente recomendable!",
      en: "I am truly amazed! The massage was something very special: it was done with cupping glasses and a scraper – a technique I had never experienced before. For the first time, I felt that my fasciae were being worked on deeply. Even during the treatment, I noticed how everything became lighter. Even my lower back pain has completely disappeared. An absolutely recommendable experience!"
    },
    stars: 5
  },
  {
    name: "Jim Marks",
    lang: 'en',
    text: {
      en: "Massage treatment with Dany is fabulous. I am now a regular, I literally feel like I am floating when I leave and feel so much better in body and soul. I can highly recommend.",
      de: "Die Massagebehandlung bei Dany ist fabelhaft. Ich bin jetzt Stammkunde, ich fühle mich buchstäblich, als würde ich schweben, wenn ich gehe, und fühle mich in Körper und Seele so viel besser. Ich kann es nur wärmstens empfehlen.",
      es: "El tratamiento de masaje con Dany es fabuloso. Ahora soy un cliente habitual, literalmente siento que estoy flotando cuando me voy y me siento mucho mejor en cuerpo y alma. Lo recomiendo encarecidamente."
    },
    stars: 5
  },
  {
    name: "Inge Hennig",
    lang: 'de',
    text: {
      de: "Ein Erlebnis der besonderen Art. Das Ambiente ist sehr geschmackvoll und es lädt zur totalen Entspannung ein. Solch eine Massage habe ich noch nie bekommen, sehr zu empfehlen, man ist ein neuer Mensch. Werde ich direkt nächste Woche nochmal genießen. nochmal danke, liebe Dany.",
      es: "Una experiencia de un tipo especial. El ambiente es de muy buen gusto e invita a la relajación total. Nunca he recibido un masaje así, muy recomendable, eres una persona nueva. Lo disfrutaré de nuevo la próxima semana. Gracias de nuevo, querida Dany.",
      en: "An experience of a special kind. The ambiance is very tasteful and invites total relaxation. I have never had a massage like this before, highly recommended, you are a new person. I will enjoy it again next week. thanks again, dear Dany."
    },
    stars: 5
  },
  {
    name: "Ron W",
    lang: 'nl',
    text: {
      nl: "Vandaag hier voor de eerste keer langs geweest, Heel goede helende massage gehad ik kan de lovende commentatoren die er tot nu waren alleen maar beamen. Deze dame heeft gouden handen, doe zo verder Dany",
      de: "Heute zum ersten Mal hier gewesen, eine sehr gute heilende Massage bekommen. Ich kann den bisherigen lobenden Kommentaren nur zustimmen. Diese Dame hat goldene Hände, mach weiter so Dany.",
      es: "He estado aquí por primera vez hoy, he recibido un masaje curativo muy bueno. Solo puedo estar de acuerdo con los comentarios elogiosos que ha habido hasta ahora. Esta dama tiene manos de oro, sigue así Dany.",
      en: "Been here for the first time today, had a very good healing massage. I can only agree with the rave reviews so far. This lady has golden hands, keep it up Dany."
    },
    stars: 5
  }
];

export const NEWS_DATA: any[] = [
  // Future news items will be added here
];

export const FAQ_DATA = [
  {
    id: 'booking',
    questionEs: "¿Necesito reservar con antelación?",
    answerEs: "Sí, recomendamos reservar su cita con antelación para asegurar la disponibilidad que mejor se adapte a su horario.",
    questionDe: "Muss ich im Voraus buchen?",
    answerDe: "Ja, wir empfehlen, Ihren Termin im Voraus zu buchen, um die Verfügbarkeit sicherzustellen, die am besten zu Ihrem Zeitplan passt.",
    questionEn: "Do I need to book in advance?",
    answerEn: "Yes, we recommend booking your appointment in advance to ensure the availability that best fits your schedule."
  },
  {
    id: 'wear',
    questionEs: "¿Qué debo llevar puesto?",
    answerEs: "Para la mayoría de los masajes, se le proporcionará privacidad para desvestirse hasta su nivel de comodidad. Para la Terapia Bowen, se recomienda ropa ligera y cómoda.",
    questionDe: "Was soll ich anziehen?",
    answerDe: "Bei den meisten Massagen haben Sie die Möglichkeit, sich nach Belieben zu entkleiden.",
    questionEn: "What should I wear?",
    answerEn: "For most massages, you will be provided privacy to undress to your comfort level. For Bowen Therapy, light, comfortable clothing is recommended."
  },
  {
    id: 'payment',
    questionEs: "¿Qué métodos de pago aceptan?",
    answerEs: "Aceptamos efectivo. El pago se realiza después del tratamiento.",
    questionDe: "Welche Zahlungsmethoden akzeptieren Sie?",
    answerDe: "Wir akzeptieren Barzahlung. Die Bezahlung erfolgt nach der Behandlung.",
    questionEn: "What payment methods do you accept?",
    answerEn: "We accept cash. Payment is made after the treatment."
  },
  {
    id: 'cancellation',
    questionEs: "¿Cuál es su política de cancelación?",
    answerEs: "Por favor, avísenos con al menos 24 horas de antelación si necesita cancelar o reprogramar su cita.",
    questionDe: "Wie ist Ihre Stornierungspolitik?",
    answerDe: "Bitte geben Sie uns mindestens 24 Stunden im Voraus Bescheid, wenn Sie Ihren Termin absagen oder verschieben müssen.",
    questionEn: "What is your cancellation policy?",
    answerEn: "Please notify us at least 24 hours in advance if you need to cancel or reschedule your appointment."
  }
];

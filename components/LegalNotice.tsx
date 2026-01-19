import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface LegalNoticeProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const getContent = () => {
    switch(language) {
      case 'de':
        return {
          title: "Impressum & Rechtliche Hinweise",
          sections: [
            {
              title: "1. Identifikationsdaten",
              content: `In Erfüllung der Informationspflicht gemäß Artikel 10 des spanischen Gesetzes 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und elektronischen Handel (LSSI-CE) werden folgende Daten angegeben:\n\nInhaber der Website: Daniela Böhme Albrecht\nNIF/NIE: Z2422641X\nGeschäftsadresse: Carrer Mossen Francisco Cabrera 5, 03720 Benissa, Alicante, Spanien\nE-Mail: sentio.wohlfuehlen@gmail.com\nTelefon: +34 711 079 714 / +49 173 62 92 133\nWebsite: sentiobydany.es`
            },
            {
              title: "2. Gegenstand und medizinischer Haftungsausschluss",
              content: `Der Zweck dieser Website ist die Präsentation von Wellness-, Entspannungs- und Körperpflege-Dienstleistungen. Wichtiger Hinweis: Die auf dieser Website bereitgestellten Informationen dienen ausschließlich informativen Zwecken. Die angebotenen Dienstleistungen (Massagen, Wellness) ersetzen keinesfalls eine ärztliche Diagnose oder Behandlung. Bei gesundheitlichen Beschwerden konsultieren Sie bitte einen Arzt.`
            },
            {
              title: "3. Nutzungsbedingungen",
              content: `Der Zugang und/oder die Nutzung dieses Portals verleiht dem Benutzer den Status eines USERS, der ab diesem Zugang und/oder dieser Nutzung die hier aufgeführten Allgemeinen Nutzungsbedingungen akzeptiert.`
            },
            {
              title: "4. Geistiges und gewerbliches Eigentum",
              content: `Der Inhaber ist Eigentümer aller Rechte des geistigen und gewerblichen Eigentums an seiner Website sowie der darin enthaltenen Elemente (Texte, Bilder, Audio, Video, Design).\n\nHerkunftsnachweis der Medien: Die auf dieser Website verwendeten Inhalte sind rechtlich geschützt:\n\n• Eigene Inhalte: Eigentum von Daniela Böhme Albrecht.\n\n• Stock-Medien: Ordnungsgemäß lizenziert (z. B. Videos via Canva Pro).\n\n• Lizenzfreie Medien: Verwendung von lizenzfreiem Material (z. B. Audio via Pixabay).\n\n• Digitale Bearbeitung: Teile des Bildmaterials wurden unter Zuhilfenahme digitaler Tools (inkl. künstlicher Intelligenz / AI) erstellt oder bearbeitet.\n\nEine Vervielfältigung, Verbreitung oder Veränderung dieser Inhalte ohne ausdrückliche Genehmigung ist untersagt.`
            },
            {
              title: "5. Preise und Steuern",
              content: `Sofern Preise auf der Website angegeben werden, verstehen sich diese, soweit nicht anders angegeben, inklusive der gesetzlichen Mehrwertsteuer (IVA) gemäß den geltenden spanischen Vorschriften.`
            },
            {
              title: "6. Haftungsausschluss (Technik & Links)",
              content: `Der Inhaber haftet nicht für Schäden, die durch Fehler oder Auslassungen in den Inhalten, fehlende Verfügbarkeit des Portals oder die Übertragung von Viren trotz ergriffener technologischer Sicherheitsmaßnahmen (z. B. durch Cloudflare) entstehen könnten. Wir übernehmen keine Haftung für die Inhalte externer Links.`
            },
            {
              title: "7. EU-Streitschlichtung",
              content: `Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/\n\nWir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.`
            },
            {
              title: "8. Anwendbares Recht und Gerichtsstand",
              content: `Die Beziehung zwischen dem Inhaber und dem Benutzer unterliegt den geltenden spanischen Vorschriften (Legislación Española). Streitigkeiten unterliegen der Zuständigkeit der Gerichte von Dénia/Alicante, sofern das Gesetz nichts anderes zwingend vorschreibt.`
            }
          ]
        };
      case 'en':
        return {
          title: "Legal Notice",
          sections: [
            {
              title: "1. Identification Data",
              content: `In compliance with the duty of information contained in article 10 of Spanish Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce (LSSI-CE), the following data are reflected:\n\nWebsite Owner: Daniela Böhme Albrecht\nNIF/NIE: Z2422641X\nBusiness Address: Carrer Mossen Francisco Cabrera 5, 03720 Benissa, Alicante, Spain\nEmail: sentio.wohlfuehlen@gmail.com\nPhone: +34 711 079 714 / +49 173 62 92 133\nWebsite: sentiobydany.es`
            },
            {
              title: "2. Purpose and Medical Disclaimer",
              content: `The purpose of this website is to present wellness, relaxation and body care services. Important notice: The information provided on this website is for informational purposes only. The services offered (massages, wellness) do not in any way replace medical diagnosis or treatment. In case of health complaints, please consult a doctor.`
            },
            {
              title: "3. Terms of Use",
              content: `Access to and/or use of this portal attributes the status of USER to the user, who accepts, from such access and/or use, the General Conditions of Use set forth herein.`
            },
            {
              title: "4. Intellectual and Industrial Property",
              content: `The Owner owns all rights of intellectual and industrial property of her website, as well as the elements contained therein (texts, images, audio, video, design).\n\nMedia Source Attribution: The content used on this website is legally protected:\n\n• Own Content: Property of Daniela Böhme Albrecht.\n\n• Stock Media: Properly licensed (e.g., videos via Canva Pro).\n\n• Royalty-Free Media: Use of royalty-free material (e.g., audio via Pixabay).\n\n• Digital Editing: Parts of the image material were created or edited using digital tools (including artificial intelligence / AI).\n\nReproduction, distribution or modification of this content without express permission is prohibited.`
            },
            {
              title: "5. Prices and Taxes",
              content: `If prices are indicated on the website, they are understood, unless otherwise stated, to include the statutory value added tax (IVA) in accordance with applicable Spanish regulations.`
            },
            {
              title: "6. Disclaimer (Technology & Links)",
              content: `The Owner is not liable for damages that may arise from errors or omissions in the content, lack of availability of the portal or transmission of viruses despite implemented technological security measures (e.g., via Cloudflare). We assume no liability for the content of external links.`
            },
            {
              title: "7. EU Dispute Resolution",
              content: `The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/\n\nWe are not obligated and not willing to participate in dispute resolution proceedings before a consumer arbitration board.`
            },
            {
              title: "8. Applicable Law and Jurisdiction",
              content: `The relationship between the Owner and the user is subject to applicable Spanish regulations (Legislación Española). Disputes are subject to the jurisdiction of the courts of Dénia/Alicante, unless the law mandatorily provides otherwise.`
            }
          ]
        };
      default: // es
        return {
          title: "Aviso Legal",
          sections: [
            {
              title: "1. Datos Identificativos",
              content: `En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se reflejan a continuación los siguientes datos:\n\nTitular de la web: Daniela Böhme Albrecht\nNIF/NIE: Z2422641X\nDomicilio social: Carrer Mossen Francisco Cabrera 5, 03720 Benissa, Alicante, España\nCorreo electrónico: sentio.wohlfuehlen@gmail.com\nTeléfono: +34 711 079 714 / +49 173 62 92 133\nSitio web: sentiobydany.es`
            },
            {
              title: "2. Objeto y descargo de responsabilidad médica",
              content: `El propósito de este sitio web es la presentación de servicios de bienestar, relajación y cuidado corporal. Nota importante: La información proporcionada en este sitio web tiene únicamente fines informativos. Los servicios ofrecidos (masajes, bienestar) no sustituyen en modo alguno un diagnóstico o tratamiento médico. En caso de molestias de salud, consulte a un médico.`
            },
            {
              title: "3. Condiciones de Uso",
              content: `El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.`
            },
            {
              title: "4. Propiedad Intelectual e Industrial",
              content: `El Titular es propietario de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (textos, imágenes, audio, vídeo, diseño).\n\nAtribución de origen de los medios: El contenido utilizado en este sitio web está legalmente protegido:\n\n• Contenido propio: Propiedad de Daniela Böhme Albrecht.\n\n• Medios de stock: Licenciados adecuadamente (por ejemplo, videos a través de Canva Pro).\n\n• Medios libres de regalías: Uso de material libre de regalías (por ejemplo, audio a través de Pixabay).\n\n• Edición digital: Partes del material gráfico fueron creadas o editadas utilizando herramientas digitales (incluida inteligencia artificial / IA).\n\nSe prohíbe la reproducción, distribución o modificación de este contenido sin permiso expreso.`
            },
            {
              title: "5. Precios e Impuestos",
              content: `Si se indican precios en el sitio web, se entienden, salvo indicación contraria, incluyendo el impuesto sobre el valor añadido (IVA) de acuerdo con las normativas españolas vigentes.`
            },
            {
              title: "6. Descargo de Responsabilidad (Tecnología y Enlaces)",
              content: `El Titular no se hace responsable de los daños que puedan surgir por errores u omisiones en los contenidos, falta de disponibilidad del portal o transmisión de virus a pesar de las medidas de seguridad tecnológicas implementadas (por ejemplo, a través de Cloudflare). No asumimos responsabilidad por el contenido de enlaces externos.`
            },
            {
              title: "7. Resolución de Conflictos de la UE",
              content: `La Comisión Europea proporciona una plataforma para la resolución de conflictos en línea (ODR): https://ec.europa.eu/consumers/odr/\n\nNo estamos obligados ni dispuestos a participar en procedimientos de resolución de conflictos ante una junta de arbitraje de consumidores.`
            },
            {
              title: "8. Ley Aplicable y Jurisdicción",
              content: `La relación entre el Titular y el usuario está sujeta a las normativas españolas vigentes (Legislación Española). Las disputas están sujetas a la jurisdicción de los tribunales de Dénia/Alicante, a menos que la ley disponga obligatoriamente otra cosa.`
            }
          ]
        };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 overflow-y-auto">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-royal border border-gold/30 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up flex flex-col">
        <div className="bg-gradient-to-r from-royal to-royal-light p-6 border-b border-gold/20 flex justify-between items-center flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">{content.title}</h2>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-gold transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="p-6 md:p-8 pb-24">
            {content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-serif font-bold text-gold mb-4">{section.title}</h3>
                <div className="text-white/70 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-royal/95 backdrop-blur-md p-6 border-t border-gold/20 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gold text-royal font-bold rounded-lg hover:bg-gold/90 transition-colors"
          >
            {t.privacy.close}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;



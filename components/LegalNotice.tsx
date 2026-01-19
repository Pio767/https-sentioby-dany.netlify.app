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
          title: "Impressum",
          sections: [
            {
              title: "1. Identifikationsdaten",
              content: `In Erfüllung der Informationspflicht gemäß Artikel 10 des Gesetzes 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und elektronischen Handel (LSSI-CE) werden folgende Daten angegeben:\n\n• Website-Inhaber: Daniela Böhme Albrecht\n• NIF/NIE: Z2422641 X\n• Adresse: Carrer Mossen Francisco Cabrera 5, 03720 Benissa, Alicante, Spanien\n• E-Mail: sentio.wohlfuehlen@gmail.com\n• Telefon: +34 711 079 714 / +49 173 62 92 133\n• Website: sentiobydany.es`
            },
            {
              title: "2. Benutzer",
              content: "Der Zugang und/oder die Nutzung dieses Portals verleiht dem BENUTZER den Status, der ab diesem Zugang und/oder dieser Nutzung die hier aufgeführten Allgemeinen Nutzungsbedingungen akzeptiert."
            },
            {
              title: "3. Nutzung des Portals",
              content: "Die Website bietet Zugang zu einer Vielzahl von Informationen, Dienstleistungen, Programmen oder Daten (im Folgenden \"die Inhalte\") im Internet, die dem Inhaber gehören. Der BENUTZER übernimmt die Verantwortung für die Nutzung des Portals."
            },
            {
              title: "4. Geistiges und gewerbliches Eigentum",
              content: "Der Inhaber ist Eigentümer aller Rechte des geistigen und gewerblichen Eigentums an seiner Website sowie der darin enthaltenen Elemente (Bilder, Ton, Audio, Video, Software oder Texte; Marken oder Logos usw.). Alle Rechte vorbehalten."
            },
            {
              title: "5. Haftungsausschluss",
              content: "Der Inhaber haftet in keinem Fall für Schäden jeglicher Art, die verursacht werden könnten, beispielhaft: Fehler oder Auslassungen in den Inhalten, fehlende Verfügbarkeit des Portals oder die Übertragung von Viren oder bösartigen oder schädlichen Programmen in den Inhalten, obwohl alle notwendigen technischen Maßnahmen ergriffen wurden, um dies zu vermeiden."
            }
          ]
        };
      case 'en':
        return {
          title: "Legal Notice",
          sections: [
            {
              title: "1. Identification Data",
              content: `In compliance with the duty of information contained in article 10 of Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce (LSSI-CE), the following data are reflected:\n\n• Website owner: Daniela Böhme Albrecht\n• NIF/NIE: Z2422641 X\n• Address: Carrer Mossen Francisco Cabrera 5, 03720 Benissa, Alicante, Spain\n• Email: sentio.wohlfuehlen@gmail.com\n• Phone: +34 711 079 714 / +49 173 62 92 133\n• Website: sentiobydany.es`
            },
            {
              title: "2. Users",
              content: "The access and/or use of this portal attributes the condition of USER, who accepts, from said access and/or use, the General Conditions of Use reflected here."
            },
            {
              title: "3. Use of the Portal",
              content: "The website provides access to a multitude of information, services, programs or data (hereinafter, \"the contents\") on the Internet belonging to the Owner. The USER assumes responsibility for the use of the portal."
            },
            {
              title: "4. Intellectual and Industrial Property",
              content: "The Owner owns all rights of intellectual and industrial property of his website, as well as the elements contained therein (images, sound, audio, video, software or texts; trademarks or logos, etc.). All rights reserved."
            },
            {
              title: "5. Exclusion of Guarantees and Liability",
              content: "The Owner is not responsible, in any case, for damages of any nature that could be caused, by way of example: errors or omissions in the contents, lack of availability of the portal or the transmission of viruses or malicious or harmful programs in the contents, despite having adopted all the necessary technological measures to avoid it."
            }
          ]
        };
      default: // es
        return {
          title: "Aviso Legal",
          sections: [
            {
              title: "1. Datos Identificativos",
              content: `En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se reflejan a continuación los siguientes datos:\n\n• Titular de la web: Daniela Böhme Albrecht\n• NIF/NIE: Z2422641 X\n• Domicilio: Carrer Mossen Francisco Cabrera 5, 03720 Benissa, Alicante, España\n• Correo electrónico: sentio.wohlfuehlen@gmail.com\n• Teléfono: +34 711 079 714 / +49 173 62 92 133\n• Sitio web: sentiobydany.es`
            },
            {
              title: "2. Usuarios",
              content: "El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas."
            },
            {
              title: "3. Uso del Portal",
              content: "La página web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, \"los contenidos\") en Internet pertenecientes al Titular. El USUARIO asume la responsabilidad del uso del portal."
            },
            {
              title: "4. Propiedad Intelectual e Industrial",
              content: "El Titular es propietario de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, etc.). Todos los derechos reservados."
            },
            {
              title: "5. Exclusión de Garantías y Responsabilidad",
              content: "El Titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo."
            }
          ]
        };
    }
  };

  const content = getContent();

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 overflow-y-auto">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-royal border border-gold/30 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="sticky top-0 bg-gradient-to-r from-royal to-royal-light p-6 border-b border-gold/20 flex justify-between items-center z-10">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">{content.title}</h2>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-gold transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
          {content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-serif font-bold text-gold mb-4">{section.title}</h3>
              <div className="text-white/70 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 bg-royal/95 backdrop-blur-md p-6 border-t border-gold/20">
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



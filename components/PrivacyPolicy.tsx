import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { CONTACT_INFO } from '../constants';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const getContent = () => {
    switch(language) {
      case 'de':
        return {
          title: "Datenschutzerklärung (DSGVO)",
          lastUpdated: "Stand",
          intro: "Stand: Januar 2026\n\nWir respektieren Ihre Privatsphäre und verarbeiten Ihre Daten gemäß der EU-Datenschutz-Grundverordnung (DSGVO) sowie dem spanischen Organgesetz 3/2018 über den Schutz personenbezogener Daten (LOPD-GDD).",
          sections: [
            {
              title: "1. Verantwortlicher für die Datenverarbeitung",
              content: `Daniela Böhme Albrecht\nCarrer Mossen Francisco Cabrera 5, 03720 Benissa (Alicante), Spanien\nE-Mail: sentio.wohlfuehlen@gmail.com`
            },
            {
              title: "2. Welche Daten wir erfassen und warum",
              content: `A. Kontaktanfragen (E-Mail, Telefon)\n\nWenn Sie uns kontaktieren, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse oder Telefonnummer zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen.\n\nRechtsgrundlage: Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).\n\nB. Technische Daten (Server-Logs)\n\nBeim Besuch der Website werden automatisch technische Daten erfasst (IP-Adresse, Browser, Uhrzeit). Diese Daten sind notwendig, um die Sicherheit und Stabilität der Website zu gewährleisten.\n\nRechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).\n\nC. WhatsApp\n\nWenn Sie uns über WhatsApp kontaktieren, nutzen Sie einen Dienst der Meta Platforms Ireland Ltd. Dabei werden Daten (z. B. Ihre Mobilnummer) an Meta übermittelt und ggf. auf Servern in den USA verarbeitet. Wir nutzen WhatsApp Business ausschließlich zur Kommunikation auf Ihren Wunsch hin.\n\nRechtsgrundlage: Ihre Einwilligung durch aktive Kontaktaufnahme (Art. 6 Abs. 1 lit. a DSGVO).`
            },
            {
              title: "3. Internationale Datenübermittlung & Hosting (Cloudflare)",
              content: `Diese Website wird sicher bereitgestellt und geschützt durch Cloudflare, Inc. (USA). Cloudflare fungiert als Content Delivery Network (CDN) und Sicherheitsdienst. Dabei werden Ihre Daten (insb. IP-Adresse) über Server weltweit, auch in den USA, geleitet.\n\nDatenschutz-Garantie: Cloudflare ist unter dem EU-U.S. Data Privacy Framework (DPF) zertifiziert, was laut EU-Kommission ein angemessenes Datenschutzniveau garantiert. Zusätzlich bestehen Standardvertragsklauseln (SCC).`
            },
            {
              title: "4. Speicherdauer",
              content: `Ihre Daten werden gelöscht, sobald sie für den Zweck der Erhebung nicht mehr erforderlich sind (z. B. nach abgeschlossener Anfrage), sofern keine gesetzlichen Aufbewahrungspflichten in Spanien (z. B. steuerliche Pflichten) bestehen.`
            },
            {
              title: "5. Ihre Rechte",
              content: `Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit. Zur Ausübung Ihrer Rechte wenden Sie sich an: sentio.wohlfuehlen@gmail.com.`
            },
            {
              title: "6. Beschwerderecht",
              content: `Sollten Sie der Ansicht sein, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, haben Sie das Recht auf Beschwerde bei der zuständigen spanischen Aufsichtsbehörde: Agencia Española de Protección de Datos (AEPD)\nWebsite: www.aepd.es`
            }
          ]
        };
      case 'en':
        return {
          title: "Privacy Policy (GDPR)",
          lastUpdated: "Status",
          intro: "Status: January 2026\n\nWe respect your privacy and process your data in accordance with the EU General Data Protection Regulation (GDPR) and the Spanish Organic Law 3/2018 on the Protection of Personal Data (LOPD-GDD).",
          sections: [
            {
              title: "1. Data Controller",
              content: `Daniela Böhme Albrecht\nCarrer Mossen Francisco Cabrera 5, 03720 Benissa (Alicante), Spain\nEmail: sentio.wohlfuehlen@gmail.com`
            },
            {
              title: "2. What Data We Collect and Why",
              content: `A. Contact Inquiries (Email, Phone)\n\nWhen you contact us, we process your name, email address or phone number to handle your inquiry and for possible follow-up questions.\n\nLegal Basis: Performance of pre-contractual measures (Art. 6(1)(b) GDPR).\n\nB. Technical Data (Server Logs)\n\nWhen visiting the website, technical data is automatically collected (IP address, browser, time). This data is necessary to ensure the security and stability of the website.\n\nLegal Basis: Legitimate interest (Art. 6(1)(f) GDPR).\n\nC. WhatsApp\n\nWhen you contact us via WhatsApp, you use a service of Meta Platforms Ireland Ltd. In this process, data (e.g., your mobile number) is transmitted to Meta and may be processed on servers in the USA. We use WhatsApp Business exclusively for communication at your request.\n\nLegal Basis: Your consent through active contact (Art. 6(1)(a) GDPR).`
            },
            {
              title: "3. International Data Transfer & Hosting (Cloudflare)",
              content: `This website is securely provided and protected by Cloudflare, Inc. (USA). Cloudflare acts as a Content Delivery Network (CDN) and security service. In this process, your data (especially IP address) is routed through servers worldwide, including in the USA.\n\nData Protection Guarantee: Cloudflare is certified under the EU-U.S. Data Privacy Framework (DPF), which according to the EU Commission guarantees an adequate level of data protection. In addition, Standard Contractual Clauses (SCC) are in place.`
            },
            {
              title: "4. Storage Duration",
              content: `Your data will be deleted as soon as it is no longer required for the purpose of collection (e.g., after the inquiry has been completed), unless statutory retention obligations in Spain (e.g., tax obligations) exist.`
            },
            {
              title: "5. Your Rights",
              content: `You have the right to information, rectification, erasure, restriction of processing and data portability. To exercise your rights, contact: sentio.wohlfuehlen@gmail.com.`
            },
            {
              title: "6. Right to Complain",
              content: `If you believe that the processing of your data violates data protection law, you have the right to file a complaint with the competent Spanish supervisory authority: Agencia Española de Protección de Datos (AEPD)\nWebsite: www.aepd.es`
            }
          ]
        };
      default: // es
        return {
          title: "Política de Privacidad (RGPD)",
          lastUpdated: "Estado",
          intro: "Estado: Enero 2026\n\nRespetamos su privacidad y procesamos sus datos de acuerdo con el Reglamento General de Protección de Datos de la UE (RGPD) y la Ley Orgánica 3/2018 española sobre Protección de Datos Personales (LOPD-GDD).",
          sections: [
            {
              title: "1. Responsable del Tratamiento",
              content: `Daniela Böhme Albrecht\nCarrer Mossen Francisco Cabrera 5, 03720 Benissa (Alicante), España\nCorreo electrónico: sentio.wohlfuehlen@gmail.com`
            },
            {
              title: "2. Qué Datos Recopilamos y Por Qué",
              content: `A. Consultas de Contacto (Correo, Teléfono)\n\nCuando nos contacta, procesamos su nombre, dirección de correo electrónico o número de teléfono para manejar su consulta y para posibles preguntas de seguimiento.\n\nBase Legal: Ejecución de medidas precontractuales (Art. 6(1)(b) RGPD).\n\nB. Datos Técnicos (Logs del Servidor)\n\nAl visitar el sitio web, se recopilan automáticamente datos técnicos (dirección IP, navegador, hora). Estos datos son necesarios para garantizar la seguridad y estabilidad del sitio web.\n\nBase Legal: Interés legítimo (Art. 6(1)(f) RGPD).\n\nC. WhatsApp\n\nCuando nos contacta a través de WhatsApp, utiliza un servicio de Meta Platforms Ireland Ltd. En este proceso, se transmiten datos (p. ej., su número móvil) a Meta y pueden procesarse en servidores en los EE. UU. Utilizamos WhatsApp Business exclusivamente para comunicación a su solicitud.\n\nBase Legal: Su consentimiento mediante contacto activo (Art. 6(1)(a) RGPD).`
            },
            {
              title: "3. Transferencia Internacional de Datos y Alojamiento (Cloudflare)",
              content: `Este sitio web se proporciona de forma segura y está protegido por Cloudflare, Inc. (EE. UU.). Cloudflare actúa como una Red de Distribución de Contenido (CDN) y servicio de seguridad. En este proceso, sus datos (especialmente la dirección IP) se enrutan a través de servidores en todo el mundo, incluso en los EE. UU.\n\nGarantía de Protección de Datos: Cloudflare está certificado bajo el Marco de Privacidad de Datos UE-EE. UU. (DPF), que según la Comisión Europea garantiza un nivel adecuado de protección de datos. Además, existen Cláusulas Contractuales Estándar (SCC).`
            },
            {
              title: "4. Duración del Almacenamiento",
              content: `Sus datos se eliminarán tan pronto como ya no sean necesarios para el propósito de recopilación (p. ej., después de completar la consulta), a menos que existan obligaciones legales de retención en España (p. ej., obligaciones fiscales).`
            },
            {
              title: "5. Sus Derechos",
              content: `Tiene derecho a información, rectificación, supresión, limitación del procesamiento y portabilidad de datos. Para ejercer sus derechos, comuníquese con: sentio.wohlfuehlen@gmail.com.`
            },
            {
              title: "6. Derecho a Presentar una Queja",
              content: `Si considera que el procesamiento de sus datos viola la ley de protección de datos, tiene derecho a presentar una queja ante la autoridad de supervisión española competente: Agencia Española de Protección de Datos (AEPD)\nSitio web: www.aepd.es`
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
        {/* Header */}
        <div className="bg-gradient-to-r from-royal to-royal-light p-6 border-b border-gold/20 flex justify-between items-center flex-shrink-0">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">{content.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-gold transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="p-6 md:p-8 pb-24">
            <p className="text-white/80 mb-8 leading-relaxed whitespace-pre-line">{content.intro}</p>
            
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

        {/* Footer */}
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

export default PrivacyPolicy;






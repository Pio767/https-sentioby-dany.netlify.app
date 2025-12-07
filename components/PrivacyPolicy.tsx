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
          lastUpdated: "Letzte Aktualisierung",
          intro: "Wir respektieren Ihre Privatsphäre und verpflichten uns, Ihre persönlichen Daten gemäß der Datenschutz-Grundverordnung (DSGVO) zu schützen.",
          sections: [
            {
              title: "1. Verantwortlicher",
              content: `Verantwortlich für die Datenverarbeitung ist:\n\n${CONTACT_INFO.address}\nE-Mail: ${CONTACT_INFO.email}\nTelefon: ${CONTACT_INFO.phoneEs} / ${CONTACT_INFO.phoneDe}`
            },
            {
              title: "2. Erhobene Daten",
              content: "Wir erheben folgende personenbezogene Daten:\n\n• Name und Kontaktdaten (E-Mail, Telefonnummer) bei Kontaktaufnahme\n• IP-Adresse und Browser-Informationen (automatisch durch Server-Logs)\n• Cookies und ähnliche Technologien (siehe Cookie-Richtlinie)"
            },
            {
              title: "3. Zweck der Datenverarbeitung",
              content: "Ihre Daten werden verwendet für:\n\n• Bearbeitung von Anfragen und Terminbuchungen\n• Kommunikation per E-Mail, Telefon oder WhatsApp\n• Verbesserung unserer Website und Services\n• Rechtliche Compliance"
            },
            {
              title: "4. Rechtsgrundlage",
              content: "Die Verarbeitung erfolgt auf Grundlage von:\n\n• Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)\n• Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)\n• Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)"
            },
            {
              title: "5. Datenweitergabe",
              content: "Ihre Daten werden nicht an Dritte verkauft. Wir können Daten weitergeben an:\n\n• Dienstleister (Hosting, E-Mail-Service) unter strikten Vertraulichkeitsvereinbarungen\n• Behörden bei gesetzlicher Verpflichtung"
            },
            {
              title: "6. Datenspeicherung",
              content: "Daten werden nur so lange gespeichert, wie es für die angegebenen Zwecke erforderlich ist oder gesetzlich vorgeschrieben ist."
            },
            {
              title: "7. Ihre Rechte",
              content: "Sie haben folgende Rechte:\n\n• Recht auf Auskunft (Art. 15 DSGVO)\n• Recht auf Berichtigung (Art. 16 DSGVO)\n• Recht auf Löschung (Art. 17 DSGVO)\n• Recht auf Einschränkung (Art. 18 DSGVO)\n• Recht auf Datenübertragbarkeit (Art. 20 DSGVO)\n• Widerspruchsrecht (Art. 21 DSGVO)\n• Recht auf Beschwerde bei einer Aufsichtsbehörde"
            },
            {
              title: "8. Kontakt",
              content: `Bei Fragen zum Datenschutz kontaktieren Sie uns:\n\nE-Mail: ${CONTACT_INFO.email}\nAdresse: ${CONTACT_INFO.address}`
            }
          ]
        };
      case 'en':
        return {
          title: "Privacy Policy (GDPR)",
          lastUpdated: "Last Updated",
          intro: "We respect your privacy and are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).",
          sections: [
            {
              title: "1. Data Controller",
              content: `The data controller is:\n\n${CONTACT_INFO.address}\nEmail: ${CONTACT_INFO.email}\nPhone: ${CONTACT_INFO.phoneEs} / ${CONTACT_INFO.phoneDe}`
            },
            {
              title: "2. Data Collected",
              content: "We collect the following personal data:\n\n• Name and contact details (email, phone) when you contact us\n• IP address and browser information (automatically via server logs)\n• Cookies and similar technologies (see Cookie Policy)"
            },
            {
              title: "3. Purpose of Processing",
              content: "Your data is used for:\n\n• Processing inquiries and appointment bookings\n• Communication via email, phone, or WhatsApp\n• Improving our website and services\n• Legal compliance"
            },
            {
              title: "4. Legal Basis",
              content: "Processing is based on:\n\n• Your consent (Art. 6(1)(a) GDPR)\n• Contract performance (Art. 6(1)(b) GDPR)\n• Legitimate interests (Art. 6(1)(f) GDPR)"
            },
            {
              title: "5. Data Sharing",
              content: "Your data is not sold to third parties. We may share data with:\n\n• Service providers (hosting, email service) under strict confidentiality agreements\n• Authorities when legally required"
            },
            {
              title: "6. Data Retention",
              content: "Data is only stored for as long as necessary for the stated purposes or as required by law."
            },
            {
              title: "7. Your Rights",
              content: "You have the following rights:\n\n• Right of access (Art. 15 GDPR)\n• Right to rectification (Art. 16 GDPR)\n• Right to erasure (Art. 17 GDPR)\n• Right to restriction (Art. 18 GDPR)\n• Right to data portability (Art. 20 GDPR)\n• Right to object (Art. 21 GDPR)\n• Right to lodge a complaint with a supervisory authority"
            },
            {
              title: "8. Contact",
              content: `For privacy inquiries, contact us:\n\nEmail: ${CONTACT_INFO.email}\nAddress: ${CONTACT_INFO.address}`
            }
          ]
        };
      default: // es
        return {
          title: "Política de Privacidad (RGPD)",
          lastUpdated: "Última actualización",
          intro: "Respetamos su privacidad y nos comprometemos a proteger sus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD).",
          sections: [
            {
              title: "1. Responsable del Tratamiento",
              content: `El responsable del tratamiento de datos es:\n\n${CONTACT_INFO.address}\nCorreo electrónico: ${CONTACT_INFO.email}\nTeléfono: ${CONTACT_INFO.phoneEs} / ${CONTACT_INFO.phoneDe}`
            },
            {
              title: "2. Datos Recopilados",
              content: "Recopilamos los siguientes datos personales:\n\n• Nombre y datos de contacto (correo electrónico, teléfono) al contactarnos\n• Dirección IP e información del navegador (automáticamente mediante registros del servidor)\n• Cookies y tecnologías similares (consulte la Política de Cookies)"
            },
            {
              title: "3. Finalidad del Tratamiento",
              content: "Sus datos se utilizan para:\n\n• Procesar consultas y reservas de citas\n• Comunicación por correo electrónico, teléfono o WhatsApp\n• Mejorar nuestro sitio web y servicios\n• Cumplimiento legal"
            },
            {
              title: "4. Base Legal",
              content: "El tratamiento se basa en:\n\n• Su consentimiento (Art. 6.1.a RGPD)\n• Ejecución de contrato (Art. 6.1.b RGPD)\n• Intereses legítimos (Art. 6.1.f RGPD)"
            },
            {
              title: "5. Compartir Datos",
              content: "Sus datos no se venden a terceros. Podemos compartir datos con:\n\n• Proveedores de servicios (alojamiento, servicio de correo) bajo estrictos acuerdos de confidencialidad\n• Autoridades cuando sea legalmente requerido"
            },
            {
              title: "6. Conservación de Datos",
              content: "Los datos se conservan solo durante el tiempo necesario para los fines indicados o según lo requiera la ley."
            },
            {
              title: "7. Sus Derechos",
              content: "Usted tiene los siguientes derechos:\n\n• Derecho de acceso (Art. 15 RGPD)\n• Derecho de rectificación (Art. 16 RGPD)\n• Derecho de supresión (Art. 17 RGPD)\n• Derecho de limitación (Art. 18 RGPD)\n• Derecho a la portabilidad (Art. 20 RGPD)\n• Derecho de oposición (Art. 21 RGPD)\n• Derecho a presentar una reclamación ante una autoridad de control"
            },
            {
              title: "8. Contacto",
              content: `Para consultas sobre privacidad, contáctenos:\n\nCorreo electrónico: ${CONTACT_INFO.email}\nDirección: ${CONTACT_INFO.address}`
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
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-royal to-royal-light p-6 border-b border-gold/20 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">{content.title}</h2>
            <p className="text-white/60 text-sm mt-1">{content.lastUpdated}: {new Date().toLocaleDateString(language === 'de' ? 'de-DE' : language === 'en' ? 'en-GB' : 'es-ES')}</p>
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
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-100px)]">
          <p className="text-white/80 mb-8 leading-relaxed">{content.intro}</p>
          
          {content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-serif font-bold text-gold mb-4">{section.title}</h3>
              <div className="text-white/70 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
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

export default PrivacyPolicy;


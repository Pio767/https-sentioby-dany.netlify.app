import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface CookiePolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const getContent = () => {
    switch(language) {
      case 'de':
        return {
          title: "Cookie-Richtlinie",
          sections: [
            {
              title: "1. Was sind Cookies?",
              content: "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, um die Benutzererfahrung zu verbessern und bestimmte Funktionen zu ermöglichen."
            },
            {
              title: "2. Verwendung von Cookies auf dieser Website",
              content: "Technische Cookies (Notwendig)\n\nDiese Cookies sind für den Betrieb der Website unerlässlich (z. B. Sicherheitseinstellungen via Cloudflare). Sie bedürfen keiner Einwilligung.\n\nMultimedia-Cookies & Inhalte Dritter\n\nUnsere Website enthält eingebundene Medien (Videos, Audio), die auf externen Servern gespeichert sein können. Wichtiger Hinweis zum Datenschutz: Standardmäßig werden keine externen Inhalte (wie das Video im Hero-Bereich) geladen, die Daten an Dritte übertragen, ohne dass Sie zugestimmt haben. Erst wenn Sie im Cookie-Banner oder durch Klick auf das Element zustimmen (Two-Click-Solution), werden Inhalte geladen und Daten übertragen."
            },
            {
              title: "3. Verwaltung von Cookies",
              content: "Sie können beim Betreten der Website über unseren Cookie-Banner entscheiden, welche Cookies Sie zulassen möchten. Sie können Ihre Einwilligung jederzeit widerrufen oder Ihre Browsereinstellungen ändern, um Cookies zu blockieren. Bitte beachten Sie, dass das Blockieren technischer Cookies die Funktion der Website beeinträchtigen kann."
            }
          ]
        };
      case 'en':
        return {
          title: "Cookie Policy",
          sections: [
            {
              title: "1. What are cookies?",
              content: "Cookies are small text files that are stored on your device to improve the user experience and enable certain functions."
            },
            {
              title: "2. Use of Cookies on This Website",
              content: "Technical Cookies (Necessary)\n\nThese cookies are essential for the operation of the website (e.g., security settings via Cloudflare). They do not require consent.\n\nMultimedia Cookies & Third-Party Content\n\nOur website contains embedded media (videos, audio) that may be stored on external servers. Important privacy notice: By default, no external content (such as the video in the hero section) is loaded that transmits data to third parties without your consent. Only when you consent in the cookie banner or by clicking on the element (Two-Click Solution) are content loaded and data transmitted."
            },
            {
              title: "3. Cookie Management",
              content: "When entering the website, you can decide via our cookie banner which cookies you wish to allow. You can revoke your consent at any time or change your browser settings to block cookies. Please note that blocking technical cookies may affect the functionality of the website."
            }
          ]
        };
      default: // es
        return {
          title: "Política de Cookies",
          sections: [
            {
              title: "1. ¿Qué son las cookies?",
              content: "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo para mejorar la experiencia del usuario y habilitar ciertas funciones."
            },
            {
              title: "2. Uso de Cookies en Este Sitio Web",
              content: "Cookies Técnicas (Necesarias)\n\nEstas cookies son esenciales para el funcionamiento del sitio web (p. ej., configuraciones de seguridad a través de Cloudflare). No requieren consentimiento.\n\nCookies Multimedia y Contenido de Terceros\n\nNuestro sitio web contiene medios incrustados (videos, audio) que pueden estar almacenados en servidores externos. Nota importante sobre privacidad: Por defecto, no se cargan contenidos externos (como el video en la sección hero) que transmitan datos a terceros sin su consentimiento. Solo cuando usted consiente en el banner de cookies o haciendo clic en el elemento (Solución Two-Click) se cargan contenidos y se transmiten datos."
            },
            {
              title: "3. Gestión de Cookies",
              content: "Al ingresar al sitio web, puede decidir a través de nuestro banner de cookies qué cookies desea permitir. Puede revocar su consentimiento en cualquier momento o cambiar la configuración de su navegador para bloquear cookies. Tenga en cuenta que bloquear cookies técnicas puede afectar la funcionalidad del sitio web."
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

export default CookiePolicy;



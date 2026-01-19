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
              content: "Ein Cookie ist eine kleine Textdatei, die in Ihrem Browser gespeichert wird, wenn Sie fast jede Website besuchen. Ihr Nutzen besteht darin, dass die Website in der Lage ist, Ihren Besuch zu speichern, wenn Sie erneut auf dieser Seite navigieren."
            },
            {
              title: "2. Arten von Cookies, die auf dieser Website verwendet werden",
              content: "Diese Website verwendet die folgenden Cookies:\n\n• Technische Cookies: Dies sind solche, die dem Benutzer die Navigation durch die Website und die Nutzung der verschiedenen Optionen oder Dienste ermöglichen, die darauf vorhanden sind.\n• Analyse-Cookies: Dies sind solche, die es ermöglichen, die Anzahl der Benutzer zu quantifizieren und so die Messung und statistische Analyse der Nutzung durchzuführen, die die Benutzer vom Service machen (z. B. Google Analytics)."
            },
            {
              title: "3. Deaktivierung oder Löschung von Cookies",
              content: "Sie können jederzeit Ihr Recht auf Deaktivierung oder Löschung von Cookies dieser Website ausüben. Diese Aktionen werden je nach verwendetem Browser unterschiedlich durchgeführt (Chrome, Firefox, Safari, Edge usw.)."
            }
          ]
        };
      case 'en':
        return {
          title: "Cookie Policy",
          sections: [
            {
              title: "1. What are cookies?",
              content: "A cookie is a small text file that is stored in your browser when you visit almost any website. Its usefulness is that the website is able to remember your visit when you navigate again on that page."
            },
            {
              title: "2. Types of cookies used on this website",
              content: "This website uses the following cookies:\n\n• Technical cookies: These are those that allow the user to navigate through the website and use the different options or services that exist on it.\n• Analytics cookies: These are those that allow quantifying the number of users and thus carry out the measurement and statistical analysis of the use that users make of the service (for example, Google Analytics)."
            },
            {
              title: "3. Deactivation or deletion of cookies",
              content: "At any time you can exercise your right to deactivation or deletion of cookies from this website. These actions are performed differently depending on the browser you are using (Chrome, Firefox, Safari, Edge, etc.)."
            }
          ]
        };
      default: // es
        return {
          title: "Política de Cookies",
          sections: [
            {
              title: "1. ¿Qué son las cookies?",
              content: "Una cookie es un pequeño fichero de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página."
            },
            {
              title: "2. Tipos de cookies utilizadas en esta web",
              content: "Esta web utiliza las siguientes cookies:\n\n• Cookies técnicas: Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existan.\n• Cookies de análisis: Son aquellas que permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio (por ejemplo, Google Analytics)."
            },
            {
              title: "3. Desactivación o eliminación de cookies",
              content: "En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando (Chrome, Firefox, Safari, Edge, etc.)."
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

export default CookiePolicy;



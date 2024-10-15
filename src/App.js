import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Code, Trophy, Sun, Moon, ExternalLink, Menu } from 'lucide-react';
import bobImage from './bob.png';
import logoImage from './logo2.png';

const CompetitionWebsite = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [timeLeft, setTimeLeft] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date('2024-10-21') - +new Date();
      setTimeLeft({
        nap: Math.floor(difference / (1000 * 60 * 60 * 24)),
        óra: Math.floor((difference / (1000 * 60 * 60)) % 24),
        perc: Math.floor((difference / 1000 / 60) % 60),
        másodperc: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className={`p-4 sm:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Verseny Időpontja</h3>
              <p className="flex items-center text-base sm:text-lg"><Calendar className="mr-2" size={20} /> 2024. október 21-25.</p>
            </div>
            <div className={`p-4 sm:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-green-100'}`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Jelentkezési Határidő</h3>
              <p className="flex items-center text-base sm:text-lg"><Clock className="mr-2" size={20} /> 2024. október 18.</p>
            </div>
            <div className={`p-4 sm:p-6 rounded-lg col-span-1 sm:col-span-2 ${darkMode ? 'bg-gray-800' : 'bg-yellow-100'}`}>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">Miért vegyél részt?</h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-base sm:text-lg">
                <li>Fejleszd programozói készségeidet</li>
                <li>Nyerj értékes díjakat</li>
                <li>Kapcsolódj be a tech közösségbe</li>
                <li>Szerezz tapasztalatot valós projekteken</li>
              </ul>
            </div>
          </div>
        );
      case 'challenges':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {['9.', '10.', '11.', '12.'].map((grade, index) => (
              <div key={index} className={`p-4 sm:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : ['bg-yellow-100', 'bg-orange-100', 'bg-red-100', 'bg-purple-100'][index]}`}>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">{grade} Évfolyam Kihívása</h3>
                <p className="text-base sm:text-lg">{['Egyszerű weboldal készítése HTML és CSS használatával.',
                     'Reszponzív weboldal készítése haladó CSS technikákkal.',
                     'Interaktív weboldal készítése JavaScript segítségével.',
                     'Komplex webalkalmazás fejlesztése API integrációval.'][index]}</p>
              </div>
            ))}
          </div>
        );
      case 'registration':
        return (
          <div className={`p-4 sm:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Regisztráció</h2>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg">A versenyre való jelentkezéshez töltsd ki az alábbi űrlapot:</p>
            <a 
              href="https://forms.gle/KfqJmfYKCSRTdcuW6" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white text-base sm:text-lg font-semibold hover:bg-blue-600 transition ${darkMode ? 'bg-blue-700' : 'bg-blue-500'}`}
            >
              Regisztrációs Űrlap
            </a>
          </div>
        );
      case 'faq':
        return (
          <div className="space-y-4 sm:space-y-6">
            {[
              { q: "Kik jelentkezhetnek?", a: "9-12. évfolyamos diákok vehetnek részt." },
              { q: "Milyen nyelveket kell ismerni?", a: "HTML, CSS és JavaScript ismeretek szükségesek." },
              { q: "Hogyan zajlik az értékelés?", a: "Szakértő zsűri értékeli a kreativitást, funkcionalitást és kódminőséget." },
              { q: "Milyen díjak nyerhetők?", a: "Értékes tech eszközök és programozási kurzusok nyerhetők." }
            ].map((faq, index) => (
              <div key={index} className={`p-4 sm:p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{faq.q}</h3>
                <p className="text-base sm:text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <header className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logoImage} alt="CodeWeek Logo" className="h-10 w-auto mr-4" />
            <h1 className="text-2xl sm:text-4xl font-bold">CodeWeek Gépészeti 2024</h1>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-white text-gray-800">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      <nav className="bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4">
            {['home', 'challenges', 'registration', 'faq', 'codeweekeu'].map((tab) => (
              <li key={tab} className="my-1">
                {tab === 'codeweekeu' ? (
                  <a
                    href="https://codeweek.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-sm sm:text-base block hover:bg-gray-700 transition-colors rounded"
                  >
                    CodeWeekEU <ExternalLink size={16} className="inline ml-1" />
                  </a>
                ) : (
                  <button
                    className={`py-2 px-3 text-sm sm:text-base ${activeTab === tab ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors rounded`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {{'home': 'Kezdőlap', 'challenges': 'Kihívások', 'registration': 'Regisztráció', 'faq': 'GYIK'}[tab]}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto mt-8 p-4">
        <main className="mb-24">
          {renderContent()}
        </main>

        <div className={`fixed bottom-0 left-0 w-full ${darkMode ? 'bg-gray-800' : 'bg-orange-100'} p-2 sm:p-4`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="text-xs sm:text-sm text-gray-500">
              <span>Készítette: </span>
              <a 
                href="https://portfolio-tom-hevesi.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-orange-500 transition-colors"
              >
                Tom Hevesi
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex space-x-2 sm:space-x-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <span className="text-lg sm:text-xl font-bold">{value}</span>
                    <span className="block text-xs">{unit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="fixed bottom-14 sm:bottom-16 right-2 sm:right-4 flex flex-col items-end">
        <div className="flex space-x-2 mb-2">
          <Code className="text-orange-500" size={24} />
          <Trophy className="text-yellow-500" size={24} />
        </div>
        <img src={bobImage} alt="Bob Character" className="h-24 sm:h-32" />
      </div>
    </div>
  );
};


export default CompetitionWebsite;

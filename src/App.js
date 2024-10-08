import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Code, Trophy, Sun, Moon } from 'lucide-react';
import bobImage from './bob.png';
import logoImage from './logo2.png';

const CompetitionWebsite = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date('2024-10-21') - +new Date();
      setTimeLeft({
        napok: Math.floor(difference / (1000 * 60 * 60 * 24)),
        órák: Math.floor((difference / (1000 * 60 * 60)) % 24),
        percek: Math.floor((difference / 1000 / 60) % 60),
        másodpercek: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
              <h3 className="text-2xl font-semibold mb-4">Verseny Időpontja</h3>
              <p className="flex items-center text-lg"><Calendar className="mr-2" /> 2024. október 21-25.</p>
            </div>
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-green-100'}`}>
              <h3 className="text-2xl font-semibold mb-4">Jelentkezési Határidő</h3>
              <p className="flex items-center text-lg"><Clock className="mr-2" /> 2024. október 18.</p>
            </div>
            <div className={`p-6 rounded-lg col-span-2 ${darkMode ? 'bg-gray-800' : 'bg-yellow-100'}`}>
              <h3 className="text-2xl font-semibold mb-4">Miért vegyél részt?</h3>
              <ul className="list-disc list-inside space-y-2">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['9.', '10.', '11.', '12.'].map((grade, index) => (
              <div key={index} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : ['bg-yellow-100', 'bg-orange-100', 'bg-red-100', 'bg-purple-100'][index]}`}>
                <h3 className="text-2xl font-semibold mb-4">{grade} Évfolyam Kihívása</h3>
                <p>{['Egyszerű weboldal készítése HTML és CSS használatával.',
                     'Reszponzív weboldal készítése haladó CSS technikákkal.',
                     'Interaktív weboldal készítése JavaScript segítségével.',
                     'Komplex webalkalmazás fejlesztése API integrációval.'][index]}</p>
              </div>
            ))}
          </div>
        );
      case 'registration':
        return (
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
            <h2 className="text-3xl font-bold mb-4">Regisztráció</h2>
            <p className="mb-6 text-lg">A versenyre való jelentkezéshez töltsd ki az alábbi űrlapot:</p>
            <a 
              href="https://forms.gle/KfqJmfYKCSRTdcuW6" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-blue-600 transition ${darkMode ? 'bg-blue-700' : 'bg-blue-500'}`}
            >
              Regisztrációs Űrlap
            </a>
          </div>
        );
      case 'faq':
        return (
          <div className="space-y-6">
            {[
              { q: "Kik jelentkezhetnek?", a: "9-12. évfolyamos diákok vehetnek részt." },
              { q: "Milyen nyelveket kell ismerni?", a: "HTML, CSS és JavaScript ismeretek szükségesek." },
              { q: "Hogyan zajlik az értékelés?", a: "Szakértő zsűri értékeli a kreativitást, funkcionalitást és kódminőséget." },
              { q: "Milyen díjak nyerhetők?", a: "Értékes tech eszközök és programozási kurzusok nyerhetők." }
            ].map((faq, index) => (
              <div key={index} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p>{faq.a}</p>
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
      <div className="max-w-7xl mx-auto flex items-center justify-between">
  <div className="flex items-center">
    <img src={logoImage} alt="CodeWeek Logo" className="h-12 w-auto mr-4" />
    <h1 className="text-4xl font-bold">CodeWeek Gépészeti 2024</h1>
  </div>
  <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-white text-gray-800">
    {darkMode ? <Sun /> : <Moon />}
  </button>
</div>
</header>

      <div className="max-w-7xl mx-auto mt-8 p-4">
        <nav className="mb-8">
          <ul className="flex space-x-4 border-b border-gray-300">
            {['home', 'challenges', 'registration', 'faq'].map((tab) => (
              <li key={tab}>
                <button
                  className={`py-2 px-4 ${activeTab === tab ? 'border-b-2 border-orange-500 text-orange-500' : darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {{'home': 'Kezdőlap', 'challenges': 'Kihívások', 'registration': 'Regisztráció', 'faq': 'GYIK'}[tab]}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="mb-12">
          {renderContent()}
        </main>

        <div className={`fixed bottom-0 left-0 w-full ${darkMode ? 'bg-gray-800' : 'bg-orange-100'} p-4`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h2 className="text-2xl font-bold">Visszaszámláló a versenyig</h2>
            <div className="flex space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <span className="text-3xl font-bold">{value}</span>
                  <span className="block text-sm">{unit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-20 right-4 flex flex-col space-y-2">
        <Code className="text-orange-500" size={32} />
        <Trophy className="text-yellow-500" size={32} />
      </div>

      {/* Bob karakter hozzáadása */}
      <div className="fixed bottom-4 right-4">
        <img src={bobImage} alt="Bob Character" className="h-48" />
      </div>
    </div>
  );
};

export default CompetitionWebsite;
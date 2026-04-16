import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Hammer, 
  TreePine, 
  Home, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  HardHat
} from "lucide-react";

export default function App() {
  const [activeRegion, setActiveRegion] = useState("Vendée");

  const services = [
    {
      title: "Couverture et Zinguerie",
      description: "Pose, rénovation et entretien de toitures. Expertise en zinguerie pour une étanchéité parfaite de votre habitat.",
      icon: <Home className="w-8 h-8 text-brand-slate" />,
      image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Paysagiste",
      description: "Entretien complet de vos extérieurs : tonte de pelouse, passage du rotofil, taille de haies et aménagement paysager.",
      icon: <TreePine className="w-8 h-8 text-brand-green" />,
      image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Ravalement façade",
      description: "Nettoyage, traitement et rénovation de vos façades pour redonner de l'éclat et protéger vos murs extérieurs.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-earth" />,
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Travaux de bâtiment",
      description: "Petits travaux de maçonnerie, rénovation intérieure et bricolage général pour l'amélioration de votre maison.",
      icon: <Hammer className="w-8 h-8 text-brand-earth" />,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const regions = [
    { name: "Vendée", detail: "Toute la Vendée desservie depuis Saint-Hilaire-des-Loges (85240)" },
    { name: "Ile-de-France", detail: "Secteur à venir - Prochainement disponible" },
    { name: "Grand Est", detail: "Secteur à venir - Prochainement disponible" }
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-brand-sand-medium/90 to-brand-sand-dark/90 backdrop-blur-md z-50 border-b border-brand-earth/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-brand-green p-2 rounded-lg">
              <HardHat className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-brand-slate uppercase">Maxime Josset</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-brand-green transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-brand-green transition-colors">Portfolio</a>
            <a href="#regions" className="hover:text-brand-green transition-colors">Régions</a>
            <a href="#contact" className="bg-brand-green text-white px-5 py-2.5 rounded-full hover:bg-brand-green/90 transition-all shadow-sm">Demander un devis</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-sand-light to-white"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-earth/5 rounded-l-[100px] transform translate-x-1/4 -skew-x-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider mb-6">
                Prix abordable, travail propre
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                L'expertise au service de votre <span className="text-brand-green">habitat</span>.
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Spécialiste en couverture, travaux urbains et paysagisme. J'interviens avec agilité et sécurité dans toute la Vendée !
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-brand-green/20 transition-all">
                  Contactez-moi <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#services" className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  Voir mes services
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Travaux de toiture" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="text-brand-accent w-5 h-5" />
                    <span className="text-sm font-semibold">Garantie Décennale & Responsabilité Civile</span>
                  </div>
                  <p className="text-xl font-bold">Sécurité et qualité certifiées</p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-accent/20 p-3 rounded-xl">
                    <MapPin className="text-brand-earth w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Localisation</p>
                    <p className="text-sm font-extrabold text-slate-900">Vendée (85)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-sand-medium/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mes Domaines d'Intervention</h2>
            <p className="text-slate-600">
              Toiture, Façade et Jardin : un accompagnement complet pour l'entretien et l'amélioration de votre habitat.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="p-6 pt-0 border-t border-slate-50">
                  <ul className="space-y-2">
                    {["Travail propre", "Prix abordable"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-brand-green" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Zones d'Intervention</h2>
            <p className="text-slate-600">
              Une présence multi-régionale pour répondre à vos besoins spécifiques.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {regions.map((region) => (
              <button
                key={region.name}
                onClick={() => setActiveRegion(region.name)}
                className={`px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                  activeRegion === region.name
                    ? "bg-brand-green text-white shadow-lg shadow-brand-green/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {region.name}
                {region.name !== "Vendée" && (
                  <span className="text-[10px] bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full uppercase">Bientôt</span>
                )}
              </button>
            ))}
          </div>

          <div className="bg-brand-sand-medium/20 rounded-3xl p-8 lg:p-12 border border-brand-earth/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRegion}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row items-center gap-12"
              >
                <div className="lg:w-1/2">
                  <div className="bg-brand-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="text-brand-green w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{activeRegion}</h3>
                  <p className="text-lg text-slate-600 mb-6">
                    {regions.find(r => r.name === activeRegion)?.detail}
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Intervention rapide sur site",
                      "Connaissance parfaite du terrain local",
                      "Réseau de partenaires régionaux",
                      "Déplacement inclus dans le devis"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brand-green" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                    <img 
                      src={
                        activeRegion === "Vendée" 
                          ? "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&q=80&w=800"
                          : activeRegion === "Ile-de-France"
                          ? "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800"
                          : "https://images.unsplash.com/photo-1595152230651-40439636b701?auto=format&fit=crop&q=80&w=800"
                      }
                      alt={activeRegion}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 overflow-hidden bg-brand-sand-medium/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80&w=600" 
                  alt="Chantier" 
                  className="rounded-2xl h-64 w-full object-cover mt-8"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600" 
                  alt="Jardin" 
                  className="rounded-2xl h-64 w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-green text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-3xl font-bold mb-1">Portfolio</p>
                <p className="text-sm opacity-80">Découvrez mes réalisations en toiture, façade et jardinage.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">À propos de Maxime Josset</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Artisan passionné avec une solide expérience du terrain, je mets mon savoir-faire au service de votre habitat. Mon agilité et ma maîtrise technique me permettent d'intervenir sur tous types de projets.
                </p>
                <p>
                  Mon approche est simple : <span className="font-bold text-brand-green">le travail bien fait</span>. Que ce soit pour une toiture à rénover, un ravalement de façade ou l'entretien de votre jardin, je m'engage sur la qualité et la transparence.
                </p>
                <div className="flex flex-col gap-4 pt-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                    <ShieldCheck className="text-brand-green w-6 h-6" />
                    <span className="font-bold text-slate-900">Assurance Décennale</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
                    <MapPin className="text-brand-green w-6 h-6" />
                    <span className="font-bold text-slate-900 text-sm">98 rue Léon Bienvenu, 85240 Saint-Hilaire-des-Loges</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-slate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-3xl p-8 lg:p-16 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Prêt à lancer votre projet ?</h2>
                <p className="text-slate-300 mb-10 text-lg">
                  Contactez-moi dès aujourd'hui pour un devis gratuit ou simplement pour échanger sur vos besoins en Vendée.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <Phone className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Téléphone</p>
                      <a href="tel:+33602101242" className="text-xl font-bold hover:text-brand-accent transition-colors">+33 6 02 10 12 42</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <Mail className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <a href="mailto:maxime.josset@gmail.com" className="text-xl font-bold hover:text-brand-accent transition-colors">maxime.josset@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Votre nom" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Votre email" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                </div>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                  <option className="bg-brand-slate">Type de projet</option>
                  <option className="bg-brand-slate">Couverture / Zinguerie</option>
                  <option className="bg-brand-slate">Ravalement façade</option>
                  <option className="bg-brand-slate">Paysagisme</option>
                  <option className="bg-brand-slate">Bâtiment / Rénovation</option>
                </select>
                <textarea 
                  rows={4} 
                  placeholder="Décrivez votre projet..." 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-accent transition-colors"
                ></textarea>
                <button className="w-full bg-brand-accent text-brand-slate font-extrabold py-4 rounded-xl hover:bg-brand-accent/90 transition-all shadow-lg shadow-brand-accent/20">
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-b from-brand-sand-medium to-brand-sand-dark border-t border-brand-earth/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-brand-green p-1.5 rounded-md">
              <HardHat className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-brand-slate uppercase">Maxime Josset</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2026 Maxime Josset. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-xs font-medium uppercase tracking-widest text-center md:text-right">
              98 rue Léon Bienvenu, 85240 Saint-Hilaire-des-Loges<br/>
              Partenaire : Arx Systema
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

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
  HardHat,
  Clock,
  Wrench,
  Scissors,
  Layers,
} from "lucide-react";

export default function App() {
  const [activeRegion, setActiveRegion] = useState("Vendée");

  const mainServices = [
    {
      title: "Couvreur",
      subtitle: "Couverture & Zinguerie",
      description:
        "Pose, rénovation et entretien de toitures en Vendée. Expertise en zinguerie pour une étanchéité parfaite et durable de votre habitat.",
      icon: <Home className="w-8 h-8 text-brand-slate" />,
      image: "/images/couvreur maxime josset vendee v2.jpg",
      alt: "Couvreur Maxime Josset Vendée – travaux de toiture",
    },
    {
      title: "Paysagiste",
      subtitle: "Entretien & Aménagement",
      description:
        "Tonte de pelouse, débroussaillage, taille de haies et aménagement paysager. Vos extérieurs méritent un entretien régulier et soigné.",
      icon: <TreePine className="w-8 h-8 text-brand-green" />,
      image: "/images/paysagiste maxime josset vendee.jpg",
      alt: "Paysagiste Maxime Josset Vendée – entretien de jardin",
    },
    {
      title: "Façadier",
      subtitle: "Ravalement de façade",
      description:
        "Nettoyage, traitement et rénovation de façades pour redonner de l'éclat et protéger vos murs extérieurs contre les intempéries.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-earth" />,
      image: "/images/facade maxime josset vendee.jpg",
      alt: "Ravalement de façade Maxime Josset Vendée",
    },
  ];

  const secondaryServices = [
    { label: "Couverture", icon: <Home className="w-4 h-4" /> },
    { label: "Zinguerie", icon: <Layers className="w-4 h-4" /> },
    { label: "Ravalement de façade", icon: <ShieldCheck className="w-4 h-4" /> },
    { label: "Paysagisme", icon: <TreePine className="w-4 h-4" /> },
    { label: "Entretien de jardin", icon: <Scissors className="w-4 h-4" /> },
    { label: "Tonte de pelouse", icon: <Scissors className="w-4 h-4" /> },
    { label: "Débroussaillage / rotofil", icon: <Wrench className="w-4 h-4" /> },
    { label: "Petits travaux de bâtiment", icon: <Hammer className="w-4 h-4" /> },
  ];

  const regions = [
    {
      name: "Vendée",
      detail:
        "Zone d'intervention principale. Maxime intervient dans toute la Vendée depuis Saint-Hilaire-des-Loges (85240). Il se déplace directement chez vous.",
    },
    {
      name: "Île-de-France",
      detail: "Secteur en cours de développement – contactez Maxime pour en savoir plus.",
    },
    {
      name: "Lorraine",
      detail: "Secteur en cours de développement – contactez Maxime pour en savoir plus.",
    },
  ];

  return (
    <div className="min-h-screen font-sans">

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-brand-sand-medium/90 to-brand-sand-dark/90 backdrop-blur-md z-50 border-b border-brand-earth/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-maxime-josset-mini.jpg"
              alt="Logo Maxime Josset"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-bold text-xl tracking-tight text-brand-slate uppercase">
              Maxime Josset
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-brand-green transition-colors">Services</a>
            <a href="#apropos" className="hover:text-brand-green transition-colors">À propos</a>
            <a href="#regions" className="hover:text-brand-green transition-colors">Zones</a>
            <a
              href="#contact"
              className="bg-brand-green text-white px-5 py-2.5 rounded-full hover:bg-brand-green/90 transition-all shadow-sm"
            >
              Demander un devis
            </a>
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
                Artisan local – Vendée (85)
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Couvreur, Paysagiste &{" "}
                <span className="text-brand-green">Façadier</span> en Vendée.
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Entreprise de proximité basée à Saint-Hilaire-des-Loges.
                <strong>J'interviens chez vous dans toute la Vendée</strong> pour vos travaux de toiture, façade et jardin. Chantier
                propre, travail soigné, devis gratuit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+33602101242"
                  className="flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-brand-green/20 transition-all"
                >
                  <Phone className="w-5 h-5" /> 06 02 10 12 42
                </a>
                <a
                  href="#services"
                  className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  Voir mes services <ArrowRight className="w-5 h-5" />
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
                  src="/images/couvreur maxime josset vendee.jpg"
                  alt="Couvreur Vendée – Maxime Josset"
                  className="w-full h-[500px] object-cover"
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
              {/* Badge localisation */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-accent/20 p-3 rounded-xl">
                    <MapPin className="text-brand-earth w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Zone principale</p>
                    <p className="text-sm font-extrabold text-slate-900">Vendée (85)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 axes principaux */}
      <section id="services" className="py-24 bg-brand-sand-medium/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mes 3 domaines d'expertise</h2>
            <p className="text-slate-600">
              Toiture, façade et jardin : un accompagnement complet pour l'entretien et la
              valorisation de votre habitat en Vendée.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <div className="mb-3">{service.icon}</div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-xs font-semibold text-brand-green uppercase tracking-wide mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="p-6 pt-0 border-t border-slate-50">
                  <ul className="space-y-2">
                    {["Chantier propre", "Devis gratuit"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-brand-green" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services secondaires */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">
              Toutes les prestations disponibles
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {secondaryServices.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-brand-sand-medium/30 rounded-xl px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <span className="text-brand-green">{s.icon}</span>
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* À propos + portfolio */}
      <section id="apropos" className="py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/couvreur maxime josset vendee v2.jpg"
                  alt="Couverture Vendée"
                  className="rounded-2xl h-64 w-full object-cover mt-8"
                />
                <img
                  src="/images/logo-maxime-josset.jpg"
                  alt="Logo Maxime Josset – Couvreur Paysagiste Façadier Vendée"
                  className="rounded-2xl h-64 w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-green text-white p-8 rounded-2xl shadow-xl max-w-xs">
                <p className="text-2xl font-bold mb-1">Artisan local</p>
                <p className="text-sm opacity-80">
                  Je me déplace directement chez vous dans toute la Vendée.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">À propos de Maxime Josset</h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Artisan passionné et rigoureux, j'interviens dans toute la Vendée pour vos
                  travaux de couverture, zinguerie, ravalement de façade, paysagisme et entretien
                  extérieur. Je me déplace directement chez vous – aucune réception au domicile.
                </p>
                <p>
                  Mon engagement :{" "}
                  <span className="font-bold text-brand-green">un chantier propre, un travail
                  soigné</span>, une communication claire et une attention particulière à la
                  sécurité. Chaque demande fait l'objet d'une évaluation sérieuse pour proposer
                  la solution adaptée à votre bâti.
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                    <ShieldCheck className="text-brand-green w-6 h-6 shrink-0" />
                    <span className="font-bold text-slate-900">Assurance Décennale & RC Pro</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                    <Clock className="text-brand-green w-6 h-6 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block">Horaires</span>
                      <span className="text-sm text-slate-500">Lun – Ven : 08h00 – 17h00 · Sam & Dim : Fermé</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                    <MapPin className="text-brand-green w-6 h-6 shrink-0" />
                    <span className="font-bold text-slate-900 text-sm">
                      Basé à Saint-Hilaire-des-Loges (85240) · Intervention dans toute la Vendée
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section id="regions" className="py-24 bg-brand-sand-medium/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Zones d'intervention</h2>
            <p className="text-slate-600">
              La Vendée est la zone principale. D'autres régions sont en cours de développement.
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
                  <span className="text-[10px] bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full uppercase">
                    Bientôt
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-brand-earth/5 shadow-sm">
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
                    {regions.find((r) => r.name === activeRegion)?.detail}
                  </p>
                  {activeRegion === "Vendée" && (
                    <ul className="space-y-4">
                      {[
                        "Intervention rapide sur site",
                        "Connaissance du terrain local",
                        "Déplacement inclus dans le devis",
                        "Aucune réception au domicile – je viens chez vous",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="lg:w-1/2 w-full">
                  <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                    <img
                      src={
                        activeRegion === "Vendée"
                          ? "/images/Domicile-Google-Saint-Hilaire-des-Loges-85240.jpg"
                          : "/images/Banniere-Google-Saint-Hilaire-des-Loges-85240.jpg"
                      }
                      alt={`Zone d'intervention ${activeRegion}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-brand-slate text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider mb-4">
              Devis gratuit
            </span>
            <h2 className="text-4xl font-bold mb-4">Prêt à lancer votre projet ?</h2>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              Appelez directement ou envoyez un e-mail — je vous réponds rapidement et me déplace
              chez vous dans toute la Vendée, sans frais de déplacement cachés.
            </p>
          </div>

          {/* CTAs principaux */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="tel:+33602101242"
              className="flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green/90 text-white text-xl font-bold px-10 py-5 rounded-2xl transition-all hover:shadow-lg hover:shadow-brand-green/20"
            >
              <Phone className="w-6 h-6" /> 06 02 10 12 42
            </a>
            <a
              href="mailto:maxime.josset@gmail.com"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white text-xl font-bold px-10 py-5 rounded-2xl border border-white/20 transition-all"
            >
              <Mail className="w-6 h-6" /> maxime.josset@gmail.com
            </a>
          </div>

          {/* Infos pratiques */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl shrink-0">
                <Clock className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <p className="font-bold text-white mb-1">Horaires</p>
                <p className="text-slate-300 text-sm">Lun – Ven : 08h00 – 17h00</p>
                <p className="text-slate-400 text-xs mt-1">Sam & Dim : Fermé</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl shrink-0">
                <MapPin className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <p className="font-bold text-white mb-1">Zone d'intervention</p>
                <p className="text-slate-300 text-sm">Toute la Vendée (85)</p>
                <p className="text-slate-400 text-xs mt-1">Basé à Saint-Hilaire-des-Loges</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl shrink-0">
                <ShieldCheck className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <p className="font-bold text-white mb-1">Devis gratuit</p>
                <p className="text-slate-300 text-sm">Sans engagement</p>
                <p className="text-slate-400 text-xs mt-1">Déplacement inclus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-slate/95 text-slate-400 py-10 text-center text-sm border-t border-white/10">
        <div className="flex justify-center mb-4">
          <img
            src="/images/logo-maxime-josset-mini.jpg"
            alt="Logo Maxime Josset"
            className="w-10 h-10 rounded-lg object-cover opacity-80"
          />
        </div>
        <p className="font-semibold text-white mb-1">Maxime Josset – Couvreur · Paysagiste · Façadier</p>
        <p className="mb-1">Saint-Hilaire-des-Loges, 85240 · Vendée</p>
        <p>
          <a href="tel:+33602101242" className="hover:text-brand-accent transition-colors">06 02 10 12 42</a>
          {" · "}
          <a href="mailto:maxime.josset@gmail.com" className="hover:text-brand-accent transition-colors">maxime.josset@gmail.com</a>
        </p>
        <p className="mt-4 text-xs text-slate-400">© {new Date().getFullYear()} Maxime Josset – Tous droits réservés</p>
        <p className="mt-2 text-xs text-slate-400">
          Site réalisé par{" "}
          <a href="https://arx-systema.fr/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors underline underline-offset-2">
            Arx Systema
          </a>
        </p>
      </footer>
    </div>
  );
}

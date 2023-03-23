import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PresentationChartBarIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Conception de sites web personnalisés.",
    description:
      "Nous créons des sites web sur mesure pour chaque client, avec tout ce dont ils ont besoin pour réussir en ligne.",
    href: "/Contact",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Développement d'applications mobiles sur mesure",
    description:
      "Applications mobiles personnalisées selon besoins clients avec interface, fonctionnalités, contenu, bases de données et sécurité adaptés.",
    href: "/Contact",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Intégration de fonctionnalités avancées sur les sites web ou les applications mobiles",
    description:
      "Fonctionnalités avancées intégrées pour meilleure expérience utilisateur : recherche, réservation, paiement, chat en direct, etc.",
    href: "/Contact",
    icon: GlobeAltIcon,
  },
  {
    name: "Optimisation pour les moteurs de recherche (SEO)",
    description:
      "Service d'optimisation SEO : contenu, liens entrants, balises, mots-clés pour meilleure visibilité et trafic.",
    href: "/Contact",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Développement de stratégies de marketing numérique",
    description:
      "Stratégies marketing numérique pour objectifs commerciaux en ligne : publicité, e-mail, contenu, réseaux sociaux, données.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Développement des outils pour le grand public",
    description:
      "Nous travaillons sur la conception et le développement d'outils numériques conviviaux pour améliorer la productivité, faciliter les tâches quotidiennes et répondre aux besoins des utilisateurs finaux",
    href: "/Contact",
    icon: WrenchScrewdriverIcon,
  },
];

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-5xl py-2 font-semibold leading-7 text-indigo-600">
            Nos services
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Des solutions numériques personnalisées pour vous
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nous proposons une large gamme de services numériques personnalisés
            pour répondre aux besoins uniques de chaque client. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Contactez-nous<span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

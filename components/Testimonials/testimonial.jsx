const featuredTestimonial = {
  body: "Digital Youth Service Fr a créé un site web magnifique pour notre entreprise. Ils ont travaillé en étroite collaboration avec nous pour comprendre nos besoins et ont fourni une solution personnalisée qui a dépassé nos attentes. Leur équipe était professionnelle et compétente tout au long du projet et nous sommes ravis des résultats.",
  author: {
    name: "Jean-Jacques Bagui",
  },
};
const testimonials = [
  [
    [
      {
        body: "Nous avons travaillé avec Digital Youth Service Fr pour concevoir un nouveau logo pour notre entreprise et nous avons été extrêmement satisfaits du résultat final. Ils ont pris le temps de comprendre notre marque et ont fourni un design innovant et créatif qui correspond parfaitement à notre entreprise. Nous sommes reconnaissants de leur travail exceptionnel.",
        author: {
          name: "Kevin Dango",
        },
      },
    ],
    [
      {
        body: "Un site web exceptionnel pour ma boutique en ligne. Ils ont travaillé avec diligence pour comprendre notre marque et nos objectifs, et ont fourni une solution personnalisée qui répond parfaitement à nos besoins. Nous sommes très satisfaits de leur travail et les recommandons sans hésitation.",
        author: {
          name: "Jessica",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Mise en place d'une stratégie de marketing numérique pour notre entreprise de coaching personnel et nous avons été très satisfaits des résultats. Ils ont fourni des conseils d'experts pour améliorer notre présence en ligne et augmenter notre visibilité sur les réseaux sociaux.",
        author: {
          name: "Samba Marietta",
        },
      },
    ],
    [
      {
        body: "L'application mobile que Digital Youth Service Fr a créée pour notre entreprise a dépassé toutes nos attentes. Ils ont été très à l'écoute de nos besoins et ont fourni une solution sur mesure qui répond parfaitement aux besoins de nos clients. Nous avons été impressionnés par leur professionnalisme et leur expertise tout au long du projet.",
        author: {
          name: "Jordan Robert",
        },
      },

    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
        <svg
          viewBox="0 0 1313 771"
          aria-hidden="true"
          className="ml-[max(50%,38rem)] w-[82.0625rem]"
        >
          <path
            id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
            fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
            d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
          />
          <defs>
            <linearGradient
              id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
              x1="1313.17"
              x2="-88.881"
              y1=".201"
              y2="539.417"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end">
        <svg
          viewBox="0 0 1313 771"
          aria-hidden="true"
          className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        >
          <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-5xl py-2 font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Ils nous ont fait confiance et ils n'ont pas été déçus.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 py-4 px-6">
         
              <div className="flex-auto">
                <div className="font-semibold">
                  {featuredTestimonial.author.name}
                </div>
              </div>
              <img
                className="h-10 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
              />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div>
                          <div className="font-semibold">
                            {testimonial.author.name}
                          </div>
                         
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CTA3() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Créativité, technologie, excellence.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Découvrez notre blog et notre newsletter chez Digital Youth Service
            Fr - la créativité, la technologie et l'excellence au rendez-vous !
            Inscrivez-vous pour les dernières mises à jour et contactez-nous
            pour en savoir plus sur nos services.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://digitalyouthservicefr.substack.com/?r=28t6gq&utm_campaign=pub-share-checklist"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join our Newsletter
            </a>
            <a
              href="/Blog"
              className="text-sm font-semibold leading-6 text-white"
            >
              Notre Blog <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

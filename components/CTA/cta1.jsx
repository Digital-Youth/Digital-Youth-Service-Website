export default function CTA1() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="text-xl font-bold tracking-tight text-white sm:text-xl">
            <p>
              “Aujourd'hui, le numérique n'est plus un choix. C'est un impératif
              pour toute entreprise qui souhaite réussir dans un monde
              connecté.”
            </p>
          </blockquote>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 prose-p:{utility}">
            - Abhijit Naskar
          </p>
  
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

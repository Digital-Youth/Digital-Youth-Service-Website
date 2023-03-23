import ReactLogo from '../../public/assets/React.png'
import FlutterLogo from '../../public/assets/flutter_logo.png'
import NextLogo from "../../public/assets/nextjs1.png";
import SpringLogo from "../../public/assets/spring-boot.png";
import Figma from "../../public/assets/Figma.svg";
import Docker from "../../public/assets/Docker.png";
import Image from 'next/image'

export default function Logo_Clouds() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Technologies utilisées
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              nous utilisons des technologies de pointe pour répondre aux
              besoins de nos clients. Nous travaillons avec des langages de
              programmation modernes tels que JavaScript, PHP, Java et
              des frameworks tels que React, NextJs, SpringBoot et Vue.js. Nous utilisons
              également des CMS tels que WordPress et Magento, ainsi que des
              plateformes cloud telles que AWS et Google Cloud pour assurer la
              qualité, la sécurité et la performance de nos solutions
              numériques.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <Image
              className="max-h-12 w-full object-contain object-left"
              src={ReactLogo}
              alt="Tuple"
              width={105}
              height={48}
            />
            <Image
              className="max-h-12 w-full object-contain object-left"
              src={FlutterLogo}
              alt="Reform"
              width={104}
              height={48}
            />
            <Image
              className="max-h-12 w-full object-contain object-left fill-white"
              src={NextLogo}
              alt="SavvyCal"
              width={140}
              height={48}
            />
            <Image
              className="max-h-12 w-full object-contain object-left"
              src={SpringLogo}
              alt="Laravel"
              width={136}
              height={48}
            />
            <Image
              className="max-h-12 w-full object-contain object-left "
              src={Figma}
              alt="Transistor"
              width={158}
              height={48}
            />

            <Image
              className="max-h-12 w-full object-contain object-left"
              src={Docker}
              alt="Statamic"
              width={147}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

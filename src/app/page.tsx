// Components
import ContainerVideo from '@/components/background/ContainerVideo'
import LinkToContact from '@/components/navigation/LinkToContact'
import Logo from '@/components/data-display/core/Logo'
import Showcase from '@/components/data-display/Showcase'
// Config
import { APP_ROUTES, CONTACT_NAV } from '@/modules/navigation/config'
import { IMG_EXT, LOGO_TYPES, PICTURES_SIZE } from '@/modules/data-display/config'
import { SOLUTIONS, description, organization } from '@/modules/app/config'
import { SIZES } from '@/modules/sizing/config'
// Types
import type { HeaderProps } from '@/types/data-dislay'

/** The headers configuration for solutions section */
const SOLUTIONS_HEADERS: ReadonlyArray<HeaderProps> = [
  {
    heading: SOLUTIONS[0],
    description: 'Protegemos tu infraestructura contra amenazas potenciales mediante la instalación de sistemas de videovigilancia. Realizamos auditorias de seguridad periódicas y pruebas de penetración para identificar y solucionar cualquier vulnerabilidad. Nuestro equipo de expertos en seguridad está disponible las 24 horas del día, los 365 días del año.'
  },
  {
    heading: SOLUTIONS[1],
    description: 'Ofrecemos soluciones de control de acceso inteligente, facilitando la supervisión y administración de la infraestructura de manera presencial y remota. Nuestras soluciones incluyen monitoreo en tiempo real, análisis predictivo y herramientas de automatización que ayudarán a prever problemas potenciales y mejorar la eficiencia operativa.'
  },
  {
    heading: SOLUTIONS[2],
    description: 'Diseñamos e implementamos redes acorde a las necesidades de nuestros clientes.Nuestro equipo de expertos está capacitado para trabajar con una variedad de tecnologías de red, logrando una conectividad ininterrumpida y segura, dando mantenimiento y actualizaciones constantes para garantizar que tus redes funcionen de manera óptima en todo momento.'
  },
  {
    heading: SOLUTIONS[3],
    description: 'Realizamos la configuración, revisión y monitoreo tanto de alarma, cómo de diferentes sensores (apertura, movimiento, humo, gas, agua, etc.), para garantizar su correcto funcionamiento. Al mismo tiempo, ofrecemos un mantenimiento proactivo para identificar y solucionar problemas antes de que puedan afectar tu bienestar, el de tu familia, empleados, socios, colaboradores, inversiones y patrimonio.'
  }
]

/** The headers configuration for values section */
const VALUES_HEADERS: ReadonlyArray<HeaderProps> = [
  {
    heading: 'Innovación',
    description: 'Creemos en el poder de la innovación para cambiar el mundo. Nuestras soluciones están a la vanguardia de la tecnología, proporcionando a nuestros clientes las herramientas más actualizadas y eficientes para su crecimiento.'
  },
  {
    heading: 'Integridad',
    description: 'En cada interacción y transacción, nuestra prioridad es mantener los más altos estándares éticos. Nos comprometemos a ser transparentes, honestos y justos en todas nuestras relaciones.'
  },
  {
    heading: 'Excelencia',
    description: 'Nos esforzamos por entregar solo lo mejor a nuestros clientes. Nuestro objetivo es superar las expectativas, garantizando servicios de alta calidad y atención al detalle.'
  },
  {
    heading: 'Adaptabilidad',
    description: 'En el mundo de los negocios, valoramos la flexibilidad y la versatilidad. Nos aseguramos de responder rápidamente a las necesidades cambiantes de nuestros clientes.'
  },
  {
    heading: 'Colaboración',
    description: 'Creemos que el éxito se logra mejor trabajando en equipo. Nos esforzamos por fomentar una cultura de cooperación, tanto internamente, como con nuestros clientes y socios.'
  }
]

/** The home page of the application */
export default function HomePage () {
  return (
    <main>
      <section className='h-3xl'>
        <ContainerVideo video='hero'>
          <div className='w-full h-full px-6 mx-auto grid place-content-center bg-secondary/30'>
            <div className='text-center text-white space-y-6'>
              <p className='text-xl md:text-2xl text-white'>
                {organization}
              </p>
              <h1>
                {description}
              </h1>
              <div className='pt-4 flex justify-center'>
                <LinkToContact />
              </div>
            </div>
          </div>
        </ContainerVideo>
      </section>

      <section
        id={APP_ROUTES.solutions}
        className='p-section space-y-24 bg-stone-50'
      >
        <header className='text-center space-y-6'>
          <p className='text-tagline'>NUESTRAS SOLUCIONES</p>
          <h2>
            Utilizamos enfoques analíticos y creativos para identificar soluciones
            innovadoras que impulsen el crecimiento, mejoren la eficiencia operativa
            y aumenten la rentabilidad de tu empresa.
          </h2>
        </header>

        {SOLUTIONS_HEADERS.map((solution, key) => {
          return (
            <Showcase
              heading={solution.heading}
              description={solution.description}
              image={{
                name: `${APP_ROUTES.solutions}${key}`,
                ext: IMG_EXT.jpg,
                alt: solution.heading,
                ...PICTURES_SIZE
              }}
              href={CONTACT_NAV.href}
              reverse={key % 2 !== 0}
              key={key}
            />
          )
        })}
      </section>

      <section
        id={APP_ROUTES.about}
        className='py-section lg:space-y-24'
      >
        <div className='grid lg:grid-cols-2'>
          <div className='relative min-h-[50vh]'>
            <div className='w-[112%] h-full absolute top-0 left-0 -z-20 bg-mission bg-cover bg-top bg-no-repeat bg-black' />
          </div>
          <div className='lg:py-24'>
            <div className='px-11% py-11 lg:p-18 text-center lg:text-left bg-stone-100 space-y-8 lg:space-y-10'>
              <h2>
                Nuestra misión
              </h2>
              <p className='text-lg'>
                Nos dedicamos a impulsar y mejorar la vida de nuestros clientes y de sus
                empresas, a través de soluciones tecnológicas integrales y personalizadas.
              </p>
              <div className='grid lg:block place-content-center'>
                <LinkToContact />
              </div>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-2'>
          <div className='lg:py-24'>
            <div className='px-11% py-11 lg:p-18 text-center lg:text-left bg-stone-100 space-y-8 lg:space-y-10'>
              <h2>
                Nuestra visión
              </h2>
              <p className='text-lg'>
                Ser un referente global, anticipándonos al futuro tecnológico,
                diseñando soluciones a la medida de cada cliente, generando así
                un impacto autosustentable, duradero y de valor.
              </p>
              <div className='grid lg:block place-content-center'>
                <LinkToContact />
              </div>
            </div>
          </div>
          <div className='relative min-h-[50vh]'>
            <div className='w-[112%] h-full absolute top-0 right-0 -z-20 bg-vision bg-cover bg-top bg-no-repeat' />
          </div>
        </div>
      </section>

      <section
        id={APP_ROUTES.values}
        className='p-section space-y-24 bg-stone-50'
      >
        <header className='text-center flex flex-col items-center gap-y-12'>
          <Logo size={SIZES.md} type={LOGO_TYPES.logomark} />
          <h2>
            Los valores definen nuestra identidad, guían nuestras acciones y sirven como
            pilar para forjar relaciones duraderas con clientes, asociados y colaboradores.
          </h2>
        </header>

        {VALUES_HEADERS.map((value, key) => {
          return (
            <Showcase
              heading={value.heading}
              description={value.description}
              image={{
                name: `${APP_ROUTES.values}${key}`,
                ext: IMG_EXT.svg,
                alt: value.heading,
                ...PICTURES_SIZE
              }}
              reverse={key % 2 !== 0}
              key={key}
            />
          )
        })}
      </section>
    </main>
  )
}

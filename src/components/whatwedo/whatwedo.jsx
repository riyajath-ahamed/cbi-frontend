import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const features = [
  {
    name: 'Women Empowerment',
    description:
      'We empower women to rebuild their lives, support their livelihoods, & promote gender equality & sustainable economic practices.',

  }, 
  {
    name: 'Digital Literacy for All ',
    description:
      'We help children and youth navigate the digital world safely, addressing the digital divide caused by gender, location, and poverty.           ',

  },
  {
    name: 'Life Skills, Art, & Creativity ',
    description:
      'We empower vulnerable youth through arts-based life skills & therapy to foster recognition, economic empowerment, & break the cycle of poverty.',

  },
  {
    name: 'Assisting vulnerable health',
    description:
      'We support the health needs of deprived and impoverished communities, improving healthcare access and overall well-being.',

  },
  {
    name: 'Legal Help for Every Child',
    description:
      'We offer legal support to vulnerable children, promoting child-friendly justice & addressing their career, psychological, socio-economic needs.',

  },
  {
    name: 'Mental Health Support',
    description:
      'We support mental health with accessible services, counselling, & awareness to enhance emotional resilience and reduce stigma.', 
 
  },
]

const  Whatwedo = () => {
  return (
    <div className="bgcard py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          What we do
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          To overcome the challenges posed by social and economic stress and achieve social justice.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-card-bg rounded-md border-2 border-slate-400 py-5 px-4 flex flex-col items-center">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-sm leading-7 text-center text-gray-600 mb-6">{feature.description}</dd>
                <div className=" text-primary font-semibold hover:cursor-pointer hover:text-green-700 transition-all duration-400">
                    Read More <span className="inline-block"> <FaAngleDown /> </span> 
                </div>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 text-center ">
            <a href="/what-we-do" className="text-gray-600 font-semibold hover:cursor-pointer hover:text-green-700 transition-all duration-400">
            Explore more 
            <span className="inline-block"><IoIosArrowRoundForward /></span>
            
            </a>
        </div>
      </div>
    </div>
  )
}

export default Whatwedo;

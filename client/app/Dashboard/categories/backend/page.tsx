import Link from "next/link"

export default function Page () {
const backendLanguages = [
    {
      "title": "NestJS",
      "link": '/Dashboard/categories/backend/nest',
      "prerequisites": "Node js, JS",
      "linkToDocs": "https://docs.nestjs.com/",
      "imageUrl": "https://nestjs.com/img/logo_text.svg",
    },
    {
      "title": "Express.js",
      "link": '/Dashboard/categories/backend/nest',
            "prerequisites": "Node js, JS",
      "linkToDocs": "https://expressjs.com/",
      "imageUrl": "https://expressjs.com/images/express-facebook-share.png",
    },
    {
      "title": "Django",
      "link": '/Dashboard/categories/backend/nest',
            "prerequisites": "Node js, JS",
      "linkToDocs": "https://docs.djangoproject.com/en/3.2/",
      "imageUrl": "https://www.djangoproject.com/s/img/logos/django-logo-negative.png",
    },
    {
      "title": "Node.js",
      "link": '/Dashboard/categories/backend/nest',
            "prerequisites": "Node js, JS",
      "linkToDocs": "https://nodejs.org/en/docs/",
      "imageUrl": "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg",
    }
  ]
  

    return(
        <div className='p-6'>
      <h1 className='text-3xl mb-4'>Backend Languages</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {backendLanguages.map((language, index) => (
    <div className='border rounded-md p-6'> 
    <img src={language.imageUrl} alt={language.title} height={200} width={200} className="" />

    <Link href={language.link} key={index} className="">
      <h2 className="text-xl text-white font-semibold mb-2">{language.title}</h2>
      <p className="text-gray-700">{language.prerequisites}</p>
    
    </Link>
    </div>

  ))}
</ul>
    </div>
    )
}
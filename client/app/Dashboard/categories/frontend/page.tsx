import Link from "next/link"

export default function Page () {
    const frontendLang =[
        {
          "title": "React",
          "link": '/Dashboard/categories/frontend/react',
          "prerequisites": "JavaScript",
          "linkToDocs": "https://reactjs.org/docs/getting-started.html",
          "videoUrl": "https://www.youtube.com/watch?v=DLX62G4lc44",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          "content": "React is a JavaScript library for building user interfaces, developed by Facebook. It is declarative, efficient, and flexible."
        },
        {
          "title": "Next.js",
                    "link": '/Dashboard/categories/frontend/react',
                    "prerequisites": "JS, React",
          "linkToDocs": "https://nextjs.org/docs/getting-started",
          "videoUrl": "https://www.youtube.com/watch?v=1g0VuNfrG4o",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
          "content": "Next.js is a React framework for building server-side rendered and statically generated web applications. It offers features like automatic code splitting, hot module replacement, and server-side rendering."
        },
        {
          "title": "Vue.js",
                    "link": '/Dashboard/categories/frontend/react',
                    "prerequisites": "JS",
          "linkToDocs": "https://vuejs.org/v2/guide/",
          "videoUrl": "https://www.youtube.com/watch?v=4deVCNJq3qc",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg",
          "content": "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, making it easy to integrate with other projects."
        },
        {
          "title": "Tailwind CSS",
                    "link": '/Dashboard/categories/frontend/react',
                    "prerequisites": "CSS",
          "linkToDocs": "https://tailwindcss.com/docs",
          "videoUrl": "https://www.youtube.com/watch?v=QjZIeA952jE",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/46/Logo_Tailwind_CSS.svg",
          "content": "Tailwind CSS is a utility-first CSS framework for building custom designs without having to leave your HTML. It provides low-level utility classes that can be composed to build any design, making it highly customizable."
        }
      ]
      
    return(
<div className='p-6'>
<h1 className='text-3xl mb-4'>frontend Languages</h1>

<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{frontendLang.map((language, index) => (
<div className='border rounded-md p-6'> 
<img src={language.imageUrl} alt={language.title}  height={200} width={200} className="" />
<Link href={language.link} className="">
<h2 className="text-xl text-white font-semibold mb-2">{language.title}</h2>
<p className="text-gray-700">{language.prerequisites}</p>

</Link>
</div>

))}
</ul>
</div>
    )
}
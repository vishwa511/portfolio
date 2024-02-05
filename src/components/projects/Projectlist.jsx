import Project from "./Project";
import pic1 from "../../assets/project1.png"
import pic2 from "../../assets/project2.png"
import pic3 from "../../assets/project3.png"
export default function Projectlist() {
  const projects = [
    {
      id: 1,
      src: pic1,
      link: "https://secrets-frontend.vercel.app/",
      repo: "https://github.com/vishwa511/Secrets_Share",
      data: " It is a website that allows people to add their amazing moments as a post, allowing others to like and comment.Used ReactJS for the frontend and Redux for state management. Used NodeJS for the backend and implemented various routes using the ExpressJS framework. Used mongoDB database for CRUD operations. Added login by google account feature and also implemented user authentication using jwt.",
      heading: "Secrets Share"
    },
    {
      id: 2,
      src: pic2,
      link: "https://vishwa511.github.io/endecore/",
      repo: "https://github.com/vishwa511/endecore",
      data: "It is an e-commerce furniture shop with Augmented Reality feature. Objects residing in the real world are enhanced by computer‑generated perceptual information. Used vectary for deploying 3‑D models, fully responsive and impressive UI using HTML, CSS, JS.",
      heading: "En'Decore"
    },
    {
      id: 3,
      src: pic3,
      link: "https://github.com/vishwa511",
      repo: "https://github.com/vishwa511",
      data: "It is a responsive expense tracker application using NodeJS in the backend and ReactJS in the frontend. Implemented Create, Read, Update, and Delete operations using MongoDB database. Implemented functionalities like Graphical representation of expenses in different fields and Transaction history for better UX. ",
      heading: "Expence tracker"
    },
  ];

  return (
    <div id = "project" className="px-4 lg:px-20 mx-auto max-w-screen-2xl">
        <div className="pb-4 my-10">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Projects
              </p>
        </div>

        <div className="xl:mx-4 grid md:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center gap-8 xl:px-12">
          {projects.map((data) => (
            <Project props={data} />
          ))}
        </div>
    </div>
  );
}

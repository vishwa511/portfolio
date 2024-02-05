
export default function Project({props}){
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <img className="rounded-t-lg" src={props.src} alt="project image" />

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {props.heading}
            </h5>
          </a>
          <p className="mb-3 font-normal text-justify">
            {props.data}
          </p>
          <div className="flex flex-row justify-between">
          <a
            href={props.link}
            className="inline-flex items-center px-3 py-2 hover:scale-110 duration-300 font-medium text-center text-white bg-black cursor-pointer rounded-lg"
            target="_blank"
          >
            Live-link
          </a>
          <a
            href={props.repo}
            className="inline-flex items-center px-3 py-2 hover:scale-110 duration-300 font-medium text-center text-white bg-black rounded-lg"
            target="_blank"
          >
            Code
          </a>
          </div>
        </div>
      </div>
    );
}
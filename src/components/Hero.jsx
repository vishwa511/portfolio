import heroimg from "../assets/proj.svg"
export default function Hero() {
  return (
    <div className="mx-auto max-w-screen-2xl">
    <div className=" mx-auto flex md:h-screen flex-col justify-center items-center px-4 lg:px-20 py-1 text-center md:flex-row md:items-center md:justify-between md:text-left h-full">
      <div className="py-4 md:flex md:w-1/2 md:flex-col">
            <p className="inline py-1 text-xl font-black md:text-2xl">
            Hi, I am  👋 <br/>
            <span className="text-4xl md:text-6xl">Vishwajeet Kumar</span>
            </p>
            {/* <h2 className="py-1 text-3xl font-bold">Software Engineer</h2> */}
            <p className="pt-8 text-xl md:w-3/4">
            I strive to create user-friendly and visually appealing
            software.
            </p>
            <div className="flex items-center justify-center gap-4 py-4 md:justify-start md:py-6">
            <a
            href="https://drive.google.com/file/d/1D4_vZwpLx8o5XM_Bu5qeG78TqnlJIPik/view?usp=sharing"
            className="inline-flex items-center px-3 py-2 hover:scale-110 duration-300 font-medium text-center text-white bg-black rounded-lg"
            target="_blank"
          >
            Resume
          </a>
            </div>
      </div>
      <div className="w-full my-auto sm:w-1/2">
          <img className=""
            src={heroimg}
            alt="image of coding"
          />
      </div>
    </div>
    </div>
  );
}

import myimg from "../assets/ewwww.jpg"
export default function About(){
    return (
      <div
      id = "about"
      className="mx-auto max-w-screen-2xl">
      <div className="p-4 lg:px-20">
        <div className="pb-8">
          <p className="text-4xl border-b-4 border-gray-500 font-bold inline">
            About Me
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-3">
          <div className=" w-1/2 mx-auto my-auto">
            <img
              className="rounded-3xl border-4 border-black mx-auto w-3/4 sm:w-1/2 lg:w-full"
              src={myimg}
              alt="my image"
            />
          </div>
          <div className="col-span-2">
            <p className="md:text-xl  text-justify pt-4 mt-2">
            Currently I am a final year undergraduate at the Motilal Nehru National Institute of Technology Allahabad, Prayagraj. Passionate about leveraging technology to create meaningful and user-centric experiences.<br/><br/>I am a dynamic and versatile technologist, specializing in both frontend and backend development, embodying the essence of a full-stack engineer. Proficient in crafting captivating user interfaces using technologies like ReactJS, I seamlessly integrate them with robust backend solutions. My expertise extends to NodeJS, ExpressJS, and MongoDB, allowing me to architect end-to-end solutions that blend functionality with aesthetics. With a passion for transforming concepts into immersive digital experiences, I bring a holistic approach to full-stack development, ensuring seamless, responsive, and innovative solutions at every layer of a project.<br/><br/>
            Along with development also I have solved around 1200+ data structures and algorithms questions along various platforms like codeforces, leetcode, gfg showing my problem solving skills.
            </p>
          </div>
        </div>
        </div>
      </div>
    );
}


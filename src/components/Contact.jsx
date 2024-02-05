import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Contact(){

    function handleSubmit(e) {
      e.target.reset();
    }

    return (
    <div id="contact" className="p-4 lg:px-20 mx-auto max-w-screen-2xl">
        <div className="pb-4">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Let's Connect🤝
              </p>
        </div>

      <div className="flex flex-col m-4 md:flex-row justify-center items-center">
        <div className="md:w-1/2 mx-auto md:mb-10">
              <h1 className="md:text-xl my-2 py-4"><span className="font-bold">E-mail id:</span><br/> vishwajeet.20209060@gmail.com</h1>
              <h1 className="md:text-xl my-2 py-4"><span className="font-bold">Address:</span><br/> MNNIT Allahabad, Prayagraj</h1>
              <h1 className="md:text-xl my-2"><span className="font-bold">Follow me on:</span></h1>
              <div className="flex items-center justify-center gap-4 pb-4 md:justify-start md:pb-6">
              <a
                  className="inline-flex items-center gap-2"
                  href="https://github.com/vishwa511"
              >
                  <FaGithub className="text-4xl lg:text-6xl hover:scale-110 duration-300" />
              </a>
              <a
                  className="inline-flex items-center gap-2"
                  href="https://www.linkedin.com/in/vishwa511/"
              >
                  <FaLinkedin className="text-4xl lg:text-6xl hover:scale-110 duration-300" />
              </a>
              <a
                  className="inline-flex items-center gap-2"
                  href="https://www.instagram.com/vishwa._51/"
              >
                  <FaInstagramSquare className="text-4xl lg:text-6xl hover:scale-110 duration-300" />
              </a>
              <a
                  className="inline-flex items-center gap-2"
                  href="https://twitter.com/vishwajee51"
              >
                  <FaSquareXTwitter className="hover:scale-110 duration-300 text-4xl lg:text-6xl" />
              </a>
              </div>
          </div>

        <div className="contact w-full lg:w-1/2 flex flex-col p-4 flex justify-center items-center">
            <h2 className="py-4 md:text-lg lg:text-xl font-bold">Get in Touch!!</h2>
              <form
                onSubmit={handleSubmit}
                name="contact"
                method="POST"
                action="https://getform.io/f/b55044eb-0cba-416c-a2f2-ee22e8cb3773"
                className=" flex flex-col w-full md:w-3/4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="p-2 border-2 rounded-md outline outline-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="my-4 p-2 border-2 rounded-md outline outline-2"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  required
                  className="p-2 p-2 border-2 rounded-md outline outline-2"
                ></textarea>

                <button
                  type="submit"
                  className="text-white bg-black px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                >
                  Send Message
                </button>
              </form>
        </div>
        
      </div>
      </div>
    );
}
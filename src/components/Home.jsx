import React, { useEffect, useState } from "react";
import avtar from "../assets/avtar.jpg";
import { FaArrowRight } from "react-icons/fa";
import Confetti from "react-confetti";
import {motion} from 'framer-motion'
function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userName, setUserName] = useState("");
  const [firstScreen, setFirstScreen] = useState(true);
  const [thirdScreen, setThirdScreen] = useState(false);
  const [fourthScreen, setFourthScreen] = useState(false);
  const [openPopbox, setopenPopbox] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handlethirdScreen = () => {
    setFirstScreen(false);
    setopenPopbox(false);
    setThirdScreen(true);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* First Screen */}
      {firstScreen && (
        <div
          onClick={() => setopenPopbox(true)}
          className='w-full h-full bg-[url("https://tadashiamano.vercel.app/assets/images/login.jpg")] bg-cover bg-center'
        >
          <div className="timing-box font-montserrat absolute bottom-24 left-16 text-white">
            <p className="text-8xl font-extrabold">{formatTime(currentTime)}</p>
            <p className="text-4xl font-normal">{formatDate(currentTime)}</p>
          </div>
        </div>
      )}

      {/* Second Screen */}
      {openPopbox && (
        <div className="w-full font-montserrat h-full flex items-center justify-center bg-black/50 backdrop-blur-md absolute top-0 left-0">
          <div className=" p-8 w-[26rem] text-center">
            <img
              src={avtar}
              alt="Profile"
              className="w-56 h-56 rounded-full mx-auto mb-4"
            />
            <div className="flex mt-10">
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="What's your name ?"
                className="w-full p-2 border outline-none border-gray-800 mb-4"
              />
              <div
                onClick={handlethirdScreen}
                className="p-2 cursor-pointer px-4 mb-4 text-2xl text-white w-fit bg-gray-600 flex justify-center items-center"
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Third Screen */}
      {thirdScreen && (
        <div className="w-full font-montserrat h-full flex items-center bg-black justify-center absolute top-0 left-0">
          <div className=" p-5 w-[26rem] rounded-lg shadow-lg bg-[#18181B]">
            <div className="flex flex-col">
              <Confetti />
              <p className="userName text-white text-lg">👏 Hi {userName}</p>
              <p className="mt-3 text-gray-500 ">
                Thanks for stopping by! I'm really excited to share my work with
                you.
              </p>
              <p className="mt-3 text-gray-500 ">
                just click on the any card to dive deeper into the project
                details and see what i've been up to. Take your time, explore,
                and have fun!
              </p>

              <div className="flex justify-end space-x-4 mt-6 text-white">
                <button
                  onClick={() => {
                    setFourthScreen(true);
                    setThirdScreen(false);
                  }}
                  className="bg-white-500 text-red-500 px-4 py-2 rounded-lg"
                >
                  Close
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Play Music
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fourth Screen */}
      {fourthScreen && (
        <div
          style={{
            background:
              "radial-gradient(circle, rgba(2,0,36,1) 32%, rgba(60,55,110,1) 100%, rgba(0,212,255,1) 100%)",
          }}
          className="fourthScreen w-full h-full flex justify-center items-center "
        >
          <div className="h-screen w-full text-white font-montserrat flex justify-center items-center p-8">
            {/* Main Grid Container */}
            <div className="mx-auto grid max-w-full grid-cols-5 gap-4">
              {/* Left Column (2 boxes stacked) */}
              <div className="col-span-1 w-64 flex flex-col gap-4">
                <div className="h-[20rem] flex flex-col justify-between text-center rounded-lg  bg-[#18181B] p-8 shadow-lg">
                  <p className="font-semibold text-lg">Project Complete</p>
                  <p className="text-8xl font-semibold">10+</p>
                  <p className="font-normal text-lg">Completed 10+ projects</p>
                </div>
                <div className="h-[20rem] flex flex-col text-center justify-between  rounded-lg bg-[#18181B] p-8 shadow-lg">
                  <p className="font-semibold font-lg">Total Followers</p>
                  <div className="flex justify-center items-center">
                    <img
                      className="w-36"
                      src="https://tadashiamano.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhearts.png&w=384&q=75"
                      alt="hearts"
                    />
                  </div>
                  <div className="">
                    <p className="text-4xl font-semibold">00</p>
                    <p className="font-normal text-lg">00 Users Followed</p>
                  </div>
                </div>
              </div>

              {/* Middle Column (3 rows, 2 boxes per row) */}
              <div className="col-span-3 flex flex-col gap-4">
                {/* Row 1 */}
                <div className="grid   grid-cols-2 gap-4">
                  <div className="h-48 bg-[#006fee]  rounded-lg  p-8 shadow-lg">
                    <p className="font-semibold text-lg">Full Name</p>
                    <p className="font-normal text-2xl mt-4">Himanshu Singh</p>
                  </div>
                  <div className="h-48 bg-[#9353d3] rounded-lg  p-8 shadow-lg">
                    <p className="font-semibold text-lg">Headline</p>
                    <p className="font-normal text-2xl mt-4">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="h-[15rem] flex justify-center rounded-lg bg-[#18181B] p-6 shadow-lg">
                    <p className="font-semibold text-sm">
                      As a Full Stack Engineer with a B.TECH degree in Computer
                      Science, I have a strong background in web development,
                      digital signage, and software project management. I am
                      passionate about delivering seamless digital experiences
                      and staying updated with the latest tech trends. In my
                      most recent role at MOLOG, a leading digital signage
                      software company, I worked on screen connectivity, content
                      management, and playlist creation features, using HTML,
                      CSS, JavaScript, ReactJS, AWS, Github, Framer motion, and
                      Gsap Animation. I contributed to the development and
                      deployment of multiple projects for clients across various
                      industries, ensuring high-quality and user-friendly
                      outcomes. I also collaborated with other engineers,
                      designers, and stakeholders, applying agile and scrum
                      methodologies. I am eager to leverage my skills and
                      expertise in new and challenging opportunities in the
                      dynamic world of digital signage and web development.
                      Let's connect and explore how we can work together!
                    </p>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-48 bg-[#f5a524] rounded-lg  p-8 shadow-lg">
                    <p className="font-semibold text-2xl ">Experience</p>
                    <p className="text-center font-semibold text-7xl mt-2">
                      2y+
                    </p>
                  </div>
                  <div className="h-48 bg-[#17c964] rounded-lg p-8 shadow-lg">
                    <p className="font-semibold text-2xl ">Skills</p>
                    <p className="text-center font-semibold text-7xl mt-2">
                      22
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column (2 boxes stacked) */}
              <div className="col-span-1 w-64 flex flex-col gap-4">
                {/* Testimonials Section */}
                <div className="h-[20rem] flex flex-col text-center justify-between rounded-lg bg-[#18181B] p-8 shadow-lg">
                  <p className="font-semibold text-lg">Testimonials</p>
                  <div className="flex justify-center items-center">
                    <img
                      className="w-36"
                      src="https://tadashiamano.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ftestimonial.png&w=384&q=75"
                      alt="testimonial"
                    />
                  </div>
                  <div>
                    {/* <p className="text-4xl font-semibold">00</p> */}
                    <p className="font-normal text-lg">
                      Completed 10+ Projects
                    </p>
                  </div>
                </div>

                {/* Contact Info Section */}
                <div className="h-[20rem] flex flex-col justify-between text-center rounded-lg bg-[#18181B] p-8 shadow-lg">
                  <p className="font-semibold text-lg">Contact Info</p>
                  <div className="flex justify-center gap-4">
                    {/* Spacing between icons */}
                    <img
                      className="w-24"
                      src="https://tadashiamano.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fsignal.png&w=384&q=75"
                      alt="signal"
                    />
                    <img
                      className="w-24"
                      src="https://tadashiamano.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ftelegram.png&w=384&q=75"
                      alt="telegram"
                    />
                  </div>
                  <div className="flex justify-center gap-4">
                    {/* Spacing between icons */}
                    <img
                      className="w-24"
                      src="https://tadashiamano.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fwhatsapp.png&w=384&q=75"
                      alt="signal"
                    />
                    <img
                      className="w-24"
                      src="https://tadashiamano.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fgoogle.png&w=384&q=75"
                      alt="telegram"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*sidebar of fourth Screen */}
      {/* <div className="sidebar font-montserrat w-full h-full  bg-black/50 backdrop-blur-md absolute top-0 left-0 ">
        <div className="sidebar z-11 w-[22rem] h-full bg-[#18181B] rounded-xl ">
            <div className="flex p-5 text-white justify-between">
                <h3 className="font-semibold text-xl">Recent Project</h3>
                <button className="font-semibold text-xl">close</button>
            </div>
        </div>

        </div> */}
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import avtar from "../assets/avtar.jpg";
import { FaArrowRight } from "react-icons/fa";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";
import { CiLinkedin } from "react-icons/ci";
import { skills } from "../data/projects";
import resume from '../assets/Himanshu_3y_Fullstack.pdf'
function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userName, setUserName] = useState("");
  const [firstScreen, setFirstScreen] = useState(true);
  const [thirdScreen, setThirdScreen] = useState(false);
  const [fourthScreen, setFourthScreen] = useState(false);
  const [openPopbox, setopenPopbox] = useState(false);
  const [projectSidebar, setProjectSidebar] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [skillsPanel, setskillsPanel] = useState(false);
  const [project] = useState(projects);

  const profilePanelVariants = {
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.1, when: "afterChildren" },
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };

  const panelVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const rightPanelVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const [motionSettings] = useState({
    y: [30, 0],
    opacity: [0, 1],
    transition: { duration: 0.9, ease: "easeInOut" },
  });

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
          className="fourthScreen font-montserrat w-full h-full flex justify-center items-center"
        >
          <motion.div className="h-screen w-full text-white font-montserrat flex justify-center items-center p-8">
            {/* Main Grid Container */}
            <div className="mx-auto grid max-w-full grid-cols-5 gap-4">
              {/* Left Column (2 boxes stacked) */}
              <div className="col-span-1 w-64 flex flex-col gap-4">
                <motion.div
                  onClick={() => setProjectSidebar(true)}
                  whileInView={{
                    y: [-50, 0],
                    transition: { duration: 0.6 },
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="h-[20rem] cursor-pointer flex flex-col justify-between text-center rounded-lg bg-[#18181B] p-8 shadow-lg"
                >
                  <motion.p
                    whileInView={motionSettings}
                    className="font-semibold text-lg"
                  >
                    Project Complete
                  </motion.p>
                  <motion.p
                    whileInView={motionSettings}
                    className="text-8xl font-semibold"
                  >
                    10+
                  </motion.p>
                  <motion.p
                    whileInView={motionSettings}
                    className="font-normal text-lg"
                  >
                    Completed 10+ projects
                  </motion.p>
                </motion.div>

                <motion.div
                  whileInView={{
                    y: [-50, 0],
                    transition: {
                      duration: 0.6,
                    },
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="h-[20rem] flex flex-col text-center justify-between rounded-lg bg-[#18181B] p-8 shadow-lg"
                >
                  <motion.p
                    whileInView={motionSettings}
                    className="font-semibold font-lg"
                  >
                    Total Followers
                  </motion.p>
                  <div className="flex justify-center items-center">
                    <motion.img
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                      className="w-36"
                      src="https://tadashiamano.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhearts.png&w=384&q=75"
                      alt="hearts"
                    />
                  </div>
                  <div>
                    <motion.p
                      whileInView={motionSettings}
                      className="text-4xl font-semibold"
                    >
                      00
                    </motion.p>
                    <motion.p
                      whileInView={motionSettings}
                      className="font-normal text-lg"
                    >
                      00 Users Followed
                    </motion.p>
                  </div>
                </motion.div>
              </div>

              {/* Middle Column (3 rows, 2 boxes per row) */}
              <div className="col-span-3 flex flex-col gap-4">
                {/* Row 1 */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    onClick={() => setShowProfilePanel(true)}
                    whileInView={{
                      y: [-50, 0],
                      transition: {
                        duration: 0.6,
                      },
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className="h-48 cursor-pointer bg-[#006fee] rounded-lg p-8 shadow-lg"
                  >
                    <motion.p
                      whileInView={motionSettings}
                      className="font-semibold text-lg"
                    >
                      Full Name
                    </motion.p>
                    <motion.p
                      whileInView={motionSettings}
                      className="font-normal text-2xl mt-4"
                    >
                      Himanshu Singh
                    </motion.p>
                  </motion.div>
                  <motion.div
                    whileInView={{
                      y: [-50, 0],
                      transition: {
                        duration: 0.6,
                      },
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className="h-48 cursor-pointer bg-[#9353d3] rounded-lg p-8 shadow-lg"
                  >
                    <motion.p
                      whileInView={motionSettings}
                      className="font-semibold text-lg"
                    >
                      Headline
                    </motion.p>
                    <motion.p
                      whileInView={motionSettings}
                      className="font-normal text-2xl mt-4"
                    >
                      Full Stack Developer
                    </motion.p>
                  </motion.div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 gap-4">
                  <motion.div
                    whileInView={{
                      y: [-50, 0],
                      transition: {
                        duration: 0.6,
                      },
                    }}
                    className="h-[15rem] flex justify-center rounded-lg bg-[#18181B] p-6 shadow-lg"
                  >
                    <motion.p
                      whileInView={motionSettings}
                      className="font-semibold text-sm"
                    >
                      As a Frontend Engineer with a B.TECH degree in Computer
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
                    </motion.p>
                  </motion.div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileInView={{
                      y: [-50, 0],
                      transition: {
                        duration: 0.6,
                      },
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className="h-48 cursor-pointer bg-[#f5a524] rounded-lg p-8 shadow-lg"
                  >
                    <motion.p
                      whileInView={motionSettings}
                      className="font-semibold text-2xl"
                    >
                      Experience
                    </motion.p>
                    <motion.p
                      whileInView={motionSettings}
                      className="text-center font-semibold text-7xl mt-2"
                    >
                      2y+
                    </motion.p>
                  </motion.div>
                  <motion.div
                    onClick={() => setskillsPanel(true)}
                    whileInView={{
                      y: [-50, 0],
                      transition: {
                        duration: 0.6,
                      },
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                    className="h-48 cursor-pointer bg-[#17c964] rounded-lg p-8 shadow-lg"
                  >
                    <motion.p
                      whileInView={motionSettings}
                      className="font-semibold text-2xl"
                    >
                      Skills
                    </motion.p>
                    <motion.p
                      whileInView={motionSettings}
                      className="text-center font-semibold text-7xl mt-2"
                    >
                      22
                    </motion.p>
                  </motion.div>
                </div>
              </div>

              {/* Right Column (2 boxes stacked) */}
              <div className="col-span-1 w-64 flex flex-col gap-4">
                {/* Testimonials Section */}
                <motion.div
                  whileInView={{
                    y: [-50, 0],
                    transition: {
                      duration: 0.6,
                    },
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="h-[20rem] flex flex-col text-center justify-between rounded-lg bg-[#18181B] p-8 shadow-lg"
                >
                  <motion.p
                    whileInView={motionSettings}
                    className="font-semibold text-lg"
                  >
                    Testimonials
                  </motion.p>
                  <div className="flex justify-center items-center">
                    <motion.img
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                      className="w-36"
                      src="https://tadashiamano.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ftestimonial.png&w=384&q=75"
                      alt="testimonial"
                    />
                  </div>
                  <div>
                    <motion.p
                      whileInView={motionSettings}
                      className="font-normal text-lg"
                    >
                      Completed 10+ Projects
                    </motion.p>
                  </div>
                </motion.div>

                {/* Contact Info Section */}
                <motion.div
                  whileInView={{
                    y: [-50, 0],
                    transition: {
                      duration: 0.6,
                    },
                  }}
                  className="h-[20rem] flex flex-col justify-between text-center rounded-lg bg-[#18181B] p-8 shadow-lg"
                >
                  <motion.p
                  
                    whileInView={motionSettings}
                    className="font-semibold text-lg"
                  >
                    Contact Info
                  </motion.p>
                  <div className="flex justify-center gap-4">
                    <motion.img
                    onClick={() =>
                      window.open('https://github.com/DevHimanshu63')
                    }
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                      className="w-24 cursor-pointer"
                      src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
                      alt="github"
                    />
                    <motion.img
                      whileHover={{
                        scale: 1.1,
                        rotate: 90,
                        transition: { duration: 0.6 },
                      }}
                      onClick={() =>
                        window.open('https://www.linkedin.com/in/himanshu-chauhan-bb6a671b2/')
                      }
                      className="w-24 cursor-pointer rounded-lg"
                      src="https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png"
                      alt="linkedin"
                    />
                  </div>
                  <div className="flex justify-center gap-4">
                    <motion.img
                      whileHover={{
                        scale: 1.1,
                        rotate: 90,
                        transition: { duration: 0.6 },
                      }}
                      onClick={() => window.open("https://wa.me/6307279736", "_blank")}
                      className="w-24 cursor-pointer"
                      src="https://tadashiamano.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fwhatsapp.png&w=384&q=75"
                      alt="whatsapp"
                    />
                    <motion.img
                      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                      className="w-24 cursor-pointer"
                      src="https://tadashiamano.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fgoogle.png&w=384&q=75"
                      alt="google"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/*sidebar of fourth Screen */}
      {projectSidebar && (
        <div className="sidebar font-montserrat w-full h-full bg-black/50 backdrop-blur-md absolute top-0 left-0">
          <div
            style={{
              transform: projectSidebar ? "translateX(0)" : "translateX(-100%)",
              opacity: projectSidebar ? "1" : "0",
            }}
            className="sidebar overflow-y-auto max-h-screen z-11 w-[26rem] h-full bg-[#18181B] rounded-xl transition-all duration-500 ease-in-out"
          >
            <div className="flex p-5 text-white justify-between">
              <h3 className="font-semibold text-xl">Recent Project</h3>
              <button
                onClick={() => setProjectSidebar(false)}
                className="font-semibold text-xl"
              >
                X
              </button>
            </div>

            <div className="project-details p-3">
              <div className="shadow-lg p-4 cursor-pointer">
                <motion.img
                  onClick={() =>
                    window.open(projects[currentProjectIndex].link, "_blank")
                  }
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  className="w-full h-full rounded-[50px]"
                  src={projects[currentProjectIndex].image}
                  alt="projectimage"
                />
              </div>
              <div className="project-namebox flex items-center justify-between p-3">
                <div className="project-namebox">
                  <h3 className="font-semibold text-lg text-white">
                    {projects[currentProjectIndex].title}
                  </h3>
                  <p className="font-normal text-gray-500">
                    {projects[currentProjectIndex].description}
                  </p>
                </div>
                <div
                  className="text-white cursor-pointer"
                  onClick={() =>
                    window.open(projects[currentProjectIndex].link, "_blank")
                  }
                >
                  <FaExternalLinkAlt />
                </div>
              </div>

              <div className="client-details flex items-center gap-5 p-3">
                <div className="rounded-md overflow-hidden">
                  <img
                    className="w-[80px] h-[80px]"
                    src={projects[currentProjectIndex].client.avatar}
                    alt="client image"
                  />
                </div>
                <div className="client-details">
                  <h3 className="font-semibold text-lg text-white">
                    {projects[currentProjectIndex].client.name}
                  </h3>
                  <p className="font-normal text-gray-500">
                    {projects[currentProjectIndex].client.role}
                  </p>
                </div>
              </div>

              <div className="project-description p-3">
                <h3 className="font-semibold text-white text-lg">
                  About the project
                </h3>
                <p className="font-normal text-gray-500 text-md mt-5">
                  {projects[currentProjectIndex].about}
                </p>
              </div>
            </div>

            <div className="other-projectshandler flex justify-end gap-5 p-5">
              <button
                onClick={() => setProjectSidebar(false)}
                className="text-red-500 font-normal text-sm"
              >
                Close
              </button>
              <button
                onClick={handlePrevProject}
                className="bg-gray-700 text-white font-normal text-sm p-3 px-6 rounded-md"
              >
                Previous
              </button>
              <button
                onClick={handleNextProject}
                className="bg-blue-700 text-white font-normal text-sm p-3 px-6 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Panel */}
      <AnimatePresence>
        {showProfilePanel && (
          <motion.div
            key="profile-panel"
            variants={profilePanelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[60]"
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowProfilePanel(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panels Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Left Panel */}
              <motion.div
                variants={panelVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full w-1/2 flex justify-center items-center bg-gray-800 p-8 "
              >
                <motion.div
                  whileInView={{
                    x: [-100, 0],
                    transition: {
                      duration: 1,
                    },
                  }}
                  className="profile-summary"
                >
                  <img className="rounded-lg" src={avtar} alt="" />
                </motion.div>
              </motion.div>

              {/* Right Panel */}
              <motion.div
                variants={rightPanelVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gray-800 p-8 cursor-pointer font-montserrat"
              >
                <div className="flex justify-end cursor-pointer">
                  <button
                    className="text-3xl w-[50px] h-[50px] rounded-full flex justify-center items-center text-black bg-white hover:bg-gray-500 transition-colors"
                    onClick={() => setShowProfilePanel(false)}
                  >
                    ×
                  </button>
                </div>

                <motion.div
                  whileInView={{
                    x: [100, 0],
                    transition: {
                      duration: 1,
                    },
                  }}
                  className="h-full flex flex-col justify-center items-center text-center"
                >
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Himanshu Singh
                  </h2>
                  <p className="text-gray-600 text-2xl">
                    MOLOG || Pepcoding || Future Gurukuls
                  </p>

                  <div className="space-y-4 text-gray-300 mt-10">
                    <div className="flex items-center space-x-[6rem]">
                      <CiLocationOn className="w-6 h-6 text-blue-400" />
                      <span>New Delhi, India</span>
                    </div>

                    <div className="flex items-center space-x-[6rem]">
                      <SlCalender className="w-6 h-6 text-purple-400" />
                      <span>06th August, 2002</span>
                    </div>

                    <div className="flex items-center space-x-[6rem]">
                      <FaGithub className="w-6 h-6 text-gray-100" />
                      <a
                        href="https://github.com/DevHimanshu63"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 flex gap-3 items-center transition-colors"
                      >
                        DevHimanshu63 <FaExternalLinkAlt />
                      </a>
                    </div>
                    <div className="flex items-center space-x-[6rem]">
                      <CiLinkedin className="w-6 h-6 text-blue-400" />
                      <a
                        href="https://github.com/DevHimanshu63"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 flex gap-3 items-center transition-colors"
                      >
                        LinkedIn <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* skills panel*/}
      {skillsPanel && (
        <div className="skills-panel font-montserrat flex justify-center items-center w-full h-full bg-black/50 backdrop-blur-md absolute top-0 left-0">
          <motion.div
            whileInView={{
              y: [-40, 0],
              transition: {
                duration: 1,
              },
            }}
            className="w-[40%] h-[60%] bg-gray-800 p-8 rounded-lg"
          >
            <motion.div 
            whileInView={{
              y: [-20, 0],
              transition: {
                duration: 1,
              },
            }}
            className="flex justify-between items-center">
              <h2 className="text-white text-2xl ">Skill set</h2>
              <button
                onClick={() => setskillsPanel(false)}
                className="float-right text-lg text-white"
              >
                X
              </button>
            </motion.div>

            <div className="skills-list mt-5 w-full h-full p-5">
              <div className="w-full h-full p-2 flex flex-wrap gap-5">
                {skills.map((skill, index) => (
                  <motion.div
                  whileInView={{
                    y: [-40, 0],
                    transition: {
                      duration: 1,
                    },
                  }}
                    key={index}
                    className="flex flex-col items-center relative"
                  >
                    <p className="bg-[#9353d3] text-white p-1 rounded-full absolute -top-2 -right-2 text-xs font-bold">
                      {skill.exp}
                    </p>
                    <img
                      className="w-12 h-12"
                      src={skill.img}
                      alt={skill.name}
                    />
                    <span className="text-white text-lg mt-2">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Home;

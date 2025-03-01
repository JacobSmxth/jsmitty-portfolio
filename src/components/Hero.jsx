import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedin , FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { button } from "framer-motion/client";


const Hero = () => {
    const buttonVariants = {
        animation: {
            opacity: .65,
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: .9,
            }
        }
    }
  

    return (
        <section className=" p-3 text-gray-200 max-w-screen w-full flex flex-col">
            <img className="rounded-full object-cover w-3/5 mx-auto bg-gray-700" src="/pictureface.png" alt="robotic face icon" />
            <div className="flex justify-between items-center gap-4 mt-5 p-3">
                <h1 className="text-2xl">Jacob Smith</h1>
                <span className="flex gap-3 text-2xl">
                    <a href="https://github.com/JacobSmxth" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                    <a href="https://www.linkedin.com/in/jacobsmxth/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://x.com/jacobsmxth2" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                    <a href="https://www.instagram.com/jacobsmxth2" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </span>
            </div>
                <h3 className="px-3 py-1">I am a 19-year-old frontend developer building secure sites with React and Tailwind.</h3>
                <div className="max-w-screen flex justify-center gap-4 mt-4 pb-6 border-b-1 border-b-gray-700">
                    <a href="#" className="px-3 py-2 ml-3 max-w-1/3 rounded-xl text-center bg-blue-900">See Projects</a>
                    <a href="#" className="px-3 py-2 mr-3 max-w-1/2 rounded-xl text-center bg-blue-900">Download Resume</a>
                </div>
        </section>
    )
}
export default Hero;
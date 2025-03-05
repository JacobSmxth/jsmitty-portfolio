import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedin , FaInstagram } from "react-icons/fa";
import AnimationWrapper from "../components/AnimationWrapper";
import { fadeIn, fromLeft, fromRight, scaleUp } from '../utils/animationVariants';

const Hero = () => {
  

    return (
        <section className=" p-3 text-gray-200 max-w-screen w-full flex flex-col">
            <AnimationWrapper variants={scaleUp}>
                <img className="rounded-full object-cover w-3/5 mx-auto bg-gray-700 sm:w-1/2 md:w-2/5 lg:w-1/3" src="/pictureFace.svg" alt="robotic face icon" />
            </AnimationWrapper>
            <div className="flex justify-between items-center gap- mt-5 p-3">
                <AnimationWrapper variants={fromLeft}>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl">Jacob Smith</h1>
                </AnimationWrapper>
                <AnimationWrapper variants={fromRight}>
                    <span className="flex gap-3 text-2xl md:text-3xl lg:text-5xl">
                        <a href="https://github.com/JacobSmxth" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                        <a href="https://www.linkedin.com/in/jacobsmxth/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://x.com/jacobsmxth2" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
                        <a href="https://www.instagram.com/jacobsmxth2" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </span>
                </AnimationWrapper>
            </div>
                <AnimationWrapper variants={scaleUp}>
                    <h3 className="px-3 md:text-xl lg:text-2xl">Atlanta, GA<br />I am a 19-year-old frontend developer building secure sites with React and Tailwind.</h3>
                </AnimationWrapper>
                <div className="max-w-screen flex justify-center gap-4 mt-4 pb-6 border-b-1 border-b-gray-700 md:mt-10 md:gap-20">
                    <AnimationWrapper variants={fromLeft}>
                        <a href="#Projects" className="px-3 py-2 ml-3 max-w-1/3 rounded-xl text-center bg-blue-900 md:px-5 md:py-4">See Projects</a>
                    </AnimationWrapper>
                    <AnimationWrapper variants={fromRight}>
                        <a href="https://docs.google.com/document/d/1BJA9teks9FotnFxpHl-WVYmhX3R-Cfj5omWKuL0ZWw0/edit?tab=t.0" className="px-3 py-2 mr-3 max-w-1/2 rounded-xl text-center bg-blue-900 md:px-5 md:py-4">See Resume</a>
                    </AnimationWrapper>
                </div>
        </section>
    )
}
export default Hero;
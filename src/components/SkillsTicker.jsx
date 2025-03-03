import { div } from "framer-motion/client";
import Marquee from "react-fast-marquee";

const SkillsTicker = () => {
    
    return (
        <div className=" text-xl border-y-1 p-4 text-gray-200 w-screen">
            <Marquee speed={50} pauseOnHover={true}>
                <span className="text-gray-200 px-2">HTML5</span>
                <span className="text-gray-200 px-2">CSS3</span>
                <span className="text-gray-200 px-2">JS</span>
                <span className="text-gray-200 px-2">React</span>
                <span className="text-gray-200 px-2">Tailwind CSS</span>
                <span className="text-gray-200 px-2">Git</span>
                <span className="text-gray-200 px-2">Netlify</span>
            </Marquee>
        </div>
    )
}
export default SkillsTicker;
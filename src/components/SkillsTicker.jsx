import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGitAlt, FaGithub, 
  FaFigma, FaCode, FaMobile, FaSearch, FaUniversalAccess, FaTachometerAlt
} from "react-icons/fa";
import { SiTailwindcss, SiNetlify, SiVercel } from "react-icons/si";

const SkillsTicker = () => {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
      color: "text-blue-400"
    },
    {
      category: "Styling",
      skills: ["Tailwind CSS", "SASS", "Styled Components"],
      color: "text-pink-400"
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Netlify", "Vercel"],
      color: "text-green-400"
    },
    {
      category: "Other",
      skills: ["Responsive Design", "SEO", "Accessibility", "Performance Optimization"],
      color: "text-purple-400"
    }
  ];

  const getIcon = (skill) => {
    switch(skill) {
      case "HTML5": return <FaHtml5 className="mr-2" />;
      case "CSS3": return <FaCss3Alt className="mr-2" />;
      case "JavaScript": return <FaJs className="mr-2" />;
      case "TypeScript": return <FaCode className="mr-2" />;
      case "React": return <FaReact className="mr-2" />;
      case "Next.js": return <FaCode className="mr-2" />;
      case "Tailwind CSS": return <SiTailwindcss className="mr-2" />;
      case "SASS": return <FaSass className="mr-2" />;
      case "CSS Modules": return <FaCode className="mr-2" />;
      case "Styled Components": return <FaCode className="mr-2" />;
      case "Git": return <FaGitAlt className="mr-2" />;
      case "GitHub": return <FaGithub className="mr-2" />;
      case "VS Code": return <FaCode className="mr-2" />;
      case "Figma": return <FaFigma className="mr-2" />;
      case "Netlify": return <SiNetlify className="mr-2" />;
      case "Vercel": return <SiVercel className="mr-2" />;
      case "Responsive Design": return <FaMobile className="mr-2" />;
      case "SEO": return <FaSearch className="mr-2" />;
      case "Accessibility": return <FaUniversalAccess className="mr-2" />;
      case "Performance Optimization": return <FaTachometerAlt className="mr-2" />;
      default: return null;
    }
  };

  const SkillItem = ({ text, color }) => (
    <motion.span
      whileHover={{ scale: 1.1 }}
      className={`${color} px-3 py-1 mx-1 inline-flex items-center justify-center rounded-md bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300 text-base md:text-lg`}
    >
      {getIcon(text)}
      {text}
    </motion.span>
  );

  const Separator = () => (
    <span className="mx-4 text-gray-500 text-xl">•</span>
  );

  return (
    <div className="py-6 border-y border-gray-700 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-full overflow-hidden">
      <Marquee
        speed={40}
        pauseOnHover={true}
        gradientWidth={50}
        gradientColor={[17, 24, 39]}
        className="overflow-hidden"
      >
        {skillGroups.map((group, groupIndex) => (
          <div key={group.category} className="inline-flex items-center">
            {<Separator />}
            <span className="text-gray-400 font-medium mr-2">
              {group.category}:
            </span>
            {group.skills.map((skill) => (
              <SkillItem
                key={`${group.category}-${skill}`}
                text={skill}
                color={group.color}
              />
            ))}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default SkillsTicker;
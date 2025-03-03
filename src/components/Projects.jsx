import { div } from 'framer-motion/client';
import projectData from '../data/projectData'
import SkillsTicker from './SkillsTicker';

const Projects = () => {

    return (
        <div className="w-full p-2">
            <h1 className="text-2xl text-center text-gray-200 p-3">
                Featured Work
            </h1>
            <div id='Projects' className='flex flex-col items-center my-4'>
                {projectData.map((proj) => {
                    return (
                        <div key={proj.id} className='border-1 border-gray-700  text-gray-300 rounded-xl max-w-2/3 text-center flex flex-col items-center mb-5'>
                            <img className='max-w-full px-5 pt-6' src={proj.image} alt={"photo of " + proj.name} />
                            <h1 className='text-lg p-2'>
                                {proj.name}
                            </h1>
                            <div className='flex max-w-full mb-3'>
                                {proj.tech.map(thing => {
                                    return (
                                        <div className='text-xs rounded-2xl text-gray-100 mx-1 px-2 bg-gray-700' key={proj.id + "k" + Math.random().toString(36).substring(2,8)}>
                                            {thing}
                                        </div>
                                    )
                                })}
                            </div>
                            <p className='text-xs text-gray-400'>
                                {proj.description}
                            </p>
                            <div className='flex justify-center gap-5 py-3'>
                                <a href={proj.live} target='_blank' className='border-b-1'>Live Demo</a>
                                <a href={proj.github} target='_blank' className='border-b-1'>View Code</a>
                            </div>
                            
                        </div>
                    )
                })}

                
            </div>
        </div>
    )
}
export default Projects;
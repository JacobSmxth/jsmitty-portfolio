import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SkillsTicker from './components/SkillsTicker'


function App() {
  
  return (
    <>
      <div className='md:bg-linear-to-br md:from-gray-700 md:to-gray-900'>
        <div id="wrapper" className="bg-linear-to-br from-gray-700 to-gray-900 min-h-screen md:max-w-9/10 md:mx-auto md:bg-none lg:max-w-8/10 xl:max-w-7/10">
          <Header />
          <section id="content" className=''>
            <Hero />
            <Projects />
          </section>
          <SkillsTicker />
        </div>
      </div>
    </>
  )
}

export default App

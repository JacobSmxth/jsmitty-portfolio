import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SkillsTicker from './components/SkillsTicker'


function App() {
  
  return (
    <>
      <div id="wrapper" className="bg-linear-to-br from-gray-700 to-gray-900 min-h-screen">
        <Header />
        <section id="content" className=''>
          <Hero />
          <Projects />
        </section>
        <SkillsTicker />
      </div>
    </>
  )
}

export default App

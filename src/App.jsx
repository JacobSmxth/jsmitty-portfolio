import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  
  return (
    <>
      <div id="wrapper" className="bg-linear-to-br from-gray-700 to-gray-900 min-h-screen">
        <Header />
        <section id="content">
          <Hero />
        </section>
      </div>
    </>
  )
}

export default App

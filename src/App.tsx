import { Suspense, useState } from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import TechnologySection from './Components/TechnologySection'
import type { ITechnology } from './Components/Types/Type'
import Stack from './Components/Stack'
import InfoSection from './Components/InfoSection'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'


const technologyPromise = async () => {
    const response = await fetch('/data.json')
    return response.json()
  }

  const dataPromise = technologyPromise()

function App() {


  const [stack, setStack] = useState<ITechnology[]>([])

  return (
    <>
    
      <Nav />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-6">
    <div className="lg:w-3/4">
        <TechnologySection dataPromise={dataPromise} stack={stack} setStack={setStack} />
    </div>
    <div className="lg:w-1/4 mt-40">
        <Stack stack={stack} setStack={setStack} />
    </div>
</div>
      </Suspense>
      <InfoSection />
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App

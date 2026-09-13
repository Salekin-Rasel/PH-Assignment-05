import { Suspense, useState } from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import TechnologySection from './Components/TechnologySection'
import type { ITechnology } from './Components/Types/Type'
import Stack from './Components/Stack'


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
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
    <div className="lg:w-3/4">
        <TechnologySection dataPromise={dataPromise} stack={stack} setStack={setStack} />
    </div>
    <div className="lg:w-1/4">
        <Stack stack={stack} setStack={setStack} />
    </div>
</div>
      </Suspense>
    </>
  )
}

export default App

import { Suspense, useState } from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import TechnologySection from './Components/TechnologySection'
import type { ITechnology } from './Components/Types/Type'


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
        <TechnologySection dataPromise={dataPromise} stack={stack} setStack={setStack} />
      </Suspense>
    </>
  )
}

export default App

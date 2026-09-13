import { Suspense, useState } from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import TechnologySection from './Components/TechnologySection'



function App() {


  const technologyPromise = async () => {
    const response = await fetch('/data.json')
    return response.json()
  }

  const dataPromise = technologyPromise()

  return (
    <>
    
      <Nav />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <TechnologySection dataPromise={dataPromise} />
      </Suspense>
    </>
  )
}

export default App

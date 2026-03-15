import { BentoGrid } from "./component/Bento-grid"
import { Navigation } from "./component/Navigation"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


function App() {
  useEffect(() => { 
    AOS.init({
      duration: 1500,
      once: true,
    })
  },[])

  return (
    <>
    <Navigation/>
    <BentoGrid/>
    </>
  )
}

export default App

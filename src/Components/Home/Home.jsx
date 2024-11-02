import { Outlet } from "react-router-dom"
import Hero from "./Hero"

function Home() {
  return (
    <section className="mt-10 mx-auto container">
      <Hero></Hero>
      <Outlet></Outlet>
    </section>
  )
}

export default Home

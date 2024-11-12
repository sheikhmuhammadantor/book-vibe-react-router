import { Outlet, useNavigation } from "react-router-dom"
import Hero from "./Hero"

function Home() {

  const navigation = useNavigation();
  console.log(navigation);
  if(navigation.state === "loading") {console.log("loading")}


  return (
    <section className="mt-10 mx-auto container">
      <Hero></Hero>
      <Outlet></Outlet>
    </section>
  )
}

export default Home

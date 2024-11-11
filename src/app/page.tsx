import Hero from "./components/Hero/page";
import About from "./components/About/page";
import Contact from "./components/Contact/page";
import Flavour from "./components/Flavour/page";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Flavour></Flavour>
      <Contact></Contact>
    </div>
  );
}

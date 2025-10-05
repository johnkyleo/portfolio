import Hero from "./Hero";
import Sociallinks from "./Sociallinks";
import Skills from "./Skills";
import Emailcard from "./Emailcard";
import Contactcard from "./Contactcard";

import About from "./About";
import Projectslideshow from "./Projectslideshow";

export function BentoGrid() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4  auto-rows-[minmax(200px,auto)]">
        <Hero />

        <Sociallinks />

        <Emailcard />

        <Skills />

        <About />

         <div id="projects" className="md:col-span-6 lg:col-span-12 row-span-1 md:row-span-2">
         <Projectslideshow />
        </div>
        <Contactcard />
      </div>
    </div>
  );
}

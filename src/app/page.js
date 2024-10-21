// pages/index.js

import { BackgroundBeamsWithCollisionDemo } from '@/components/backGround';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Projects from './projects/page';
import ProjectBox from '@/components/ProjectBox';
import SkillsSection from './skills/page';
import ExperienceSection from './experience/page';
import Contact from './contact/page';
import About from './about/page';
import { BackgroundBeamsDemo } from '@/components/backGrondBeam';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div>
      <div className="header">
        <Navbar />
        <BackgroundBeamsWithCollisionDemo />

        <div className="AfterHeader bg-[#0f1724]">
          <About />
          <BackgroundBeamsDemo/>
          <SkillsSection/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      </div>

    </div>
  );
}

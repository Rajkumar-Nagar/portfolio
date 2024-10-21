import { BackgroundBeamsWithCollisionDemo } from '@/components/backGround';
import { BackgroundBeamsDemo } from '@/components/backGrondBeam';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import { RetroGridDemo } from '@/components/motionBackground';
import ProjectSection from '@/components/project-section';
import SkillsSection from '@/components/skill-section';
import About from './about/page';

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
          <ProjectSection/>
          <RetroGridDemo/>
          <Footer/>
        </div>
      </div>

    </div>
  );
}

import PageTransition from '../components/shared/PageTransition'
import HeroSection from '../components/home/HeroSection'
import SkillsSection from '../components/home/SkillsSection'
import ProjectsPreview from '../components/home/ProjectsPreview'
import ContactCTA from '../components/home/ContactCTA'

const Home = () => {
  return (
    <PageTransition>
      <HeroSection />
      <SkillsSection />
      <ProjectsPreview />
      <ContactCTA />
    </PageTransition>
  )
}

export default Home
import { Hr } from "#/components/Hr"
import { Educations } from "./Educations"
import { Experiences } from "./Experiences"
import { Header } from "./Header"
import { Projects } from "./Projects"
import { Skills } from "./Skills"

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hr />
      <Skills />
      <Hr />
      <Projects />
      <Hr />
      <Experiences />
      <Hr />
      <Educations />
      <Hr />
    </div>
  )
}

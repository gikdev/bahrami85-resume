import { Hr } from "#/components/Hr"
import { Experiences } from "./Experience"
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
    </div>
  )
}

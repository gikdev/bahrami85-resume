import { Hr } from "#/components/Hr"
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
    </div>
  )
}

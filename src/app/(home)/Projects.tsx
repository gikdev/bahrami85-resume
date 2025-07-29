import { CodeIcon, CodeSimpleIcon } from "@phosphor-icons/react/dist/ssr"
import { projects } from "#/assets/data"
import { section } from "#/shared/skins"
import { Card } from "./Card"
import { IconHeading } from "./IconHeading"

export const Projects = () => (
  <section className={section()}>
    <IconHeading Icon={CodeIcon} title="پروژه‌ها" />

    <ul className="flex flex-col gap-3">
      {projects.map(project => (
        <Card
          key={project.id}
          Icon={CodeSimpleIcon}
          title={project.name}
          subtitle={`${project.company} (${project.from} - ${project.to})`}
        >
          <p>{project.description}</p>
        </Card>
      ))}
    </ul>
  </section>
)

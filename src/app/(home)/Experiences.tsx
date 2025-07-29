import { BriefcaseIcon, CodeSimpleIcon } from "@phosphor-icons/react/dist/ssr"
import ReactMarkdown from "react-markdown"
import { experiences } from "#/data"
import { section } from "#/shared/skins"
import { Card } from "./Card"
import { IconHeading } from "./IconHeading"

export const Experiences = () => (
  <section className={section()}>
    <IconHeading Icon={BriefcaseIcon} title="سابقه کاری" />

    <ul className="flex flex-col gap-3">
      {experiences.map(xp => (
        <Card
          key={xp.id}
          Icon={CodeSimpleIcon}
          title={xp.roleName}
          subtitle={`${xp.company}، ${xp.city} (${xp.from} - ${xp.to})`}
        >
          <div className="contents prose-ul:list-disc prose-ul:ps-4">
            <ReactMarkdown>{xp.description}</ReactMarkdown>
          </div>
        </Card>
      ))}
    </ul>
  </section>
)

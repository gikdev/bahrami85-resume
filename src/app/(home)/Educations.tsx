import { GraduationCapIcon } from "@phosphor-icons/react/dist/ssr"
import ReactMarkdown from "react-markdown"
import { educations } from "#/data"
import { section } from "#/shared/skins"
import { Card } from "./Card"
import { IconHeading } from "./IconHeading"

export const Educations = () => (
  <section className={section()}>
    <IconHeading Icon={GraduationCapIcon} title="تحصیلات" />

    <ul className="flex flex-col gap-3">
      {educations.map(edu => (
        <Card
          key={edu.id}
          Icon={GraduationCapIcon}
          title={edu.title}
          subtitle={`${edu.place}، ${edu.city} - از ${edu.from} تا ${edu.to}`}
        >
          <div className="contents prose-ul:list-disc prose-ul:ps-4">
            <ReactMarkdown>{edu.description}</ReactMarkdown>
          </div>
        </Card>
      ))}
    </ul>
  </section>
)

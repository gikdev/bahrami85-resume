import { z } from "zod"

export const SkillSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
})

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  company: z.string(),
  from: z.string(),
  to: z.string(),
  description: z.string(),
})

export const ExperienceSchema = z.object({
  id: z.string(),
  roleName: z.string(),
  company: z.string(),
  city: z.string(),
  from: z.string(),
  to: z.string(),
  description: z.string(),
})

export const SkillsSchema = z.array(SkillSchema)
export const ProjectsSchema = z.array(ProjectSchema)
export const ExperiencesSchema = z.array(ExperienceSchema)

export type Skill = z.infer<typeof SkillSchema>
export type Project = z.infer<typeof ProjectSchema>
export type Experience = z.infer<typeof ExperienceSchema>

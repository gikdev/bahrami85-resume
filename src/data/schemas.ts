import { z } from "zod"

// Skills
export const SkillSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
})
export const SkillsSchema = z.array(SkillSchema)
export type Skill = z.infer<typeof SkillSchema>

// Projects
export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  company: z.string(),
  from: z.string(),
  to: z.string(),
  description: z.string(),
})
export const ProjectsSchema = z.array(ProjectSchema)
export type Project = z.infer<typeof ProjectSchema>

// Experiences
export const ExperienceSchema = z.object({
  id: z.string(),
  roleName: z.string(),
  company: z.string(),
  city: z.string(),
  from: z.string(),
  to: z.string(),
  description: z.string(),
})
export const ExperiencesSchema = z.array(ExperienceSchema)
export type Experience = z.infer<typeof ExperienceSchema>

// Educations
export const EducationSchema = z.object({
  id: z.string(),
  title: z.string(),
  place: z.string(),
  city: z.string(),
  from: z.string(),
  to: z.string(),
  description: z.string(),
})
export const EducationsSchema = z.array(EducationSchema)
export type Education = z.infer<typeof EducationSchema>

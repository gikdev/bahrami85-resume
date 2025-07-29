import rawEducations from "./json/educations.json"
import rawExperiences from "./json/experiences.json"
import rawProjects from "./json/projects.json"
import rawSkills from "./json/skills.json"
import {
  EducationsSchema,
  ExperiencesSchema,
  ProjectsSchema,
  SkillsSchema,
} from "./schemas"

export const skills = SkillsSchema.parse(rawSkills)
export const projects = ProjectsSchema.parse(rawProjects)
export const experiences = ExperiencesSchema.parse(rawExperiences)
export const educations = EducationsSchema.parse(rawEducations)

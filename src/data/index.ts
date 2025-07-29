import z from "zod"
import rawCourses from "./json/courses.json"
import rawEducations from "./json/educations.json"
import rawExperiences from "./json/experiences.json"
import rawProjects from "./json/projects.json"
import rawSkills from "./json/skills.json"
import {
  CoursesSchema,
  EducationsSchema,
  ExperiencesSchema,
  ProjectsSchema,
  SkillsSchema,
} from "./schemas"

const skillsResult = SkillsSchema.safeParse(rawSkills)
if (!skillsResult.success) {
  throw z.treeifyError(skillsResult.error)
}
export const skills = skillsResult.data

const projectsResult = ProjectsSchema.safeParse(rawProjects)
if (!projectsResult.success) {
  throw z.treeifyError(projectsResult.error)
}
export const projects = projectsResult.data

const experiencesResult = ExperiencesSchema.safeParse(rawExperiences)
if (!experiencesResult.success) {
  throw z.treeifyError(experiencesResult.error)
}
export const experiences = experiencesResult.data

const educationsResult = EducationsSchema.safeParse(rawEducations)
if (!educationsResult.success) {
  throw z.treeifyError(educationsResult.error)
}
export const educations = educationsResult.data

const coursesResult = CoursesSchema.safeParse(rawCourses)
if (!coursesResult.success) {
  throw z.treeifyError(coursesResult.error)
}
export const courses = coursesResult.data

interface Skill {
  id: string
  title: string
  description: string
}

export const skills: Skill[] = [
  {
    id: "languages-and-markup",
    title: "Languages & Markup",
    description: "HTML5, CSS3, JavaScript (ES6+)",
  },
  {
    id: "frameworks-and-development",
    title: "Frameworks & Development",
    description:
      "React, TypeScript, component-based development, state management (Zustand, Jotai, Context API)",
  },
  {
    id: "tools-and-platforms",
    title: "Tools & Platforms",
    description: "Git, GitHub, BiomeJS, VS Code, NPM",
  },
  {
    id: "apis",
    title: "APIs",
    description: "REST APIs",
  },
  {
    id: "design-and-ux",
    title: "Design & UX",
    description: "Tailwind CSS, responsive design, UI/UX fundamentals, Figma",
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    description: "Fast learner, self-motivated, detail-oriented",
  },
  {
    id: "languages",
    title: "Languages",
    description: "English (CEFR Level: B2)",
  },
  {
    id: "keyboard",
    title: "Keyboard",
    description: "70 WPM with 93% accuracy (tested on 10fastfingers.com)",
  },
]

interface Project {
  id: string
  name: string
  company: string
  from: string
  to: string
  description: string
}

export const projects: Project[] = [
  {
    id: "hale-manavi",
    name: "حال معنوی",
    company: "شرکت طلوع نجم",
    from: "تابستان ۱۴۰۴",
    to: "حال حاضر",
    description:
      "«حال معنوی» دومین پروژه‌ای هست که من هم طراحی UI/UX و هم کدنویسی سمت فرانت‌اند اون رو به عهده دارم.",
  },
  {
    id: "auriogold",
    name: "اوریوگلد",
    company: "شرکت طلوع نجم",
    from: "بهار ۱۴۰۴",
    to: "تابستان ۱۴۰۴",
    description:
      "اوریوگلد در واقع نسخه تمیزتر، زیبا،‌ سریع‌تر و مورد اطمینان‌تر «وی‌گلد» بود که ساخته شد و برای معاملات طلا و امثالهم استفاده می‌شد.",
  },
  {
    id: "tims",
    name: "سیستم TIMS",
    company: "شرکت طلوع نجم",
    from: "؟؟؟",
    to: "؟؟؟",
    description:
      "اولین پروژه من که با تایپ‌اسکریپت نوشته شد و من تاثیر تایپ‌اسکریپت رو در پروژه‌های واقعی دیدم...",
  },
  {
    id: "vgold",
    name: "وی‌گلد",
    company: "شرکت طلوع نجم",
    from: "؟؟؟",
    to: "؟؟؟",
    description:
      "«وی‌گلد» اولین پروژه‌ای بود که من هم طراحی UI/UX و هم کدنویسی سمت فرانت‌اند اون رو به عهده گرفتم. ",
  },
]

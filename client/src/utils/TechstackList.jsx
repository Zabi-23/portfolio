

// src/utils/TechstackList.jsx

import { BsFiletypeHtml, BsFiletypeCss, BsBootstrap } from "react-icons/bs";
import { FaNodeJs, FaAws,FaLock, FaShareAlt  } from "react-icons/fa";  
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiGithub,
  SiFirebase,
  SiDocker,
  SiExpress,
  SiNginx,
  SiPostgresql,
  SiVuedotjs,
  SiGithubactions,
  SiAzuredevops,
  SiMicrosoft,
  SiMicrosoftteams,
  SiPowershell,
  SiPostman,
} from "react-icons/si";

export const TechstackList = [
  {
    _id: 1,
    name: "HTML",
    icon: BsFiletypeHtml,
  },
  {
    _id: 2,
    name: "CSS",
    icon: BsFiletypeCss,
  },
  {
    _id: 3,
    name: "Bootstrap",
    icon: BsBootstrap,
  },
  {
    _id: 4,
    name: "Javascript",
    icon: SiJavascript,
  },
  {
    _id: 5,
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    _id: 7,
    name: "React JS",
    icon: SiReact,
  },
  {
    _id: 8,
    name: "Nextjs",
    icon: TbBrandNextjs,
  },
  {
    _id: 10,
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    _id: 11,
    name: "Figma",
    icon: SiFigma,
  },
  {
    _id: 15,
    name: "Node JS",
    icon: FaNodeJs,
  },
  {
    _id: 16,
    name: "Express JS",
    icon: SiExpress,
  },
  {
    _id: 18,
    name: "Mongodb",
    icon: SiMongodb,
  },
  {
    _id: 19,
    name: "SQL",
    icon: SiMysql,
  },
  {
    _id: 20,
    name: "Firebase",
    icon: SiFirebase,
  },
  {
    _id: 21,
    name: "Git / Github",
    icon: SiGithub,
  },
  {
    _id: 22,
    name: "Docker",
    icon: SiDocker,
  },
  {
    _id: 23,
    name: "Nginx",
    icon: SiNginx,
  },
  {
    _id: 24,
    name: "AWS",
    icon: FaAws,  
  },
  { _id: 25, name: "PostgreSQL",        icon: SiPostgresql },
  { _id: 26, name: "Vue.js",            icon: SiVuedotjs },
  { _id: 27, name: "GitHub Actions",    icon: SiGithubactions },
  { _id: 28, name: "Azure DevOps",      icon: SiAzuredevops },
  { _id: 29, name: "Microsoft 365",     icon: SiMicrosoft },
  { _id: 30, name: "Microsoft Teams",   icon: SiMicrosoftteams },
  { _id: 31, name: "SharePoint Online", icon: FaShareAlt }, // SiSharepoint finns inte → fallback
  { _id: 32, name: "OAuth",             icon: FaLock },     // SiOauth finns inte → fallback
  { _id: 33, name: "PowerShell",        icon: SiPowershell },
  { _id: 34, name: "Postman",           icon: SiPostman },
];


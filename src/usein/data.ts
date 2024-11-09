
import { Link, ProjectInfo } from "./types"


export const links :Link[] = [
    {
        nameEng: "Home",
        hash: "#home",
    },
    {
        nameEng: "About",
        hash: "#about",
    },
    {
        nameEng: "Project",
        hash: "#project",
    },
    {
        nameEng: "Skills",
        hash: "#skills",
    },
    {
        nameEng: "Contect",
        hash: "#contect",
    },
];

export const projectsData:ProjectInfo[] = [
    {
        title:"Static Resume",
        description:
        "A clean, single-page resume created with HTML and CSS, showcasing personal details, skills, and accomplishments.",
        tags:["React", "Next.js", "Tailwind", "NodeJS"],
        imageUrl:"/resume.PNG",
        link:"https://www.google.com",
    },
    {
        title:"Dynamic Resume",
        description:
        "An interactive resume with real-time updates, allowing dynamic content adjustments for a more personalized experience.",
        tags:["React", "Next.js", "Tailwind", "NodeJS"],
        imageUrl:"/dynamic.PNG",
        link:"https://www.google.com",
    },
    {
        title:"Governor Web Clone",
        description:
        " A clone of the Governor website with a focus on modern UI/UX elements and accessibility features to enhance user experience.",
        tags:["React", "Next.js", "Tailwind", "NodeJS"],
        imageUrl:"/gov-web.png",
        link:"https://www.google.com",
    },
    {
        title:"Amazon Web Clone",
        description:
        "A functional replica of the Amazon website, featuring a user-friendly interface, responsive design, and key e-commerce functionalities.",
        tags:["React", "Next.js", "Tailwind", "NodeJS"],
        imageUrl:"/ama clone.PNG",
        link:"https://www.google.com",
    },
];


export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "TailwindCss",
    "Farmer Motion",
];
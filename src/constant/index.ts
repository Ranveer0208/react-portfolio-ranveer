import project1 from "../assets/2138144.webp";
/*import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";*/

export const HERO_CONTENT: string = `Self-motivated developer with over 3 years of experience working on a wide range of web-based projects. Passionate about coding and specialize in creating customized user interfaces that are accessible, user-friendly, and secure. I am highly organized and able to manage multiple projects and deadlines effectively. By staying up-to-date with the latest technologies, I consistently apply best practices to deliver high-quality solutions. I am also skilled in adapting to new challenges and continuously improving my work to meet the evolving needs of each project.`;

export const ABOUT_TEXT: string = `I am a motivated software developer with over three years of experience building web-based applications, I have honed my skills in crafting intuitive, secure, and scalable solutions that meet users' needs.
During my tenure at AVRL in Seattle, I contributed to developing advanced bot functionalities using JavaScript, earning two promotions in under two years due to consistently high performance. I also managed multiple client projects simultaneously, ensuring timely delivery and quality. 
Beyond my professional experience, I’ve initiated and built platforms such as Rentz4u and VuStatus, showcasing my expertise in full-stack development and entrepreneurial acumen. For instance, Rentz4u successfully listed ₹2.6 lakh worth of rental properties in its first month
.`;

type ExperienceType = {
   year: string;
   role: string;
   company: string;
   description: string;
   technologies: string[];
   website?: string;

};

export const EXPERIENCES: ExperienceType[] | undefined = [
   {
      year: "Dec 2021 - Apr 2024",
      role: "Software Development Engineer",
      company: "AVRL, Seattle, Washington, USA",
      description: `
      • Developed bot functionality using JavaScript as part of the AVRL team, delivering high-quality solutions for various clients.
      • Achieved two promotions within 1.5 years, reflecting strong performance, growth, and leadership potential.
      • Managed multiple clients simultaneously, ensuring timely and effective delivery of bot-related services and solutions.
      • Dedicated engineer for a key customer for 6-7 months, providing focused support and tailored solutions to meet their specific needs.
    `,
      technologies: ["Javascript", "Typescript"],
      website: "",
   },
   {
      year: "Nov 2020 - Dec 2021",
      role: "Full Stack Developer",
      company: "Rentz4u, Ranchi, Jharkhand, India",
      description: `
      • Initiated and developed Rentz4u, a platform designed to help users find budget-friendly rooms for rent.
      • Successfully listed ₹2.6 lakh worth of houses in the first month of the platform's launch, demonstrating quick growth and market acceptance.
      • Drove user acquisition and engagement, leading to significant traction and visibility for the platform.
      `,
      technologies: ["HTML", "CSS", "Javascript", "PHP", "mySQL", "AJAX"],
      website: "https://rentz4u.vustatus.com"
   },
   {
      year: "Nov 2019 - Dec 2021",
      role: "Full Stack Developer",
      company: "VuStatus app, Ranchi, Jharkhand, India",
      description: `
      • Developed VuStatus, an innovative platform that enables users to check the real-time availability and current status of doctors.•Enabled live appointment tracking, allowing patients to monitor appointment statuses and reducing wait times.
      • Enhanced patient experience by providing transparent, up-to-date information on doctor availability and appointment schedules.
      `,
      technologies: ["HTML", "CSS", "Javascript", "PHP", "mySQL", "AJAX"],
      website: "https://business.vustatus.com"
   },
];

type ProjectType = {
   title: string;
   image: string;
   description: string;
   technologies: string[];
}

export const PROJECTS: ProjectType[] = [
   {
      title: "Quiz Game",
      image: project1,
      description: `
      • Developed KuberaQuiz, a live multiplayer quiz game based on the theme "Invite, Play, Earn, and Learn," engaging users with interactive gameplay.
      • Designed and implemented real-time multiplayer features, and integrated payment gateway promoting user engagement and competition
`,
      technologies: ["HTML", "CSS", "Javascript", "PHP", "mySQL", "AJAX"],
   },
   {
      title: "Corona Test Website",
      image: project1,
      description: `
      • Enabled users to receive instant feedback, providing a quick self-assessment tool for COVID-19 risk.`,
      technologies: ["HTML", "CSS", "Javascript"],
   },
   {
      title: "Portfolio Website",
      image: project1,
      description:
         "• A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["React", "TypeScript", "Tailwind", "HTML", "CSS"],
   },
];

export const CONTACT = {
   address: "Piska More, Ranchi, Jharkhand, India, 834005 ",
   phoneNo: "+91 910-218-8671",
   email: "ranveer.kumaraug@gmail.com",
};

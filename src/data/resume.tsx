import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// Personal Information
export const DATA = {
  name: "Izzat Karimov",
  initials: "IK",
  url: "https://izzatkarimov.com",
  location: "Warsaw, Poland",
  locationLink: "https://www.google.com/maps/place/warsaw",
  description: "Computer Engineering student & Software Engineer",
  summary:
    "I'm currently pursing my Bachelor's Degree in Computer Engineering at Vistula University in Warsaw, Poland. I spend most of my time learning new things and building projects.",
  avatarUrl: "/me.jpeg",

  // Skills
  skills: [
    "Java",
    "Python",
    "JavaScript",
    "C#",
    "Spring Boot",
    "Hibernate",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "AWS",
  ],

  // Navbar Links
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  // Contact Information
  contact: {
    email: "izzatcodes@gmail.com",
    tel: "+48578217483",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/izzatkarimov",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/izzat-karimov",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLBzRHCBvQZpsxfWkJZWnzRkZFtCGqhrkWkpHDJTQlNPNjNRzwcZqnNFzTHFFVtWfvVsNv",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  // Work Experience
  work: [
    {
      company: "Headstarter AI",
      href: "https://headstarter.co",
      badges: [],
      location: "Remote",
      title: "Software Engineering Fellow",
      logoUrl: "/headstarter.jpeg",
      start: "July 2024",
      end: "September 2024",
      description: (
        <>
          • Built 5+ AI apps using NextJS, OpenAI, Pinecone, StripeAPI with 98 percent accuracy.<br />
          • Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns.<br />
          • Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservice patterns.
        </>
      ),
    },
  ],

  // Education
  education: [
    {
      school: "Vistula University",
      href: "https://vistula.edu.pl",
      degree: "Bachelor's Degree in Computer Engineering",
      logoUrl: "/vistula.png",
      start: "2023",
      end: "2027",
    },
  ],

  // Projects
  projects: [
    {
      title: "PyFrameKit",
      href: "https://github.com/izzatkarimov/pyframekit",
      dates: "January 2025",
      active: true,
      description:
        "PyFrameKit is a lightweight Python web framework built for learning. It's WSGI-compliant and can be used with servers like Gunicorn.",
      technologies: [
        "Python",
        "WSGI",
        "Jinja2"
      ],
      links: [
        {
          type: "Website",
          href: "https://pypi.org/project/pyframekit/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/izzatkarimov/pyframekit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/PyFrameKit.png",
      video:
        "",
    },
    {
      title: "StudentVault",
      href: "https://github.com/izzatkarimov/student-vault",
      dates: "November 2024",
      active: true,
      description:
        "A student management portal  for managing students and departments in a student management system",
      technologies: [
        "Spring Boot",
        "React.js",
        "MySQL",
        "Postman",
        "AWS"
      ],
      links: [
        {
          type: "Website",
          href: "http://studentvault.s3-website.eu-central-1.amazonaws.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/izzatkarimov/student-vault",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/studentvault.png",
      video:
        "",
    },
    {
      title: "E-Commerce Website",
      href: "https://github.com/izzatkarimov/e-commerce",
      dates: "Jan 2024",
      active: true,
      description:
        "E-Commerce Website with full CRUD funtionality and PayPal integration",
      technologies: [
        "Django",
        "JavaScript",
        "Bootstrap",
        "PayPal"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/izzatkarimov/e-commerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/e-commerce.png",
      video:
        "",
    },
    {
      title: "CodeClock",
      href: "https://codeclock.vercel.app",
      dates: "July 2024",
      active: true,
      description:
        "A time-tracking application that helps users monitor and manage their coding sessions and productivity",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://codeclock.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/izzatkarimov/codeclock",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/codeclock.png",
      video:
        "",
    },
  ],
} as const;

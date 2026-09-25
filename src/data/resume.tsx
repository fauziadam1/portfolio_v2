import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Express } from "@/components/ui/svgs/express";
import { Figma } from "@/components/ui/svgs/figma";
import { title } from "node:process";
import { Tailwind } from "@/components/ui/svgs/tailwind";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Php } from "@/components/ui/svgs/php";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Postman } from "@/components/ui/svgs/postman";
import { MySql } from "@/components/ui/svgs/mysql";
import { Vue } from "@/components/ui/svgs/vue";
import { Vercel } from "@/components/ui/svgs/vercel";
import { html } from "@/components/ui/svgs/html";
import { Github } from "@/components/ui/svgs/github";
import { Gitlab } from "@/components/ui/svgs/gitlab";
import { CSS } from "@/components/ui/svgs/css";
import { Notion } from "@/components/ui/svgs/notion";
import { Framer } from "@/components/ui/svgs/framer";

export const DATA = {
  name: "Fauzi Adam",
  initials: "FA",
  url: "https://www.fauziadam.my.id/",
  location: "Yogyakarta, Sleman",
  locationLink: "",
  description:
    "Student want to be Programmer and UI/UX Designer. I love make beautiful and perfect website. Currently I am learning about PHP and Laravel framework.",
  summary:
    "Currently attending [SMK Negeri 2 Yogyakarta](https://www.smk2-yk.sch.id/) as a 12th-grade student majoring in Sistem Informasi Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as well as developing software applications. Proficient in frontend technologies such as HTML, CSS, [React](https://react.dev/), [Next.js](https://nextjs.org/), and [Tailwind CSS](http://tailwindcss.com/) for creating responsive user interfaces, and backend technologies like [Laravel](https://laravel.com/) for building servers and APIs, with Postgresql for database management.",
  avatarUrl: "/me_2.png",
  skills: [
    { name: "HTML", icon: html },
    { name: "CSS", icon: CSS },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vue", icon: Vue },
    { name: "Laravel", icon: Laravel },
    { name: "Typescript", icon: Typescript },
    { name: "Javascript", icon: Javascript },
    { name: "PHP", icon: Php },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "MySql", icon: MySql },
    { name: "Express", icon: Express },
    { name: "Tailwindcss", icon: Tailwind },
    { name: "Figma", icon: Figma },
    { name: "Framer", icon: Framer },
    { name: "Postman", icon: Postman },
    { name: "Github", icon: Github },
    { name: "Gitlab", icon: Gitlab },
    { name: "Vercel", icon: Vercel },
    { name: "Notion", icon: Notion },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fauziadam1",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fauzi-adam-715b10335/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/fauziadam.tsx/",
        icon: Icons.Instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=fauziadam0811@gmail.com&su=Halo&body=Halo Fauzi",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT Gamatechno Indonesia",
      href: "https://www.gamatechno.com/",
      badges: [],
      location: "Remote",
      title: "Intership - Web Developer",
      logoUrl: "/gamatechno_logo.jpeg",
      start: "Juli 2026",
      end: "Feb 2027",
      description:
        "Integrated REST APIs into web applications using Go Language. Developed and maintained features. Implemented API integration for CRUD operations, data tables, form validation, file uploads, and dynamic filtering. Collaborated with the development team using Git and GitLab.",
    },
  ],
  education: [
    {
      school: "SMP Negeri 2 Depok Sleman",
      href: "https://smpn2depoksleman.sch.id/",
      degree: "Junior High School",
      logoUrl: "/espero.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "SMK Negeri 2 Yogyakarta",
      href: "https://www.smk2-yk.sch.id/",
      degree: "Sistem Informasi, Jaringan, dan Aplikasi",
      logoUrl: "/smk.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Educafy",
      href: "https://www.figma.com/design/HEqGuqYexRnQ4q5Ykga9gD/Educafy?node-id=0-1&t=3nCkW24VD1RCREri-1",
      dates: "July 2025 - Aug 2025",
      active: true,
      description:
        "[Amikom University's](https://home.amikom.ac.id/) UI/UX competition focused on education. My team decided to create an e-learning mobile app. We completed the design in three days and won 1st place.",
      technologies: ["Figma"],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/HEqGuqYexRnQ4q5Ykga9gD/Educafy?node-id=0-1&t=NYBWtdTmz4mZ2CBF-1",
          icon: <Icons.figma className="size-3" />,
        },
        {
          type: "Certificate",
          href: "/Sertifikat AMICTA 2025_Bootcamp dan Lomba UI_UX_Fauzi Adam.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/educafy.jpg",
      video: "",
    },
    {
      title: "Bank Sampah",
      href: "https://banksampahsihijau.vercel.app/user",
      dates: "Nov 2025 - Dec 2025",
      active: true,
      description:
        "An environmental themed website that my team created to enter a web design competition from [Kuningan University](https://uniku.ac.id/)",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://banksampahsihijau.vercel.app/user",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fauziadam1/webdesign_SIHIJAU_diesnatalis25",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/banksampah.jpg",
      video: "",
    },
    {
      title: "Soul Space",
      href: "https://www.figma.com/design/SA4n6Y9sozSaHtGZlbLMcr/UXcel---UI-UX-Kesehatan-Mental?node-id=457-975&t=MhI4m5rFqs2R0Ex7-1",
      dates: "Feb 2025 - Maret 2025",
      active: true,
      description:
        "Mobile UI/UX Competition (MUC) held by [Atma Jaya University](https://uajy.ac.id/). My friend and I worked on this design for 2 weeks until we passed the final.",
      technologies: ["Figma"],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/SA4n6Y9sozSaHtGZlbLMcr/UXcel---UI-UX-Kesehatan-Mental?node-id=457-975&t=MhI4m5rFqs2R0Ex7-1",
          icon: <Icons.figma className="size-3" />,
        },
        {
          type: "Certificate",
          href: "/Fauzi Adam.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/soulspace.jpg",
      video: "",
    },
    {
      title: "Smith Origin",
      href: "https://smithorigin.com/",
      dates: "Aug 2025 - Jan 2026",
      active: true,
      description:
        "My team's Teaching Factory project was to create an e-commerce website focused on selling gaming gear for our client, Smithorigin. It took us six months to complete the website.",
      technologies: [
        "ReactJS",
        "Javascript",
        "PostgreSQL",
        "TailwindCSS",
        "Go",
      ],
      links: [
        {
          type: "Website",
          href: "https://smithorigin.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/smith.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Mobile UI/UX Competition (Finalist)",
      dates: "Maret 15th - 16th, 2025",
      location: "Universitas Atma Jaya, Yogyakarta",
      description:
        "Competition in the field of mobile UI/UX. My friend and I took part in this competition until we made it to the top 10.",
      image: "/MUC.jpg",
      mlh: "",
      links: [
        {
          title: "Figma",
          icon: <Icons.figma className="h-4 w-4" />,
          href: "https://www.figma.com/design/SA4n6Y9sozSaHtGZlbLMcr/UXcel---UI-UX-Kesehatan-Mental?node-id=0-1&t=OK7JObj48gKEEbrA-1",
        },
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/Fauzi Adam.pdf",
        },
      ],
    },
    {
      title: "UI/UX Amicta (1st Place)",
      dates: "July - Aug, 2025",
      location: "Universitas Amikom, Yogyakarta",
      description:
        "Another competition that I participated in. My 2 friends and I participated in a bootcamp and competition until we won 1st place.",
      image: "/amicta.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Figma",
          icon: <Icons.figma className="h-4 w-4" />,
          href: "https://www.figma.com/design/HEqGuqYexRnQ4q5Ykga9gD/Educafy?node-id=0-1&t=umiMGt9imcrjZ5ks-1",
        },
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/Sertifikat AMICTA 2025_Bootcamp dan Lomba UI_UX_Fauzi Adam.pdf",
        },
      ],
    },
    {
      title: "Coding Camp by DBS Foundation",
      dates: "Jan - July, 2025",
      location: "Dicoding Academy Indonesia, Bandung",
      description:
        "I got a scholarship from the DBS Foundation to attend Coding Camp and I took frontend and backend courses.",
      icon: "public",
      image: "/dicoding.jpg",
      links: [
        {
          title: "Dicoding",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.dicoding.com/",
        },
      ],
    },
    {
      title: "Web Design TechnoVersary",
      dates: "Nov - Dec, 2025",
      location: "Universitas Kuningan, Jawa Barat",
      description:
        "I tried to enter a web design competition with two of my friends. I learned how to create a functional website and teamwork.",
      image: "/techno.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/fauziadam1/webdesign_SIHIJAU_diesnatalis25",
        },
      ],
    },
    {
      title: "LKS Web Technologies Tingkat Provinsi Yogyakarta 2026 (1st Place)",
      dates: "7-8 April, 2026",
      location: "SMK Negeri 3 Yogyakarta",
      description:
        "I learned a lot about websites in depth from my seniors and had a memorable experience.",
      image: "/dikpora.png",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/CertiLKS.pdf",
        },
      ],
    },
    {
      title: "Medalion of Experience LKSN Web Technologies 2026 (Daring)",
      dates: "27-29 July, 2026",
      location: "SMK Negeri 2 Yogyakarta",
      description:
        "This competition really tested my mental resilience and health, and I also gained a lot of knowledge from the seniors.",
      image: "/Kemendikdasmen.jpg",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "/Fauzi Adam MOE.pdf",
        },
      ],
    },
  ],
} as const;

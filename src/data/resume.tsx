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

export const DATA = {
  name: "Fauzi Adam",
  initials: "FA",
  url: "https://dillion.io",
  location: "Yogyakarta, Sleman",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Student want to be Programmer and UI/UX Designer. I love make beautiful and perfect website. Currently I am learning about PHP and Laravel framework.",
  summary:
    "Currently attending SMK Negeri 2 Yogyakarta as a 12th-grade student majoring in Sistem Informasi Jaringan dan Aplikasi (SIJA), which focuses on building, managing, and securing computer networks, as well as developing software applications. Proficient in frontend technologies such as HTML, CSS, React, Next.js, and Tailwind CSS for creating responsive user interfaces, and backend technologies like Node.js, Express.js for building servers and APIs, with Postgresql for database management.",
  avatarUrl: "/me.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
    { name: "Express", icon: Express },
    { name: "Figma", icon: Figma },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fauziadam0811@gmail.com",
    tel: "+6285225623906",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fauziadam1",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
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
        url: "",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance", 
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "SMK Negeri 2 Yogyakarta",
      href: "https://www.smk2-yk.sch.id/",
      degree: "Sistem Informasi, Jaringan, dan Aplikasi",
      logoUrl: "/smk.png",
      start: "2023",
      end: "2027",
    }
  ],
  projects: [
    {
      title: "Educafy",
      href: "https://www.figma.com/design/HEqGuqYexRnQ4q5Ykga9gD/Educafy?node-id=0-1&t=3nCkW24VD1RCREri-1",
      dates: "July 2025 - Aug 2025",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Figma",
      ],
      links: [
        {
          type: "Figma",
          href: "https://chatcollect.com",
          icon: <Icons.figma className="size-3" />,
        },
      ],
      image: "/educafy.jpg",
      video: "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Mobile UI/UX Competition (Finalis)",
      dates: "Maret 15th - 16th, 2025",
      location: "Universitas Atma Jaya, Yogyakarta",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/MUC.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Figma",
          icon: <Icons.figma className="h-4 w-4" />,
          href: "https://www.figma.com/design/SA4n6Y9sozSaHtGZlbLMcr/UXcel---UI-UX-Kesehatan-Mental?node-id=0-1&t=OK7JObj48gKEEbrA-1",
        },
      ],
    },
    {
      title: "UI/UX Amicta (1st Place)",
      dates: "July 24th - Aug 4th, 2025",
      location: "Universitas Amikom, Yogyakarta",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "/amicta.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Figma",
          icon: <Icons.figma className="h-4 w-4" />,
          href: "https://www.figma.com/design/HEqGuqYexRnQ4q5Ykga9gD/Educafy?node-id=0-1&t=umiMGt9imcrjZ5ks-1",
        },
      ],
    },
    {
      title: "Coding Camp by DBS Foundation",
      dates: "Jan - July, 2025",
      location: "Dicoding Academy Indonesia, Bandung",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "/dicoding.jpg",
      links: [
        {
          title: "Dicoding",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        }
      ],
    },
    {
      title: "Web Design TechnoVersary",
      dates: "Nov - Dec, 2025",
      location: "Universitas Kuningan, Jawa Barat",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "/techno.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/fauziadam1/webdesign_SIHIJAU_diesnatalis25",
        },
      ],
    },
  ],
} as const;

import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Hazem",
  lastName: "Ghannem",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Engineer",
  avatar: "/images/hazem-avatar.png", // Replace with your actual image path
  email: "ghannemhazem@gmail.com",
  location: "Tunisia",
  languages: ["English", "French", "Arabic"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about full stack development, new tech stacks, and my
      experience building scalable web and mobile applications.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HazemGhannem",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hazem-ghannem-6058b71a6/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>Building efficient full stack solutions with React, Node, Django & more</>
  ),
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Tawsilet</strong>
      </>
    ),
    href: "/work/Tawsilet",
  },
  subline: (
    <>
      I'm Hazem, a software engineer focused on delivering clean, scalable
      solutions using modern web technologies. I build production-ready systems
      for the real world.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com/hazem-ghannem",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hazem is a Tunis-based Full Stack Engineer with a strong background in
        building modern web and mobile applications. His stack includes React,
        Node.js, Django, and React Native, with a focus on clean architecture
        and scalability.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Tekmafor",
        timeframe: "Feb 2025 – Current",
        role: "Full Stack Developer",
        achievements: [
          <>
            Designed and developed a full Uber-like ride-hailing system
            (Tawsilet) including mobile app, dashboard, and website.
          </>,
          <>
            Built the mobile app with React Native (Expo) for drivers and
            passengers with live location tracking and maps.
          </>,
          <>
            Developed the admin dashboard and marketing website using React.js,
            Tailwind CSS, and Ant Design.
          </>,
          <>
            Architected the backend using Node.js (Express) and integrated
            Firebase for authentication and real-time updates.
          </>,
          <>
            Integrated OneSignal for push notifications across mobile and web
            platforms.
          </>,
          <>
            Built a role-based access system for admins, owners, and drivers
            with secure data separation.
          </>,
          <>
            Implemented financial logic for ride commissions, revenue tracking,
            and driver payouts.
          </>,
          <>
            Handled deployment, APK generation, and delivery for Android using
            Expo workflows.
          </>,
        ],
        images: [],
      },
      {
        company: "Sparkling.co",
        timeframe: "Jan 2024 – Feb 2025",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            Led development of AcePoint, a feature-rich web and mobile platform
            with modern UX.
          </>,
          <>
            Built the frontend using Next.js and Tailwind CSS for a performant,
            responsive interface.
          </>,
          <>
            Used Firebase for auth, real-time DB, FCM push notifications, and
            cloud functions.
          </>,
          <>
            Developed mobile app using Expo for seamless cross-platform
            compatibility.
          </>,
          <>
            Integrated real-time notifications and chat functionality across
            devices.
          </>,
          <>
            Wrote E2E and unit tests using Jest and Playwright, improving code
            quality.
          </>,
          <>
            Implemented CI/CD pipelines for auto deployment and streamlined
            workflows.
          </>,
          <>Used Git and GitHub for version control and team collaboration.</>,
          <>Managed APK export and Play Store deployment workflows.</>,
        ],
        images: [],
      },
      {
        company: "Glance",
        timeframe: "Jan 2024 – Feb 2025",
        role: "Full Stack Engineer",
        achievements: [
          <>Led development of Glance, a real-time data-driven web app.</>,
          <>Designed responsive frontend using Next.js and Tailwind CSS.</>,
          <>Built real-time data processing and updates to improve UX.</>,
          <>
            Implemented backend with Django and MongoDB for scalable data
            management.
          </>,
          <>Used Jest and Playwright for comprehensive testing coverage.</>,
          <>
            Applied Lighthouse audits to improve speed, accessibility, and SEO.
          </>,
          <>Managed CI/CD pipelines for testing and deployment.</>,
          <>
            Organized team development using Scrum (sprints, standups, retros).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Higher Institute - ISSAT Mateur Applied Sciences and Technology of Mateur",
        description: <>Studied Network and Telecommunication.</>,
      },
      {
        name: "Private Higher School of Engineering and Technology",
        description: <>Studied Software Engineering and Web Technologies.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Building responsive, high-performance UIs using React, Next.js,
            Angular, and Tailwind CSS, with strong Lighthouse scores.
          </>
        ),
        images: [],
      },
      {
        title: "Backend Development",
        description: (
          <>
            Designing robust REST APIs and scalable systems using Node.js,
            Django, Spring Boot, Symfony, Laravel, and .NET.
          </>
        ),
        images: [],
      },
      {
        title: "Mobile Development",
        description: (
          <>
            Developing cross-platform mobile apps using React Native and Expo,
            with smooth UX and performance optimizations.
          </>
        ),
        images: [],
      },
      {
        title: "State Management",
        description: (
          <>
            Managing global state using Redux and React Context for scalable and
            maintainable applications.
          </>
        ),
        images: [],
      },
      {
        title: "Real-Time & DevOps",
        description: (
          <>
            Integrating real-time features with WebSockets and managing
            deployment using CI/CD tools, Docker, and GitHub Actions.
          </>
        ),
        images: [],
      },
      {
        title: "Version Control",
        description: (
          <>
            Collaborating using Git, GitHub, and GitLab with branching
            strategies, code reviews, and CI integrations.
          </>
        ),
        images: [],
      },
      {
        title: "Testing & QA",
        description: (
          <>
            Ensuring quality and reliability through unit and end-to-end testing
            with Jest, Playwright, and Detox.
          </>
        ),
        images: [],
      },
      {
        title: "Agile & Collaboration",
        description: (
          <>
            Working in Agile/Scrum environments using Jira for sprint planning,
            tracking, and collaborative team delivery.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writings on development, engineering, and learning",
  description: `Read what ${person.name} has been working on and thinking about.`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Engineering and development projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A few snapshots from my journey as a developer`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

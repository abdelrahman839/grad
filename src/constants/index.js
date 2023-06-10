import {
  remote,
  hospital,
  school,
  event,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  blender,
  mediapipe,
  step1,
  step2,
  step3,
  threejs,
  Google,
  windows,
  apple,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "HTU",
    title: "How To Use",
  },
  {
    id: "tools",
    title: "Tools",
  },
  {
    id: "downloads",
    title: "Downloads",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Schools",
    icon: school,
  },
  {
    title: "Hospitals",
    icon: hospital,
  },
  {
    title: "Events",
    icon: event,
  },
  {
    title: "Personal",
    icon: remote,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "mediapipe",
    icon: mediapipe,
  },
];

const steps = [
  {
    title: "Create Account",
    icon: step1,
    iconBg: "#383E56",
    step: "First step",
    points: [
      "You cannot use the app without first creating an account.",
      "It's completely free for now.",
      "In the future it will be with subscriptions.",

    ],
  },
  {
    title: "Download Fly",
    icon: step2,
    iconBg: "#E6DEDD",
    step: "Second step",
    points: [
      "Download the application based on your operating system.",
      "The app is now for windows and android.",
      "In the future the app will work on iOS."
    ],
  },
  {
    title: "Orders",
    icon: step3,
    iconBg: "#383E56",
    step: "Third step",
    points: [
      "There are some basic gestures that you need to know to be able to use the app.",
      "There are also some basic voice commands that you need to know in order to be able to use the app without hand gestures.",
    ],
  },
];



const download = [
  {
    name: "For Windows",
    description:
      "Developed and maintained using Python.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: windows,
    source_code_link: "",
  },
  {
    name: "For Android",
    description:
      "Coming Soon.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
    ],
    image: Google,
    source_code_link: "",
  },
  {
    name: "For Ios",
    description:
      "Coming Soon.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "",
  }

];

export { services, technologies, steps, download };

import {
    mobile,
    github,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Competitive Programmer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Blockchain Developer",
      icon: backend,
    },
    {
      title: 'CodeChef',
      icon: creator,
      url: 'https://www.codechef.com/users/nacoolkiran200',
    },
    {
      title: 'LeetCode',
      icon: carrent,
      url: 'https://leetcode.com/yashkiran2004/',
    },
    {
      title: 'Codeforces',
      icon: github,
      url: 'https://codeforces.com/profile/yashkiran2004',
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Kshetra Vriddhi",
      company_name: "HTML,CSS,REACT,JAVASCRIPT,ML",
      icon: shopify,
      iconBg: "#383E56",
      date: "February 2024 - March 2024",
      points: [
        "Developed a web portal for farmers and loan officer to simplify the loan application process.",
        "A onestop platform where farmer can get information and remove intermediataries of the process.",
        "Image classification using google's teachable machine learnig that classify land into good,bad,crop,noncrop",
        "Helps loan officer to decide the land quality and loan amount to be sanctioned.",
      ],
    },
    {
      title: "3D Portfolio Website",
      company_name: "THREEJS REACTJS",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2024 - April 2024",
      points: [
        "Developed a 3D Portfolio Website using Three.js and React.js.",
        "Utilized Three.js to use a 3D model of the computer and charizard pokemon and display projects on its surface.",
        "This website showcases the my skills and projects available",
      ],
    },
    {
      title: "Proof Of Work Blockchain",
      company_name: "Blockchain-GO",
      icon: starbucks,
      iconBg: "#383E56",
      date: "December 2023 - January 2024",
      points: [
        "Implemented the core blockchain structure and functionality, including the creation and validation of new blocks.",
        "Utilized Go's powerful concurrency features to optimize the Proof of Work process.",
        "Ensured the integrity of the blockchain by validating that each new block's hash is a hash of the previous block.",
        "The system operates on the concept of Proof of Work, ensuring the integrity and security of the blockchain.",
      ],
    },
    {
      title: "Installer.sh",
      company_name: "Bash Scripting",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "October 2023 - November 2023",
      points: [
        "Contributed to the development of a comprehensive bash script, Installer.sh",
        "Developed a user-friendly, menu-driven interface for software selection and installation.        ",
        "Utilized bash scripting to automate the download and installation process of essential Linux software.",
        "Utilized wget and curl for downloading software, and package managers like apt, yum, and dnf for installation processes.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
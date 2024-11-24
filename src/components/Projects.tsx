import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "boardy.",
      description: "A full-stack live collaboration whiteboarding application with real-time features and secure authentication.",
      techStack: ["JavaScript", "Node.js", "Express.js", "JWT", "WebSockets", "Webhooks", "React", "Postman"],
      points: [
        "Developed using MVC architecture for structured and maintainable code",
        "Implemented secure user authentication with JWT",
        "Utilized WebSockets for real-time collaboration",
        "Future plans include Webhook integrations"
      ],
      githubLink: "https://github.com/rzn1337/boardy." // Replace with actual GitHub link
    },
    {
      title: "Video Streaming Platform Backend",
      description: "A comprehensive backend system for a YouTube-like video streaming platform.",
      techStack: ["JavaScript", "Express.js", "MongoDB", "Mongoose", "JWT"],
      points: [
        "Designed database schema with 7 entities",
        "Built RESTful API with Express.js",
        "Implemented JWT authentication with access and refresh tokens",
        "Extensive API testing with Postman"
      ],
      githubLink: "https://github.com/rzn1337/video-streaming" // Replace with actual GitHub link
    },
    {
      title: "SaaS Foundation Application",
      description: "A versatile Django-based SaaS platform with essential features for scalability.",
      techStack: ["Django", "Stripe", "Neon PostgreSQL", "TailwindCSS", "GitHub Actions"],
      points: [
        "Implemented user authentication with Django AllAuth",
        "Integrated GitHub login",
        "Deployed on Railway for high availability",
        "Utilized Neon Postgres for database management"
      ],
      githubLink: "#" // Replace with actual GitHub link
    },
    {
      title: "User-Centric Blogging Experience",
      description: "A responsive blog application built with React and Appwrite.",
      techStack: ["JavaScript", "React", "Appwrite"],
      points: [
        "Built responsive interface with React",
        "Implemented backend with Appwrite",
        "Developed dynamic blog post creation features",
        "Managed user authentication and data storage"
      ],
      githubLink: "#" // Replace with actual GitHub link
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="mb-8 text-4xl font-medium">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="rounded-lg border border-zinc-800 p-6 flex flex-col h-full hover:border-zinc-700 transition-colors"
          >
            {/* Content wrapper to push button to bottom */}
            <div className="flex-grow space-y-4">
              {/* Header with title and GitHub link */}
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              {/* Description */}
              <p className="text-zinc-400">{project.description}</p>
              
              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 text-sm rounded-full bg-zinc-800 text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Bullet points */}
              {/* <ul className="space-y-2 text-zinc-400">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-500"></span>
                    {point}
                  </li>
                ))}
              </ul> */}
            </div>
            
            {/* Button container - always at bottom */}
            <div className="flex justify-end pt-6">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
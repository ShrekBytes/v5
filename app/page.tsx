"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [activeJob, setActiveJob] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "work", "contact"]
      const scrollPosition = window.scrollY + 100

      setIsScrolled(window.scrollY > 50)

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const jobs = [
    {
      company: "Upstatement",
      title: "Lead Engineer",
      period: "May 2018 - Present",
      responsibilities: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      company: "Apple",
      title: "UI Engineer Co-op",
      period: "July - December 2017",
      responsibilities: [
        "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
        "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
        "Architected and implemented the front-end of Apple Music's embeddable web player widget",
      ],
    },
    {
      company: "Mullen",
      title: "Studio Developer",
      period: "December 2015 - May 2016",
      responsibilities: [
        "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
        "Helped solidify a brand direction for blistabloc that spans both packaging and web",
      ],
    },
    {
      company: "Scout",
      title: "Developer",
      period: "January - June 2015",
      responsibilities: [
        "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
        "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      ],
    },
  ]

  const otherProjects = [
    {
      title: "Integrating Algolia Search with WordPress Multisite",
      description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      tech: ["Algolia", "WordPress", "PHP"],
      github: "#",
      external: "#",
    },
    {
      title: "This is Jeopardy!",
      description: "A trivia game for the web built with React and the jService API with over 200,000 questions.",
      tech: ["React", "Sass", "API"],
      github: "#",
      external: "#",
    },
    {
      title: "Building a Spotify Connected App",
      description: "A React app that uses the Spotify Web API to display a user's top artists and tracks.",
      tech: ["React", "Spotify API", "Express"],
      github: "#",
      external: "#",
    },
    {
      title: "v4",
      description: "Fourth iteration of my personal website built with Gatsby and hosted on Netlify",
      tech: ["Gatsby", "Sass", "Netlify"],
      github: "#",
      external: "#",
    },
    {
      title: "Google Keep Clone",
      description: "A simple Google Keep clone built with React and Firebase for the backend.",
      tech: ["React", "Firebase", "Sass"],
      github: "#",
      external: "#",
    },
    {
      title: "OctoProfile",
      description: "A nicer look at your GitHub profile and repo stats. Includes data visualizations.",
      tech: ["Next.js", "Chart.js", "GitHub API"],
      github: "#",
      external: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Loading Animation */}
      <div
        className={`fixed inset-0 bg-slate-900 flex items-center justify-center z-50 transition-all duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative">
          <div className="w-20 h-20 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border border-emerald-400/30 rounded-full animate-pulse"></div>
        </div>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } ${isScrolled ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 border-2 border-emerald-400 flex items-center justify-center font-mono font-bold text-emerald-400 text-lg">
              BC
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {["About", "Experience", "Work", "Contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-slate-400 hover:text-emerald-400 transition-all duration-300 font-mono text-sm hover:-translate-y-1 ${
                  activeSection === item.toLowerCase() ? "text-emerald-400" : ""
                }`}
              >
                <span className="text-emerald-400">0{index + 1}.</span> {item}
              </button>
            ))}
            <Button
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-mono bg-transparent ml-4"
            >
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-emerald-400 hover:text-slate-100 transition-colors duration-300 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-md border-b border-slate-700 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col space-y-4">
            {["About", "Experience", "Work", "Contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase())
                  setIsMobileMenuOpen(false)
                }}
                className={`text-left text-slate-400 hover:text-emerald-400 transition-all duration-300 font-mono text-sm ${
                  activeSection === item.toLowerCase() ? "text-emerald-400" : ""
                }`}
              >
                <span className="text-emerald-400">0{index + 1}.</span> {item}
              </button>
            ))}
            <Button
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-mono bg-transparent self-start mt-4"
            >
              Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Fixed Left Social Links */}
      <div
        className={`fixed left-8 bottom-0 flex flex-col items-center space-y-6 z-40 transition-all duration-700 delay-500 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } hidden lg:flex`}
      >
        {[
          {
            name: "GitHub",
            href: "#",
            icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
          },
          {
            name: "LinkedIn",
            href: "#",
            icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
          },
          {
            name: "Instagram",
            href: "#",
            icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
          },
          {
            name: "Twitter",
            href: "#",
            icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
          },
        ].map((social, index) => (
          <a
            key={social.name}
            href={social.href}
            className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="sr-only">{social.name}</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d={social.icon} />
            </svg>
          </a>
        ))}
        <div className="w-px h-24 bg-slate-600"></div>
      </div>

      <div
        className={`fixed right-8 bottom-0 flex flex-col items-center z-40 transition-all duration-700 delay-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } hidden lg:flex`}
      >
        <div className="flex flex-col items-center">
          <a
            href="mailto:brittany.chiang@gmail.com"
            className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1 font-mono text-sm vertical-text mb-6"
          >
            brittany.chiang@gmail.com
          </a>
          <div className="w-px h-24 bg-slate-600"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto">
        <section
          className={`min-h-screen flex items-center px-6 lg:px-24 max-w-6xl mx-auto transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-4xl pt-24 lg:pt-16">
            <p
              className="text-emerald-400 font-mono mb-4 text-base lg:text-lg animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              Hi, my name is
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-100 mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.7s" }}
            >
              Brittany Chiang.
            </h1>
            <h2
              className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-400 mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.9s" }}
            >
              I build things for the web.
            </h2>
            <p
              className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-12 animate-fade-in-up"
              style={{ animationDelay: "1.1s" }}
            >
              I'm a software engineer specializing in building (and occasionally designing) exceptional digital
              experiences. Currently, I'm focused on building accessible, inclusive products and digital experiences at{" "}
              <span className="text-emerald-400">Upstatement</span>.
            </p>
            <Button
              variant="outline"
              className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-mono px-8 py-6 text-lg bg-transparent hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: "1.3s" }}
            >
              Check out my resume!
            </Button>
          </div>
        </section>

        <section id="about" className="py-24 px-6 lg:px-24 max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-100 whitespace-nowrap">
              <span className="text-emerald-400 font-mono text-xl">01.</span> About Me
            </h2>
            <div className="ml-8 h-px bg-slate-700 flex-1 max-w-xs"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-4 text-slate-400">
                <p>
                  Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web
                  development started back in 2012 when I decided to try editing custom Tumblr themes — turns out
                  hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of working at{" "}
                  <span className="text-emerald-400">an advertising agency</span>,{" "}
                  <span className="text-emerald-400">a start-up</span>,{" "}
                  <span className="text-emerald-400">a huge corporation</span>, and{" "}
                  <span className="text-emerald-400">a student-led design studio</span>. My main focus these days is
                  building accessible, inclusive products and digital experiences at{" "}
                  <span className="text-emerald-400">Upstatement</span> for a variety of clients.
                </p>
                <p>Here are a few technologies I've been working with recently:</p>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
                {["JavaScript (ES6+)", "TypeScript", "React", "Eleventy", "Node.js", "WordPress"].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <span className="text-emerald-400 mr-2">▹</span>
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <img
                  src="/software-engineer-headshot.png"
                  alt="Brittany Chiang"
                  className="w-full aspect-square object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-emerald-400/20 group-hover:bg-transparent transition-all duration-500"></div>
                <div className="absolute inset-0 border-2 border-emerald-400 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 px-6 lg:px-24 max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-100 whitespace-nowrap">
              <span className="text-emerald-400 font-mono text-xl">02.</span> Where I've Worked
            </h2>
            <div className="ml-8 h-px bg-slate-700 flex-1 max-w-xs"></div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="flex lg:flex-col mb-8 lg:mb-0 lg:mr-8 overflow-x-auto">
              {jobs.map((job, index) => (
                <button
                  key={job.company}
                  onClick={() => setActiveJob(index)}
                  className={`px-6 py-3 text-left font-mono text-sm whitespace-nowrap border-l-2 lg:border-l-2 lg:border-b-0 border-b-2 transition-all duration-300 ${
                    activeJob === index
                      ? "border-emerald-400 text-emerald-400 bg-emerald-400/10"
                      : "border-slate-700 text-slate-400 hover:text-emerald-400 hover:bg-emerald-400/5"
                  }`}
                >
                  {job.company}
                </button>
              ))}
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                {jobs[activeJob].title} <span className="text-emerald-400">@ {jobs[activeJob].company}</span>
              </h3>
              <p className="font-mono text-sm text-slate-400 mb-6">{jobs[activeJob].period}</p>

              <div className="space-y-4 text-slate-400">
                {jobs[activeJob].responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1">▹</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-24 px-6 lg:px-24 max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-100 whitespace-nowrap">
              <span className="text-emerald-400 font-mono text-xl">03.</span> Some Things I've Built
            </h2>
            <div className="ml-8 h-px bg-slate-700 flex-1 max-w-xs"></div>
          </div>

          <div className="space-y-24">
            {/* Halcyon Theme */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="relative group">
                  <img
                    src="/vscode-dark-theme.png"
                    alt="Halcyon Theme"
                    className="w-full rounded-sm filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-sm group-hover:bg-transparent transition-all duration-500"></div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <p className="text-emerald-400 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 hover:text-emerald-400 transition-colors duration-300">
                  Halcyon Theme
                </h3>

                <div className="bg-slate-800 p-6 rounded-sm mb-4 shadow-lg">
                  <p className="text-slate-400">
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on{" "}
                    <span className="text-emerald-400">Visual Studio Marketplace</span>, Package Control, Atom Package
                    Manager, and npm.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 font-mono text-sm text-slate-400 mb-6">
                  {["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"].map((tech) => (
                    <span key={tech} className="hover:text-emerald-400 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Spotify Profile */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 lg:text-right">
                <p className="text-emerald-400 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 hover:text-emerald-400 transition-colors duration-300">
                  Spotify Profile
                </h3>

                <div className="bg-slate-800 p-6 rounded-sm mb-4 shadow-lg">
                  <p className="text-slate-400">
                    A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently
                    played tracks, and detailed audio information about each track. Create and save new playlists of
                    recommended tracks based on your existing playlists and more.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 font-mono text-sm text-slate-400 mb-6 lg:justify-end">
                  {["Spotify API", "React", "Express", "Reach Router", "Styled Components"].map((tech) => (
                    <span key={tech} className="hover:text-emerald-400 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 lg:justify-end">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 lg:order-2">
                <div className="relative group">
                  <img
                    src="/spotify-music-dashboard.png"
                    alt="Spotify Profile"
                    className="w-full rounded-sm filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-sm group-hover:bg-transparent transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Build a Spotify Connected App */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="relative group">
                  <img
                    src="/spotify-connected-app.png"
                    alt="Build a Spotify Connected App"
                    className="w-full rounded-sm filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-sm group-hover:bg-transparent transition-all duration-500"></div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <p className="text-emerald-400 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 hover:text-emerald-400 transition-colors duration-300">
                  Build a Spotify Connected App
                </h3>

                <div className="bg-slate-800 p-6 rounded-sm mb-4 shadow-lg">
                  <p className="text-slate-400">
                    Having struggled with learning React myself, I wanted to create a course to help other developers
                    learn the React ecosystem. This course teaches how to build a Spotify connected app using the
                    Spotify Web API.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 font-mono text-sm text-slate-400 mb-6">
                  {["React", "Spotify API", "Express", "Styled Components"].map((tech) => (
                    <span key={tech} className="hover:text-emerald-400 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-24 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-100 mb-4">Other Noteworthy Projects</h2>
            <a href="#" className="text-emerald-400 font-mono text-sm hover:underline">
              view the archive
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-700 hover:-translate-y-2 transition-all duration-300 group rounded-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 1v6m8-6v6" />
                  </svg>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={project.external}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-3 font-mono text-xs text-slate-400">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="py-24 px-6 lg:px-24 max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 font-mono text-lg mb-4">04. What's Next?</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </p>
          <Button
            variant="outline"
            className="border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-mono px-8 py-6 text-lg bg-transparent hover:scale-105 hover:-translate-y-1 transition-all duration-300 rounded-sm"
          >
            Say Hello
          </Button>
        </section>

        <footer className="py-12 px-6 lg:px-24 text-center border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center space-x-6 mb-8 lg:hidden">
              {[
                {
                  name: "GitHub",
                  href: "#",
                  icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                },
                {
                  name: "LinkedIn",
                  href: "#",
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  name: "Twitter",
                  href: "#",
                  icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-slate-400 font-mono text-sm">
                Designed & Built by <span className="text-emerald-400">Brittany Chiang</span>
              </p>
              <p className="text-slate-500 text-xs">
                Inspired by the original design. Built with Next.js & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

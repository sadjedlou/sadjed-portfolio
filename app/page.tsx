"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Palette,
  Shield,
  Server,
  Database,
  Trophy,
  Mail,
  MapPin,
  GraduationCap,
  ChevronDown,
  ExternalLink,
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = {
    programming: ["Python", "Java", "C Language", "Assembly", "HTML", "CSS", "Django"],
    concepts: ["OOP", "Data Structures", "File Structures", "Algorithms"],
    tools: ["Docker", "PostgreSQL", "Premiere Pro", "After Effects", "Blender"],
    learning: ["DevOps", "Cybersecurity", "3D Design", "Blockchain"],
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10"></div>

        <div
          className={`text-center z-10 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Code2 className="w-16 h-16 text-blue-400" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Louahouah Sadjed
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-6">Computer Science Student & Creative Developer</p>

            <div className="flex items-center justify-center gap-2 text-slate-400 mb-8">
              <GraduationCap className="w-5 h-5" />
              <span>Higher School of Computer Science, Algeria</span>
            </div>
          </div>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about coding, design, and cybersecurity. Always ready to learn and dive into new technologies.
            Currently exploring 3D design, DevOps, and advancing in cybersecurity competitions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("about")}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full"
            >
              Explore My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full"
            >
              Get In Touch
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-blue-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    I'm currently in my third  year at the Higher School of Computer Science in Algeria, where I've
                    developed a strong foundation in programming languages including C, Assembly, Python, and Java. I've
                    also mastered core computer science concepts like Object-Oriented Programming (OOP), data
                    structures, and file structures.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    My passion extends beyond traditional coding into creative design and cybersecurity. I believe in
                    continuous learning and pushing boundaries, whether it's mastering low-level programming concepts or
                    creating stunning visual effects.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Recently, I had the honor of collaborating with the Ministry of Culture and Arts to create a video
                    for the Festival of Inchad, showcasing my ability to work on professional, culturally significant
                    projects.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-xl font-semibold text-white">Recent Achievements</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-slate-300">🎬 Video Production for Festival of Inchad</p>
                      <p className="text-slate-400 text-sm">Collaborated with Ministry of Culture and Arts, Algeria</p>
                    </div>
                    <div>
                      <p className="text-slate-300">🏆 5th Place in CTF Competition (Cryptography)</p>
                      <p className="text-slate-400 text-sm">Regular participant with my cybersecurity team</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="w-6 h-6 text-pink-400" />
                    <h3 className="text-xl font-semibold text-white">Creative Side</h3>
                  </div>
                  <p className="text-slate-300">Video editing with Premiere Pro & After Effects</p>
                  <p className="text-slate-300">Currently learning 3D design with Blender</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-8 h-8 text-blue-400" />
                  <h3 className="text-2xl font-semibold text-white">Programming</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/50 to-slate-800/50 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-semibold text-white">Core Concepts</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.concepts.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-900/50 to-slate-800/50 border-indigo-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="w-8 h-8 text-indigo-400" />
                  <h3 className="text-2xl font-semibold text-white">Tools & Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-sky-900/50 to-slate-800/50 border-sky-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-sky-400" />
                  <h3 className="text-2xl font-semibold text-white">Currently Learning</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.learning.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-sky-500/20 text-sky-300 border-sky-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects/Interests Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Areas of Focus
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
                <p className="text-slate-300">
                  Building dynamic web applications with Django, HTML, CSS, and modern frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
                <p className="text-slate-300">
                  Specializing in cryptography and participating in CTF competitions with my team.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">DevOps & Databases</h3>
                <p className="text-slate-300">
                  Working with Docker, PostgreSQL, and exploring modern DevOps practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">3D Design</h3>
                <p className="text-slate-300">Currently learning Blender for 3D modeling and animation.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-sky-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Video Production</h3>
                <p className="text-slate-300">
                  Professional video creation with Premiere Pro and After Effects. Recently produced content for the
                  Festival of Inchad in collaboration with Algeria's Ministry of Culture and Arts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Competitive Programming</h3>
                <p className="text-slate-300">Regular participation in CTF competitions and coding challenges.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <p className="text-xl text-slate-300 mb-12">
            Ready to collaborate on exciting projects or discuss new opportunities? I'm always open to learning and
            working on innovative solutions.
          </p>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white">s_louahouah@estin.dz</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white">Algeria</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-slate-400 text-sm">Institution</p>
                    <p className="text-white">ESTIN</p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                onClick={() => (window.location.href = "mailto:s_louahouah@estin.dz")}
              >
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2024 Louahouah Sadjed. Built with passion and modern web technologies.</p>
        </div>
      </footer>
    </div>
  )
}

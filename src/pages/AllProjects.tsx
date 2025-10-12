import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AllProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "flink",
      title: "Flink - File Sharing Platform",
      description: "A modern, secure web application for sharing files and text snippets with simple 6-digit sharing codes.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      gradient: "from-primary to-secondary",
      codeLink: "https://github.com/SANIDHYADASH/Flink",
      liveLink: "https://share.sanidhya.in",
    },
    {
      id: "founderconnect",
      title: "FounderConnect",
      description: "A platform connecting startup founders with technical co-founders to build the next big thing.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      gradient: "from-secondary to-accent",
      codeLink: "https://github.com/SANIDHYADASH/FounderConnect",
      liveLink: "https://founderconnect.sanidhya.in",
    },
    {
      id: "musical-artist-portfolio",
      title: "Musical Artist Portfolio",
      description: "Comprehensive platform for artists to showcase work, manage events, and handle ticket sales.",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      gradient: "from-accent to-primary",
      codeLink: "https://github.com/SANIDHYADASH/AM---Musical-Artist-Portfolio",
      liveLink: "https://alivamusic.sanidhya.in/",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Navigation />
      <main className="pt-20 pb-12 md:pb-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16 animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
                All <span className="bg-clip-text text-transparent bg-gradient-primary">Projects</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                Explore my portfolio of projects showcasing modern web development
              </p>
              <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 md:mt-6 rounded-full" />
            </div>

            {/* Projects Grid */}
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative h-full p-5 sm:p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden animate-fade-in cursor-pointer hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-3 sm:space-y-4 flex flex-col h-full">
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 sm:px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
                      <Button
                        size="default"
                        variant="outline"
                        className="flex-1 group/btn hover:border-primary hover:bg-primary/10 h-10"
                        onClick={() => window.open(project.codeLink, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </Button>
                      <Button
                        size="default"
                        className="flex-1 bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_hsl(190_95%_55%/0.3)] h-10"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;

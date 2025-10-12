import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: "flink",
      title: "Flink - The NextGen File and Text Sharing Platform",
      description: "A modern, secure, and responsive web application for sharing files and text snippets with others using simple 6-digit sharing codes.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      gradient: "from-primary to-secondary",
      codeLink: "https://github.com/SANIDHYADASH/Flink",
      liveLink: "https://share.sanidhya.in",
    },
    {
      id: "founderconnect",
      title: "FounderConnect",
      description: "A web platform designed to connect startup founders with technical co-founders. Facilitates finding the right technical partner.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      gradient: "from-secondary to-accent",
      codeLink: "https://github.com/SANIDHYADASH/FounderConnect",
      liveLink: "https://founderconnect.sanidhya.in",
    },
    {
      id: "musical-artist-portfolio",
      title: "Musical Artist Portfolio Platform",
      description: "A comprehensive full-stack web application for artist to showcase their work, manage events, and handle ticket sales with QR verification.",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      gradient: "from-accent to-primary",
      codeLink: "https://github.com/SANIDHYADASH/AM---Musical-Artist-Portfolio",
      liveLink: "https://alivamusic.sanidhya.in/",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-clip-text text-transparent bg-gradient-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
              watchDrag: true,
            }}
            className={`w-full max-w-5xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CarouselContent className="-ml-2 md:-ml-4 touch-pan-y">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <div 
                      className="group relative h-full p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-primary/20"
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      {/* Gradient overlay - always visible */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-4">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 pt-4" onClick={(e) => e.stopPropagation()}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 group/btn hover:border-primary hover:bg-primary/10"
                            onClick={() => window.open(project.codeLink, '_blank')}
                          >
                            <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                            Code
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_hsl(190_95%_55%/0.3)]"
                            onClick={() => window.open(project.liveLink, '_blank')}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
          </Carousel>

          <div
            className={`text-center mt-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_30px_hsl(190_95%_55%/0.4)] transition-all"
              onClick={() => navigate('/projects')}
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

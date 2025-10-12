import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectDocumentation } from "@/components/ProjectDocumentation";
import { getFlinkDocumentation } from "@/data/flink-docs";
import { getFounderConnectDocumentation } from "@/data/founderconnect-docs";
import { getMusicalPortfolioDocumentation } from "@/data/musical-portfolio-docs";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  codeLink: string;
  liveLink: string;
}

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const projectsData: Record<string, ProjectData> = {
    flink: {
      id: "flink",
      title: "Flink - The NextGen File and Text Sharing Platform",
      description: "A modern, secure, and responsive web application for sharing files and text snippets.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Supabase", "React Router", "Framer Motion"],
      gradient: "from-primary to-secondary",
      codeLink: "https://github.com/SANIDHYADASH/Flink",
      liveLink: "https://share.sanidhya.in",
    },
    founderconnect: {
      id: "founderconnect",
      title: "FounderConnect",
      description: "A platform connecting startup founders with technical co-founders.",
      tags: ["React", "TypeScript", "Firebase Auth", "Firestore", "Tailwind CSS"],
      gradient: "from-secondary to-accent",
      codeLink: "https://github.com/SANIDHYADASH/FounderConnect",
      liveLink: "https://founderconnect.sanidhya.in",
    },
    "musical-artist-portfolio": {
      id: "musical-artist-portfolio",
      title: "Musical Artist Portfolio Platform",
      description: "A comprehensive platform for artists to showcase work and manage events.",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui"],
      gradient: "from-accent to-primary",
      codeLink: "https://github.com/SANIDHYADASH/AM---Musical-Artist-Portfolio",
      liveLink: "https://alivamusic.sanidhya.in/",
    },
  };

  const project = projectsData[projectId || ""];

  const getDocumentation = () => {
    switch (projectId) {
      case "flink":
        return getFlinkDocumentation();
      case "founderconnect":
        return getFounderConnectDocumentation();
      case "musical-artist-portfolio":
        return getMusicalPortfolioDocumentation();
      default:
        return null;
    }
  };

  const documentation = getDocumentation();

  if (!project || !documentation) {
    navigate('/projects');
    return null;
  }

  return (
    <div className="min-h-screen bg-background font-['Inter']">
      <Navigation />
      <main className="pt-20 pb-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              className="mb-8 hover:bg-primary/10"
              onClick={() => navigate('/projects')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>

            {/* Header */}
            <div className="mb-8 md:mb-12 animate-fade-in">
              <div className="relative p-5 sm:p-6 md:p-8 rounded-2xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/60 transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />
                <div className="relative z-10">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 break-words">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                    {project.description}
                  </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 md:mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn hover:border-primary hover:bg-primary/10 w-full sm:w-auto"
                      onClick={() => window.open(project.codeLink, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base">View on GitHub</span>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_20px_hsl(190_95%_55%/0.3)] w-full sm:w-auto"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">Visit Live Site</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <ProjectDocumentation {...documentation} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;

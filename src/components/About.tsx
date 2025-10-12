import { useEffect, useRef, useState } from "react";
import { Code, Lightbulb, Rocket, Users } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and approaches",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in team environments",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-clip-text text-transparent bg-gradient-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate software developer dedicated to crafting elegant solutions 
                that make a difference. With a strong foundation in modern web technologies 
                and a keen eye for detail, I transform complex challenges into intuitive, 
                user-friendly applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in software development has been driven by curiosity and a 
                commitment to continuous learning. I believe in writing clean, efficient 
                code that not only solves problems but also contributes to creating 
                exceptional user experiences.
              </p>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-pulse" />
                </div>
                <div className="relative z-10 flex items-center justify-center h-full p-4">
                  <img 
                    src={profilePhoto} 
                    alt="Sanidhya Dash" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`relative group p-6 rounded-xl border-2 border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_hsl(190_95%_55%/0.2)] overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background/50 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

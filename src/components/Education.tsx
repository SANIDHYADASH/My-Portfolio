import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Indian Institute of Technology, Jodhpur",
      logo: "https://iitj.ac.in/PageImages/Pages/07-2024/2f6c058e-925d-4538-803b-f988be667954.jpg",
      degree: "Master of Technology - M.Tech",
      field: "Artificial Intelligence",
      period: "August 2024 - August 2026",
      description: "I am currently pursuing a Master's degree in Artificial Intelligence (AI) at IIT Jodhpur (2024–2026). As part of my curriculum, I am taking courses in Data Structures and Algorithmic Techniques, Machine Learning, Optimization for Data Science, Artificial Intelligence, Deep Learning, Digital Image Processing and Applications, and Natural Language Understanding, among others. Additionally, I am gaining expertise in specialized fields such as ML Ops, DL Ops, and Cyber Security. To complement my technical skills, I am also studying Innovation and IP Management to understand the strategic impact of AI technologies."
    },
    {
      institution: "Lovely Professional University, Punjab",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Lovely_Professional_University_logo.png",
      degree: "Bachelor of Technology - BTech",
      field: "Computer Science and Engineering",
      period: "August 2018 - August 2022",
      description: "I pursued a Bachelor's degree in Computer Science and Engineering at Lovely Professional University, Punjab. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development."
    },
    {
      institution: "Prabhujee English Medium School, Bhubaneswar",
      logo: "https://prabhujeegurukul.com/images/logo.png",
      degree: "CBSE (XII)",
      field: "Science with Computer Science",
      period: "Mar 2016 - Mar 2018",
      description: "I completed my class 12 high school education at Prabhujee English Medium School, Bhubaneswar, where I studied Science with Computer Science."
    },
    {
      institution: "Prabhujee English Medium School, Bhubaneswar",
      logo: "https://prabhujeegurukul.com/images/logo.png",
      degree: "CBSE (X)",
      field: "PCM",
      period: "Mar 2016",
      description: "I completed my class 10 education at Prabhujee English Medium School, Bhubaneswar, where I studied PCM."
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Education
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden backdrop-blur-sm border-2 border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(190_95%_55%/0.2)] hover:scale-[1.01] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background/50 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-background rounded-lg p-3 flex items-center justify-center border border-border">
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/80?text=" + edu.institution.charAt(0);
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 text-primary transition-colors">
                      {edu.institution}
                    </CardTitle>
                    <div className="space-y-1 mb-3">
                      <p className="text-lg font-semibold text-foreground">
                        {edu.degree} - {edu.field}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {edu.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

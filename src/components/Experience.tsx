import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "FIS India Pvt. Ltd.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/FIS_logo.svg/1200px-FIS_logo.svg.png",
      role: "Software Engineer",
      period: "June 2022 - Present",
      description: "I've been an integral part of the Architecture team, leading the development of scalable applications, including a Money Movement App. In this role, I spearheaded the implementation of REST API architecture for seamless money movement between two cores, ensuring secure and efficient transactions. Additionally, I played a key role in migrating SQLJ to JDBC standard Java files, enhancing the maintainability and performance of our database interactions. My responsibilities encompass orchestrating complex batch operations using the Spring Batch framework, optimizing transaction metrics, and ensuring the overall robustness and reliability of the applications I develop.",
      skills: ["Java", "Spring", "Docker", "Jenkins", "Openshift", "PostMan"]
    },
    {
      company: "IBM India Pvt. Ltd.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
      role: "Data Engineer Intern",
      period: "Jan 2022 - June 2022",
      description: "Performed operations using Big Data tools like Hadoop, Hive, Pig, Spark, PySpark on different datasets. Implemented PySpark and Spark SQL on Cloud Platforms in collaboration with the team. Apart from this, I have learnt several other analytics tools such as Alteryx, PowerBI, R Shiny and many more.",
      skills: ["Hadoop", "Hive", "Pig", "Spark", "PySpark", "Alteryx", "PowerBI", "Tableau", "R Shiny"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
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
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/80?text=" + exp.company.charAt(0);
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2 text-primary transition-colors">
                      {exp.company}
                    </CardTitle>
                    <div className="space-y-1 mb-3">
                      <p className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {exp.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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

export default Experience;

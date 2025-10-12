import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Rocket, 
  Code2, 
  Database, 
  Shield, 
  Zap, 
  CheckCircle2, 
  GitBranch,
  Package,
  Server,
  Workflow
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TechItem {
  category: string;
  name: string;
  version?: string;
  purpose: string;
}

interface ProjectDocProps {
  title: string;
  description: string;
  features: Feature[];
  techStack: TechItem[];
  architecture?: {
    description: string;
    diagram?: React.ReactNode;
  };
  security?: string[];
  installation?: string[];
  usageGuide?: {
    title: string;
    steps: string[];
  }[];
  dataModel?: {
    title: string;
    description: string;
    code?: string;
  }[];
}

export const ProjectDocumentation = ({
  title,
  description,
  features,
  techStack,
  architecture,
  security,
  installation,
  usageGuide,
  dataModel,
}: ProjectDocProps) => {
  return (
    <div className="space-y-8 animate-in fade-in-0 duration-700">
      {/* Main Content Tabs */}
      <Tabs defaultValue="features" className="w-full">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-2 h-auto">
          <TabsTrigger value="features" className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2">
            <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Features</span>
            <span className="sm:hidden">Info</span>
          </TabsTrigger>
          <TabsTrigger value="tech" className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2">
            <Code2 className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Tech Stack</span>
            <span className="sm:hidden">Tech</span>
          </TabsTrigger>
          {architecture && (
            <TabsTrigger value="architecture" className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2">
              <Workflow className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden lg:inline">Architecture</span>
              <span className="lg:hidden hidden sm:inline">Arch</span>
              <span className="sm:hidden">📐</span>
            </TabsTrigger>
          )}
          {dataModel && (
            <TabsTrigger value="data" className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2">
              <Database className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Data</span>
              <span className="sm:hidden">DB</span>
            </TabsTrigger>
          )}
          {security && (
            <TabsTrigger value="security" className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Security</span>
              <span className="sm:hidden">🔒</span>
            </TabsTrigger>
          )}
          {installation && (
            <TabsTrigger value="setup" className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-2">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Setup</span>
              <span className="sm:hidden">⚡</span>
            </TabsTrigger>
          )}
        </TabsList>

        {/* Features Tab */}
        <TabsContent value="features" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-2 border-border/60 hover:border-primary/50">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="rounded-lg bg-primary/10 p-1.5 sm:p-2 group-hover:bg-primary/20 transition-colors flex-shrink-0 border border-primary/20">
                      {feature.icon || <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg break-words">{feature.title}</CardTitle>
                      <CardDescription className="mt-2 text-xs sm:text-sm">{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tech Stack Tab */}
        <TabsContent value="tech" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          <div className="grid gap-4 sm:gap-6">
            {Object.entries(
              techStack.reduce((acc, tech) => {
                if (!acc[tech.category]) acc[tech.category] = [];
                acc[tech.category].push(tech);
                return acc;
              }, {} as Record<string, TechItem[]>)
            ).map(([category, items]) => (
              <Card key={category} className="border-2 border-border/60">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Server className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span className="break-words">{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                  <div className="grid gap-2 sm:gap-3">
                    {items.map((item, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-4 p-2 sm:p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border/40">
                        <Package className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                            <span className="font-semibold text-sm sm:text-base break-words">{item.name}</span>
                            {item.version && (
                              <Badge variant="outline" className="text-xs">{item.version}</Badge>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1 break-words">{item.purpose}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Architecture Tab */}
        {architecture && (
          <TabsContent value="architecture" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
            <Card className="border-2 border-border/60">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <GitBranch className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="break-words">System Architecture</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6 pt-0 sm:pt-0">
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{architecture.description}</p>
                {architecture.diagram && (
                  <div className="rounded-lg bg-muted/30 p-3 sm:p-6 overflow-x-auto border border-border/40">
                    {architecture.diagram}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {/* Data Model Tab */}
        {dataModel && (
          <TabsContent value="data" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
            {dataModel.map((model, index) => (
              <Card key={index} className="border-2 border-border/60">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Database className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span className="break-words">{model.title}</span>
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{model.description}</CardDescription>
                </CardHeader>
                {model.code && (
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <div className="rounded-lg bg-muted/30 p-3 sm:p-4 overflow-x-auto border border-border/40">
                      <pre className="text-xs sm:text-sm">
                        <code className="text-foreground">{model.code}</code>
                      </pre>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </TabsContent>
        )}

        {/* Security Tab */}
        {security && (
          <TabsContent value="security" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
            <Card className="border-2 border-border/60">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="break-words">Security Features</span>
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Enterprise-grade security measures implemented
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <div className="grid gap-2 sm:gap-3">
                  {security.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-muted/50 border border-border/40">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm break-words">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        {/* Installation Tab */}
        {installation && (
          <TabsContent value="setup" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
            <Card className="border-2 border-border/60">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span className="break-words">Installation & Setup</span>
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Get started in minutes</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                <ol className="space-y-3 sm:space-y-4">
                  {installation.map((step, index) => (
                    <li key={index} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center font-semibold text-primary text-xs sm:text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-0.5 sm:pt-1">
                        <p className="text-xs sm:text-sm leading-relaxed break-words">{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {usageGuide && (
              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                {usageGuide.map((guide, index) => (
                  <Card key={index} className="border-2 border-border/60">
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-base sm:text-lg break-words">{guide.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                      <ul className="space-y-1.5 sm:space-y-2">
                        {guide.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex gap-1.5 sm:gap-2 text-xs sm:text-sm">
                            <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="break-words">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

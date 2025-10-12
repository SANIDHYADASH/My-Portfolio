import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative">
        {/* Animated circles */}
        <div className="absolute inset-0 -m-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        {/* SD Initials */}
        <div className="relative z-10">
          <div className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">
            <span className="inline-block animate-[scale-in_0.5s_ease-out]">S</span>
            <span className="inline-block animate-[scale-in_0.5s_ease-out_0.2s]">D</span>
          </div>
          
          {/* Loading bar */}
          <div className="mt-8 w-48 h-1 bg-border/30 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-primary to-secondary animate-[slide-in-right_2s_ease-out]" />
          </div>

          {/* Tech-inspired elements */}
          <div className="mt-4 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Code-like background effect */}
        <div className="absolute -top-20 -left-20 text-xs text-primary/10 font-mono whitespace-pre animate-fade-in">
          {`{
  developer: "Sanidhya Dash",
  loading: true
}`}
        </div>
        <div className="absolute -bottom-20 -right-20 text-xs text-secondary/10 font-mono whitespace-pre animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {`<Portfolio>
  <Loading />
</Portfolio>`}
        </div>
      </div>
    </div>
  );
};

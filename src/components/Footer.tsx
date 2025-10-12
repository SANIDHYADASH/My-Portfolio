import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/SANIDHYADASH", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/sanidhyadash", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sanidhyadash32@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            {/* Logo */}
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-primary">
              SD
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group p-3 rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground px-4">
              <p className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                <span>© {currentYear} Sanidhya Dash.</span>
                <span className="flex items-center gap-1 sm:gap-2">
                  Made with <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> and lots of coffee
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

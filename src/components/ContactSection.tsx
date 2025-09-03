import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  className?: string;
}

export const ContactSection = ({ className }: ContactSectionProps) => {
  return (
    <section className={cn("py-20 bg-gradient-hero text-white", className)}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-headline mb-6">Let's Build the Future Together</h2>
        
        <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
          Ready to drive product innovation at scale? I'm passionate about leveraging AI/ML 
          to create products that delight users and deliver exceptional business value.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-white/10 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium mb-1">Email</p>
              <a 
                href="mailto:gargi.singh3003@gmail.com" 
                className="text-white/80 hover:text-white transition-colors"
              >
                gargi.singh3003@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-white/10 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium mb-1">Phone</p>
              <a 
                href="tel:+919266308401" 
                className="text-white/80 hover:text-white transition-colors"
              >
                +91 9266308401
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-3">
            <div className="p-4 bg-white/10 rounded-full">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="font-medium mb-1">Location</p>
              <p className="text-white/80">Gurugram, Haryana</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            asChild
          >
            <a href="mailto:gargi.singh3003@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/20 text-white hover:bg-white/10"
            asChild
          >
            <a href="https://linkedin.com/in/gargi-singh" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
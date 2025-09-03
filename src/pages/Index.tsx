import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { MetricCard } from "@/components/MetricCard";
import { SkillMatrix } from "@/components/SkillMatrix";
import { ContactSection } from "@/components/ContactSection";
import { Mail, Download, ExternalLink, Award, TrendingUp, Users, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  const caseStudies = [
    {
      title: "Realistic Job Preview Module Launch",
      company: "SHL",
      duration: "Feb 2025 - Present",
      tags: ["B2B SaaS", "Cross-functional Leadership", "AI-Powered"],
      problem: "High candidate drop-off rates and misaligned expectations between job seekers and recruiters were leading to inefficient hiring processes and poor candidate experience, impacting brand reputation.",
      solution: "Led end-to-end product strategy for launching Realistic Job Previews, enabling anonymous self-assessment for candidates while providing recruiters with better-qualified prospects through strategic product positioning.",
      framework: "RICE Prioritization (Reach: 10K+ candidates, Impact: High retention, Confidence: 80%, Effort: 3 quarters) + Jobs-to-be-Done for user journey mapping",
      metrics: [
        { value: "30%", label: "Faster Processing", variant: "success" as const },
        { value: "12.5%", label: "US Quality Boost", variant: "accent" as const },
        { value: "17.8%", label: "EU Quality Boost", variant: "accent" as const },
        { value: "5", label: "Teams Led", variant: "primary" as const }
      ],
      impact: "Successfully launched MVP in Q2'25, enhanced employer branding, and created a scalable solution that improved recruitment efficiency across US and EU markets while maintaining candidate anonymity."
    },
    {
      title: "AI-Powered Regulatory Intelligence Platform",
      company: "Freyr Solutions",
      duration: "May 2021 - Jul 2024",
      tags: ["AI/ML Implementation", "SaaS Product", "Enterprise"],
      problem: "Regulatory intelligence processing was manual, time-intensive, and prone to errors. The existing AI Assistant had only 25% accuracy, severely limiting its practical application for subject matter experts.",
      solution: "Architected and implemented RAG-based AI solution using OpenAI APIs, prompt engineering, and semantic search. Designed multi-document summarization capability and integrated intelligent chatbot functionality.",
      framework: "Lean Startup (Build-Measure-Learn) + OKRs (Objective: Improve AI accuracy, Key Results: 70% accuracy, 60% time reduction) + Design Thinking for user experience",
      metrics: [
        { value: "70%", label: "AI Accuracy", variant: "success" as const },
        { value: "60%", label: "Time Reduction", variant: "accent" as const },
        { value: "25%", label: "Query Speed", variant: "accent" as const },
        { value: "$20K", label: "Revenue Boost", variant: "success" as const }
      ],
      impact: "Transformed Freyr's AI capabilities with 180% accuracy improvement, significantly reduced processing time for SMEs, and expanded market reach across China, EU & US, generating substantial additional revenue."
    },
    {
      title: "Digital Transformation: JK Connect & JK Sales Smart Apps",
      company: "JK Tyre",
      duration: "Jul 2024 - Feb 2025",
      tags: ["Mobile App Development", "AI-Powered Recommendations", "Digital Transformation"],
      problem: "Manual dealer onboarding and sales tracking processes were inefficient, leading to poor visibility into sales performance and delayed issue resolution, impacting overall dealer satisfaction.",
      solution: "Led digital transformation by developing mobile applications with integrated AI/ML capabilities including Pseudo Stock Recommender and Next Product recommendations based on dealer behavior analytics.",
      framework: "Double Diamond Design Process + AARRR Pirate Metrics (Acquisition, Activation, Retention, Revenue, Referral) + Kano Model for feature prioritization",
      metrics: [
        { value: "30%", label: "Faster Resolution", variant: "success" as const },
        { value: "25%", label: "More Visits", variant: "accent" as const },
        { value: "10%", label: "Satisfaction ↑", variant: "success" as const },
        { value: "100%", label: "Digital Adoption", variant: "primary" as const }
      ],
      impact: "Successfully digitalized dealer operations, implemented AI-driven inventory and product recommendations, and significantly improved sales officer productivity and dealer satisfaction through faster turnaround times."
    }
  ];

  const skills = [
    // Product Strategy & Leadership
    { name: "Product Strategy", level: "Expert" as const, category: "Strategic Leadership" },
    { name: "Cross-functional Leadership", level: "Expert" as const, category: "Strategic Leadership" },
    { name: "Stakeholder Management", level: "Expert" as const, category: "Strategic Leadership" },
    { name: "Product Roadmapping", level: "Expert" as const, category: "Strategic Leadership" },
    { name: "Go-to-Market Strategy", level: "Advanced" as const, category: "Strategic Leadership" },
    
    // AI/ML & Technical
    { name: "Large Language Models (LLMs)", level: "Expert" as const, category: "AI/ML & Technical" },
    { name: "RAG Architecture", level: "Expert" as const, category: "AI/ML & Technical" },
    { name: "OpenAI API Integration", level: "Expert" as const, category: "AI/ML & Technical" },
    { name: "Prompt Engineering", level: "Expert" as const, category: "AI/ML & Technical" },
    { name: "Python Programming", level: "Advanced" as const, category: "AI/ML & Technical" },
    { name: "SQL & Analytics", level: "Advanced" as const, category: "AI/ML & Technical" },
    
    // Product Management
    { name: "User Story Development", level: "Expert" as const, category: "Product Craft" },
    { name: "Agile/Scrum Methodologies", level: "Expert" as const, category: "Product Craft" },
    { name: "Design Thinking", level: "Advanced" as const, category: "Product Craft" },
    { name: "Prototyping & Wireframing", level: "Advanced" as const, category: "Product Craft" },
    { name: "User Research", level: "Advanced" as const, category: "Product Craft" },
    
    // Data & Analytics
    { name: "Data-driven Decision Making", level: "Expert" as const, category: "Analytics & Insights" },
    { name: "KPI Definition & Tracking", level: "Expert" as const, category: "Analytics & Insights" },
    { name: "A/B Testing", level: "Advanced" as const, category: "Analytics & Insights" },
    { name: "Business Intelligence", level: "Advanced" as const, category: "Analytics & Insights" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(33, 41, 60, 0.8), rgba(33, 41, 60, 0.9)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/72084abe-0dab-4704-9ae0-bf7781efe87a.png"
                alt="Gargi Singh - Product Manager"
                className="w-32 h-32 rounded-full mx-auto shadow-xl border-4 border-white/20 object-cover"
              />
            </div>

            {/* Main Headline */}
            <h1 className="text-display mb-6 text-gradient-accent">
              Gargi Singh
            </h1>
            
            <p className="text-subtitle mb-8 text-white/90">
              Senior Product Manager | AI/ML Innovation Leader
            </p>
            
            <p className="text-body-large mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Results-driven Product Manager with <strong>5.8 years</strong> of experience driving AI-powered product innovations 
              and digital transformations. Proven expertise in launching data-driven solutions that deliver 
              <strong className="text-success-glow"> measurable business impact</strong>, with specialized knowledge in 
              generative AI, machine learning models, and modern product management frameworks.
            </p>

            {/* Key Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <MetricCard 
                value="70%" 
                label="Performance Improvement" 
                variant="success"
                icon={<TrendingUp className="w-6 h-6" />}
              />
              <MetricCard 
                value="5+" 
                label="Cross-functional Teams Led" 
                variant="accent"
                icon={<Users className="w-6 h-6" />}
              />
              <MetricCard 
                value="3" 
                label="Major Product Launches" 
                variant="primary"
                icon={<Zap className="w-6 h-6" />}
              />
              <MetricCard 
                value="$20K+" 
                label="Additional Revenue Generated" 
                variant="success"
                icon={<Award className="w-6 h-6" />}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
                asChild
              >
                <a href="mailto:gargi.singh3003@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Let's Connect
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href="#case-studies">
                  <Download className="w-5 h-5 mr-2" />
                  View Case Studies
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-success/20 rounded-full blur-xl"></div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-headline mb-6">Executive Summary</h2>
            <p className="text-body-large text-muted-foreground">
              Strategic product leader with a track record of driving innovation at the intersection of AI/ML and user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-card rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Vision</h3>
              <p className="text-muted-foreground">
                Proven ability to translate complex business requirements into compelling product roadmaps that drive growth and innovation.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI/ML Expertise</h3>
              <p className="text-muted-foreground">
                Deep technical knowledge in LLMs, RAG architecture, and prompt engineering with hands-on implementation experience.
              </p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-success-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cross-functional Leadership</h3>
              <p className="text-muted-foreground">
                Expert at aligning diverse stakeholder groups and leading high-performing teams to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-headline mb-6">Featured Case Studies</h2>
            <p className="text-body-large text-muted-foreground">
              Strategic product initiatives that delivered measurable business impact and drove innovation.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-headline mb-6">Core Competencies</h2>
            <p className="text-body-large text-muted-foreground">
              Comprehensive skillset spanning strategic leadership, technical expertise, and product craft.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <SkillMatrix skills={skills} />
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-headline mb-6">Professional Journey</h2>
            <p className="text-body-large text-muted-foreground">
              A progression of increasing responsibility and impact across leading organizations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-2 border-primary/30 pl-8 pb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-4 h-4 bg-primary rounded-full -ml-10 border-4 border-background"></div>
                <Badge variant="secondary">Current</Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">Product Manager - SHL</h3>
              <p className="text-muted-foreground mb-2">Feb 2025 - Present • Gurugram, Haryana</p>
              <p className="text-body">
                Leading product strategy for innovative HR technology solutions, driving cross-functional teams 
                to deliver market-leading assessment platforms.
              </p>
            </div>

            <div className="border-l-2 border-primary/20 pl-8 pb-8">
              <div className="w-4 h-4 bg-primary/60 rounded-full -ml-10 border-4 border-background mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Digital Product Manager - JK TYRE</h3>
              <p className="text-muted-foreground mb-2">Jul 2024 - Feb 2025 • New Delhi</p>
              <p className="text-body">
                Spearheaded digital transformation initiatives, developing AI-powered mobile applications 
                that revolutionized dealer management and sales operations.
              </p>
            </div>

            <div className="border-l-2 border-primary/20 pl-8 pb-8">
              <div className="w-4 h-4 bg-primary/40 rounded-full -ml-10 border-4 border-background mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Product Manager - FREYR SOLUTIONS</h3>
              <p className="text-muted-foreground mb-2">May 2021 - Jul 2024 • Hyderabad, TEL</p>
              <p className="text-body">
                Architected AI-powered SaaS solutions for regulatory intelligence, achieving significant 
                improvements in accuracy and processing efficiency.
              </p>
            </div>

            <div className="border-l-2 border-primary/20 pl-8">
              <div className="w-4 h-4 bg-primary/20 rounded-full -ml-10 border-4 border-background mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Business Analyst - INFOSYS LTD.</h3>
              <p className="text-muted-foreground mb-2">Oct 2017 - Jun 2019 • Bengaluru, KA</p>
              <p className="text-body">
                Developed data analytics solutions and business intelligence dashboards, establishing 
                foundation for data-driven product management expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
